import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Props {
  variant?: 'dots' | 'circles' | 'grid' | 'minimal';
  className?: string;
}

const dots = Array.from({ length: 20 }, (_, i) => ({
  x: (i % 5) * 70 + 15,
  y: Math.floor(i / 5) * 70 + 15,
  delay: Math.random() * 1.4,
  size: 2 + Math.random() * 3,
}));

const DecorativeShapes = ({ variant = 'dots', className = '' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const wrapperClass = `absolute inset-0 pointer-events-none overflow-hidden ${className}`;

  if (variant === 'minimal') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 400" className="absolute top-0 right-0 w-[320px] h-[320px] opacity-[0.22]" style={{ y, rotate }}>
          <motion.circle cx={200} cy={200} r={120} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.5, ease }} />
          <motion.circle cx={200} cy={200} r={60} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.8, ease }} />
          <motion.rect x={160} y={160} width={80} height={80} rx={4} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, rotate: -15 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1, delay: 1.1, ease }} />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'circles') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 400" className="absolute -top-10 -right-10 w-[360px] h-[360px] opacity-[0.25]" style={{ y, rotate }}>
          {[80, 140, 200].map((r, i) => (
            <motion.circle key={i} cx={200} cy={200} r={r} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.6, scale: 1 }} transition={{ duration: 1.4, delay: 0.4 + i * 0.25, ease }} />
          ))}
          <motion.rect x={250} y={80} width={50} height={50} rx={4} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 0.5, rotate: 0 }} transition={{ duration: 1, delay: 1.2, ease }} />
          <motion.polygon points="120,60 150,110 90,110" fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.4, scale: 1 }} transition={{ duration: 1, delay: 1.5, ease }} />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 360 360" className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.2]" style={{ y }}>
          {[0, 60, 120, 180, 240, 300, 360].map((pos, i) => (
            <motion.line key={`h-${i}`} x1={0} y1={pos} x2={360} y2={pos} stroke="hsl(var(--primary))" strokeWidth={0.5} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease }} />
          ))}
          {[0, 60, 120, 180, 240, 300, 360].map((pos, i) => (
            <motion.line key={`v-${i}`} x1={pos} y1={0} x2={pos} y2={360} stroke="hsl(var(--primary))" strokeWidth={0.5} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease }} />
          ))}
          <motion.rect x={120} y={120} width={120} height={120} rx={6} fill="hsl(var(--primary))" fillOpacity={0.06} stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease }} />
          <motion.circle cx={300} cy={60} r={20} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.5, scale: 1 }} transition={{ duration: 1, delay: 1.3, ease }} />
        </motion.svg>
      </div>
    );
  }

  // Default: dots variant
  return (
    <div ref={ref} className={wrapperClass} aria-hidden>
      <motion.svg viewBox="0 0 360 300" className="absolute -top-4 right-0 w-[320px] h-[280px] opacity-[0.2]" style={{ y, rotate }}>
        {dots.map((dot, i) => (
          <motion.circle key={i} cx={dot.x} cy={dot.y} r={dot.size} fill="hsl(var(--primary))" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.6, 0.35], scale: [0, 1.2, 1] }} transition={{ duration: 1.5, delay: 0.4 + dot.delay, ease }} />
        ))}
        <motion.line x1={85} y1={85} x2={225} y2={155} stroke="hsl(var(--primary))" strokeWidth={0.8} strokeOpacity={0.3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1, ease }} />
        <motion.line x1={225} y1={155} x2={155} y2={225} stroke="hsl(var(--primary))" strokeWidth={0.8} strokeOpacity={0.3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.2, ease }} />
        <motion.rect x={200} y={100} width={50} height={50} rx={4} fill="none" stroke="hsl(var(--primary))" strokeWidth={1} strokeOpacity={0.25} initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1, delay: 1.5, ease }} />
      </motion.svg>
    </div>
  );
};

export default DecorativeShapes;
