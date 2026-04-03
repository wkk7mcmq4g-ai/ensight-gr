import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const proofs = [
  {
    sector: 'Tourism Operations',
    metric: '92%',
    desc: 'reduction in scheduling time',
    detail: 'From 3 hours to 15 minutes daily. Double-bookings eliminated. Single-person dependency removed. Ops manager redirected to client relationships.',
    bg: 'bg-gradient-to-br from-[#6A30BF] to-[#3D1A78]',
  },
  {
    sector: 'Financial Services',
    metric: '60%',
    desc: 'faster client onboarding',
    detail: 'Department designed from scratch with clean processes. Zero inherited process debt from day one. Operational architecture before hiring.',
    bg: 'bg-gradient-to-br from-electric-bright to-[#6A30BF]',
  },
  {
    sector: 'Manufacturing / Export',
    metric: '100%',
    desc: 'value chain visibility',
    detail: 'Full operational design from quarry to Chinese retail. 36-month phased entry strategy. Repeatable partner onboarding process.',
    bg: 'bg-gradient-to-br from-ordinal-green to-[#059669]',
  },
];

const ProofSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="results">
    <AnimatedSection>
      <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        // Proof Points
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-4">
        Real Results. Not Hypothetical.
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        Three sectors. Three transformations. Every metric measured from a quantified baseline.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {proofs.map((p, i) => (
        <StaggerItem key={i}>
          <div className={`${p.bg} rounded-lg p-8 text-white h-full`}>
            <div className="font-mono-label text-[9px] tracking-[2px] uppercase opacity-60 mb-3">{p.sector}</div>
            <div className="text-5xl font-black leading-none mb-1">{p.metric}</div>
            <div className="text-base font-semibold opacity-90 mb-3">{p.desc}</div>
            <div className="text-[13px] leading-relaxed opacity-65">{p.detail}</div>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ProofSection;
