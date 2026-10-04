import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowRight, Workflow, BarChart3, Sparkles, Stethoscope, PenTool, Hammer, Users } from 'lucide-react';
import CTASection from '@/components/home/CTASection';
import DecorativeShapes from '@/components/DecorativeShapes';

const offerings = [
  {
    num: '01',
    icon: BarChart3,
    title: 'Insight & Reporting',
    subtitle: 'Management information that survives scrutiny',
    desc: 'One definition per number, agreed by the people who use it. Costing at product and customer level, so you know where the margin really is and where it leaks. Reports that get read, because they answer what the management team is actually asking — and because someone owns what they say.',
    features: [
      'Metric and KPI definitions',
      'Activity-based costing and pricing analysis',
      'Management reporting and dashboards',
      'Automated data flows — from the ERP and everything outside it, into reporting, without manual assembly',
      'Specification and oversight of external BI partners',
    ],
    barColor: 'bg-primary',
    iconColor: 'text-primary',
    link: '/data-clarity',
    linkLabel: 'Explore Insight & Reporting',
  },
  {
    num: '02',
    icon: Workflow,
    title: 'Applications & Automation',
    subtitle: 'Fix the flow, then build the thing that runs it',
    desc: 'Most automation fails because it encodes the workaround and makes it permanent. We map how the work actually moves, remove what should not be there, make ownership explicit — and only then build the application that runs it. What comes back is recovered capacity: the things your team can finally get to once the work stops fighting them.',
    features: [
      'Process mapping and redesign',
      'Custom business applications — built for how the work actually runs',
      'Workflow, approval and document automation',
      'ERP and system integration, and the data flows between them',
      'Rollout, training and adoption',
    ],
    barColor: 'bg-accent-blue',
    iconColor: 'text-accent-blue',
    link: '/operational-transformation',
    linkLabel: 'Explore Applications & Automation',
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'AI, Applied',
    subtitle: 'Used where it earns its place, with a record of what it did',
    desc: 'AI is good at reading messy documents and searching content nobody has time to search. It is unreliable at anything that must be exactly right every time — unless you design for that. We use it where the input is unstructured and the volume is high, put a person in front of anything that posts, pays or commits, and log what every system touched and who approved it.',
    features: [
      'Document and invoice extraction into the ERP, with human approval',
      'Search and question-answering over internal documents and data',
      'Scoped, read-only access by default, with audit trails',
      'AI usage and governance policy',
      'Hands-on training so the team actually uses it',
    ],
    barColor: 'bg-secondary',
    iconColor: 'text-secondary',
    link: '/case-studies',
    linkLabel: 'See Our Work',
  },
];

const methodology = [
  { num: '01', icon: Stethoscope, title: 'Diagnose', desc: 'Understand how work actually flows. Map processes, quantify costs, identify what to fix first.', color: 'text-primary', bar: 'bg-primary' },
  { num: '02', icon: PenTool, title: 'Redesign', desc: 'Fix the process before digitising it. Simplify. Remove waste. Clarify ownership.', color: 'text-accent-blue', bar: 'bg-accent-blue' },
  { num: '03', icon: Hammer, title: 'Build', desc: 'Custom platforms, automation, integrations — built around your redesigned processes.', color: 'text-secondary', bar: 'bg-secondary' },
  { num: '04', icon: Users, title: 'Embed', desc: "Monitor adoption. Manage resistance. Train your team. We don't leave until it's working.", color: 'text-primary/70', bar: 'bg-primary/70' },
];

const engagements = [
  {
    tag: 'Recommended',
    title: 'Operational X-Ray',
    meta: '1–2 weeks · Fixed fee',
    desc: 'We embed with your team, map how the work actually flows and what state the data behind it is in, quantify what the gaps are costing, and deliver a prioritised roadmap.',
    barColor: 'bg-primary',
    showTag: true,
  },
  {
    tag: '',
    title: 'Quick Win',
    meta: '4–6 weeks · Outcome-linked',
    desc: 'One high-impact problem solved. Proof before commitment. Fee tied to measurable outcome.',
    barColor: 'bg-accent-blue',
    showTag: false,
  },
  {
    tag: '',
    title: 'Full Transformation',
    meta: '10–24 weeks · Scoped from X-Ray',
    desc: 'All four framework stages. End-to-end accountability from diagnosis to adopted, working solution.',
    barColor: 'bg-secondary',
    showTag: false,
  },
];

