import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ScanLine, MessageSquareText, FileSearch, Workflow, AppWindow,
  Check, type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import DarkHero from '@/components/sections/DarkHero';
import { heroPrimaryButton, heroSecondaryButton } from '@/components/sections/buttonStyles';
import ClosingCTA from '@/components/sections/ClosingCTA';
import SectionHeading from '@/components/sections/SectionHeading';
import { CONTACT_HREF } from '@/lib/contact';

const TITLE = 'AI & Automation · Ensight';
const DESCRIPTION =
  'AI agents and MCP connections for business-data queries, KPIs and charts, plus custom applications that replace manual spreadsheet workflows.';

const builds: { icon: LucideIcon; title: string; desc: string; hsl: string }[] = [
  { icon: ScanLine, title: 'Documents in, clean data out', desc: 'Supplier invoices, delivery notes and contracts are read automatically, checked against your finance system and sent to the right approver. Exceptions are flagged for review.', hsl: 'hsl(var(--primary))' },
  { icon: MessageSquareText, title: 'AI agents connected to your data', desc: 'Ask for KPIs, investigate changes and request charts or dashboards through an AI assistant connected to approved business data, using MCP servers and APIs.', hsl: 'hsl(var(--accent-blue))' },
  { icon: FileSearch, title: 'Search across your documents', desc: 'Policies, contracts and reports are found by meaning, with the source shown beside the answer.', hsl: 'hsl(var(--primary))' },
  { icon: Workflow, title: 'Approvals and workflows', desc: 'Purchases, discounts and invoices follow one path, with a record of who approved what and when.', hsl: 'hsl(var(--accent-blue))' },
  { icon: AppWindow, title: 'From shared spreadsheets to applications', desc: 'Bring requests, approvals, documents and follow-up into one application, with clear ownership, permissions and a history of changes.', hsl: 'hsl(var(--primary))' },
];

const controls = [
  'Read-only access by default',
  'Separate, limited credentials for each system',
  'A person approves before anything posts, pays or commits',
  'Low-confidence results are flagged for review',
  'Query and action records appropriate to the workflow',
  'A written AI usage policy your team can follow',
];

const proof = [
  {
    title: 'Invoice extraction',
    client: 'QSix',
    href: '/case-studies/invoice-extraction',
    desc: 'Supplier invoices are read automatically, checked against the finance system and routed for human approval.',
  },
  {
    title: 'Governed access to live data',
    client: 'QSix',
    href: '/case-studies/governed-ai-access',
    desc: 'Finance and investment staff query the data warehouse in plain language, with scoped read access and an audit log.',
  },
  {
    title: 'Loan servicing platform',
    client: 'HMS',
    href: '/case-studies/loan-servicing',
    desc: 'A servicing operation spread across separate tools and email, brought into one system.',
  },
];

