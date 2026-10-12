# BhashaSetu 🌉

**Learn and practise Indian languages with an AI tutor.**

BhashaSetu is a responsive web app for language learning and open-ended conversation. Choose a language you know, a language you want to practise, and start chatting.

## Current features

- Learning mode with explanations in your chosen familiar language and examples in your target language.
- Chat mode for open-ended conversation.
- Language selectors for 22 Indian languages plus English.
- On-screen character keyboards for supported scripts.
- Optional browser speech input where supported.
- Double-click an assistant reply to hear it read aloud when your browser supports speech synthesis.
- Responsive layout for mobile and desktop.
- API key kept on the server, not in browser code.
- Basic per-IP request throttling for the AI endpoint.

**Language note:** language names in the selector describe the available learning choices; AI quality, script keyboards, and browser speech support vary by language, device, and browser. AI-generated translations and explanations can be imperfect.

## Run locally

### Requirements

- Node.js 18 or newer
- An OpenAI API key for live AI replies

### 1. Get the project

```bash
git clone https://github.com/Judith-Sharon-27/bhashasetu.git
cd bhashasetu
```

Or download the repository ZIP from GitHub and extract it.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the AI key

Copy `.env.example` to a new file named `.env` and add your own key:

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4o-mini
PORT=3000
```

Keep `.env` private. Do not commit it, paste your API key into the website, or share it in screenshots. The included `.gitignore` excludes it from Git.

### 4. Start the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Check server status at [http://localhost:3000/api/health](http://localhost:3000/api/health). The response reports whether an API key is configured; it does not reveal the key.

## Project layout

```text
bhashasetu/
├── public/
│   ├── index.html    # App interface
│   ├── styles.css    # Responsive styles
│   └── app.js        # Language selectors and browser interactions
├── .env.example      # Environment variable template
├── .gitignore
├── package.json
├── server.js         # Express server and AI endpoint
└── README.md
```

## Safety and deployment notes

- Never expose `OPENAI_API_KEY` in frontend JavaScript or commit it to Git.
- The in-memory request limit is a small single-process safeguard, not a complete production abuse-prevention system. Multi-instance deployments need a shared rate-limit store and appropriate proxy configuration.
- Before public launch, add automated tests, production monitoring, stronger abuse controls, privacy information, and accessibility/browser testing.
- The app has **not been deployed** by this repository setup. Run and test it locally before choosing a hosting provider.

## Planned improvements

- Automated server and interface tests.
- More reliable transliteration and pronunciation support.
- Saved learning progress and vocabulary review.
- Accessibility and language-specific quality checks.

## Contributing

Bug reports and focused pull requests are welcome. Please do not include API keys, private user conversations, or other secrets in issues.
