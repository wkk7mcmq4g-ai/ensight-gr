import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';

const engagements = [
  {
    title: 'Two-week review',
    meta: '2 weeks · Fixed fee',
    desc: 'I map how the work flows and what state the data is in. You get a straight answer on what your numbers can support today and what to fix first. The findings are yours whether or not we go further.',
    recommended: true,
  },
  {
    title: 'One problem, solved',
    meta: '4–6 weeks · Fee can be tied to the result',
    desc: 'Pick the question you cannot answer, or the task that costs the most time. I solve that one first, and I am willing to tie the fee to the measured result.',
    recommended: false,
  },
  {
    title: 'Monthly advisory',
    meta: 'Ongoing · Retainer',
    desc: 'One prepared meeting a month on what the numbers say and what to do about it, with oversight of whoever builds and maintains your reporting.',
    recommended: false,
  },
];

const EngageSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative overflow-hidden" id="start">
    <DecorativeShapes variant="starburst" className="opacity-[0.06]" />
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Getting Started
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Three ways to start
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[560px] mb-12">
        Larger programmes are scoped from the review.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {engagements.map((e, i) => (
        <StaggerItem key={i}>
          <div className={`${e.recommended ? 'bg-primary/5 backdrop-blur-xl' : 'bg-white/75 backdrop-blur-xl'} border border-border/60 rounded-lg p-8 relative overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 h-full flex flex-col group`}>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
            {e.recommended && (
              <div className="self-start text-[8px] font-semibold tracking-[2px] uppercase bg-gradient-to-r from-primary to-accent-blue text-white px-2.5 py-1 rounded mb-4">
                Recommended
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
