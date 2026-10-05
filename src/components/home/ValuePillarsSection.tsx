import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { ArrowRight, BarChart3, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    num: '01',
    icon: BarChart3,
    title: 'Know your numbers',
    desc: 'Costing, margin and management reporting you can defend.',
    body: "You get one agreed definition for every figure, and margin by product, customer and channel. The month-end pack assembles itself instead of depending on one person's memory.",
    points: [
      'What each product costs, landed and made',
      'What each customer earns after delivery, rebates and payment terms',
      'One definition per metric, traceable to its source',
      'Reporting fed directly from the ERP, with no manual assembly',
    ],
    hsl: 'hsl(var(--primary))',
    link: '/data-clarity',
    linkLabel: 'Costing & Reporting',
  },
  {
    num: '02',
    icon: Workflow,
    title: 'Take the manual work out',
    desc: 'AI and automation for the work people do between systems.',
    body: 'Documents are read and routed instead of retyped. Approvals leave a record. Managers ask questions of live data in plain language. A person still approves anything that posts, pays or commits.',
    points: [
      'Supplier invoices read, checked and sent to the right approver',
      'Approvals and workflows with a record of who agreed to what',
      'Plain-language questions answered from your own finance data',
      'Monthly reports and reconciliations that run without being rebuilt by hand',
    ],
    hsl: 'hsl(var(--accent-blue))',
    link: '/ai-automation',
    linkLabel: 'AI & Automation',
  },
];

const ValuePillarsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="pillars">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Services
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-12">
        What I do
      </h2>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pillars.map((p, i) => (
        <StaggerItem key={i}>
          <Link
            to={p.link}
            className="flex flex-col bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_-8px_hsl(261_84%_58%/0.15)] hover:border-primary/30 transition-all duration-300 ease-out group h-full no-underline relative overflow-hidden"
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
            <h3 className="text-xl font-semibold mb-1.5 text-foreground">{p.title}</h3>
            <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-2.5">{p.desc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.body}</p>
            <ul className="space-y-1.5 mb-6">
              {p.points.map((pt, j) => (
                <li key={j} className="text-[13px] text-muted-foreground leading-snug flex gap-2">
                  <span aria-hidden className="text-primary/50 shrink-0">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
              {p.linkLabel} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ValuePillarsSection;
