import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { caseStudies } from '@/data/caseStudies';

const SelectedWorkSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="work">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Selected Work
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-12">
        Engagements that delivered
      </h2>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {caseStudies.slice(0, 3).map((cs) => (
        <StaggerItem key={cs.id}>
          <Link
            to={`/case-studies/${cs.id}`}
            className="block bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 h-full no-underline group"
          >
            <div className="text-[10px] font-medium tracking-[2px] uppercase text-primary mb-2">
              {cs.sector}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4">
              {cs.keyResult}
            </div>
            <ul className="space-y-3 mb-5">
              {cs.metrics.map((m) => (
                <li key={m.label} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">{m.label}:</span> {m.after}</span>
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              View case study <ArrowRight size={14} />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default SelectedWorkSection;
