import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowRight, ScanSearch, Zap, Layers, Stethoscope, PenTool, Hammer, Users } from 'lucide-react';

const services = [
  {
    icon: ScanSearch,
    tag: 'Recommended',
    title: 'Operational X-Ray',
    meta: '1–2 weeks · Fixed fee',
    who: 'Leaders who suspect inefficiency but lack hard numbers.',
    includes: 'Workflow mapping, bottleneck quantification, stakeholder interviews, prioritised roadmap.',
    outcome: 'A clear, costed picture of where time and money are leaking — and what to fix first.',
    barColor: 'bg-primary',
    iconColor: 'text-primary',
    showTag: true,
  },
  {
    icon: Zap,
    tag: '',
    title: 'Quick Win',
    meta: '4–6 weeks · Outcome-linked',
    who: 'Teams that need proof before committing to a bigger engagement.',
    includes: 'One high-impact problem scoped, redesigned, and solved end-to-end.',
    outcome: 'Measurable improvement you can point to. We tie our fee to the result.',
    barColor: 'bg-ordinal-green',
    iconColor: 'text-ordinal-green',
    showTag: false,
  },
  {
    icon: Layers,
    tag: '',
    title: 'Full Transformation',
    meta: '10–24 weeks · Scoped from X-Ray',
    who: 'Organisations ready for end-to-end change across people, process, and platforms.',
    includes: 'All four framework stages — diagnosis through to embedded, adopted solution.',
    outcome: 'A fundamentally better operation with the team trained and the system working.',
    barColor: 'bg-ordinal-cyan',
    iconColor: 'text-ordinal-cyan',
    showTag: false,
  },
];

const steps = [
  { num: '01', icon: Stethoscope, title: 'Diagnose', time: '1–2 WEEKS', desc: 'Embed with your team. Map how work actually flows. Quantify the cost of every bottleneck.', color: 'text-primary' },
  { num: '02', icon: PenTool, title: 'Redesign', time: '1–2 WEEKS', desc: 'Fix the process before digitising it. Simplify. Remove waste. Clarify ownership.', color: 'text-ordinal-cyan' },
  { num: '03', icon: Hammer, title: 'Build', time: '4–12 WEEKS', desc: 'Custom platforms, automation, integrations — built around your redesigned processes.', color: 'text-electric-bright' },
  { num: '04', icon: Users, title: 'Embed', time: '4–8 WEEKS', desc: "Monitor adoption. Manage resistance. Train your team. We don't leave until it's working.", color: 'text-ordinal-green' },
];

const barColors = ['bg-primary', 'bg-ordinal-cyan', 'bg-electric-bright', 'bg-ordinal-green'];

const Services = () => (
  <>
    {/* Hero */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-14">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"// What We Do"}
        </div>
        <h1 className="text-[clamp(32px,5vw,52px)] font-black tracking-tight leading-[1.1] mb-4">
          Process first.{' '}
          <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
            Technology second.
          </span>
        </h1>
        <p className="text-lg text-ordinal-body leading-relaxed max-w-[600px]">
          We help mid-market companies eliminate process debt — the hidden inefficiencies that slow teams down, inflate costs, and block growth. Every engagement starts with understanding the operation, not selling software.
        </p>
      </AnimatedSection>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Service Cards */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"// Three Ways to Start"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-4">
          Low risk. High trust.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          We designed our model to reduce your risk from day one. Start small, see results, then decide.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <StaggerItem key={i}>
            <div className="bg-card border border-border rounded-lg p-8 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full flex flex-col">
              <div className={`absolute top-0 left-0 w-full h-[3px] ${s.barColor}`} />
              <div className="flex items-start justify-between mb-4">
                <div>
                  {s.showTag && (
                    <div className="inline-block font-mono-label text-[8px] font-semibold tracking-[2px] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-md mb-3">
                      {s.tag}
                    </div>
                  )}
                  <h3 className="text-xl font-extrabold">{s.title}</h3>
                </div>
                <s.icon className={`${s.iconColor} opacity-30 shrink-0`} size={32} strokeWidth={1.5} />
              </div>
              <div className="font-mono-label text-[11px] text-ordinal-dim mb-4">{s.meta}</div>
              <div className="space-y-3 text-sm text-ordinal-body leading-relaxed flex-1">
                <p><span className="font-semibold text-foreground">Who it's for:</span> {s.who}</p>
                <p><span className="font-semibold text-foreground">What's included:</span> {s.includes}</p>
                <p><span className="font-semibold text-foreground">Outcome:</span> {s.outcome}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Framework */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="method">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"// Our Method"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.15] mb-4">
          The Operational Clarity Framework
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          Four stages. Process first, technology second. We never touch a platform until we understand — and have redesigned — the operation it{"'"}s meant to support.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <StaggerItem key={i}>
            <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full">
              <div className={`absolute top-0 left-0 w-full h-[3px] ${barColors[i]}`} />
              <div className="font-mono-label text-xs font-semibold text-ordinal-dim mb-3">{s.num}</div>
              <h3 className="text-xl font-extrabold mb-1">{s.title}</h3>
              <div className={`font-mono-label text-[10px] font-medium mb-3 ${s.color}`}>{s.time}</div>
              <p className="text-sm text-ordinal-body leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Data Clarity */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-[560px]">
            <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-ordinal-cyan mb-3">
              {"// Standalone Tool"}
            </div>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold tracking-tight leading-[1.15] mb-4">
              Data Clarity Score
            </h2>
            <p className="text-base text-ordinal-body leading-relaxed mb-6">
              Not sure if your data is ready for AI, automation, or better reporting? Take our free Data Clarity assessment and get a personalised score with actionable recommendations.
            </p>
            <Link
              to="/data-clarity"
              className="inline-flex items-center gap-2 font-mono-label text-[11px] font-medium tracking-[1px] text-primary-foreground bg-primary px-6 py-3 rounded-[10px] shadow-sm hover:bg-primary/90 hover:-translate-y-px transition-all no-underline"
            >
              Explore Data Clarity
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* CTA */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 text-center">
      <AnimatedSection>
        <h2 className="text-[clamp(28px,4vw,42px)] font-black tracking-tight mb-4">
          Not sure where to start?
        </h2>
        <p className="text-[17px] text-ordinal-body leading-relaxed max-w-[480px] mx-auto mb-9">
          Book a 30-minute X-Ray Briefing. No obligation. No sales pitch. Just a conversation about whether there{"'"}s a fit.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="mailto:hello@ensight.co?subject=X-Ray Briefing"
            className="bg-ordinal-green text-primary-foreground text-base font-bold px-9 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)] transition-all no-underline"
          >
            Book Your X-Ray Briefing
          </a>
          <Link
            to="/assessment"
            className="bg-card text-foreground text-base font-semibold px-9 py-4 rounded-xl border border-border hover:bg-muted hover:border-ordinal-faint transition-all no-underline"
          >
            Take the Free Assessment
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </>
);

export default Services;
