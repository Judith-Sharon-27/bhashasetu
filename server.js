require("dotenv").config();
const express = require("express");
const path = require("path");
const OpenAI = require("openai");
const app = express();
app.use(express.json({ limit: "32kb" }));
app.use(express.static(path.join(__dirname, "public")));
const languages = new Set(["Assamese","Bengali","Bodo","Dogri","Gujarati","Hindi","Kannada","Kashmiri","Konkani","Maithili","Malayalam","Manipuri","Marathi","Nepali","Odia","Punjabi","Sanskrit","Santali","Sindhi","Tamil","Telugu","Urdu","English"]);
app.get("/api/health", (_req,res)=>res.json({ok:true,aiConfigured:Boolean(process.env.OPENAI_API_KEY)}));
app.post("/api/chat", async (req,res)=>{
  const {messages,mode="learn",nativeLanguage="Hindi",targetLanguage="Sanskrit"}=req.body||{};
  if(!Array.isArray(messages)||!messages.length||messages.length>20)return res.status(400).json({error:"Send between 1 and 20 messages."});
  if(!languages.has(nativeLanguage)||!languages.has(targetLanguage))return res.status(400).json({error:"Choose a supported language."});
  const safe=messages.filter(m=>m&&["user","assistant"].includes(m.role)&&typeof m.content==="string").slice(-12).map(m=>({role:m.role,content:m.content.slice(0,4000)}));
  if(!safe.length)return res.status(400).json({error:"No valid messages found."});
  if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:"Live AI isn't configured yet. Add OPENAI_API_KEY to the server environment."});
  try {
    const instruction=mode==="learn"
      ? `You are a warm, accurate language tutor. The learner understands ${nativeLanguage} and wants to learn ${targetLanguage}. Explain meanings and grammar in ${nativeLanguage}; provide natural ${targetLanguage} examples, translations, pronunciation/transliteration when helpful, and gentle corrections. Adapt to the learner. Answer open-ended questions too. Be honest about ambiguity and dialect variation.`
      : "You are a friendly open-ended conversation partner. Reply in the same language as the user's latest message, including Indian languages and mixed-language messages. Do not force a lesson unless asked.";
    const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
    const result=await client.chat.completions.create({model:process.env.OPENAI_MODEL||"gpt-4o-mini",messages:[{role:"system",content:instruction},...safe],temperature:0.6,max_tokens:900});
    res.json({reply:result.choices?.[0]?.message?.content||"I couldn't form a reply just now."});
  } catch(e){console.error("AI request failed:",e.message);res.status(502).json({error:"The AI service couldn't respond. Please try again shortly."});}
});
const port=Number(process.env.PORT)||3000;
app.listen(port,()=>console.log("BhashaSetu running on port "+port));
