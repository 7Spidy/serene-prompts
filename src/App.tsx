import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, Copy, Check } from 'lucide-react';

const PROMPTS = [
  { id: 1, vibe: 'Self-Reflection', text: 'What is a belief you hold that has changed over the last year?' },
  { id: 2, vibe: 'Self-Reflection', text: 'When do you feel most authentically yourself?' },
  { id: 3, vibe: 'Gratitude', text: 'What is a small, everyday thing that you often take for granted?' },
  { id: 4, vibe: 'Gratitude', text: 'Who has had a positive impact on your life recently, and why?' },
  { id: 5, vibe: 'Healing', text: 'What is something you need to forgive yourself for?' },
  { id: 6, vibe: 'Healing', text: 'How does your body feel right now? What does it need?' },
  { id: 7, vibe: 'Creativity', text: 'If you had unlimited time and resources, what would you create today?' },
  { id: 8, vibe: 'Creativity', text: 'Describe a mundane object in the room as if it were magical.' },
  { id: 9, vibe: 'Relationships', text: 'What boundary do you need to set to protect your energy?' },
  { id: 10, vibe: 'Relationships', text: 'How do you prefer to receive love and support from others?' },
];

const VIBES = ['Any', 'Self-Reflection', 'Gratitude', 'Healing', 'Creativity', 'Relationships'];

export default function App() {
  const [currentVibe, setCurrentVibe] = useState('Any');
  const [currentPrompt, setCurrentPrompt] = useState(PROMPTS[0]);
  const [isCopied, setIsCopied] = useState(false);

  const getRandomPrompt = (vibe: string) => {
    const filtered = vibe === 'Any' ? PROMPTS : PROMPTS.filter(p => p.vibe === vibe);
    const available = filtered.filter(p => p.id !== currentPrompt?.id);
    const pool = available.length > 0 ? available : filtered;
    const random = pool[Math.floor(Math.random() * pool.length)];
    return random;
  };

  const handleNewPrompt = () => {
    setCurrentPrompt(getRandomPrompt(currentVibe));
    setIsCopied(false);
  };

  const handleVibeChange = (vibe: string) => {
    setCurrentVibe(vibe);
    setCurrentPrompt(getRandomPrompt(vibe));
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentPrompt.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    setCurrentPrompt(getRandomPrompt('Any'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-6 selection:bg-moss/20">

      {/* Main content — grows to fill space and centers its children */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-12">

        {/* Vibe Chips */}
        <nav className="w-full flex flex-wrap justify-center gap-2">
          {VIBES.map((vibe) => (
            <button
              key={vibe}
              onClick={() => handleVibeChange(vibe)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-sand ${
                currentVibe === vibe
                  ? 'bg-moss text-white shadow-sm'
                  : 'bg-white/50 text-warmgray hover:bg-white/80 hover:text-charcoal'
              }`}
            >
              {vibe}
            </button>
          ))}
        </nav>

        {/* Prompt Card */}
        <div className="w-full min-h-[200px] flex items-center justify-center text-center px-4" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPrompt.id}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-relaxed text-charcoal"
            >
              "{currentPrompt.text}"
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleNewPrompt}
            className="group flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-charcoal font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
          >
            <RefreshCw className="w-4 h-4 text-moss group-hover:rotate-180 transition-transform duration-500 ease-out" />
            <span>New Prompt</span>
          </button>

          <button
            onClick={copyToClipboard}
            className="p-3 bg-white/50 rounded-full hover:bg-white transition-colors duration-300 text-warmgray hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
            aria-label="Copy prompt"
            title="Copy prompt"
          >
            {isCopied ? <Check className="w-5 h-5 text-moss" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full text-center pb-2 pt-4">
        <p className="text-xs text-warmgray/60 tracking-wide">
          Made with ♥️ by Avi
        </p>
      </footer>

    </div>
  );
}
