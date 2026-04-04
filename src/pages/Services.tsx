import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowRight, Workflow, BarChart3, Code2, Zap, Stethoscope, PenTool, Hammer, Users } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const offerings = [
  {
    icon: Workflow,
    title: 'Operational Transformation',
    subtitle: 'Process-first change for mid-market teams',
    desc: 'We embed with your team to diagnose bottlenecks, redesign workflows, and build the platforms that make the new way of working stick. Every engagement starts with understanding the operation — not selling software.',
    features: [
      'Workflow mapping & bottleneck quantification',
      'Process redesign before any technology',
      'Custom platform build & system integration',
      'Adoption management & team training',
    ],
    barColor: 'bg-primary',
    iconColor: 'text-primary',
    link: '/operational-transformation',
    linkLabel: 'Explore Operational Transformation',
  },
  {
    icon: BarChart3,
    title: 'Data Clarity',
    subtitle: 'Management analytics that drive decisions',
    desc: 'Your data exists — the clarity doesn\'t. We assess your data readiness, build bespoke analytics systems, and partner with you monthly to turn numbers into decisions. Not a dashboard handoff — an ongoing analytical relationship.',
    features: [
      'Data readiness assessment across 5 dimensions',
      'Bespoke dashboards & real-time KPIs',
      'Activity-based cost allocation & net margin analysis',
      'Monthly interpretation & strategic recommendations',
    ],
    barColor: 'bg-ordinal-cyan',
    iconColor: 'text-ordinal-cyan',
    link: '/data-clarity',
    linkLabel: 'Explore Data Clarity',
  },
  {
    icon: Code2,
    title: 'Custom Platforms',
    subtitle: 'Purpose-built applications for your operation',
    desc: 'Off-the-shelf software forces you to adapt your processes to the tool. We build the other way around — applications designed for how your business actually works, replacing spreadsheets, disconnected systems, and manual workarounds.',
    features: [
      'Web & mobile applications tailored to your workflows',
      'CRM, project management & compliance systems',
      'Client portals & internal tools',
      'API integrations with existing systems',
    ],
    barColor: 'bg-electric-bright',
    iconColor: 'text-electric-bright',
    link: '/case-studies',
    linkLabel: 'See Our Work',
  },
  {
    icon: Zap,
    title: 'Automation & Integration',
    subtitle: 'Connect systems and eliminate manual work',
    desc: 'Every hour your team spends copying data between systems is an hour not spent on work that matters. We identify repetitive processes, connect your tools, and build automation that scales your operation without scaling your headcount.',
    features: [
      'System-to-system API integrations',
      'Workflow automation & approval chains',
      'AI-assisted document processing',
      'Scheduled reporting & alert systems',
    ],
    barColor: 'bg-ordinal-green',
    iconColor: 'text-ordinal-green',
    link: '/operational-transformation',
    linkLabel: 'Learn More',
  },
];

const methodology = [
  { num: '01', icon: Stethoscope, title: 'Diagnose', desc: 'Understand how work actually flows. Map processes, quantify costs, identify what to fix first.', color: 'text-primary', bar: 'bg-primary' },
  { num: '02', icon: PenTool, title: 'Redesign', desc: 'Fix the process before digitising it. Simplify. Remove waste. Clarify ownership.', color: 'text-ordinal-cyan', bar: 'bg-ordinal-cyan' },
  { num: '03', icon: Hammer, title: 'Build', desc: 'Custom platforms, automation, integrations — built around your redesigned processes.', color: 'text-electric-bright', bar: 'bg-electric-bright' },
  { num: '04', icon: Users, title: 'Embed', desc: "Monitor adoption. Manage resistance. Train your team. We don't leave until it's working.", color: 'text-ordinal-green', bar: 'bg-ordinal-green' },
];

const engagements = [
  {
    tag: 'Recommended',
    title: 'Operational X-Ray',
    meta: '1–2 weeks · Fixed fee',
    desc: 'We embed with your team, map real workflows, quantify bottleneck costs, and deliver a prioritised roadmap.',
    barColor: 'bg-primary',
    showTag: true,
  },
  {
    tag: '',
    title: 'Quick Win',
    meta: '4–6 weeks · Outcome-linked',
    desc: 'One high-impact problem solved. Proof before commitment. Fee tied to measurable outcome.',
    barColor: 'bg-ordinal-green',
    showTag: false,
  },
  {
    tag: '',
    title: 'Full Transformation',
    meta: '10–24 weeks · Scoped from X-Ray',
    desc: 'All four framework stages. End-to-end accountability from diagnosis to adopted, working solution.',
    barColor: 'bg-ordinal-cyan',
    showTag: false,
  },
];

const Services = () => (
  <>
    {/* Hero */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-28 pb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3"
      >
        {"Services"}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        className="text-[clamp(32px,5vw,52px)] font-bold tracking-tight leading-[1.1] mb-4"
      >
        Technology and data,{' '}
        <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
          designed for your business.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        className="text-lg text-ordinal-body leading-relaxed max-w-[620px]"
      >
        We help mid-market organisations transform operations, unlock the value in their data, and build technology that works the way they do — not the other way around.
      </motion.p>
    </section>

    <div className="h-px bg-border max-w-[1200px] mx-auto" />

    {/* Service Offerings */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          {"What We Do"}
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
          Four areas of expertise
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
          Each service can stand alone or combine into a comprehensive transformation programme. We scope what you need — nothing more.
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
                      <h3 className="text-xl font-semibold">{o.title}</h3>
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
              <div className={`absolute top-0 left-0 w-full h-[3px] ${e.barColor}`} />
              {e.showTag && (
                <div className="inline-block font-mono-label text-[8px] font-semibold tracking-[2px] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-md mb-4 self-start">
                  {e.tag}
                </div>
              )}
              <h3 className="text-xl font-extrabold mb-2">{e.title}</h3>
              <div className="font-mono-label text-[11px] text-ordinal-dim mb-4">{e.meta}</div>
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
