import { GitCompare, Percent, CalendarClock, ClipboardCopy, type LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const problems: { icon: LucideIcon; title: string; desc: string; color: string; iconColor: string }[] = [
  { icon: GitCompare, title: 'Two versions of the truth', desc: "The same metric arrives at two different numbers depending on who built the report. The meeting opens by deciding which one to believe.", color: 'bg-electric-bright', iconColor: 'hsl(var(--electric-bright))' },
  { icon: Percent, title: 'Revenue without margin', desc: "You know exactly what you sold. You do not know what it cost to make it, move it and serve the customer who bought it, so price is set on instinct.", color: 'bg-primary', iconColor: 'hsl(var(--primary))' },
  { icon: CalendarClock, title: 'The month-end scramble', desc: "The pack takes days to assemble, and it depends on one person remembering how each figure is put together.", color: 'bg-ordinal-amber', iconColor: 'hsl(var(--ordinal-amber))' },
  { icon: ClipboardCopy, title: 'The copy-paste economy', desc: "Staff move data between systems by hand. Every gap between two systems is a place the numbers can drift.", color: 'bg-ordinal-pink', iconColor: 'hsl(var(--ordinal-pink))' },
];

const ProblemsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="problems">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Sound Familiar?
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Four signs the numbers don't hold
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        Each of these has a cause you can find and fix. It is usually a workaround that became permanent.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {problems.map((p, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-ordinal-faint transition-all group h-full">
            <div className={`absolute top-0 left-0 w-full h-[2px] ${p.color}`} />
            <div
              className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${p.iconColor}15`, color: p.iconColor }}
            >
              <p.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-bold mb-1.5">{p.title}</h3>
            <p className="text-sm text-ordinal-body leading-relaxed">{p.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ProblemsSection;
