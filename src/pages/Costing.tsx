import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '@/components/home/AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { ENQUIRY_HREF } from '@/lib/contact';

const layers = [
  {
    num: '01',
    title: 'Landed cost',
    question: 'What did it cost to get here?',
    body: 'Purchase price is the part everyone has. The rest — freight, duty, insurance, handling, the credit note three weeks later, the FX difference on an import — sits in different documents and usually lands in a general expense account. Bringing the relevant costs back to the item makes the margin more complete.',
    trap: 'Averaging freight across a whole shipment hides the items that are expensive to move.',
  },
  {
    num: '02',
    title: 'Activity cost',
    question: 'What did it cost to make and handle?',
    body: 'Production, picking, packing, quality, storage. Traditional costing spreads these across volume, which quietly subsidises the difficult products with the easy ones. Activity-based costing asks what actually drives each cost — setups, not units; order lines, not revenue; pallet days, not sales value — and allocates on that.',
    trap: 'A low-volume product with frequent changeovers can consume more of the plant than its volume suggests .',
  },
  {
    num: '03',
    title: 'Cost to serve',
    question: 'What did it cost to sell and deliver?',
    body: 'Two customers buying identical volumes at identical prices can earn very different margins. One orders monthly in full pallets; the other orders twice a week in mixed cases, to three sites, with returns. Delivery, order processing, rebates and payment terms belong to the customer, not the product.',
    trap: 'Cost to serve is where the surprises are. It is worth checking whether your current reporting includes it.',
  },
];

const example = [
  { label: 'List price', a: '€10.00', b: '€10.00', note: 'Identical on paper' },
  { label: 'Landed cost of goods', a: '€6.20', b: '€6.20', note: 'Same product' },
  { label: 'Gross margin as reported', a: '€3.80', b: '€3.80', note: 'Where most reporting stops' },
  { label: 'Order handling', a: '€0.15', b: '€0.70', note: 'Monthly pallets vs twice-weekly mixed cases' },
  { label: 'Delivery', a: '€0.30', b: '€1.10', note: 'One site vs three' },
  { label: 'Returns and credits', a: '€0.05', b: '€0.45', note: 'Short shelf life on small drops' },
  { label: 'Rebate allowance', a: '€0.15', b: '€0.65', note: 'Illustrative commercial terms' },
  { label: 'Payment-term financing allowance', a: '€0.05', b: '€0.30', note: 'Illustrative cost of funding receivables' },
];