const Services = () => (
  <>
    <SEO title="Services · Ensight" description="Insight and reporting, process and automation, and AI applied where it earns its place — for mid-market businesses." path="/services" ogImage="/og/services.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ensight.gr/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ensight.gr/services" }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "Ensight",
          "url": "https://www.ensight.gr"
        },
        "name": "Ensight Consulting Services",
        "description": "Insight and reporting, process and automation, and AI applied where it earns its place \u2014 for mid-market businesses.",
        "url": "https://www.ensight.gr/services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services",
          "itemListElement": offerings.map((o) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": o.title,
              "description": o.desc
            }
          }))
        }
      })}</script>
    </Helmet>
    {/* Hero */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-14 relative overflow-hidden">
      <DecorativeShapes variant="grid" />
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        {"Services"}
      </div>
      <h1 className="text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.1] mb-4">
        Numbers you can act on,{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          and the work behind them.
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[620px]">
        We build management information mid-market businesses can trust — and we fix the process underneath it first, so the numbers mean something.
      </p>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Service Offerings */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"What We Do"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
          Three services, in this order
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          Reporting that holds up. The process behind it, fixed — then the applications and automation that run it. And AI only where it earns its place. Each can stand alone, but the order is the point.
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-5">
        {offerings.map((o, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-ordinal-faint transition-all">
              <div className={`h-[2px] ${o.barColor}`} />
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 p-7 md:p-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <o.icon className={`${o.iconColor} shrink-0`} size={24} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-xl font-semibold">
                        <span className="text-[11px] font-mono tracking-widest text-ordinal-dim mr-2.5 align-middle">{o.num}</span>
                        {o.title}
                      </h3>
                      <p className="text-xs text-ordinal-dim">{o.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-ordinal-body leading-relaxed mb-5">{o.desc}</p>
                  <Link
                    to={o.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all no-underline"
                  >
                    {o.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="bg-muted rounded-lg p-5">
                  <div className="text-[9px] tracking-[2px] uppercase text-ordinal-dim mb-3">Includes</div>
                  <ul className="space-y-2.5">
                    {o.features.map((f, j) => (
                      <li key={j} className="text-sm text-ordinal-body leading-relaxed flex gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${o.barColor}`} />
                        {f}
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

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Methodology */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"Our Method"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
          Process first. Technology second.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          We never touch a platform until we understand — and have redesigned — the operation it{"'"}s meant to support.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {methodology.map((s, i) => (
          <StaggerItem key={i}>
            <div className="group bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full">
              <div className={`absolute top-0 left-0 w-full h-[2px] ${s.bar}`} />
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-ordinal-dim">{s.num}</div>
                <s.icon className={`${s.color} opacity-25 transition-all duration-300 group-hover:opacity-50 group-hover:scale-110`} size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Engagement Models */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"Three Ways to Start"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
          Low risk. High trust.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          We designed our model to reduce your risk from day one. Start small, see results, then decide.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {engagements.map((e, i) => (
          <StaggerItem key={i}>
            <div className="bg-card border border-border rounded-lg p-8 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full flex flex-col">
              <div className={`absolute top-0 left-0 w-full h-[2px] ${e.barColor}`} />
              {e.showTag && (
                <div className="inline-block text-[8px] font-semibold tracking-[2px] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded mb-4 self-start">
                  {e.tag}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
              <div className="text-[11px] text-ordinal-dim mb-4">{e.meta}</div>
              <p className="text-sm text-ordinal-body leading-relaxed">{e.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    {/* CTA */}
    <CTASection />
  </>
);

export default Services;
