import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const proofs = [
  {
    sector: 'Consumer Goods',
    metric: 'Per product',
    desc: 'and per customer, costed',
    detail: 'Landed cost calculated from purchase through to goods received, then production and distribution activity allocated to products and customers. Pricing decisions moved from revenue to margin — including third-party goods, where the margin is thinnest.',
  },
  {
    sector: 'Institutional Real Estate',
    metric: 'One number',
    desc: 'per metric, agreed and traceable',
    detail: 'Portfolio, loan, finance and spend systems consolidated behind definitions the business agreed, with lineage preserved to source. The investment committee stopped reconciling the pack and started interrogating it.',
  },
  {
    sector: 'Financial Services',
    metric: 'Full lifecycle',
    desc: 'visible in one place',
    detail: 'A servicing operation spread across spreadsheets and email brought into one system, so portfolio position could be read at any moment instead of assembled on request.',
  },
];

const ProofSection = () => (
  <section className="bg-dark-section py-24" id="results">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          Proof Points
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4 text-white">
          What clients can now see
        </h2>
        <p className="text-base text-white/70 leading-relaxed max-w-[560px] mb-12">
          Three engagements. The test is not how much time was saved — it is whether the management team can answer a question they could not answer before.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {proofs.map((p, i) => (
          <StaggerItem key={i}>
            <div className="bg-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
              <div className="text-[9px] tracking-[2px] uppercase text-white/60 mb-3">{p.sector}</div>
              <div className="text-5xl font-bold leading-none mb-1 text-primary">
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