import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/home/AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';
import { CONTACT_HREF } from '@/lib/contact';

const TITLE = 'How I work · Ensight';
const DESCRIPTION = 'From understanding the business need to an agreed scope, working software, training and handover. A practical approach to reporting, applications and automation.';

const stages = [
  { num: '01', title: 'Understand the need', desc: 'We look at the decision, task or problem you want to improve, with the people who do the work. I review the existing systems and assess effort, delays and business impact to identify a useful starting point.' },
  { num: '02', title: 'Agree the solution', desc: 'We agree the scope, deliverables, cost, timing and responsibilities before implementation. Where it helps, a small prototype lets us test an idea with the team. The proposal defines how we will check that the solution meets your requirements.' },
  { num: '03', title: 'Build and review together', desc: 'You see working versions and give feedback as the solution takes shape. We check the figures, workflows and permissions against the agreed requirements. Any change to scope, cost or timing is discussed before proceeding.' },
  { num: '04', title: 'Launch and hand over', desc: 'We prepare the team to use the solution, complete the agreed checks and provide the documentation and training included in the scope. Support responsibilities, duration and any ongoing arrangement are agreed before launch.' },
];

const h2 = 'text-[clamp(24px,3.5vw,32px)] font-semibold tracking-tight leading-[1.2]';
const eyebrow = 'text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3';
const prose = 'text-[15px] text-ordinal-body leading-relaxed max-w-[680px]';

const HowIWork = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/how-i-work" ogImage="/og/services.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ensight.gr/' },
          { '@type': 'ListItem', position: 2, name: 'How I work', item: 'https://www.ensight.gr/how-i-work' },
        ],
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pt-28 pb-12 relative overflow-hidden">
      <DecorativeShapes variant="grid" />
      <div className={eyebrow}>How I Work</div>
      <h1 className="text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.1] mb-5">
        From a business problem{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          to a working solution.
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[680px]">
        I work directly with your team to understand what needs to improve, agree a practical scope, and build the reporting, application or automation that supports it. You see progress along the way, with handover and support agreed from the start.
      </p>
    </section>

    <div className="h-px bg-border max-w-[900px] mx-auto" />

    {/* Four stages */}
    <section className="bg-dark-section py-20" id="stages">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className={eyebrow}>The Method</div>
          <h2 className={`${h2} text-white mb-10`}>What working together looks like</h2>
        </AnimatedSection>
        <p className="text-white/80 text-base leading-relaxed mb-8 max-w-[680px]">The depth of each stage depends on the task. A focused report may need a short scoping discussion; a broader project may need a separate review. Timing and milestones are set out in the proposal.</p>
        <ol className="flex flex-col gap-3 list-none p-0 m-0">
          {stages.map((s) => (
            <li key={s.num} className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-6 grid grid-cols-[auto_1fr] md:grid-cols-[auto_180px_1fr] gap-x-5 gap-y-2 items-baseline">
              <span className="text-[11px] font-mono tracking-widest text-white/50">{s.num}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>

              </div>
              <p className="text-[15px] text-white/75 leading-relaxed col-span-2 md:col-span-1">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* What you receive + who does the work */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16" id="guarantee">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatedSection>
          <h2 className={`${h2} mb-4`}>What you get back</h2>
          <p className={prose}>The proposal makes the deliverables explicit. Depending on the project, these include:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] text-ordinal-body leading-relaxed">
            <li>A documented scope and acceptance criteria.</li>
            <li>Working reports, an application or an automated workflow.</li>
            <li>The agreed code, configuration and supporting documentation.</li>
            <li>Training, handover and clear support arrangements.</li>
          </ul>
        </AnimatedSection>
        <AnimatedSection>
          <h2 className={`${h2} mb-4`}>Who does the work</h2>
          <p className={prose}>
            I lead every engagement myself and remain your point of contact from the first discussion through delivery. Where specialist input or your ERP partner is needed, I coordinate the work and stay accountable for the agreed result.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
      <h2 className={`${h2} mb-6`}>Practical questions</h2>
      <dl className="space-y-6 text-[15px] text-ordinal-body leading-relaxed">
        <div><dt className="font-semibold text-foreground mb-2">What do you need from us?</dt><dd>A named business contact, time with the people who use the process, and access to the relevant reports or sample data. System access is agreed for the scope, using read-only access where appropriate.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">What happens at handover?</dt><dd>We review the agreed deliverables with your team and confirm who will operate and maintain the solution. Ownership, hosting and third-party licences are set out in the proposal.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">Is support available afterwards?</dt><dd>Yes. The proposal defines the included support period and responsibilities. Any ongoing support or monthly advisory is agreed separately.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">Does every task need a two-week review?</dt><dd>No. A small, well-defined task can be scoped directly. The review is useful when the process, data or requirements need investigation first.</dd></div>
      </dl>
    </section>
    {/* CTA */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-24">
      <AnimatedSection>
        <div className="bg-card border border-border rounded-2xl p-10 md:p-12">
          <h2 className="text-[clamp(22px,3vw,28px)] font-semibold tracking-tight leading-[1.2] mb-3">
            Let’s discuss what you need
          </h2>
          <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[560px]">
            Start with a free 30-minute conversation about the problem, the people involved and what a useful result would look like. We can then decide whether to scope the work directly or start with a review.
          </p>
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent-blue text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all no-underline"
          >
            Email George <ArrowRight size={16} />
          </a>
        </div>
      </AnimatedSection>
    </section>
  </>
);

export default HowIWork;
