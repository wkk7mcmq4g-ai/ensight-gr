import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { ArrowRight, Workflow, BarChart3, Code2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Workflow,
    title: 'Digital Transformation',
    desc: 'Redesign processes and systems for efficiency and scale.',
    color: 'bg-primary',
    iconColor: 'text-primary',
    link: '/operational-transformation',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Turn fragmented data into clear, actionable insight.',
    color: 'bg-ordinal-cyan',
    iconColor: 'text-ordinal-cyan',
    link: '/data-clarity',
  },
  {
    icon: Code2,
    title: 'Custom Platforms',
    desc: 'Purpose-built applications that replace spreadsheets and manual workflows.',
    color: 'bg-ordinal-pink',
    iconColor: 'text-electric-bright',
    link: '/case-studies',
  },
  {
    icon: Zap,
    title: 'Automation & Integration',
    desc: 'Connect systems, eliminate repetitive tasks, scale without headcount.',
    color: 'bg-ordinal-green',
    iconColor: 'text-ordinal-green',
    link: '/operational-transformation',
  },
];

const ValuePillarsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="pillars">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
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
            className="block bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-ordinal-faint transition-all group h-full no-underline"
          >
            <div className={`absolute top-0 left-0 w-full h-[2px] ${p.color}`} />
            <p.icon size={24} strokeWidth={1.5} className={`${p.iconColor} mb-4`} />
            <h3 className="text-base font-bold mb-1.5 text-foreground">{p.title}</h3>
            <p className="text-sm text-ordinal-body leading-relaxed mb-3">{p.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
              Learn more <ArrowRight size={12} />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ValuePillarsSection;
