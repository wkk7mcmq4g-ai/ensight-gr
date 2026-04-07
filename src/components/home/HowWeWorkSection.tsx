import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';

const steps = [
  { num: '01', title: 'Discover', desc: 'We analyse your current processes, systems, and pain points to identify inefficiencies and opportunities.', color: 'border-primary text-primary' },
  { num: '02', title: 'Design', desc: 'We design a tailored solution aligned to your business workflows, data, and operational needs.', color: 'border-ordinal-cyan text-ordinal-cyan' },
  { num: '03', title: 'Build', desc: 'We develop and implement the system, integrating with your existing tools where required.', color: 'border-electric-bright text-electric-bright' },
  { num: '04', title: 'Deliver', desc: 'We deploy, train users, and ensure the solution is fully adopted and delivering value.', color: 'border-ordinal-green text-ordinal-green' },
];

const HowWeWorkSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative overflow-hidden" id="how-we-work">
    <DecorativeShapes variant="starburst" className="opacity-[0.05]" />
    <AnimatedSection>
      <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        {"// How We Work"}
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-2">
        How we work
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-16">
        A structured approach from problem to solution
      </p>
    </AnimatedSection>

    <StaggerChildren className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
      {/* Connecting line – desktop only */}
      <div className="hidden md:block absolute top-[28px] left-[calc(12.5%+14px)] right-[calc(12.5%+14px)] h-px bg-border" />

      {steps.map((s, i) => (
        <StaggerItem key={i} className="relative text-center">
          <div className={`w-14 h-14 rounded-full border-2 ${s.color} flex items-center justify-center mx-auto mb-5 bg-background relative z-10`}>
            <span className="font-mono-label text-xs font-bold">{s.num}</span>
          </div>
          <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
          <p className="text-sm text-ordinal-body leading-relaxed max-w-[240px] mx-auto">{s.desc}</p>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default HowWeWorkSection;
