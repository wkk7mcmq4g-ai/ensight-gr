import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CTASection = () => (
  <section className="bg-primary py-28 text-center">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease }}
        className="text-[clamp(28px,4.5vw,44px)] font-black tracking-tight leading-[1.15] text-primary-foreground mb-5"
      >
        Let's fix the bottlenecks in your business
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="text-[17px] text-primary-foreground/80 leading-relaxed max-w-[560px] mx-auto mb-10"
      >
        We'll walk through your current processes, identify inefficiencies, and show how a custom-built system can transform your operations.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <a
          href="mailto:hello@ensight.gr?subject=Strategy Call"
          className="bg-white text-primary text-base font-bold px-9 py-4 rounded-xl shadow-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-xl transition-all no-underline"
        >
          Book a 30-minute Strategy Call
        </a>
        <Link
          to="/contact"
          className="bg-transparent text-primary-foreground text-base font-semibold px-9 py-4 rounded-xl border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all no-underline"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
