import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, FolderSync, BarChart3, Database, Factory, Plane, Landmark, type LucideIcon } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const problems: { icon: LucideIcon; title: string; desc: string; color: string; hsl: string }[] = [
  { icon: Clock, title: 'No real-time visibility', desc: 'Performance data lives in reports assembled weekly or monthly. By the time a problem is visible, it has already compounded. Decisions are made on last month\'s numbers at best.', color: 'bg-[#4F46E5]', hsl: '#4F46E5' },
  { icon: FolderSync, title: 'No single version of truth', desc: 'Finance, sales, and operations each produce different numbers for the same metric. Meetings become reconciliation exercises. Nobody knows whose figures to trust.', color: 'bg-[#06B6D4]', hsl: '#06B6D4' },
  { icon: BarChart3, title: 'Costs that aren\'t allocated', desc: 'Gross margin is known. Net margin per client and product is not. Indirect costs sit in an undifferentiated overhead bucket. Pricing decisions are made without knowing the real cost to serve.', color: 'bg-[#7C3AED]', hsl: '#7C3AED' },
  { icon: Database, title: 'Data scattered everywhere', desc: 'The information exists — in three accounting systems, six spreadsheets, and a booking platform that doesn\'t talk to anything else. Getting an answer requires hours of manual assembly.', color: 'bg-[#F59E0B]', hsl: '#F59E0B' },
];

const components = [
  {
    num: '01', numColor: 'text-[#06B6D4]', borderColor: 'border-[#06B6D4]',
    tag: 'Entry point · Fixed fee · 1–2 weeks', pill: 'Fixed fee', pillBg: 'bg-[#06B6D4]/10 text-[#06B6D4]',
    title: 'Data Clarity Assessment',
    desc: 'Before building anything, we need to know what we\'re building on. The Data Clarity Assessment is a structured diagnostic that maps your data landscape across five dimensions and produces a clear verdict: whether you\'re ready to build, what needs fixing first, or whether deeper operational work is required.',
    desc2: 'The output is not a list of problems. It is a scored profile and a specific recommended next step — with enough detail to act on immediately.',
    deliverableLabel: 'Deliverable',
    deliverable: 'Data Readiness Report — scored framework, findings per dimension, verdict, and recommended path forward',
    listTitle: 'Five scoring dimensions:',
    list: [
      'Data Availability — does the right data exist and is it captured systematically?',
      'Data Consistency — is there a single version of truth across systems and departments?',
      'Cost Visibility — are costs allocated to clients, products, and business units?',
      'System Integration — do key systems communicate, or is data moved manually?',
      'Reporting Maturity — what reporting exists today and how is it used?',
    ],
  },
  {
    num: '02', numColor: 'text-[#10B981]', borderColor: 'border-[#10B981]',
    tag: 'One-off project · Scope defined by Assessment', pill: 'Project fee', pillBg: 'bg-[#10B981]/10 text-[#10B981]',
    title: 'The Analytics Build',
    desc: 'A bespoke analytics system built on a consistent methodology. The scope is defined by the Assessment — every engagement follows the same four-layer structure, but the output is tailored to your business profile, sector, and what the data can actually support.',
    desc2: 'We build until it\'s being used — adoption and training are built into the engagement, not bolted on at the end.',
    deliverableLabel: 'Deliverable',
    deliverable: 'Working analytics system, trained team, documentation, and handover to retainer',
    listTitle: 'Standard dashboard suite:',
    list: [
      'Company View — real-time KPIs across revenue, margin, units, costs. Filterable by any dimension.',
      'Commercial View — revenue and margin by client and product, trend and concentration.',
      'ABC Classification — Pareto analysis of clients and products by net profit contribution.',
      'Cost & P&L View — activity-based cost allocation producing net margin at client and product level.',
      'Sector KPIs — business-specific operational indicators defined during the Assessment.',
    ],
  },
  {
    num: '03', numColor: 'text-[#4F46E5]', borderColor: 'border-[#4F46E5]',
    tag: 'Ongoing · Monthly retainer', pill: 'Monthly retainer', pillBg: 'bg-[#4F46E5]/10 text-[#4F46E5]',
    title: 'Data Clarity Retainer',
    desc: 'A dashboard without interpretation is just a mirror. The retainer is the ongoing partnership where the value compounds — a monthly meeting with a prepared deck, working through what the numbers mean and what to do about it.',
    desc2: 'This is a decision-making conversation, not a reporting meeting. The question we\'re answering every month is: what does the data tell us to do?',
    deliverableLabel: 'Monthly rhythm',
    deliverable: 'Structured meeting with prepared deck · Weekly touchpoints as required · Quarterly strategic review',
    listTitle: 'Each month\'s deck covers:',
    list: [
      'What happened — performance against prior period and targets across all key metrics.',
      'What\'s driving it — the two or three factors that most explain the numbers.',
      'What it means — commercial interpretation: margin movement, ABC shifts, pricing signals.',
      'What to do — specific, actionable recommendations grounded in the data.',
    ],
  },
];

