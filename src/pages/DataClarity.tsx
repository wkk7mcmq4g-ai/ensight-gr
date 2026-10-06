import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GitCompare, CalendarCheck, TrendingUp, type LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import DarkHero from '@/components/sections/DarkHero';
import { heroPrimaryButton, heroSecondaryButton } from '@/components/sections/buttonStyles';
import ClosingCTA from '@/components/sections/ClosingCTA';
import SectionHeading from '@/components/sections/SectionHeading';
import DataLayerSection from '@/components/sections/DataLayerSection';
import { CONTACT_HREF } from '@/lib/contact';

const TITLE = 'Data & Reporting · Ensight';
const DESCRIPTION =
  'A data warehouse and management reporting on your ERP: customer and product margin, one definition per metric, and a month-end pack that assembles itself.';

const questions: { icon: LucideIcon; question: string; title: string; desc: string; hsl: string }[] = [
  { icon: Users, question: 'Which customers and products make money?', title: 'Customer and product profitability', desc: 'Landed cost first, then production, delivery, returns, rebates and payment terms charged to the product or customer that causes them.', hsl: 'hsl(var(--primary))' },
  { icon: GitCompare, question: 'Which of these two numbers is right?', title: 'One agreed set of numbers', desc: 'Each metric defined once, agreed by the people who use it, and traceable to its source.', hsl: 'hsl(var(--accent-blue))' },
  { icon: CalendarCheck, question: 'Why does month end take a week?', title: 'A pack that builds itself', desc: 'Reporting fed from the ERP and the systems around it, ready at month end without manual assembly.', hsl: 'hsl(var(--primary))' },
  { icon: TrendingUp, question: 'How are sales, stock and cash moving?', title: 'Sales, stock and cash reporting', desc: 'By customer, product and channel, against last year and budget, refreshed automatically.', hsl: 'hsl(var(--accent-blue))' },
];

const stages = [
  {
    num: '01',
    tag: '2 weeks · Fixed fee',
    title: 'Two-week review',
    desc: 'I look at how the work flows and what state the data behind it is in. You get findings on each of five areas and one of two answers: ready to build, or groundwork first with a list of what to fix.',
    listTitle: 'What I assess',
    list: [
      'How clearly the work is defined',
      'Whether the data you need exists',
      'Whether it agrees across systems',
      'Whether costs are allocated to products and customers',
      'Whether systems and reports connect',
    ],
  },
  {
    num: '02',
    tag: 'Project · Scoped from the review',
    title: 'The build',
    desc: 'A data warehouse and reporting layer on your ERP, with a costing model where the data supports it. Training is part of the work, and I stay until it is in use.',
    listTitle: 'What gets built',
    list: [
      'A company view of revenue, margin, volume and cost',
      'Margin by customer and by product',
      'A ranking of customers and products by profit',
      'Cost and P&L by activity',
    ],
  },
  {
    num: '03',
    tag: 'Ongoing · Retainer',
    title: 'Monthly advisory',
    desc: 'One prepared meeting a month on what the numbers say. A dashboard without interpretation is just a mirror.',
    listTitle: 'What each meeting covers',
    list: [
      'What happened, against last period and target',
      'What is driving it',
      'What it means commercially',
      'What to do about it',
    ],
  },
];

const proof = [
  {
    client: 'Loux',
    href: '/case-studies/costing-bi-platform',
    desc: 'Landed cost carried through to costing and pricing at product and customer level, including third-party goods where margin is thinnest. Pricing moved from revenue to margin.',
  },
  {
    client: 'QSix',
    href: '/case-studies/financial-reporting',
    desc: 'Portfolio, loan, finance and spend systems consolidated behind agreed definitions, with lineage to source. Committee time moved from reconciling the pack to discussing the decision.',
  },
];

const DataClarity = () => (
  <div>
    <SEO title={TITLE} description={DESCRIPTION} path="/data-clarity" ogImage="/og/data-clarity.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Data & Reporting',
        description: DESCRIPTION,
        url: 'https://www.ensight.gr/data-clarity',
        provider: { '@type': 'Organization', name: 'Ensight', url: 'https://www.ensight.gr' },
      })}</script>
    </Helmet>

    <DarkHero
      eyebrow="Data & Reporting"
      headline={
        <>
          Revenue is easy to see.{' '}
          <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">Margin isn't.</span>
        </>
      }
      subhead="Your ERP records every transaction and still cannot say what a customer earns, why margin moved, or which of two reports is right. I build the data warehouse, the definitions and the reporting that answer those, on the systems you already run."
    >
      <a href={CONTACT_HREF} className={heroPrimaryButton}>Book a call</a>
      <Link to="/costing" className={heroSecondaryButton}>See the worked example</Link>
    </DarkHero>

    {/* What you get */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="what-you-get">
      <SectionHeading eyebrow="What You Get" heading="Four questions you will be able to answer" />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((o) => (
          <StaggerItem key={o.title}>
            <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm h-full">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
              <div
                className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${o.hsl}15`, color: o.hsl }}
              >
                <o.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-1 leading-snug">{o.question}</h3>
              <p className="text-sm font-medium text-primary mb-2">{o.title}</p>
              <p className="text-sm text-ordinal-body leading-relaxed">{o.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    {/* Why the ERP can't answer it */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection className="max-w-[720px]">
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">The Gap</div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-5">
          Why the ERP can't answer the margin question
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed mb-6">
          An ERP is a record of transactions. It does not hold a model of which costs follow volume, which follow order count and which follow one difficult customer. So the standard report stops at gross margin and spreads everything else evenly.
        </p>
        <Link
          to="/costing"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all no-underline"
        >
          What a product actually costs <ArrowRight size={14} />
        </Link>
      </AnimatedSection>
    </section>

    {/* The data layer */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <DataLayerSection lead="Reporting is only as good as the data it stands on. These are the four layers I build to get from ERP transactions to a figure you can defend, and I have run them in production for a manufacturer and an institutional asset manager." />

    {/* How it runs */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="how-it-runs">
      <SectionHeading eyebrow="How It Runs" heading="Review, build, then a monthly conversation" />
      <div className="flex flex-col gap-4">
        {stages.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-4 p-6 border-b border-border flex-wrap">
                <div className="text-[11px] font-mono tracking-widest text-ordinal-dim">{s.num}</div>
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-3 py-1 rounded-md">{s.tag}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <p className="text-[15px] text-ordinal-body leading-relaxed">{s.desc}</p>
                <div>
                  <p className="text-[13px] font-bold mb-3">{s.listTitle}</p>
                  <ul className="space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="text-sm text-ordinal-body leading-relaxed flex gap-2">
                        <span aria-hidden className="text-primary/60 shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Who this is for */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection className="max-w-[720px]">
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">Who This Is For</div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-5">
          Companies that have outgrown deciding on instinct
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed">
          This fits businesses of 20–200 people where management knows revenue by customer and cannot see profit by customer. Typical cases are manufacturers and distributors with many products, uneven customers and thin margins on part of the range. It also fits financial services firms that need client profitability and one agreed set of portfolio figures.
        </p>
      </AnimatedSection>
    </section>

    {/* Proof */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <SectionHeading eyebrow="Proof" heading="Where it has been done" />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proof.map((p) => (
          <StaggerItem key={p.client}>
            <Link
              to={p.href}
              className="block bg-card border border-border rounded-lg p-7 h-full no-underline hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{p.client}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed mb-4">{p.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Read the case <ArrowRight size={14} />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    <ClosingCTA
      heading="Want to know what your numbers can support today?"
      body="Start with the two-week review. It is a fixed fee, and it ends with a straight answer."
    />
  </div>
);

export default DataClarity;
