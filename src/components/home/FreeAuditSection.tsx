import AnimatedSection from './AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const deliverables = [
  'A breakdown of key inefficiencies',
  'Identified automation opportunities',
  'Recommendations for system improvements',
  'A high-level solution approach',
];

const FreeAuditSection = () => (
  <section className="bg-muted/30">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection className="max-w-[680px] mx-auto text-center">
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"// Free Audit"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-3">
          Free Operational Audit
        </h2>
        <p className="text-lg text-ordinal-body leading-relaxed mb-8">
          Identify inefficiencies and opportunities in your business
        </p>
        <p className="text-sm text-ordinal-body leading-relaxed mb-10">
          We offer a complimentary operational audit where we review your current systems, workflows, and reporting processes. You'll receive:
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="max-w-[480px] mx-auto mb-12">
        <ul className="space-y-4">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="text-ordinal-green flex-shrink-0 mt-0.5" size={18} />
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.25} className="text-center">
        <a
          href="mailto:hello@ensight.gr?subject=Free Operational Audit"
          className="inline-block bg-primary text-primary-foreground text-base font-bold px-9 py-4 rounded-xl shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl transition-all no-underline"
        >
          Request Free Audit
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default FreeAuditSection;
