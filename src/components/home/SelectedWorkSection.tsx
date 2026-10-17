import { CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';
import { caseStudies } from '@/data/caseStudies';
import ClientMark from '@/components/sections/ClientMark';
import logoLoux from '@/assets/logo-loux.png';
import logoFhl from '@/assets/logo-fhl.png';

type Props = {
  /** Case study ids to show. Defaults to the three that lead the list. */
  ids?: string[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
};

const cardTitles: Record<string, string> = {
  'costing-bi-platform': 'Product & customer profitability',
  'fhl-entersoft-reporting': 'Receivables & open orders',
  'invoice-extraction': 'Invoice capture & approval',
};

const SelectedWorkSection = ({
  ids,
  eyebrow = 'Selected Work',
  heading = 'What this looks like in practice',
  lead = 'Product profitability at Loux, receivables and open-order reporting at FHL, and invoice automation at QSix.',
}: Props) => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-14 md:py-16" id="work">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        {eyebrow}
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        {heading}
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[580px] mb-12">
        {lead}
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {(ids ? ids.map((id) => caseStudies.find((c) => c.id === id)!).filter(Boolean) : caseStudies.slice(0, 3)).map((cs) => (
        <StaggerItem key={cs.id}>
          <Link
            to={`/case-studies/${cs.id}`}
            className="flex flex-col bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 h-full no-underline group"
          >
            <div className="text-[10px] font-medium tracking-[2px] uppercase text-primary mb-2">
              {cs.sector}
            </div>
            <div className="h-20 flex items-center mb-4">
              <ClientMark client={cs.client} logo={cs.clientLogo} height={Math.min(2 * (cs.logoScale ?? 1), 4.5)} />
            </div>
            <p className="text-sm font-semibold text-foreground mb-2">{cs.client}</p>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{cardTitles[cs.id] ?? cs.title}</h3>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4">
              {cs.keyResult}
            </div>
            <ul className="space-y-3 mb-5">
              {cs.metrics.slice(0, 2).map((m) => (
                <li key={m.label} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium text-foreground">{m.label}:</span> {m.after}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              View case study <ArrowRight size={14} />
            </span>
          </Link>
        </StaggerItem>
      ))}
    </StaggerChildren>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {[
        { title: 'Loux Business Insights', company: 'Loux', logo: logoLoux, duration: '43 seconds', poster: '/videos/loux-business-insights-poster.jpg', href: '/case-studies/loux-softone-bi#loux-demo', description: 'See the reporting connected to SoftOne.' },
        { title: 'FHL reporting', company: 'FHL', logo: logoFhl, duration: '36 seconds', poster: '/videos/fhl-demo-poster.jpg', href: '/case-studies/fhl-entersoft-reporting#fhl-demo', description: 'Explore receivables and open orders from Entersoft.' },
      ].map((demo) => (
        <Link key={demo.href} to={demo.href} className="group flex items-center gap-5 rounded-xl border border-border bg-card p-4 hover:border-primary/40 transition-colors">
          <div className="relative w-28 sm:w-36 aspect-square shrink-0 overflow-hidden rounded-lg bg-muted">
            <img src={demo.poster} alt="" width="1080" height="1080" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"><span className="rounded-full bg-primary p-3 text-primary-foreground shadow-lg"><Play size={20} fill="currentColor" aria-hidden="true" /></span></span>
          </div>
          <div className="min-w-0"><img src={demo.logo} alt={demo.company} loading="lazy" className="h-10 w-28 max-w-full object-contain object-left mb-3" /><p className="text-xs font-medium text-primary mb-2">Video demo · {demo.duration}</p><h3 className="font-semibold mb-2">{demo.title}</h3><p className="text-sm text-muted-foreground">{demo.description}</p><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-3">Watch the demo <ArrowRight size={14} /></span></div>
        </Link>
      ))}
    </div>
  </section>
);

export default SelectedWorkSection;
