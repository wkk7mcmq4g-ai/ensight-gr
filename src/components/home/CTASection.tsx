import { useState, FormEvent } from 'react';
import DecorativeShapes from '@/components/DecorativeShapes';

const CTASection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@ensight.gr?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-dark-section py-28 relative overflow-hidden" id="contact">
      <DecorativeShapes variant="starburst" className="opacity-[0.08] [&_line]:!stroke-primary-foreground [&_circle]:!stroke-primary-foreground [&_circle]:!fill-primary-foreground" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-[clamp(28px,4.5vw,44px)] font-bold tracking-tight leading-[1.15] text-primary-foreground mb-3 text-center">
          Get in Touch
        </h2>
        <p className="text-[17px] text-primary-foreground/80 leading-relaxed max-w-[480px] mx-auto mb-10 text-center">
          Tell us about the challenge you're working on. We'll get back to you within one business day.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-[520px] mx-auto flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
            />
          </div>
          <textarea
            placeholder="Tell us about your challenge..."
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-accent-blue text-white text-base font-semibold px-9 py-4 rounded-lg shadow-lg hover:opacity-90 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.35)] active:translate-y-0 transition-all duration-200 self-start"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTASection;