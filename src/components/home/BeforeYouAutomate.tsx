import AnimatedSection from './AnimatedSection';
import { ShieldCheck } from 'lucide-react';

const BeforeYouAutomate = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
    <AnimatedSection>
      <div className="bg-gradient-to-br from-primary/5 to-accent-blue/5 border border-primary/20 rounded-2xl p-10 md:p-14 relative overflow-hidden">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue rounded-t-2xl" />

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <ShieldCheck className="text-primary" size={28} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
              Our Guarantee
            </div>
            <h2 className="text-[clamp(22px,3.5vw,34px)] font-semibold tracking-tight leading-[1.15] mb-4">
              The "Before You Automate" Guarantee
            </h2>
            <p className="text-base text-ordinal-body leading-relaxed mb-5 max-w-[640px]">
              We will never recommend a technology solution until the underlying process has been analysed and redesigned. This is not a philosophy — it has financial teeth.
            </p>
            <div className="bg-card border border-border rounded-xl px-7 py-5 mb-6 max-w-[640px]">
              <p className="text-[15px] text-foreground leading-relaxed font-medium">
                If we ever recommend a technology solution without first completing a process analysis and redesign,{' '}
                <span className="text-primary font-bold">the implementation is on us at no charge.</span>
              </p>
            </div>
            <p className="text-sm text-ordinal-dim leading-relaxed max-w-[560px]">
              In a market full of vendors selling solutions before understanding problems, this is our commitment. If you come to us asking for a CRM, we won't start building a CRM — we'll start by understanding what your client management process actually looks like. Process first. Technology second. Always.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default BeforeYouAutomate;
