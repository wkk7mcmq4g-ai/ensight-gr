import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

interface Props {
  variant?: 'dots' | 'circles' | 'grid' | 'minimal' | 'starburst';
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

  if (variant === 'starburst') {
    const rays = 24;
    const cx = 200, cy = 200, innerR = 30, outerR = 190;
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 400" className="absolute -top-10 -right-10 w-[420px] h-[420px] opacity-[0.12]" style={{ y, rotate }}>
          {Array.from({ length: rays }).map((_, i) => {
            const angle = (i * 360) / rays;
            const rad = (angle * Math.PI) / 180;
            const x1 = cx + Math.cos(rad) * innerR;
            const y1 = cy + Math.sin(rad) * innerR;
            const x2 = cx + Math.cos(rad) * outerR;
            const y2 = cy + Math.sin(rad) * outerR;
            return (
              <line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="hsl(var(--primary))" strokeWidth={i % 3 === 0 ? 1.2 : 0.6}
                opacity={i % 2 === 0 ? 0.6 : 0.3} />
            );
          })}
          {[60, 110, 160].map((r, i) => (
            <circle key={`ring-${i}`} cx={cx} cy={cy} r={r} fill="none"
              stroke="hsl(var(--secondary))" strokeWidth={i === 1 ? 1 : 0.6}
              opacity={0.25 - i * 0.05} />
          ))}
          <circle cx={cx} cy={cy} r={6} fill="hsl(var(--secondary))" fillOpacity={0.4} />
          {Array.from({ length: rays }).filter((_, i) => i % 6 === 0).map((_, idx) => {
            const i = idx * 6;
            const angle = (i * 360) / rays;
            const rad = (angle * Math.PI) / 180;
            return (
              <circle key={`tip-${idx}`} cx={cx + Math.cos(rad) * outerR} cy={cy + Math.sin(rad) * outerR}
                r={4} fill="hsl(var(--primary))" fillOpacity={0.35} />
            );
          })}
        </motion.svg>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 400" className="absolute top-0 right-0 w-[380px] h-[380px] opacity-[0.18]" style={{ y, rotate }}>
          <polygon points="200,40 360,200 200,360 40,200" fill="none" stroke="hsl(var(--primary))" strokeWidth={1} />
          <polygon points="200,120 280,200 200,280 120,200" fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} opacity={0.7} />
          <line x1={200} y1={40} x2={200} y2={360} stroke="hsl(var(--primary))" strokeWidth={0.5} strokeDasharray="4 6" opacity={0.4} />
          <line x1={40} y1={200} x2={360} y2={200} stroke="hsl(var(--primary))" strokeWidth={0.5} strokeDasharray="4 6" opacity={0.4} />
          <circle cx={200} cy={200} r={16} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5} opacity={0.8} />
          {[{cx:200,cy:40},{cx:360,cy:200},{cx:200,cy:360},{cx:40,cy:200}].map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={4} fill="hsl(var(--primary))" fillOpacity={0.5} />
          ))}
        </motion.svg>
      </div>
    );
  }

  if (variant === 'circles') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 420 420" className="absolute -top-16 -right-16 w-[420px] h-[420px] opacity-[0.22]" style={{ y, rotate }}>
          <ellipse cx={210} cy={210} rx={180} ry={90} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} transform="rotate(-25 210 210)" opacity={0.6} />
          <ellipse cx={210} cy={210} rx={140} ry={70} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} transform="rotate(35 210 210)" opacity={0.5} />
          <ellipse cx={210} cy={210} rx={100} ry={50} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.6} transform="rotate(-60 210 210)" opacity={0.4} />
          <circle cx={210} cy={210} r={8} fill="hsl(var(--primary))" fillOpacity={0.3} />
          {[
            { cx: 340, cy: 140 }, { cx: 80, cy: 280 },
            { cx: 300, cy: 310 }, { cx: 120, cy: 110 },
            { cx: 260, cy: 100 }, { cx: 160, cy: 320 },
          ].map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={3 + (i % 3)} fill="hsl(var(--primary))" fillOpacity={0.35} />
          ))}
          <polygon points="350,80 365,88 365,104 350,112 335,104 335,88" fill="none" stroke="hsl(var(--primary))" strokeWidth={1} opacity={0.5} />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div ref={ref} className={wrapperClass} aria-hidden>
        <motion.svg viewBox="0 0 400 350" className="absolute top-0 right-0 w-[380px] h-[340px] opacity-[0.18]" style={{ y }}>
          {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((pos, i) => (
            <line key={`d1-${i}`} x1={pos} y1={0} x2={pos - 120} y2={350} stroke="hsl(var(--primary))" strokeWidth={0.4} opacity={0.3} />
          ))}
          {[0, 50, 100, 150, 200, 250, 300, 350].map((pos, i) => (
            <line key={`d2-${i}`} x1={0} y1={pos} x2={400} y2={pos} stroke="hsl(var(--primary))" strokeWidth={0.3} opacity={0.25} />
          ))}
          {[
            { cx: 200, cy: 150 }, { cx: 250, cy: 200 }, { cx: 150, cy: 200 },
            { cx: 200, cy: 250 }, { cx: 300, cy: 100 },
          ].map((p, i) => (
            <circle key={i} cx={p.cx} cy={p.cy} r={5} fill="hsl(var(--primary))" fillOpacity={0.15}
              stroke="hsl(var(--primary))" strokeWidth={1} opacity={0.7} />
          ))}
          <polyline points="200,150 250,200 200,250 150,200 200,150" fill="hsl(var(--primary))" fillOpacity={0.04}
            stroke="hsl(var(--primary))" strokeWidth={1} opacity={0.5} />
          <path d="M310,80 L330,80 L330,130" fill="none" stroke="hsl(var(--primary))" strokeWidth={1.2} opacity={0.4} />
        </motion.svg>
      </div>
    );
  }

  // Default: dots
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
        {connections.map(([a, b], i) => (
          <line key={`c-${i}`}
            x1={stars[a].x} y1={stars[a].y} x2={stars[b].x} y2={stars[b].y}
            stroke="hsl(var(--primary))" strokeWidth={0.6} opacity={0.4} />
        ))}
        {stars.map((star, i) => (
          <circle key={i} cx={star.x} cy={star.y} r={star.s} fill="hsl(var(--primary))" opacity={0.45} />
        ))}
        <polygon points="270,70 290,110 250,110" fill="none" stroke="hsl(var(--primary))" strokeWidth={1} opacity={0.4} />
        <circle cx={100} cy={180} r={25} fill="none" stroke="hsl(var(--primary))" strokeWidth={0.8} strokeDasharray="3 5" opacity={0.35} />
      </motion.svg>
    </div>
  );
};

export default DecorativeShapes;
