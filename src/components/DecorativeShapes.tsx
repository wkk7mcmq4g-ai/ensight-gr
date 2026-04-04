import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Props {
  variant?: 'dots' | 'circles' | 'grid' | 'minimal';
  className?: string;
}

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
    // Geometric wireframe — nested shapes with crosshair
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 400" className="absolute top-0 right-0 w-[380px] h-[380px] opacity-[0.18]" style={{ y, rotate }}>
          {/* Outer diamond */}
          <motion.polygon
            points="200,40 360,200 200,360 40,200"
            fill="none" stroke="hsl(var(--primary))" strokeWidth={1}
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
          />
          {/* Inner diamond */}
          <motion.polygon
            points="200,120 280,200 200,280 120,200"
            fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
          />
          {/* Crosshair lines */}
          <motion.line x1={200} y1={40} x2={200} y2={360} stroke="hsl(var(--primary))" strokeWidth={0.5} strokeDasharray="4 6"
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1, delay: 0.9, ease }} />
          <motion.line x1={40} y1={200} x2={360} y2={200} stroke="hsl(var(--primary))" strokeWidth={0.5} strokeDasharray="4 6"
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 1, delay: 1, ease }} />
          {/* Center circle */}
          <motion.circle cx={200} cy={200} r={16} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease }} />
          {/* Corner dots */}
          {[{cx:200,cy:40},{cx:360,cy:200},{cx:200,cy:360},{cx:40,cy:200}].map((p, i) => (
            <motion.circle key={i} cx={p.cx} cy={p.cy} r={4} fill="hsl(var(--primary))" fillOpacity={0.5}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.1, ease }} />
          ))}
        </motion.svg>
      </div>
    );
  }

  if (variant === 'circles') {
    // Orbital rings with scattered particles
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 420 420" className="absolute -top-16 -right-16 w-[420px] h-[420px] opacity-[0.22]" style={{ y, rotate }}>
          {/* Orbital ellipses */}
          <motion.ellipse cx={210} cy={210} rx={180} ry={90} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8}
            transform="rotate(-25 210 210)"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease }} />
          <motion.ellipse cx={210} cy={210} rx={140} ry={70} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8}
            transform="rotate(35 210 210)"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease }} />
          <motion.ellipse cx={210} cy={210} rx={100} ry={50} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.6}
            transform="rotate(-60 210 210)"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease }} />
          {/* Core */}
          <motion.circle cx={210} cy={210} r={8} fill="hsl(var(--primary))" fillOpacity={0.3}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease }} />
          {/* Satellite dots along orbits */}
          {[
            { cx: 340, cy: 140 }, { cx: 80, cy: 280 },
            { cx: 300, cy: 310 }, { cx: 120, cy: 110 },
            { cx: 260, cy: 100 }, { cx: 160, cy: 320 },
          ].map((p, i) => (
            <motion.circle key={i} cx={p.cx} cy={p.cy} r={3 + (i % 3)} fill="hsl(var(--primary))" fillOpacity={0.35}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: [0, 1.3, 1] }}
              transition={{ duration: 1, delay: 1.1 + i * 0.15, ease }} />
          ))}
          {/* Small hexagon accent */}
          <motion.polygon
            points="350,80 365,88 365,104 350,112 335,104 335,88"
            fill="none" stroke="hsl(var(--primary))" strokeWidth={1}
            initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 0.5, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5, ease }} />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'grid') {
    // Isometric grid with highlighted nodes
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 350" className="absolute top-0 right-0 w-[380px] h-[340px] opacity-[0.18]" style={{ y }}>
          {/* Isometric-ish diagonal lines */}
          {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((pos, i) => (
            <motion.line key={`d1-${i}`} x1={pos} y1={0} x2={pos - 120} y2={350} stroke="hsl(var(--primary))" strokeWidth={0.4}
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease }} />
          ))}
          {[0, 50, 100, 150, 200, 250, 300, 350].map((pos, i) => (
            <motion.line key={`d2-${i}`} x1={0} y1={pos} x2={400} y2={pos} stroke="hsl(var(--primary))" strokeWidth={0.3}
              initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease }} />
          ))}
          {/* Highlighted intersection nodes */}
          {[
            { cx: 200, cy: 150 }, { cx: 250, cy: 200 }, { cx: 150, cy: 200 },
            { cx: 200, cy: 250 }, { cx: 300, cy: 100 },
          ].map((p, i) => (
            <motion.circle key={i} cx={p.cx} cy={p.cy} r={5} fill="hsl(var(--primary))" fillOpacity={0.15}
              stroke="hsl(var(--primary))" strokeWidth={1}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.12, ease }} />
          ))}
          {/* Connecting path between nodes */}
          <motion.polyline
            points="200,150 250,200 200,250 150,200 200,150"
            fill="hsl(var(--primary))" fillOpacity={0.04}
            stroke="hsl(var(--primary))" strokeWidth={1}
            initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 0.5, pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease }} />
          {/* Accent bracket */}
          <motion.path
            d="M310,80 L330,80 L330,130"
            fill="none" stroke="hsl(var(--primary))" strokeWidth={1.2}
            initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 0.4, pathLength: 1 }}
            transition={{ duration: 1, delay: 1.6, ease }} />
        </motion.svg>
      </div>
    );
  }

  // Default: dots — constellation pattern with varying sizes
  const stars = [
    { x: 40, y: 60, s: 3 }, { x: 120, y: 30, s: 4 }, { x: 200, y: 80, s: 2.5 },
    { x: 280, y: 45, s: 3.5 }, { x: 330, y: 100, s: 2 }, { x: 60, y: 140, s: 2 },
    { x: 150, y: 120, s: 5 }, { x: 240, y: 160, s: 3 }, { x: 310, y: 180, s: 4 },
    { x: 80, y: 220, s: 3 }, { x: 180, y: 200, s: 2.5 }, { x: 260, y: 240, s: 3.5 },
    { x: 340, y: 260, s: 2 }, { x: 100, y: 270, s: 4 }, { x: 220, y: 280, s: 3 },
  ];
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [5, 6], [6, 7], [7, 8],
    [9, 10], [10, 11], [11, 12],
    [6, 10], [2, 7], [7, 11],
  ];

  return (
    <div ref={ref} className={wrapperClass} aria-hidden>
      <motion.svg viewBox="0 0 380 300" className="absolute -top-4 right-0 w-[360px] h-[290px] opacity-[0.25]" style={{ y, rotate }}>
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <motion.line key={`c-${i}`}
            x1={stars[a].x} y1={stars[a].y} x2={stars[b].x} y2={stars[b].y}
            stroke="hsl(var(--primary))" strokeWidth={0.6} strokeOpacity={0.4}
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 + i * 0.08, ease }} />
        ))}
        {/* Star dots */}
        {stars.map((star, i) => (
          <motion.circle key={i} cx={star.x} cy={star.y} r={star.s} fill="hsl(var(--primary))"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.7, 0.45], scale: [0, 1.3, 1] }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease }} />
        ))}
        {/* Accent: small triangle */}
        <motion.polygon points="270,70 290,110 250,110" fill="none" stroke="hsl(var(--primary))" strokeWidth={1}
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 1.8, ease }} />
        {/* Accent: dashed circle */}
        <motion.circle cx={100} cy={180} r={25} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} strokeDasharray="3 5"
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1, delay: 2, ease }} />
      </motion.svg>
    </div>
  );
};

export default DecorativeShapes;
