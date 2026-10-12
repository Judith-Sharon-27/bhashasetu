require("dotenv").config();
const express = require("express");
const path = require("path");
const OpenAI = require("openai");

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));
app.use(express.static(path.join(__dirname, "public")));

const languages = new Set([
  "Assamese", "Bengali", "Bodo", "Dogri", "Gujarati", "Hindi", "Kannada",
  "Kashmiri", "Konkani", "Maithili", "Malayalam", "Manipuri", "Marathi",
  "Nepali", "Odia", "Punjabi", "Sanskrit", "Santali", "Sindhi", "Tamil",
  "Telugu", "Urdu", "English"
]);

// Lightweight per-process guardrail. Use a shared store for multi-instance production deployments.
const windows = new Map();
function rateLimit(req, res, next) {
  const now = Date.now();
  const key = req.ip || "unknown";
  const entry = windows.get(key);
  if (!entry || now - entry.start >= 60_000) {
    windows.set(key, { start: now, count: 1 });
    return next();
  }
  if (entry.count >= 20) {
    res.set("Retry-After", "60");
    return res.status(429).json({ error: "Too many messages in a short time. Please wait a minute and try again." });
  }
  entry.count += 1;
  next();
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    aiConfigured: Boolean(process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY),
    aiProvider: process.env.GEMINI_API_KEY ? "gemini" : (process.env.OPENAI_API_KEY ? "openai" : null)
  });
});

app.post("/api/chat", rateLimit, async (req, res) => {
  const { messages, mode = "learn", nativeLanguage = "Hindi", targetLanguage = "Sanskrit" } = req.body || {};
  if (!Array.isArray(messages) || !messages.length || messages.length > 20) {
    return res.status(400).json({ error: "Send between 1 and 20 messages." });
  }
  if (!languages.has(nativeLanguage) || !languages.has(targetLanguage)) {
    return res.status(400).json({ error: "Choose a supported language." });
  }
  if (!["learn", "chat"].includes(mode)) {
    return res.status(400).json({ error: "Choose learning or chat mode." });
  }
  const safe = messages
    .filter(m => m && ["user", "assistant"].includes(m.role) && typeof m.content === "string")
    .slice(-12)
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }));
  if (!safe.length || safe[safe.length - 1].role !== "user") {
    return res.status(400).json({ error: "Please send a message to begin." });
  }

  const instruction = mode === "learn"
    ? `You are BhashaSetu, a friendly, patient multilingual language tutor. The learner understands ${nativeLanguage} and wants to learn ${targetLanguage}. Explain meaning, grammar, and corrections in ${nativeLanguage}. Include natural ${targetLanguage} examples and their ${nativeLanguage} meanings. When useful, include pronunciation or transliteration in Latin letters. Answer open-ended questions and adapt to the learner's level. If the learner writes in a different Indian language, acknowledge it and clarify when needed, but keep explanations in ${nativeLanguage} and lesson examples in ${targetLanguage}. Do not claim every language or dialect is identical; be honest about uncertainty.`
    : `You are BhashaSetu, a warm open-ended voice conversation partner. Reply naturally in the same language the user is speaking in their latest message, including Telugu and other Indian languages and code-switching. If the latest message is in Telugu, reply in natural conversational Telugu written in Telugu script; do not switch to English or transliterate Telugu into Latin letters. For other clear Indian-language scripts, reply in that language and script. Keep spoken replies short and human, like a friendly phone conversation. Unless the user asks for it, do not add translations, language labels, headings, markdown, bullet points, quotation marks around the whole reply, or explanations of punctuation. Do not force a lesson unless asked. If the language is genuinely unclear, ask briefly which language they prefer.`;

  try {
    let reply;
    // Prefer Gemini when configured, allowing free-tier testing without OpenAI credits.
    if (process.env.GEMINI_API_KEY) {
      const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: instruction }] },
          contents: safe.map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }]
          })),
          generationConfig: { temperature: 0.6, maxOutputTokens: 900 }
        }),
        signal: AbortSignal.timeout(30000)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = data.error?.message || `Gemini API returned HTTP ${response.status}`;
        console.error("Gemini request failed:", response.status, detail);
        return res.status(502).json({ error: "Gemini couldn't respond. Check the Gemini API key, model access, and free-tier quota in Google AI Studio." });
      }
      reply = data.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("").trim();
    } else if (process.env.OPENAI_API_KEY) {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const result = await client.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [{ role: "system", content: instruction }, ...safe],
        temperature: 0.6,
        max_tokens: 900
      });
      reply = result.choices?.[0]?.message?.content;
    } else {
      return res.status(503).json({ error: "Live AI isn't configured yet. Add GEMINI_API_KEY to the server environment." });
    }

    if (!reply) return res.status(502).json({ error: "The AI returned an empty response. Please try again." });
    res.json({ reply });
  } catch (error) {
    console.error("AI request failed:", error.message);
    res.status(502).json({ error: "The AI service couldn't respond. Check the server logs and try again." });
  }
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log("BhashaSetu running on port " + port));