const Costing = () => (
  <>
    <SEO
      title="What a Product Actually Costs · Ensight"
      description="How landed cost, activity cost and cost to serve build a clearer view of product and customer margins."
      path="/costing"
      ogImage="/og/services.jpg"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What a product actually costs',
        description:
          'How landed cost, activity cost and cost to serve build a clearer view of product and customer margins.',
        author: { '@type': 'Person', name: 'George Kondylis' },
        publisher: { '@type': 'Organization', name: 'Ensight' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pt-28 pb-12 relative overflow-hidden">
      <DecorativeShapes variant="grid" />
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">Worked example · George Kondylis</div>
      <h1 className="text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.1] mb-5">
        What a product{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          actually costs
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed">
        Purchase costs are only part of the picture. Production, handling, delivery and customer terms can change
        the margin you keep. Your ERP may hold much of this data; the work is bringing it together with an agreed
        costing model. This example shows how that changes a pricing decision.
      </p>
    </section>

    <div className="h-px bg-border max-w-[900px] mx-auto" />

    {/* Why the ERP can't answer it */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
      <AnimatedSection>
        <h2 className="text-[clamp(24px,3.5vw,32px)] font-semibold tracking-tight leading-[1.2] mb-5">
          Where the costing model matters
        </h2>
        <div className="text-[15px] text-ordinal-body leading-relaxed space-y-4 max-w-[680px]">
          <p>
            Your ERP records transactions and may already support detailed costing. The question is whether its configuration and reporting reflect the costs you need to understand: volume, order count, production changeovers and customer service requirements.
          </p>
          <p>
            A report based on revenue less cost of goods can omit delivery, handling and customer terms. Where overheads are allocated only by volume, the model may miss differences in how products and customers use resources. The right approach starts by checking what your existing system already supports.
          </p>
        </div>
      </AnimatedSection>
    </section>

    {/* Three layers */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
      <AnimatedSection>
        <h2 className="text-[clamp(24px,3.5vw,32px)] font-semibold tracking-tight leading-[1.2] mb-3">
          Three layers, built in order
        </h2>
        <p className="text-[15px] text-ordinal-body leading-relaxed mb-10 max-w-[680px]">
          Start with reliable product costs, then add the activities and customer costs that matter to your decisions. Document the assumptions at each step.
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-4">
        {layers.map((l, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-lg p-7 md:p-8">
              <div className="flex items-baseline gap-3 mb-1.5">
                <span className="text-[11px] font-mono tracking-widest text-ordinal-dim">{l.num}</span>
                <h3 className="text-xl font-semibold">{l.title}</h3>
              </div>
              <p className="text-sm font-medium text-primary mb-3">{l.question}</p>
              <p className="text-[15px] text-ordinal-body leading-relaxed mb-4">{l.body}</p>
              <div className="flex gap-2.5 items-start bg-muted rounded-lg px-4 py-3">
                <AlertTriangle size={15} className="text-ordinal-dim shrink-0 mt-0.5" />
                <p className="text-[13px] text-ordinal-body leading-relaxed">{l.trap}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Worked example */}
    <section className="bg-dark-section py-20">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">Illustrative</div>
          <h2 className="text-[clamp(24px,3.5vw,32px)] font-semibold tracking-tight leading-[1.2] mb-4 text-white">
            Same product, same price, two customers
          </h2>
          <p className="text-[15px] text-white/70 leading-relaxed mb-8 max-w-[640px]">
            These illustrative amounts are per unit, not client results. The final row shows margin after the listed costs, before remaining overheads; it is not net profit. Rebate and financing allowances are shown separately.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-[11px] tracking-[1.5px] uppercase text-white/50 font-medium pb-3" />
                  <th className="text-right text-[11px] tracking-[1.5px] uppercase text-white/70 font-medium pb-3 px-3">
                    Customer A
                  </th>
                  <th className="text-right text-[11px] tracking-[1.5px] uppercase text-white/70 font-medium pb-3 px-3">
                    Customer B
                  </th>
                  <th className="text-left text-[11px] tracking-[1.5px] uppercase text-white/50 font-medium pb-3 pl-5 hidden md:table-cell">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {example.map((r, i) => {
                  const headline = r.label === 'Gross margin as reported';
                  return (
                    <tr
                      key={i}
                      className={`border-b border-white/10 ${headline ? 'bg-white/[0.06]' : ''}`}
                    >
                      <td className={`py-3 text-sm ${headline ? 'text-white font-semibold' : 'text-white/80'}`}>
                        {r.label}
                      </td>
                      <td className={`py-3 px-3 text-sm text-right tabular-nums ${headline ? 'text-white font-semibold' : 'text-white/80'}`}>
                        {r.a}
                      </td>
                      <td className={`py-3 px-3 text-sm text-right tabular-nums ${headline ? 'text-white font-semibold' : 'text-white/80'}`}>
                        {r.b}
                      </td>
                      <td className="py-3 pl-5 text-[13px] text-white/50 hidden md:table-cell">{r.note}</td>
                    </tr>
                  );
                })}
                <tr className="border-t-2 border-primary">
                  <td className="py-4 text-sm font-bold text-white">Margin after cost to serve</td>
                  <td className="py-4 px-3 text-sm text-right font-bold text-white tabular-nums">€3.10</td>
                  <td className="py-4 px-3 text-sm text-right font-bold text-primary tabular-nums">€0.60</td>
                  <td className="py-4 pl-5 text-[13px] text-white/50 hidden md:table-cell">
                    Different margins after the listed costs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-[15px] text-white/70 leading-relaxed mt-8 max-w-[640px]">
            The inputs may already exist in delivery records, rebate agreements and credit notes. Where they do not, we identify what needs to be captured. The model documents each allocation and assumption so the team can understand, challenge and maintain it.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Readiness */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
      <AnimatedSection>
        <h2 className="text-[clamp(24px,3.5vw,32px)] font-semibold tracking-tight leading-[1.2] mb-5">
          What has to be true before you start
        </h2>
        <div className="text-[15px] text-ordinal-body leading-relaxed space-y-4 max-w-[680px]">
          <p>
            Activity-based costing depends on reliable source data and useful records of the activities that drive costs. We assess those foundations before choosing the level of detail the model can support.
          </p>
          <p>Before it is worth building, four things need to hold:</p>
          <ul className="space-y-2.5 pl-1">
            {[
              'Item master data is clean enough that the same thing is not three different codes',
              'Goods receipts are posted against the right documents, close to when they happen',
              'The activities you intend to allocate are actually recorded somewhere — order lines, deliveries, changeovers',
              'Someone in the business will own the definitions, and has the authority to settle a disagreement about them',
            ].map((t, i) => (
              <li key={i} className="flex gap-2.5 text-[15px]">
                <span aria-hidden className="text-primary/60 shrink-0">
                  —
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p>
            Where there are gaps, we agree the groundwork and document any interim assumptions before expanding the model.
          </p>
        </div>
      </AnimatedSection>
    </section>

    {/* CTA */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-24">
      <AnimatedSection>
        <div className="bg-gradient-to-br from-primary/5 to-accent-blue/5 border border-primary/20 rounded-2xl p-10 md:p-12">
          <h2 className="text-[clamp(22px,3vw,28px)] font-semibold tracking-tight leading-[1.2] mb-3">
            Want to know which layer you are missing?
          </h2>
          <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[560px]">
            The two-week review ends with a straight answer about what your data can support today, and what has
            to change before it can support more.
          </p>
          <a
            href={ENQUIRY_HREF}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent-blue text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all no-underline"
          >
            Discuss your project <ArrowRight size={16} />
          </a>
        </div>
      </AnimatedSection>
    </section>
  </>
);

export default Costing;