const dimensions = [
  { weight: '25%', title: 'Data Availability', desc: 'Does the data that matters actually exist? Is it captured systematically or reconstructed ad hoc?', score: 3 },
  { weight: '25%', title: 'Data Consistency', desc: 'Is there a single version of truth, or do different systems produce conflicting numbers for the same metric?', score: 2 },
  { weight: '20%', title: 'Cost Visibility', desc: 'Are costs allocated to clients, products, and business units — or do they sit in undifferentiated overhead?', score: 1 },
  { weight: '15%', title: 'System Integration', desc: 'Do key systems communicate, or is data moved manually between platforms, spreadsheets, and people?', score: 2 },
  { weight: '15%', title: 'Reporting Maturity', desc: 'What reporting exists today, how is it produced, and does it actually inform decisions?', score: 3 },
];

const verdicts = [
  { range: '75–100%', name: 'Build-Ready', desc: 'Your data foundation is sufficient to proceed. Minor gaps can be addressed during the build phase. We move directly to scoping the Analytics Build.', color: 'border-[#10B981] bg-[#10B981]/5' },
  { range: '50–74%', name: 'Foundation First', desc: 'Specific remediation is required before a full build. We provide a targeted roadmap. Partial builds may be possible while remediation proceeds in parallel.', color: 'border-[#F59E0B] bg-[#F59E0B]/5' },
  { range: 'Below 50%', name: 'Not Viable Yet', desc: 'Fundamental data or process issues block meaningful analytics. A remediation roadmap is provided. An Operational Clarity engagement may be recommended first.', color: 'border-[#EC4899] bg-[#EC4899]/5' },
];

const flowNodes = [
  { num: '01', name: 'Diagnose', sub: 'Operational X-Ray', tag: 'Operational Clarity', tagColor: 'bg-primary/10 text-primary', numColor: 'text-primary', highlight: false },
  { num: '02–04', name: 'Transform', sub: 'Redesign · Build · Embed', tag: 'Operational Clarity', tagColor: 'bg-primary/10 text-primary', numColor: 'text-primary', highlight: false },
  { num: 'A', name: 'Assess', sub: 'Data Clarity Assessment', tag: 'Data Clarity', tagColor: 'bg-[#06B6D4]/10 text-[#06B6D4]', numColor: 'text-[#06B6D4]', highlight: true },
  { num: 'B', name: 'Build', sub: 'Analytics System', tag: 'Data Clarity', tagColor: 'bg-[#06B6D4]/10 text-[#06B6D4]', numColor: 'text-[#06B6D4]', highlight: true },
  { num: 'C', name: 'Partner', sub: 'Monthly Retainer', tag: 'Data Clarity', tagColor: 'bg-[#10B981]/10 text-[#10B981]', numColor: 'text-[#10B981]', highlight: true },
];

const sectors: { icon: LucideIcon; title: string; desc: string; hsl: string }[] = [
  { icon: Factory, title: 'Manufacturing & Export', desc: 'Complex supply chains, multi-stage cost structures, and client portfolios where margin varies wildly by order type, destination, and volume. You need to know which products and clients are actually profitable — not just which generate the most revenue.', hsl: '#4F46E5' },
  { icon: Plane, title: 'Tourism & Hospitality', desc: 'Seasonal demand, fleet and resource utilisation, booking channel mix, and partner performance — all of which affect profitability and none of which are visible in a standard P&L.', hsl: '#06B6D4' },
  { icon: Landmark, title: 'Financial Services', desc: 'Client profitability, product mix, compliance cost allocation, and AUM concentration risk — these are the decisions that define a financial services firm\'s strategy.', hsl: '#10B981' },
];

