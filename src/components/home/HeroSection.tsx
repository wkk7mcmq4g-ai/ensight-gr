import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { CONTACT_HREF } from '@/lib/contact';
import HeroMarginTable from './HeroMarginTable';
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
    <section ref={ref} className="px-6 md:px-12 pt-24 pb-6 md:pt-24 md:pb-10 max-w-[1200px] mx-auto relative overflow-hidden">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        <div>
          <motion.h1
            className="text-[clamp(28px,5.5vw,56px)] font-bold leading-[1.08] tracking-tight mb-4 text-foreground"
            style={{ y: noMotion ? 0 : headlineY }}
          >
            Which of your customers <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">actually make you money</span>?
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-[600px] mb-6"
            style={{ y: noMotion ? 0 : subtitleY }}
          >
            Most companies know what they sold. Few know what each product and each customer earns once it has been made, moved and served. I build the data and reporting that answer that, and I automate the manual work that sits between your systems and your numbers.
          </motion.p>

          <motion.div className="flex gap-3 flex-wrap items-center" style={{ y: noMotion ? 0 : ctaY }}>
            <a
              href={CONTACT_HREF}
              className="bg-gradient-to-r from-primary to-accent-blue text-primary-foreground text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg shadow-[0_4px_16px_hsl(261_84%_58%/0.25)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(261_84%_58%/0.3)] transition-all no-underline"
            >
              Book a call
            </a>
            <Link
              to="/costing"
              className="text-sm md:text-base font-semibold text-foreground border border-border bg-card px-6 py-3 md:px-9 md:py-4 rounded-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all no-underline"
            >
              See the worked example
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(261_84%_58%/0.12)_0%,_transparent_70%)] scale-150 pointer-events-none" aria-hidden />
          <HeroMarginTable />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
