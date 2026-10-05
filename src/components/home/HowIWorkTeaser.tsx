import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const HowIWorkTeaser = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16" id="how-i-work">
    <AnimatedSection>
      <div className="bg-gradient-to-br from-primary/5 to-accent-blue/5 border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue rounded-t-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
              How I Work
            </div>
            <h2 className="text-[clamp(22px,3.5vw,34px)] font-semibold tracking-tight leading-[1.15] mb-4">
              I fix the flow before I build on it
            </h2>
            <p className="text-base text-ordinal-body leading-relaxed mb-5">
              Automating a workaround makes it permanent. A costing model built on unreliable postings gives a precise wrong answer. So I look at how the work moves first, and build second.
            </p>
            <Link
              to="/how-i-work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all no-underline"
            >
              How I work <ArrowRight size={14} />
            </Link>
          </div>
          <div className="bg-card border border-border rounded-xl px-7 py-6">
            <div className="flex items-center gap-2.5 mb-3">
              <ShieldCheck className="text-primary shrink-0" size={20} />
              <div className="text-sm font-semibold text-foreground">The Before You Automate guarantee</div>
            </div>
            <p className="text-[15px] text-foreground leading-relaxed">
              If I recommend technology without first analysing and redesigning the process it supports,{' '}
              <span className="text-primary font-bold">the implementation is free.</span>
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default HowIWorkTeaser;
