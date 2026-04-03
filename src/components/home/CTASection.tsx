import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CTASection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease }}
      className="text-[clamp(32px,5vw,48px)] font-black tracking-tight mb-4"
    >
      Ready to see what process debt is{' '}
      <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
        costing you?
      </span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease, delay: 0.1 }}
      className="text-[17px] text-ordinal-body leading-relaxed max-w-[520px] mx-auto mb-9"
    >
      Start with a 30-minute briefing. No obligation. No sales pitch. Just a conversation about whether there's a fit.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease, delay: 0.2 }}
      className="flex gap-3 justify-center flex-wrap"
    >
      <a
        href="mailto:hello@ensight.co?subject=X-Ray Briefing"
        className="bg-ordinal-green text-white text-base font-bold px-9 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)] transition-all no-underline"
      >
        Book Your X-Ray Briefing
      </a>
      <Link
        to="/assessment"
        className="bg-card text-foreground text-base font-semibold px-9 py-4 rounded-xl border border-border hover:bg-muted hover:border-ordinal-faint transition-all no-underline"
      >
        Take the Free Assessment
      </Link>
    </motion.div>
  </section>
);

export default CTASection;
