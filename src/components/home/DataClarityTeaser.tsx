import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const DataClarityTeaser = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="data-clarity">
    <AnimatedSection>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-[560px]">
          <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-ordinal-cyan mb-3">
            {"// Standalone Tool"}
          </div>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold tracking-tight leading-[1.15] mb-4">
            Data Clarity Score
          </h2>
          <p className="text-base text-ordinal-body leading-relaxed mb-6">
            Not sure if your data is ready for AI, automation, or better reporting? Take our free Data Clarity assessment and get a personalised score with actionable recommendations.
          </p>
          <Link
            to="/data-clarity"
            className="inline-flex items-center gap-2 font-mono-label text-[11px] font-medium tracking-[1px] text-primary-foreground bg-primary px-6 py-3 rounded-[10px] shadow-sm hover:bg-primary/90 hover:-translate-y-px transition-all no-underline"
          >
            Explore Data Clarity
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default DataClarityTeaser;
