import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const proofs = [
  {
    sector: 'Financial Services',
    metric: '~60%',
    desc: 'reduction in manual processing',
    detail: 'Fragmented systems replaced with a single servicing platform. Daily reconciliation tasks eliminated. Real-time portfolio visibility enabled.',
    bg: 'bg-gradient-to-br from-primary to-primary/80',
  },
  {
    sector: 'Non-Profit',
    metric: '100%',
    desc: 'programme visibility',
    detail: 'Siloed programmes unified under a single CRM. Compliance tracking structured across the organisation. Reporting centralised.',
    bg: 'bg-gradient-to-br from-electric-bright to-primary',
  },
  {
    sector: 'Financial Reporting',
    metric: 'Days → Min',
    desc: 'reporting turnaround',
    detail: 'Manual data extraction and reconciliation replaced with automated pipelines. Real-time dashboards delivering consistent, accurate insights.',
    bg: 'bg-gradient-to-br from-ordinal-green to-[#059669]',
  },
];

const ProofSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="results">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Proof Points
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        Real Results. Measured.
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        Three engagements. Three sectors. Every outcome grounded in operational reality.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {proofs.map((p, i) => (
        <StaggerItem key={i}>
          <div className={`${p.bg} rounded-lg p-8 text-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
            <div className="text-[9px] tracking-[2px] uppercase opacity-60 mb-3">{p.sector}</div>
            <div className="text-5xl font-bold leading-none mb-1">{p.metric}</div>
            <div className="text-base font-semibold opacity-90 mb-3">{p.desc}</div>
            <div className="text-[13px] leading-relaxed opacity-65">{p.detail}</div>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ProofSection;
