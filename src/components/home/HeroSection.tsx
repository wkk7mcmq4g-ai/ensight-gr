import { motion } from 'framer-motion';
import HeroVisual from './HeroVisual';
import DecorativeShapes from '@/components/DecorativeShapes';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = () => (
  <section className="px-6 md:px-12 pt-24 pb-10 md:pt-32 md:pb-16 max-w-[1200px] mx-auto relative overflow-hidden">
    <DecorativeShapes variant="starburst" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="text-[clamp(32px,7vw,80px)] font-bold leading-[1.08] tracking-tight mb-6 text-foreground"
        >
          We <span className="text-[#0A7EA4]">transform</span> how organisations work with technology and data.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.1 }}
          className="text-base md:text-xl text-[#3D5A68] font-medium leading-relaxed max-w-[600px] mb-7"
        >
          Strategy, platforms, automation, and analytics — designed around how your business actually operates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease, delay: 0.15 }}
          className="flex gap-3 flex-wrap"
        >
          <a
            href="#pillars"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-primary-foreground text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg shadow-[0_4px_16px_hsl(var(--primary)/0.15)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] transition-all no-underline"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease, delay: 0.3 }}
        className="hidden md:block"
      >
        <HeroVisual />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
