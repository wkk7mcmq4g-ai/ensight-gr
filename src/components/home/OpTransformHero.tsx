import { motion } from 'framer-motion';
import DecorativeShapes from '@/components/DecorativeShapes';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const OpTransformHero = () => (
  <section className="px-6 md:px-12 pt-24 pb-10 md:pt-32 md:pb-16 flex flex-col justify-center max-w-[1200px] mx-auto relative overflow-hidden">
    <DecorativeShapes variant="starburst" />
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.15 }}
      className="text-[clamp(34px,6vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-[800px] text-foreground"
    >
      We build systems that eliminate operational bottlenecks.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
      className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px] mb-7"
    >
      Custom platforms, automation, and reporting solutions that replace spreadsheets, manual workflows, and disconnected systems.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.45 }}
      className="flex gap-3 flex-wrap"
    >
      <a
        href="#problems"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-primary text-primary-foreground text-base font-bold px-7 py-3 md:px-9 md:py-4 rounded-xl shadow-[0_4px_16px_hsl(var(--primary)/0.15)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] transition-all no-underline"
      >
        Learn More
      </a>
    </motion.div>
  </section>
);

export default OpTransformHero;
