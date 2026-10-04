import { MessageSquare, Eye, TrendingUp, Repeat, FileWarning, Unplug, type LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const problems: { icon: LucideIcon; title: string; desc: string; color: string; iconColor: string }[] = [
  { icon: MessageSquare, title: 'The WhatsApp Organisation', desc: "Decisions, approvals and critical updates flowing through chat groups, with no structure and no record of who agreed to what.", color: 'bg-electric-bright', iconColor: 'hsl(var(--electric-bright))' },
  { icon: Eye, title: 'The Invisible Queue', desc: "Work piles up at one point and nobody sees it until it is a crisis. Requests sit in an inbox for days because no system is tracking them.", color: 'bg-primary', iconColor: 'hsl(var(--primary))' },
  { icon: Unplug, title: 'Systems That Don\'t Talk', desc: "The ERP, the CRM and the spreadsheet each hold part of the answer, and a person is the integration layer between them.", color: 'bg-ordinal-cyan', iconColor: 'hsl(var(--ordinal-cyan))' },
  { icon: FileWarning, title: 'Approval by Email', desc: "A purchase, a discount or an invoice gets approved in a thread. Three months later nobody can reconstruct who authorised it, or when.", color: 'bg-ordinal-pink', iconColor: 'hsl(var(--ordinal-pink))' },
  { icon: Repeat, title: 'The Same Work, Every Month', desc: "A report, a reconciliation or a file transfer that somebody rebuilds by hand on the same day of every month, because it was never automated.", color: 'bg-ordinal-amber', iconColor: 'hsl(var(--ordinal-amber))' },
  { icon: TrendingUp, title: 'Growth by Headcount', desc: "Every new client means more admin. You are scaling the work linearly when the work itself should be doing more of it.", color: 'bg-ordinal-green', iconColor: 'hsl(var(--ordinal-green))' },
];

const ProcessProblemsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="problems">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Sound Familiar?
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Six places the work gets stuck
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[580px] mb-12">
        None of these need a bigger team. They need the path the work takes to be defined, and then a
        system built around that path rather than around the workaround.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default ProcessProblemsSection;
