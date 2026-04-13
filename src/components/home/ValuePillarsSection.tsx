import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { ArrowRight, Workflow, BarChart3, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Workflow,
    title: 'Digital Transformation',
    desc: 'Redesign processes and systems for efficiency and scale.',
    hsl: 'hsl(var(--primary))',
    link: '/operational-transformation',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Turn fragmented data into clear, actionable insight.',
    hsl: 'hsl(var(--accent-cyan))',
    link: '/data-clarity',
  },
  {
    icon: Code2,
    title: 'Custom Platforms',
    desc: 'Purpose-built applications that replace spreadsheets and manual workflows.',
    hsl: 'hsl(var(--electric-bright))',
    link: '/case-studies',
  },
  {
    icon: Zap,
    title: 'Automation & Integration',
    desc: 'Connect systems, eliminate repetitive tasks, scale without headcount.',
    hsl: 'hsl(var(--ordinal-green))',
    link: '/operational-transformation',
  },
];

const ValuePillarsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="pillars">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-accent-cyan mb-3">
        What We Do
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Four Pillars of Impact
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        We help mid-market organisations modernise operations, unlock data, and build technology that works the way they do.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pillars.map((p, i) => (
        <StaggerItem key={i}>
          <Link
            to={p.link}
            className="block bg-white/75 backdrop-blur-xl border border-white/40 rounded-lg p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 ease-out group h-full no-underline relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[hsl(195,89%,34%)] to-[hsl(187,96%,42%)]" />
            <div
              className="mb-4 w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
              style={{ backgroundColor: `${p.hsl}15`, color: p.hsl }}
            >
              <p.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold mb-1.5 text-foreground">{p.title}</h3>
            <p className="text-sm text-ordinal-body leading-relaxed mb-3">{p.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
              Learn more <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ValuePillarsSection;
