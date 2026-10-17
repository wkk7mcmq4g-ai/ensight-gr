import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowLeft, ArrowRight, Expand, X, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import type { CaseStudy } from '@/data/caseStudies';
import SEO from '@/components/SEO';
import { ENQUIRY_HREF } from '@/lib/contact';

const presentations = {
  'loux-softone-bi': {
    headline: 'Sales, stock and cash in one shared view.',
    intro: 'Loux teams can compare performance across the ERP change, plan stock and orders, and prioritise collections using the same business figures.',
    image: '/videos/loux-dashboard-preview.jpg',
    imageTitle: 'Understand what changed, and who drove it',
    caption: 'Compare sales with the same period last year, review the monthly trend and identify the customers behind the change.',
    alt: 'Business Insights management overview showing sales variance, monthly trend and customer contribution in Greek',
    demoId: 'loux-demo', video: '/videos/loux-business-insights.mp4', duration: '43 seconds',
    videoNote: 'The same application with invented data and neutral Business Insights branding. Greek interface and on-screen captions.',
    built: [
      'A shared application for sales and margin comparisons, bringing history from the previous ERP together with SoftOne.',
      'Order and stock views showing outstanding quantities, loading dates, delays and days of cover.',
      'Receivables and cash planning views for collection priorities, receipts, payments and cheques, with supporting figures behind the P&L.',
    ],
  },
  'fhl-entersoft-reporting': {
    headline: 'See what is owed and what still needs to ship.',
    intro: 'FHL can review customer balances invoice by invoice and open orders line by line, using reporting connected to Entersoft and reconciled to the books.',
    image: '/videos/fhl-reporting-preview.jpg?v=20261017-el',
    imageTitle: 'Bring purchasing and supplier balances together',
    caption: 'Review purchases by supplier, amounts owed and overdue balances, alongside the pattern of spending through the year.',
    alt: 'FHL demonstration showing supplier purchases, outstanding and overdue balances and a monthly spending chart',
    demoId: 'fhl-demo', video: '/videos/fhl-demo.mp4?v=20261017-el', duration: '36 seconds',
    videoNote: 'A tour of the reporting interface using demonstration data. Silent video with Greek on-screen captions.',
    built: [
      'A reporting layer connected to Entersoft through a read-only database login, with figures reconciled before the screens were built.',
      'Customer balances carried across years, with invoice-level detail, partial payment matching and days past due.',
      'Open-order reporting showing quantities shipped, quantities remaining and time waiting, alongside wider sales, production, stock, cash and P&L views.',
    ],
  },
};

