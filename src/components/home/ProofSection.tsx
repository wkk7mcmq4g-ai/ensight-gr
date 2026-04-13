import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const proofs = [
  {
    sector: 'Financial Services',
    metric: '~60%',
    desc: 'reduction in manual processing',
    detail: 'Fragmented systems replaced with a single servicing platform. Daily reconciliation tasks eliminated. Real-time portfolio visibility enabled.',
  },
  {
    sector: 'Non-Profit',
    metric: '100%',
    desc: 'programme visibility',
    detail: 'Siloed programmes unified under a single CRM. Compliance tracking structured across the organisation. Reporting centralised.',
  },
  {
    sector: 'Financial Reporting',
    metric: 'Days → Min',
    desc: 'reporting turnaround',
    detail: 'Manual data extraction and reconciliation replaced with automated pipelines. Real-time dashboards delivering consistent, accurate insights.',
  },
];

const ProofSection = () => (
  <section className="bg-dark-section py-24" id="results">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-accent-cyan mb-3">
          Proof Points
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4 text-white">
          Real Results. Measured.
        </h2>
        <p className="text-base text-white/70 leading-relaxed max-w-[560px] mb-12">
          Three engagements. Three sectors. Every outcome grounded in operational reality.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {proofs.map((p, i) => (
          <StaggerItem key={i}>
            <div className="bg-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
              <div className="text-[9px] tracking-[2px] uppercase text-white/60 mb-3">{p.sector}</div>
              <div className="text-5xl font-bold leading-none mb-1 text-accent-cyan">
                {p.metric}
              </div>
              <div className="text-base font-semibold text-white mb-3">{p.desc}</div>
              <div className="text-[13px] leading-relaxed text-white/70">{p.detail}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  </section>
);

export default ProofSection;
