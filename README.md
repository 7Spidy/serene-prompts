```markdown


# 🌿 Serene Prompts

**A calm, minimal journaling prompt app — powered by intention, not algorithms.**


## ✨ What is this?

**Serene Prompts** is a beautifully minimal web app that surfaces thoughtful journaling prompts to help you reflect, heal, and grow. No accounts. No distractions. Just a question worth sitting with.

Each prompt is hand-curated across 5 emotional vibes, animated with soft transitions, and ready to copy straight to your journal.

***

## 🎨 Features

- 🧘 **5 Curated Vibes** — Self-Reflection, Gratitude, Healing, Creativity, Relationships
- 🔀 **Random Prompt Generator** — Never repeat the same prompt twice in a row
- 📋 **One-Click Copy** — Copy any prompt to your clipboard instantly
- 🌊 **Smooth Animations** — Fluid blur + fade transitions using Motion
- 📱 **Fully Responsive** — Works beautifully on mobile, tablet, and desktop
- ♿ **Accessible** — Keyboard navigable with focus-visible rings and ARIA labels

***

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|--------------------------------------|
| Framework   | React 19 + TypeScript                |
| Styling     | Tailwind CSS v4                      |
| Animations  | Motion (Framer Motion successor)     |
| Icons       | Lucide React                         |
| Build Tool  | Vite 6                               |
| Backend     | Express + better-sqlite3             |
| AI (opt.)   | Google Generative AI (`@google/genai`) |

***

## 🚀 Getting Started

### Prerequisites
- Node.js `>=18`
- A Google Gemini API key (optional, for AI features)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/7Spidy/serene-prompts.git
cd serene-prompts

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

***

## 📁 Project Structure

```
serene-prompts/
├── src/
│   ├── App.tsx        # Main app logic + prompt display
│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles
├── index.html         # HTML shell
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript config
└── .env.example       # Environment variable template