export default function FeaturedCaseStudy({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);
  const view = presentations[study.id as keyof typeof presentations];
  return <main className="max-w-[1120px] mx-auto px-6 md:px-10 pt-28 pb-20">
    <SEO title={view.headline + ' | ' + study.client + ' | Ensight'} description={view.intro} path={'/case-studies/' + study.id} ogImage="/og/case-studies.jpg" />
    <Helmet><script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ensight.gr/' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://www.ensight.gr/case-studies' },
      { '@type': 'ListItem', position: 3, name: view.headline, item: 'https://www.ensight.gr/case-studies/' + study.id },
    ] })}</script></Helmet>
    <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-10"><ArrowLeft size={15} />All work</Link>
    <header className="grid md:grid-cols-[1fr_auto] gap-8 items-start pb-12 border-b border-border">
      <div><p className="text-xs uppercase tracking-[2px] text-primary font-semibold mb-4">{study.client} · {study.platform}</p><h1 className="text-[clamp(32px,5vw,56px)] font-bold tracking-tight leading-[1.08] max-w-[760px] mb-6">{view.headline}</h1><p className="text-lg text-muted-foreground leading-relaxed max-w-[720px]">{view.intro}</p><div className="flex flex-wrap gap-5 items-center mt-7"><a href={'#' + view.demoId} className="inline-flex items-center gap-2 text-primary font-semibold">Watch the walkthrough <ArrowRight size={16} /></a><span className="text-xs text-muted-foreground">{study.timeline}</span></div></div>
      <div className="row-start-1 md:row-auto rounded-xl border border-border bg-white p-5 w-fit"><img src={study.clientLogo} alt={study.client} className="h-16 w-36 object-contain" /></div>
    </header>

    <section className="py-12 grid md:grid-cols-[200px_1fr] gap-5" aria-labelledby="case-problem">
      <h2 id="case-problem" className="text-2xl font-semibold"><span className="block text-xs text-primary mb-2">01</span>The problem</h2>
      <p className="text-muted-foreground leading-relaxed text-base">{study.challenge}</p>
    </section>
    <section className="py-12 border-t border-border" aria-labelledby="case-built">
      <div className="grid md:grid-cols-[200px_1fr] gap-5 mb-10"><h2 id="case-built" className="text-2xl font-semibold"><span className="block text-xs text-primary mb-2">02</span>What I built</h2><ul className="space-y-5">{view.built.map(text => <li key={text} className="flex gap-3 text-muted-foreground leading-relaxed"><CheckCircle2 size={19} className="text-primary shrink-0 mt-1" /><span>{text}</span></li>)}</ul></div>
      <figure className="m-0 rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
        <button type="button" onClick={() => setExpanded(true)} className="group relative block w-full bg-muted/40 focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary focus-visible:outline-offset-[-4px]" aria-label={'Expand image: ' + view.imageTitle}>
          <img src={view.image} alt={view.alt} width="1080" height="1080" loading="lazy" className="w-full max-h-[760px] object-contain" />
          <span className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-foreground shadow-lg border border-border text-sm font-semibold"><Expand size={16} />Expand image</span>
        </button>
        <figcaption className="p-6 md:p-8"><h3 className="text-xl font-semibold mb-2">{view.imageTitle}</h3><p className="text-muted-foreground leading-relaxed">{view.caption}</p><p className="text-xs text-muted-foreground mt-3">Frame from the application walkthrough. Demonstration data.</p></figcaption>
      </figure>
      <div id={view.demoId} className="scroll-mt-24 grid md:grid-cols-[1fr_1.2fr] gap-8 mt-10 rounded-2xl bg-[hsl(270,40%,10%)] text-white p-6 md:p-8 items-center">
        <div><p className="text-xs uppercase tracking-widest text-violet-300 mb-3">{view.duration} · Video walkthrough</p><h3 className="text-2xl font-semibold mb-4">See the application in use</h3><p id={view.demoId + '-description'} className="text-white/70 text-sm leading-relaxed">{view.videoNote}</p></div>
        <video controls playsInline preload="none" poster={view.image} width={1080} height={1080} aria-label={study.client + ' application walkthrough'} aria-describedby={view.demoId + '-description'} className="w-full rounded-xl bg-black"><source src={view.video} type="video/mp4" />Your browser does not support embedded video. <a href={view.video}>Watch the walkthrough</a>.</video>
      </div>
      <details className="mt-6 rounded-xl border border-border p-5"><summary className="cursor-pointer font-semibold">Connection and delivery details</summary><div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">{(study.deliveryNotes ?? study.approach.slice(0, 3)).map(note => <p key={note}>{note}</p>)}<p className="pt-3 border-t border-border">{study.tools.join(' · ')}</p></div></details>
    </section>

    <section className="py-12 border-t border-border" aria-labelledby="case-changed"><h2 id="case-changed" className="text-2xl font-semibold mb-6"><span className="block text-xs text-primary mb-2">03</span>What changed</h2><p className="text-muted-foreground leading-relaxed max-w-[820px] mb-8">{study.outcome}</p><div className="grid md:grid-cols-3 gap-4">{study.metrics.map(metric => <article key={metric.label} className="rounded-xl border border-primary/15 bg-primary/5 p-6"><h3 className="text-sm font-semibold mb-5">{metric.label}</h3><p className="text-xs text-muted-foreground mb-1">Previously</p><p className="text-sm text-muted-foreground mb-5">{metric.before}</p><p className="text-xs text-primary mb-1">Now</p><p className="text-lg font-semibold leading-snug">{metric.after}</p></article>)}</div></section>
    <section className="rounded-2xl bg-[hsl(270,40%,10%)] text-white p-8 md:p-12 text-center"><h2 className="text-3xl font-semibold mb-4">What does your team need to see or do differently?</h2><p className="text-white/70 mb-7 max-w-xl mx-auto">Bring one business question or manual process. We can discuss a practical first step in a free thirty-minute conversation.</p><a href={ENQUIRY_HREF} className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 font-semibold text-white hover:bg-primary/90">Discuss your project <ArrowRight size={17} /></a></section>
    <Link to="/case-studies" className="inline-flex items-center gap-2 mt-8 text-sm text-primary font-semibold"><ArrowLeft size={15} />Explore more work</Link>

    <Dialog.Root open={expanded} onOpenChange={setExpanded}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm" /><Dialog.Content className="fixed z-[201] inset-3 sm:inset-6 bg-background rounded-xl overflow-auto p-5 sm:p-8"><Dialog.Title className="text-lg font-semibold pr-12">{view.imageTitle}</Dialog.Title><Dialog.Description className="text-sm text-muted-foreground mt-2 mb-6">{view.caption} Demonstration data.</Dialog.Description><img src={view.image} alt={view.alt} width="1080" height="1080" className="w-full max-w-[1080px] h-auto mx-auto" /><Dialog.Close className="fixed right-7 top-7 sm:right-10 sm:top-10 p-2 rounded-full bg-background border border-border shadow hover:bg-muted"><X size={22} /><span className="sr-only">Close image</span></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
  </main>;
}