const DataClarity = () => (
  <div>
    {/* ═══ HERO ═══ */}
    <section className="relative bg-[hsl(270,40%,6%)] overflow-hidden flex items-center px-6 md:px-12 pt-28 pb-14">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-100" style={{
        backgroundImage: 'linear-gradient(rgba(79,70,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.06) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        animation: 'gridPan 20s linear infinite',
      }} />
      {/* Blobs */}
      <div className="absolute -top-[200px] -right-[100px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_60%)]" />
      <div className="absolute -bottom-[150px] left-[100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.07)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 font-mono-label text-[9px] tracking-[3px] uppercase text-[#06B6D4] border border-[#06B6D4]/30 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-[5px] h-[5px] bg-[#06B6D4] rounded-full animate-pulse" />
            Management Analytics
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-[clamp(40px,5vw,62px)] font-black leading-[1.06] tracking-tight text-white mb-5"
          >
            Your data exists.{' '}
            <br />
            The <span className="bg-gradient-to-br from-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">clarity</span> doesn't.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="text-[17px] text-[#8888A0] leading-[1.75] max-w-[520px] mb-9"
          >
            Most businesses have numbers scattered across systems, spreadsheets, and departments. Data Clarity turns that raw data into a real-time picture of your business — and keeps you alongside it, every month, to act on what it says.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="flex gap-3 flex-wrap"
          >
            <Link
              to="/data-clarity-assessment"
              className="bg-[#10B981] text-white text-[15px] font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:bg-[#059669] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.3)] transition-all no-underline"
            >
              Take the Free Assessment
            </Link>
            <a
              href="#components"
              className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-xl border border-white/15 hover:bg-white/5 hover:border-white/30 transition-all no-underline"
            >
              See how it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ═══ PROBLEM ═══ */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="problem">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#4F46E5] mb-3">
          {"// The Problem"}
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] mb-4">
          You're making decisions<br />with incomplete information.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[580px] mb-14">
          The data exists — in your accounting system, your CRM, your booking platform, your spreadsheets. But it doesn't add up. Not because the business is broken, but because the data infrastructure never kept pace with the business.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {problems.map((p, i) => (
          <StaggerItem key={i}>
            <div className="bg-card border border-border rounded-2xl p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all h-full">
              <div className={`absolute top-0 left-0 w-full h-[3px] ${p.color}`} />
              <div
                className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${p.hsl}15`, color: p.hsl }}
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

    {/* ═══ COMPONENTS / THE SERVICE ═══ */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="components">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#4F46E5] mb-3">
          {"// The Service"}
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] mb-4">
          Three components.<br />One continuous partnership.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[580px] mb-14">
          Data Clarity is not a project with a handoff date. It is an ongoing analytical relationship — built on a solid data foundation, and sustained by monthly interpretation that turns numbers into decisions.
        </p>
      </AnimatedSection>

      <div className="flex flex-col gap-6">
        {components.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className={`bg-card border border-border rounded-2xl overflow-hidden`}>
              {/* Header */}
              <div className="flex items-center gap-4 p-6 border-b border-border flex-wrap">
                <div className={`text-2xl font-black ${c.numColor} font-mono-label`}>{c.num}</div>
                <div className="flex-1 min-w-[200px]">
                  <div className="font-mono-label text-[9px] tracking-[2px] uppercase text-ordinal-dim">{c.tag}</div>
                  <div className="text-lg font-bold mt-0.5">{c.title}</div>
                </div>
                <span className={`font-mono-label text-[9px] tracking-[1px] uppercase px-3 py-1 rounded-md ${c.pillBg} hidden md:inline-block`}>
                  {c.pill}
                </span>
              </div>
              {/* Body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div>
                  <p className="text-sm text-ordinal-body leading-relaxed mb-3">{c.desc}</p>
                  <p className="text-sm text-ordinal-body leading-relaxed mb-5">{c.desc2}</p>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="font-mono-label text-[9px] tracking-[2px] uppercase text-ordinal-dim mb-1">{c.deliverableLabel}</div>
                    <div className="text-sm font-medium">{c.deliverable}</div>
                  </div>
                </div>
                <div>
                  <p className="text-[13px] font-bold mb-3">{c.listTitle}</p>
                  <ul className="space-y-2.5">
                    {c.list.map((item, j) => (
                      <li key={j} className="text-sm text-ordinal-body leading-relaxed flex gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.numColor === 'text-[#06B6D4]' ? 'bg-[#06B6D4]' : c.numColor === 'text-[#10B981]' ? 'bg-[#10B981]' : 'bg-[#4F46E5]'}`} />
                        {item}
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

    {/* ═══ ASSESSMENT SCORING ═══ */}
    <section className="bg-[hsl(270,40%,6%)] py-24" id="assessment">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#06B6D4] mb-3">
            {"// Data Clarity Assessment"}
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] text-white mb-4">
            Five dimensions.<br />One clear verdict.
          </h2>
          <p className="text-base text-[#8888A0] leading-relaxed max-w-[580px] mb-14">
            Each dimension is scored 1–4. The composite weighted score determines your Data Readiness verdict — and the specific path forward.
          </p>
        </AnimatedSection>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {dimensions.map((d, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#1C1B2E] border border-white/[0.07] rounded-2xl p-5 h-full">
                <div className="font-mono-label text-[9px] tracking-[1px] uppercase text-[#06B6D4] mb-2">{d.weight} weight</div>
                <div className="text-sm font-bold text-white mb-2">{d.title}</div>
                <p className="text-xs text-[#8888A0] leading-relaxed mb-4">{d.desc}</p>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map(s => (
                    <div key={s} className={`w-2.5 h-2.5 rounded-full ${s <= d.score ? 'bg-[#06B6D4]' : 'bg-white/10'}`} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {verdicts.map((v, i) => (
            <StaggerItem key={i}>
              <div className={`border rounded-2xl p-6 ${v.color}`}>
                <div className="font-mono-label text-[9px] tracking-[1px] uppercase text-[#8888A0] mb-1">Score {v.range}</div>
                <div className="text-lg font-bold text-white mb-2">{v.name}</div>
                <p className="text-sm text-[#8888A0] leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>

    {/* ═══ HOW IT CONNECTS ═══ */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#4F46E5] mb-3">
          {"// How It Connects"}
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] mb-4">
          Standalone — or the natural<br />next step after operational clarity.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[580px] mb-14">
          Data Clarity works as an independent service. It also connects directly to Ensight's operational transformation work — because clean processes produce reliable data, and reliable data deserves a system built around it.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-stretch">
          {flowNodes.map((n, i) => (
            <div
              key={i}
              className={`rounded-2xl p-5 border text-center ${n.highlight ? 'bg-[hsl(270,40%,6%)] border-white/[0.07]' : 'bg-card border-border'}`}
            >
              <div className={`text-xl font-black font-mono-label ${n.numColor} mb-1`}>{n.num}</div>
              <div className={`text-sm font-bold ${n.highlight ? 'text-white' : ''} mb-0.5`}>{n.name}</div>
              <div className={`text-xs ${n.highlight ? 'text-[#8888A0]' : 'text-ordinal-dim'} mb-3`}>{n.sub}</div>
              <span className={`font-mono-label text-[8px] tracking-[1px] uppercase px-2 py-0.5 rounded ${n.tagColor}`}>
                {n.tag}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>

    {/* ═══ WHO THIS IS FOR ═══ */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <AnimatedSection>
        <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#4F46E5] mb-3">
          {"// Who This Is For"}
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] mb-4">
          Mid-sized businesses that have<br />outgrown instinct-led decisions.
        </h2>
        <p className="text-base text-ordinal-body leading-relaxed max-w-[580px] mb-14">
          Data Clarity is designed for organisations with 20–200 employees where management is still making decisions based on intuition, lagging reports, or data they don't fully trust.
        </p>
      </AnimatedSection>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sectors.map((s, i) => (
          <StaggerItem key={i}>
            <div className="bg-card border border-border rounded-2xl p-7 h-full hover:-translate-y-1 hover:shadow-md transition-all">
              <div
                className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${s.hsl}15`, color: s.hsl }}
              >
                <s.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    {/* ═══ CTA ═══ */}
    <section className="bg-[hsl(270,40%,6%)] py-24 text-center" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="font-mono-label text-[10px] font-medium tracking-[3px] uppercase text-[#06B6D4] mb-5">
            {"// Get Started"}
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight leading-[1.12] text-white mb-5">
            Ready to see what your<br />data actually says?
          </h2>
          <p className="text-base text-[#8888A0] leading-relaxed max-w-[600px] mx-auto mb-10">
            Start with the Data Clarity Assessment. Fixed fee, 1–2 weeks, and a clear verdict on what your data infrastructure can support — and what needs to change before it can support more.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/data-clarity-assessment"
              className="bg-[#10B981] text-white text-[15px] font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:bg-[#059669] hover:-translate-y-0.5 transition-all no-underline"
            >
              Take the Free Assessment
            </Link>
            <a
              href="mailto:hello@ensight.co?subject=Data Clarity Information"
              className="text-white text-[15px] font-semibold px-8 py-3.5 rounded-xl border border-white/15 hover:bg-white/5 transition-all no-underline"
            >
              Review the offering
            </a>
          </div>
          <div className="font-mono-label text-[10px] text-[#8888A0] tracking-[1px] mt-8">
            hello@ensight.co · Athens, Greece
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default DataClarity;
