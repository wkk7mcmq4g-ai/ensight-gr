import { ArrowRight } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const engagements = [
  {
    tag: 'Recommended',
    title: 'Operational X-Ray',
    meta: '1–2 weeks · Fixed fee',
    desc: "We embed with your team, map real workflows, quantify bottleneck costs, and deliver a prioritised roadmap. Standalone value even if you don't proceed further.",
    barColor: 'bg-primary',
    showTag: true,
  },
  {
    tag: '',
    title: 'Quick Win',
    meta: '4–6 weeks · Outcome-linked',
    desc: "One high-impact problem solved. Proof before commitment. We're willing to tie our fee to the measurable outcome.",
    barColor: 'bg-ordinal-green',
    showTag: false,
  },
  {
    tag: '',
    title: 'Full Transformation',
    meta: '10–24 weeks · Scoped from X-Ray',
    desc: 'All four framework stages. End-to-end accountability from diagnosis to adopted, working solution. Scoped collaboratively from X-Ray findings.',
    barColor: 'bg-ordinal-cyan',
    showTag: false,
  },
];

const EngageSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="start">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Three Ways to Start
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Low risk. High trust.
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        We know that committing to a transformation with a new partner involves risk. That{"'"}s why we designed our model to be low-risk from the start.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {engagements.map((e, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-8 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full flex flex-col">
            <div className={`absolute top-0 left-0 w-full h-[3px] ${e.barColor}`} />
            {e.showTag && (
              <div className="inline-block font-mono-label text-[8px] font-semibold tracking-[2px] uppercase bg-primary text-white px-2.5 py-1 rounded-md mb-4">
                {e.tag}
              </div>
            )}
            <h3 className="text-xl font-extrabold mb-2">{e.title}</h3>
            <div className="font-mono-label text-[11px] text-ordinal-dim mb-4">{e.meta}</div>
            <p className="text-sm text-ordinal-body leading-relaxed">{e.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default EngageSection;
