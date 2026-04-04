import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const dots = Array.from({ length: 36 }, (_, i) => ({
  x: (i % 6) * 60,
  y: Math.floor(i / 6) * 60,
  delay: Math.random() * 1.2,
  size: 3 + Math.random() * 3,
}));

const HeroVisual = () => (
  <div className="relative w-full h-full min-h-[320px]">
    <svg viewBox="0 0 360 360" className="w-full h-full opacity-[0.35]" aria-hidden>
      {/* Grid dots */}
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x + 30}
          cy={dot.y + 30}
          r={dot.size}
          fill="hsl(var(--primary))"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.6, 0.3], scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5, delay: 0.5 + dot.delay, ease }}
        />
      ))}

      {/* Connecting lines */}
      {[
        { x1: 90, y1: 90, x2: 210, y2: 150 },
        { x1: 210, y1: 150, x2: 150, y2: 270 },
        { x1: 150, y1: 270, x2: 330, y2: 210 },
        { x1: 30, y1: 210, x2: 150, y2: 150 },
        { x1: 270, y1: 90, x2: 330, y2: 210 },
      ].map((line, i) => (
        <motion.line
          key={`line-${i}`}
          {...line}
          stroke="hsl(var(--primary))"
          strokeWidth={1}
          strokeOpacity={0.25}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1 + i * 0.2, ease }}
        />
      ))}

      {/* Accent shapes */}
      <motion.rect
        x={180}
        y={120}
        width={60}
        height={60}
        rx={6}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth={1.5}
        strokeOpacity={0.3}
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.5, ease }}
      />
      <motion.circle
        cx={90}
        cy={270}
        r={30}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth={1.5}
        strokeOpacity={0.2}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8, ease }}
      />
    </svg>
  </div>
);

export default HeroVisual;
