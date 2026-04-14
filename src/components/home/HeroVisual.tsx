import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Data-flow nodes
const nodes = [
  { x: 60, y: 80, r: 18, label: 'CRM' },
  { x: 200, y: 50, r: 22, label: 'ERP' },
  { x: 320, y: 90, r: 16, label: 'API' },
  { x: 100, y: 200, r: 20, label: 'BI' },
  { x: 250, y: 180, r: 24, label: 'DB' },
  { x: 180, y: 300, r: 18, label: 'AI' },
  { x: 310, y: 270, r: 16, label: 'IOT' },
];

const connections = [
  [0, 1], [1, 2], [0, 3], [1, 4], [3, 4], [3, 5], [4, 5], [4, 6], [5, 6], [2, 6],
];

// Animated data particles along paths
const particles = [
  { from: 0, to: 1, delay: 2 },
  { from: 1, to: 4, delay: 2.8 },
  { from: 3, to: 5, delay: 3.5 },
  { from: 4, to: 6, delay: 4.2 },
];

const HeroVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [10, -20]);

  return (
    <div ref={ref} className="relative w-full h-full min-h-[260px]">
      <motion.svg viewBox="0 0 380 360" className="w-full h-full" aria-hidden style={{ y: floatY }}>
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.15} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background grid */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={`h-${i}`}
            x1={0} y1={i * 50} x2={380} y2={i * 50}
            stroke="hsl(var(--primary))" strokeWidth={0.3} strokeOpacity={0.08}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.8 }}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 50 + 15} y1={0} x2={i * 50 + 15} y2={360}
            stroke="hsl(var(--primary))" strokeWidth={0.3} strokeOpacity={0.08}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.8 }}
          />
        ))}

        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <motion.line
            key={`conn-${i}`}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="hsl(var(--primary))"
            strokeWidth={1.2}
            strokeOpacity={0.2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease }}
          />
        ))}

        {/* Data particles traveling along connections */}
        {particles.map((p, i) => {
          const from = nodes[p.from];
          const to = nodes[p.to];
          return (
            <motion.circle
              key={`particle-${i}`}
              r={3}
              fill="hsl(var(--electric-bright))"
              filter="url(#glow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x, from.x],
                cy: [from.y, to.y, from.y],
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration: 3,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Node glow */}
        {nodes.map((n, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={n.x} cy={n.y} r={n.r * 2}
            fill="url(#nodeGlow)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.12, ease }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={n.x} cy={n.y} r={n.r}
              fill="hsl(var(--card))"
              stroke="hsl(var(--primary))"
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease }}
            />
            <motion.text
              x={n.x} y={n.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={n.r > 18 ? 9 : 7.5}
              fontWeight={600}
              fontFamily="'JetBrains Mono', monospace"
              fill="hsl(var(--primary))"
              fillOpacity={0.7}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.12, ease }}
            >
              {n.label}
            </motion.text>
          </motion.g>
        ))}

        {/* Pulsing ring on central node */}
        <motion.circle
          cx={nodes[4].x} cy={nodes[4].y} r={nodes[4].r}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], scale: [1, 1.8, 2] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeOut' }}
        />
      </motion.svg>
    </div>
  );
};

export default HeroVisual;
