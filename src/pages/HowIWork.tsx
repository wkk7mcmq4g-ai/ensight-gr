import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Brain, Users, MessageSquare, TrendingUp, ShieldCheck, ArrowRight, type LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import DecorativeShapes from '@/components/DecorativeShapes';
import { CONTACT_HREF } from '@/lib/contact';

const TITLE = 'How I work · Ensight';
const DESCRIPTION = 'Process first, technology second: assessment, an agreed scope, implementation and adoption.';

const patterns: { icon: LucideIcon; title: string; desc: string; iconColor: string }[] = [
  { icon: Brain, title: 'The Human Router', desc: 'One person holds the operation together. When they are out, everything slows or stops.', iconColor: 'hsl(var(--ordinal-cyan))' },
  { icon: Users, title: 'The Meeting Trap', desc: 'A weekly meeting that exists only because management has no other way to find out what is happening.', iconColor: 'hsl(var(--ordinal-green))' },
  { icon: MessageSquare, title: 'The WhatsApp Organisation', desc: 'Decisions and approvals flow through chat groups, making them difficult to find and follow up.', iconColor: 'hsl(var(--electric-bright))' },
  { icon: TrendingUp, title: 'Growth by Headcount', desc: 'Administrative effort rises with each new client, leaving less capacity for service and growth.', iconColor: 'hsl(var(--ordinal-amber))' },
];

const stages = [
  { num: '01', title: 'Diagnose', time: '1–2 weeks', desc: 'I work alongside your team, map how the work actually moves and put a cost on each bottleneck. This is the two-week review.' },
  { num: '02', title: 'Redesign', time: '1–2 weeks', desc: 'Fix the process before digitising it: simplify, remove what should not be there, make ownership explicit. No technology yet.' },
  { num: '03', title: 'Build', time: '4–12 weeks', desc: 'The reporting, application or automation, built around the redesigned process.' },
  { num: '04', title: 'Embed', time: '4–8 weeks', desc: 'I stay through adoption: training, monitoring and adjustments, until it is in daily use.' },
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
        Process first.{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          Technology second.
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[680px]">
        I start by understanding how your team works, agree what needs to change, and build the reporting, workflow or application around that.
      </p>
    </section>

    <div className="h-px bg-border max-w-[900px] mx-auto" />

    {/* Why the order matters */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16">
      <AnimatedSection>
        <h2 className={`${h2} mb-5`}>Why the order matters</h2>
        <p className={prose}>
          Every business accumulates workarounds. A temporary fix becomes the way things are done, and each one loosens the link between what happened and what the numbers say happened. I call that{' '}
          <strong className="text-foreground">process debt</strong>. Like technical debt it compounds, and almost nobody measures it. Reviewing these workarounds before a build helps avoid carrying unnecessary steps and inconsistent definitions into the new system.
        </p>
      </AnimatedSection>
    </section>

    {/* What it looks like */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
      <AnimatedSection>
        <h2 className={`${h2} mb-8`}>What process debt looks like</h2>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {patterns.map((p) => (
          <StaggerItem key={p.title}>
            <div className="bg-card border border-border rounded-lg p-7 h-full">
              <div
                className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${p.iconColor}15`, color: p.iconColor }}
              >
                <p.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-1.5">{p.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{p.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    {/* Four stages */}
    <section className="bg-dark-section py-20" id="stages">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className={eyebrow}>The Method</div>
          <h2 className={`${h2} text-white mb-10`}>Four stages</h2>
        </AnimatedSection>
        <p className="text-white/80 text-base leading-relaxed mb-8 max-w-[680px]">These ranges describe a larger programme and may overlap. A focused report or workflow can reach a first release in 4–6 weeks once scope and access are agreed. Adoption and ongoing support are planned explicitly.</p>
        <ol className="flex flex-col gap-3 list-none p-0 m-0">
          {stages.map((s) => (
            <li key={s.num} className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-6 grid grid-cols-[auto_1fr] md:grid-cols-[auto_180px_1fr] gap-x-5 gap-y-2 items-baseline">
              <span className="text-[11px] font-mono tracking-widest text-white/50">{s.num}</span>
              <div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <div className="text-[11px] text-primary mt-0.5">{s.time}</div>
              </div>
              <p className="text-[15px] text-white/75 leading-relaxed col-span-2 md:col-span-1">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* Guarantee */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 py-16" id="guarantee">
      <AnimatedSection>
        <div className="bg-gradient-to-br from-primary/5 to-accent-blue/5 border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue rounded-t-2xl" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-primary" size={22} />
            </div>
            <div className={`${eyebrow} mb-0`}>My Commitment</div>
          </div>
          <h2 className={`${h2} mb-4`}>Agree the scope before implementation</h2>
          <div className="bg-card border border-border rounded-xl px-7 py-5 mb-5 max-w-[640px]">
            <p className="text-[15px] text-foreground leading-relaxed font-medium">
              Before implementation, you receive documented findings, recommended process changes, and an agreed scope with deliverables, responsibilities and acceptance criteria.
            </p>
          </div>
          <p className="text-sm text-ordinal-body leading-relaxed max-w-[600px]">
            If you come to me asking for a CRM, I will not start by building a CRM. I will start by finding out how you manage clients today.
          </p>
        </div>
      </AnimatedSection>
    </section>

    {/* What you get back + who does the work */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatedSection>
          <h2 className={`${h2} mb-4`}>What you get back</h2>
          <p className={prose}>
            The aim is not fewer people. It is recovered capacity: the hours your team spends moving data, chasing approvals and rebuilding the same report, returned to work only they can do.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <h2 className={`${h2} mb-4`}>Who does the work</h2>
          <p className={prose}>
            I lead every engagement myself, from the review to adoption. Where a build needs more hands, such as a BI developer or your ERP partner, I specify the work, supervise it and stay accountable for the result.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-16">
      <h2 className={`${h2} mb-6`}>Practical questions</h2>
      <dl className="space-y-6 text-[15px] text-ordinal-body leading-relaxed">
        <div><dt className="font-semibold text-foreground mb-2">What do you need from us?</dt><dd>A named business contact, time with the people who use the process, and access to the relevant reports or sample data. System access is agreed for the scope, using read-only access where appropriate.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">What happens at handover?</dt><dd>The proposal sets out the code, reports, documentation and training included, together with ownership, hosting and any third-party licences. These are agreed before the build starts.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">Is support available afterwards?</dt><dd>We agree the support period, responsibilities and any ongoing arrangement as part of the scope. Monthly advisory is a separate option for interpreting results and planning improvements.</dd></div>
        <div><dt className="font-semibold text-foreground mb-2">Does every task need a two-week review?</dt><dd>No. A small, well-defined task can be scoped directly. The review is useful when the process, data or requirements need investigation first.</dd></div>
      </dl>
    </section>
    {/* CTA */}
    <section className="max-w-[900px] mx-auto px-6 md:px-12 pb-24">
      <AnimatedSection>
        <div className="bg-card border border-border rounded-2xl p-10 md:p-12">
          <h2 className="text-[clamp(22px,3vw,28px)] font-semibold tracking-tight leading-[1.2] mb-3">
            Start with the two-week review
          </h2>
          <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[560px]">
            It is a fixed fee, and it ends with a straight answer on what your numbers can support today and what to fix first.
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
