import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { XCircle, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

const beforeItems = [
  'Disconnected systems and spreadsheets',
  'Manual processes and duplicated work',
  'Limited visibility and delayed reporting',
  'High operational overhead',
];

const afterItems = [
  'Centralised, integrated systems',
  'Automated workflows and processes',
  'Real-time dashboards and insights',
  'Scalable, efficient operations',
];

const BeforeAfterCards = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Transformation
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-12">
        From complexity to clarity
      </h2>
    </AnimatedSection>

    <div className="relative mb-10">
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
          <ArrowRight size={20} />
        </div>
      </div>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StaggerItem>
          <div className="bg-muted/40 border border-border rounded-xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_rgba(0,0,0,0.1)] hover:border-border/80">
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="text-destructive" size={22} />
              <h3 className="text-xl font-semibold">Before</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-ordinal-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>

        <div className="flex md:hidden justify-center -my-1">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
            <ArrowDown size={20} />
          </div>
        </div>

        <StaggerItem>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/40">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="text-ordinal-green" size={22} />
              <h3 className="text-xl font-semibold">After</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-ordinal-green flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm text-ordinal-body leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </StaggerChildren>
    </div>

    <AnimatedSection className="text-center">
      <p className="text-base text-ordinal-body leading-relaxed">
        We transform fragmented operations into streamlined, scalable systems.
      </p>
    </AnimatedSection>
  </section>
);

export default BeforeAfterCards;
