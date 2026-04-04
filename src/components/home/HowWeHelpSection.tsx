import { Monitor, Users, BarChart3, Zap } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const solutions = [
  { icon: Monitor, title: 'Custom Applications', desc: 'We build systems that replace spreadsheets and manual workflows.', color: 'bg-primary', hsl: 'hsl(var(--primary))' },
  { icon: Users, title: 'CRM & Workflows', desc: 'Manage operations, approvals, and compliance in one unified system.', color: 'bg-ordinal-cyan', hsl: 'hsl(var(--ordinal-cyan))' },
  { icon: BarChart3, title: 'Data & Reporting', desc: 'Real-time dashboards and reporting using Power BI and SQL.', color: 'bg-electric-bright', hsl: 'hsl(var(--electric-bright))' },
  { icon: Zap, title: 'Automation & Integration', desc: 'Connect systems and automate processes using APIs and AI.', color: 'bg-ordinal-green', hsl: 'hsl(var(--ordinal-green))' },
];

const HowWeHelpSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="solutions">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        How We Help
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-12">
        Technology that fits your operations
      </h2>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {solutions.map((s, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-ordinal-faint transition-all h-full">
            <div className={`absolute top-0 left-0 w-full h-[2px] ${s.color}`} />
            <s.icon size={28} className="text-muted-foreground mb-4" />
            <h3 className="text-base font-semibold mb-1.5">{s.title}</h3>
            <p className="text-sm text-ordinal-body leading-relaxed">{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default HowWeHelpSection;
