import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailCaptureProps {
  onSubmit: (name: string, email: string) => void;
  onSkip: () => void;
}

const EmailCapture = ({ onSubmit, onSkip }: EmailCaptureProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isValid = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) onSubmit(name.trim(), email.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ordinal-green to-ordinal-cyan" />

      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Mail className="text-electric-glow" size={24} />
      </div>

      <h2 className="text-[22px] font-bold mb-2">Your Results Are Ready</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed mb-8 max-w-[420px] mx-auto">
        Enter your details to receive a copy of your Process Debt Report, or skip to view your results now.
      </p>

      <form onSubmit={handleSubmit} className="max-w-[360px] mx-auto space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground text-[15px] outline-none transition-colors focus:border-electric-bright placeholder:text-muted-foreground"
        />
        <input
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={255}
          className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground text-[15px] outline-none transition-colors focus:border-electric-bright placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={!isValid}
          className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-ordinal-green text-white rounded-xl font-semibold text-[15px] shadow-[0_4px_12px_rgba(16,185,129,0.12)] transition-all duration-200 hover:bg-ordinal-green-bright hover:-translate-y-px disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          View My Results
          <ArrowRight size={16} />
        </button>
      </form>

      <button
        onClick={onSkip}
        className="mt-5 text-sm text-ordinal-dim hover:text-foreground transition-colors underline underline-offset-4"
      >
        Skip, just show my results
      </button>
    </motion.div>
  );
};

export default EmailCapture;
