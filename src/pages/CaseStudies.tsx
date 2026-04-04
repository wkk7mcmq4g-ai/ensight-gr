import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import DecorativeShapes from '@/components/DecorativeShapes';

const CaseStudies = () => (
  <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20 relative">
    <DecorativeShapes variant="minimal" />
    <AnimatedSection className="text-center mb-14">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
        <span className="w-[6px] h-[6px] bg-primary rounded-full" />
        Case Studies
      </div>
      <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-tight mb-5">
        Real Results,{' '}
        <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
          Measured in Weeks
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[560px] mx-auto">
        See how we've helped organisations uncover hidden capacity and eliminate process debt across industries.
      </p>
    </AnimatedSection>

    <StaggerChildren className="space-y-5">
      {caseStudies.map((cs) => (
        <StaggerItem key={cs.id}>
          <Link
            to={`/case-studies/${cs.id}`}
            className="block bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-200 group no-underline"
          >
            <div className="font-mono-label text-[10px] font-medium text-electric-glow tracking-[2px] uppercase mb-3">
              {cs.sector}
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-electric-glow transition-colors">{cs.title}</h2>
            <p className="text-[15px] text-ordinal-body leading-relaxed mb-4">{cs.subtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {cs.metrics.slice(0, 4).map((m) => (
                <div key={m.label} className="bg-background/50 border border-border/50 rounded-lg p-3">
                  <div className="font-mono-label text-[10px] text-ordinal-dim tracking-[1px] uppercase mb-1">
                    {m.label}
                  </div>
                  <div className="text-sm font-bold text-ordinal-green">{m.after}</div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric-glow group-hover:gap-3 transition-all">
              Read full case study <ArrowRight size={14} />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </div>
);

export default CaseStudies;