const AiAutomation = () => (
  <div>
    <SEO title={TITLE} description={DESCRIPTION} path="/ai-automation" ogImage="/og/operational-transformation.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI & Automation',
        description: DESCRIPTION,
        url: 'https://www.ensight.gr/ai-automation',
        provider: { '@type': 'Organization', name: 'Ensight', url: 'https://www.ensight.gr' },
      })}</script>
    </Helmet>

    <DarkHero
      eyebrow="AI & Automation"
      headline={
        <>
          Ask your data.{' '}
          <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">Move the work forward.</span>
        </>
      }
      subhead="I build AI assistants that answer questions from your business data, and applications that bring spreadsheets, approvals and manual tasks into a shared workflow. The solution connects to the systems you already use, with access and responsibilities agreed from the start."
    >
      <a href={CONTACT_HREF} className={heroPrimaryButton}>Email George</a>
      <a href="#what-i-build" className={heroSecondaryButton}>See what I build</a>
    </DarkHero>

    {/* What I build */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 scroll-mt-20" id="what-i-build">
      <SectionHeading eyebrow="What I Build" heading="Practical ways to improve daily work" />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {builds.map((b, i) => (
          <StaggerItem key={b.title} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
            <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm h-full">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
              <div
                className="mb-3 w-10 h-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: `${b.hsl}15`, color: b.hsl }}
              >
                <b.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold mb-1.5">{b.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{b.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>

    <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20 scroll-mt-24" id="ai-data">
      <SectionHeading eyebrow="AI Agents & MCP" heading="Have a conversation with your business data" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 text-[15px] text-ordinal-body leading-relaxed">
          <p>Before a meeting, you need the sales position, the gap to target and the customers behind it. An AI assistant can bring those questions into one conversation, using the data your business already holds.</p>
          <p>I build agents and MCP connections that let users query approved ERP, finance and warehouse data in plain language. Depending on the agreed scope, the assistant can return KPIs, comparisons, charts and dashboards, with access through a suitable desktop or mobile interface.</p>
          <p>MCP (Model Context Protocol) provides a standard way for an AI assistant to call connected tools. I build the connection and the business logic around it: which sources it can query, how metrics are calculated and what each user may access.</p>
          <p>The integration enforces permissions for each request. Answers show their source, reporting period and data freshness. Ambiguous questions need clarification, and AI-generated analysis still needs review.</p>
          <Link to="/case-studies/governed-ai-access" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">See the QSix AI-access case study <ArrowRight size={14} /></Link>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
          <p className="text-[10px] font-medium tracking-[2px] uppercase text-primary mb-4">Example questions · illustrative workflow</p>
          <ol className="space-y-4">
            {[
              { question: 'How are sales performing against target this month?', result: 'A KPI summary with the reporting period and comparison basis.' },
              { question: 'Which customers explain the largest part of the gap?', result: 'A ranked breakdown linked to the underlying figures.' },
              { question: 'Chart their performance against the same period last year.', result: 'A comparison chart using agreed definitions and dates.' },
              { question: 'Put these views into a dashboard for the meeting.', result: 'A dashboard assembled from the approved queries and views.' },
            ].map((item, index) => (
              <li key={item.question} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <p className="font-semibold text-foreground mb-1"><span className="text-primary mr-2">{index + 1}.</span>{item.question}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <section className="bg-muted/40 border-y border-border py-20 scroll-mt-24" id="business-applications">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <SectionHeading eyebrow="Application Development" heading="When the spreadsheet becomes the process" />
        <p className="text-[15px] text-ordinal-body leading-relaxed max-w-[760px] mb-8">Several people update the same file. Approvals sit in email, supporting documents live in separate folders, and one person knows which version is current. A shared application can bring the work together—from the first request to the final decision and follow-up.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'One place to do the work', body: 'Shared records, documents and task ownership. Each person can see what needs attention and what happens next.' },
            { title: 'Checks built into the process', body: 'Required information, validation and approval rules before a request moves forward. Revised amounts or quotes can trigger a new review.' },
            { title: 'A record the team can follow', body: 'Role-based access and a history of changes, decisions and supporting documents, connected to relevant business systems.' },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold mb-3">Example: a purchase request through to approval</h3>
          <p className="text-[15px] text-ordinal-body leading-relaxed">A colleague submits a request with a quote. The application checks the required information, routes it to the appropriate approver and records the decision against that version. If the quote changes, it returns for review. The requester can follow its status without chasing an email thread.</p>
          <p className="text-sm text-ordinal-body leading-relaxed mt-4">Other starting points include customer follow-up, budget tracking, document review and operational task management. We check whether an existing tool or a simple automation can meet the need before building a new application. Excel can remain useful for analysis and exports.</p>
        </div>
      </div>
    </section>

    {/* Controls */}
    <section className="bg-[hsl(270,40%,6%)] py-24" id="controls">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">Controls</div>
          <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] text-white mb-12">
            How it stays under control
          </h2>
        </AnimatedSection>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {controls.map((c) => (
            <StaggerItem key={c}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-5 h-full flex gap-3 items-start">
                <Check size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-[15px] text-white/85 leading-relaxed">{c}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>

    {/* Proof */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <SectionHeading eyebrow="Proof" heading="Examples of the work" />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {proof.map((p) => (
          <StaggerItem key={p.title}>
            <Link
              to={p.href}
              className="block bg-card border border-border rounded-lg p-7 h-full no-underline hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="text-[10px] font-medium tracking-[2px] uppercase text-primary mb-2">{p.client}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
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
      heading="Which question or process should we start with?"
      body="Bring a business question that takes too long to answer, or a spreadsheet and email workflow your team depends on. We will discuss the sources, people and decisions involved, then agree a practical first step, scope and timing."
    />
  </div>
);

export default AiAutomation;
