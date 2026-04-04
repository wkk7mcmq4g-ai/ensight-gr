import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const steps = [
  { num: '01', title: 'Diagnose', time: '1–2 WEEKS', desc: 'Embed with your team. Map how work actually flows. Quantify the cost of every bottleneck. Deliver the Operational X-Ray.', color: 'text-primary' },
  { num: '02', title: 'Redesign', time: '1–2 WEEKS', desc: 'Fix the process before digitising it. Simplify. Remove waste. Clarify ownership. No technology yet.', color: 'text-ordinal-cyan' },
  { num: '03', title: 'Build', time: '4–12 WEEKS', desc: "Now we implement. Custom platforms, automation, integrations — built around your redesigned processes.", color: 'text-electric-bright' },
  { num: '04', title: 'Embed', time: '4–8 WEEKS', desc: "We stay. Monitor adoption. Manage resistance. Train your team. We don't leave until it's working.", color: 'text-ordinal-green' },
];

const barColors = ['bg-primary', 'bg-ordinal-cyan', 'bg-electric-bright', 'bg-ordinal-green'];

const FrameworkSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="method">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Our Method
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        The Operational Clarity Framework
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        Four stages. Process first, technology second. We never touch a platform until we understand — and have redesigned — the operation it{"'"}s meant to support.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full">
            <div className={`absolute top-0 left-0 w-full h-[2px] ${barColors[i]}`} />
            <div className="text-xs font-semibold text-ordinal-dim mb-3">{s.num}</div>
            <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
            <div className={`text-[10px] font-medium mb-3 ${s.color}`}>{s.time}</div>
            <p className="text-sm text-ordinal-body leading-relaxed">{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default FrameworkSection;
