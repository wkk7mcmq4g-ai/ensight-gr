import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { ArrowRight, BarChart3, Workflow, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    num: '01',
    icon: BarChart3,
    title: 'Insight & Reporting',
    desc: 'Management information that survives scrutiny.',
    body: 'One definition per number, agreed by the people who use it. Costing at product and customer level, so you know where the margin really is and where it leaks.',
    points: [
      'Metric and KPI definitions',
      'Activity-based costing and pricing analysis',
      'Management reporting and dashboards',
      'Data consolidated from the ERP and everything outside it',
      'Specification and oversight of external BI partners',
    ],
    hsl: 'hsl(var(--primary))',
    link: '/data-clarity',
  },
  {
    num: '02',
    icon: Workflow,
    title: 'Applications & Automation',
    desc: 'Fix the flow, then build the thing that runs it.',
    body: 'Most automation fails because it encodes the workaround and makes it permanent. We map how the work actually moves, remove what should not be there, make ownership explicit — and only then build the application that runs it. What comes back is recovered capacity: the things your team can finally get to once the work stops fighting them.',
    points: [
      'Process mapping and redesign',
      'Custom business applications — built for how the work actually runs',
      'Workflow, approval and document automation',
      'ERP and system integration, and the data flows between them',
      'Rollout, training and adoption',
    ],
    hsl: 'hsl(var(--accent-blue))',
    link: '/operational-transformation',
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'AI, Applied',
    desc: 'Used where it earns its place, with a record of what it did.',
    body: 'AI is good at reading messy documents and searching content nobody has time to search. It is unreliable at anything that must be exactly right every time — unless you design for that. We put a person in front of anything that posts, pays or commits.',
    points: [
      'Document and invoice extraction into the ERP, with human approval',
      'Search and question-answering over internal documents and data',
      'Scoped, read-only access by default, with audit trails',
      'AI usage and governance policy',
      'Hands-on training so the team actually uses it',
    ],
    hsl: 'hsl(var(--secondary))',
    link: '/services',
  },
];

const ValuePillarsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="pillars">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        What We Do
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Three services, in this order
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[620px] mb-12">
        Reporting that holds up. The process behind it, fixed — then the applications and automation that run it. And AI only where it earns its place.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {pillars.map((p, i) => (
        <StaggerItem key={i}>
          <Link
            to={p.link}
            className="flex flex-col bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-8px_hsl(261_84%_58%/0.15)] hover:border-primary/30 transition-all duration-300 ease-out group h-full no-underline relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                style={{ backgroundColor: `${p.hsl}15`, color: p.hsl }}
              >
                <p.icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-muted-foreground/60">{p.num}</span>
            </div>
            <h3 className="text-base font-semibold mb-1.5 text-foreground">{p.title}</h3>
            <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-2.5">{p.desc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.body}</p>
            <ul className="space-y-1.5 mb-5">
              {p.points.map((pt, j) => (
                <li key={j} className="text-[13px] text-muted-foreground leading-snug flex gap-2">
                  <span aria-hidden className="text-primary/50 shrink-0">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
              Learn more <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ValuePillarsSection;
