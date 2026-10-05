import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ScanLine, MessageSquareText, FileSearch, Workflow, AppWindow,
  FileWarning, Repeat, Unplug, Eye, Check, type LucideIcon,
} from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import DarkHero from '@/components/sections/DarkHero';
import { heroPrimaryButton, heroSecondaryButton } from '@/components/sections/buttonStyles';
import ClosingCTA from '@/components/sections/ClosingCTA';
import SectionHeading from '@/components/sections/SectionHeading';
import { CONTACT_HREF } from '@/lib/contact';

const TITLE = 'AI & Automation · Ensight';
const DESCRIPTION =
  'Invoices read instead of retyped, approvals with a record, and plain-language answers from your own data, with a person approving anything that posts or pays.';

const builds: { icon: LucideIcon; title: string; desc: string; hsl: string }[] = [
  { icon: ScanLine, title: 'Documents in, clean data out', desc: 'Supplier invoices, delivery notes and contracts are read automatically, checked against your finance system and sent to the right approver. Nobody retypes them.', hsl: 'hsl(var(--primary))' },
  { icon: MessageSquareText, title: 'Answers from your own data', desc: 'A manager asks a question in plain language and gets the answer from live finance, sales or portfolio data. Access is read-only, limited per person and logged.', hsl: 'hsl(var(--accent-blue))' },
  { icon: FileSearch, title: 'Search across your documents', desc: 'Policies, contracts and reports are found by meaning, with the source shown beside the answer.', hsl: 'hsl(var(--primary))' },
  { icon: Workflow, title: 'Approvals and workflows', desc: 'Purchases, discounts and invoices follow one path, with a record of who approved what and when.', hsl: 'hsl(var(--accent-blue))' },
  { icon: AppWindow, title: 'Business applications', desc: 'When off-the-shelf software makes you bend around it, I build the application the work needs and connect it to the ERP.', hsl: 'hsl(var(--primary))' },
];

const controls = [
  'Read-only access by default',
  'Separate, limited credentials for each system',
  'A person approves before anything posts, pays or commits',
  'Low-confidence results are flagged, never guessed',
  'Every action is logged: what the system read, and who approved it',
  'A written AI usage policy your team can follow',
];

const stuck: { icon: LucideIcon; title: string; desc: string; color: string; iconColor: string }[] = [
  { icon: FileWarning, title: 'Approval by email', desc: 'A purchase, a discount or an invoice gets approved in a thread. Three months later nobody can reconstruct who authorised it, or when.', color: 'bg-ordinal-pink', iconColor: 'hsl(var(--ordinal-pink))' },
  { icon: Repeat, title: 'The same work, every month', desc: 'A report, a reconciliation or a file transfer that somebody rebuilds by hand on the same day of every month.', color: 'bg-ordinal-amber', iconColor: 'hsl(var(--ordinal-amber))' },
  { icon: Unplug, title: "Systems that don't talk", desc: 'The ERP, the CRM and the warehouse system each hold part of the answer, and a person is the link between them.', color: 'bg-ordinal-cyan', iconColor: 'hsl(var(--ordinal-cyan))' },
  { icon: Eye, title: 'The invisible queue', desc: 'Work piles up at one point and nobody sees it until it is a crisis.', color: 'bg-primary', iconColor: 'hsl(var(--primary))' },
];

const proof = [
  {
    title: 'Invoice extraction',
    client: 'QSix',
    href: '/case-studies/invoice-extraction',
    desc: 'Supplier invoices are read with Azure Document Intelligence, validated against the finance system and routed for approval. Nothing posts without a person.',
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
          Take the manual work out.{' '}
          <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">Keep a person on the decisions.</span>
        </>
      }
      subhead="AI is good at reading messy documents and searching what nobody has time to search. It is unreliable at anything that must be exactly right every time, unless the system is designed for that. I design for it: a person approves anything that posts, pays or commits, and every step leaves a record."
    >
      <a href={CONTACT_HREF} className={heroPrimaryButton}>Book a call</a>
      <a href="#what-i-build" className={heroSecondaryButton}>See what I build</a>
    </DarkHero>

    {/* What I build */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 scroll-mt-20" id="what-i-build">
      <SectionHeading eyebrow="What I Build" heading="Five things I build" />
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

    {/* Where the work gets stuck */}
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="problems">
      <SectionHeading eyebrow="Sound Familiar?" heading="Four places the work gets stuck" />
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stuck.map((p) => (
          <StaggerItem key={p.title}>
            <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm h-full">
              <div className={`absolute top-0 left-0 w-full h-[2px] ${p.color}`} />
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

    {/* Proof */}
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
      <SectionHeading eyebrow="Proof" heading="In production, not in a demo" />
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
      heading="Start with one process"
      body="You do not have to commit to a programme to find out whether this works. Pick the task that costs your team the most time. I map it, remove what should not be there, and automate what is left, in four to six weeks."
    />
  </div>
);

export default AiAutomation;
