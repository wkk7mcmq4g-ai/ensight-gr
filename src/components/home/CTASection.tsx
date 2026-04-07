import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import DecorativeShapes from '@/components/DecorativeShapes';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

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
    <section className="bg-primary py-28" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="text-[clamp(28px,4.5vw,44px)] font-bold tracking-tight leading-[1.15] text-primary-foreground mb-3 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="text-[17px] text-primary-foreground/80 leading-relaxed max-w-[480px] mx-auto mb-10 text-center"
        >
          Tell us about the challenge you're working on. We'll get back to you within one business day.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
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
            className="bg-white text-primary text-base font-semibold px-9 py-4 rounded-lg shadow-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-xl transition-all self-start"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;
