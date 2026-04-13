import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import HeroVisual from './HeroVisual';
import DecorativeShapes from '@/components/DecorativeShapes';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const noMotion = prefersReducedMotion;

  return (
    <section ref={ref} className="px-6 md:px-12 pt-24 pb-10 md:pt-32 md:pb-16 max-w-[1200px] mx-auto relative overflow-hidden">
      <DecorativeShapes variant="starburst" />

      {/* Parallax gradient orb */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          y: noMotion ? 0 : orbY,
        }}
        aria-hidden
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        <div>
          <motion.h1
            className="text-[clamp(32px,7vw,80px)] font-bold leading-[1.08] tracking-tight mb-6 text-foreground"
            style={{ y: noMotion ? 0 : headlineY }}
          >
            We <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">transform</span> how organisations work with technology and data.
          </motion.h1>

          <motion.p
            className="text-base md:text-xl text-muted-foreground font-medium leading-relaxed max-w-[600px] mb-7"
            style={{ y: noMotion ? 0 : subtitleY }}
          >
            Strategy, platforms, automation, and analytics — designed around how your business actually operates.
          </motion.p>

          <motion.div className="flex gap-3 flex-wrap" style={{ y: noMotion ? 0 : ctaY }}>
            <Link
              to="/assessment"
              className="bg-gradient-to-r from-primary to-accent-blue text-primary-foreground text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg shadow-[0_4px_16px_hsl(261_84%_58%/0.25)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(261_84%_58%/0.3)] transition-all no-underline"
            >
              Get a Free Assessment
            </Link>
            <a
              href="#pillars"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-primary text-primary text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg hover:bg-primary/10 hover:-translate-y-0.5 transition-all no-underline"
            >
              See How We Work
            </a>
          </motion.div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(261_84%_58%/0.12)_0%,_transparent_70%)] scale-150" />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
