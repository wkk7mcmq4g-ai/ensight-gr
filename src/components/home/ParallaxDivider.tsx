import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const ParallaxDivider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const dotX = useTransform(scrollYProgress, [0, 1], ['20%', '80%']);

  return (
    <div ref={ref} className="relative h-px w-full bg-border overflow-visible">
      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
          style={{ left: dotX }}
        />
      )}
    </div>
  );
};

export default ParallaxDivider;
