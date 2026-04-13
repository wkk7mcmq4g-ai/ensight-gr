import { ArrowRight } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';

const engagements = [
  {
    tag: 'Recommended',
    title: 'Operational X-Ray',
    meta: '1–2 weeks · Fixed fee',
    desc: "We embed with your team, map real workflows, quantify bottleneck costs, and deliver a prioritised roadmap. Standalone value even if you don't proceed further.",
    showTag: true,
  },
  {
    tag: '',
    title: 'Quick Win',
    meta: '4–6 weeks · Outcome-linked',
    desc: "One high-impact problem solved. Proof before commitment. We're willing to tie our fee to the measurable outcome.",
    showTag: false,
  },
  {
    tag: '',
    title: 'Full Transformation',
    meta: '10–24 weeks · Scoped from X-Ray',
    desc: 'All four framework stages. End-to-end accountability from diagnosis to adopted, working solution. Scoped collaboratively from X-Ray findings.',
    showTag: false,
  },
];

const EngageSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative overflow-hidden" id="start">
    <DecorativeShapes variant="starburst" className="opacity-[0.06]" />
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Three Ways to Start
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Low risk. High trust.
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[560px] mb-12">
        We know that committing to a transformation with a new partner involves risk. That{"'"}s why we designed our model to be low-risk from the start.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {engagements.map((e, i) => (
        <StaggerItem key={i}>
          <div className={`${e.showTag ? 'bg-primary/5 backdrop-blur-xl' : 'bg-white/75 backdrop-blur-xl'} border border-border/60 rounded-lg p-8 relative overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 h-full flex flex-col group`}>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
            {e.showTag && (
              <div className="inline-block text-[8px] font-semibold tracking-[2px] uppercase bg-gradient-to-r from-primary to-accent-blue text-white px-2.5 py-1 rounded mb-4">
                {e.tag}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
            <div className="text-[11px] text-muted-foreground mb-4">{e.meta}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default EngageSection;