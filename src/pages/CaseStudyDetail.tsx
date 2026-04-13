import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowLeft, ArrowRight, Clock, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

const BASE_URL = 'https://ensight-gr.lovable.app';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const csIndex = caseStudies.findIndex((c) => c.id === id);
  const cs = csIndex >= 0 ? caseStudies[csIndex] : undefined;
  const prev = csIndex > 0 ? caseStudies[csIndex - 1] : undefined;
  const next = csIndex < caseStudies.length - 1 ? caseStudies[csIndex + 1] : undefined;

  if (!cs) {
    return (
      <div className="max-w-[720px] mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-primary hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${BASE_URL}/case-studies` },
      { "@type": "ListItem", "position": 3, "name": cs.title, "item": `${BASE_URL}/case-studies/${cs.id}` },
    ],
  };

  return (
    <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20">
      <SEO
        title={`${cs.title} | Ensight`}
        description={cs.subtitle}
        path={`/case-studies/${cs.id}`}
        ogImage="/og/case-studies.jpg"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <AnimatedSection>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All Case Studies
        </Link>

        <div className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
          <div className="flex items-center gap-3 mb-4">
            <div className="text-[10px] font-medium text-primary tracking-[3px] uppercase">
              {cs.sector}
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Clock size={12} />
              {cs.timeline}
            </div>
          </div>
          <h1 className="text-[clamp(26px,4.5vw,40px)] font-bold leading-[1.15] tracking-tight mb-3">
            {cs.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">{cs.subtitle}</p>

          {/* Key result pill */}
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-5">
            {cs.keyResult}
          </div>

          {/* Tools badges */}
          <div className="flex flex-wrap gap-2">
            {cs.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="text-xs font-medium">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Outcome highlight */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="text-[10px] font-medium text-primary tracking-[2px] uppercase mb-2">Outcome</div>
          <p className="text-[15px] font-semibold leading-relaxed">{cs.outcome}</p>
        </div>
      </AnimatedSection>

      {/* Challenge */}
      <AnimatedSection className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-8 mb-5">
        <h2 className="text-lg font-semibold mb-3">The Challenge</h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">{cs.challenge}</p>
      </AnimatedSection>

      {/* Approach — Visual Timeline */}
      <AnimatedSection className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-8 mb-5">
        <h2 className="text-lg font-semibold mb-6">Our Approach</h2>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-primary to-accent-blue rounded-full" />
          <div className="space-y-6">
            {cs.approach.map((step, i) => (
              <div key={i} className="relative flex items-start gap-4">
                {/* Dot */}
                <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">{i + 1}</span>
                </div>
                <span className="text-[15px] text-muted-foreground leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="mb-5">
        <h2 className="text-lg font-semibold mb-4">Results</h2>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cs.metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-6">
                <div className="text-[10px] text-muted-foreground tracking-[1px] uppercase mb-4">
                  {m.label}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">Before</div>
                    <div className="text-sm font-medium line-through opacity-60">{m.before}</div>
                  </div>
                  <ArrowRight size={14} className="text-primary flex-shrink-0" />
                  <div className="flex-1 text-right">
                    <div className="text-xs text-primary mb-1">After</div>
                    <div className="text-lg font-bold text-primary">{m.after}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </AnimatedSection>

      {/* Testimonial */}
      {cs.testimonial && (
        <AnimatedSection className="mb-5">
          <div className="bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20 rounded-lg p-8 relative">
            <Quote size={32} className="text-primary/20 absolute top-6 right-6" />
            <blockquote className="text-[17px] font-medium leading-relaxed mb-4 max-w-[90%]">
              "{cs.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{cs.testimonial.author[0]}</span>
              </div>
              <div>
                <div className="text-sm font-semibold">{cs.testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{cs.testimonial.role}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Prev / Next navigation */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {prev ? (
          <Link
            to={`/case-studies/${prev.id}`}
            className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-5 hover:border-primary/40 transition-all group no-underline"
          >
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
              <ChevronLeft size={14} /> Previous
            </div>
            <div className="text-sm font-semibold group-hover:text-primary transition-colors">{prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/case-studies/${next.id}`}
            className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-5 hover:border-primary/40 transition-all group no-underline text-right"
          >
            <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground mb-2">
              Next <ChevronRight size={14} />
            </div>
            <div className="text-sm font-semibold group-hover:text-primary transition-colors">{next.title}</div>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* CTA */}
      <AnimatedSection className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
        <h3 className="text-[22px] font-bold mb-3">See What's Hiding in Your Operations</h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-[440px] mx-auto">
          Start with our free assessment, or book an Operational X-Ray to get the full picture.
        </p>
        <a
          href="/assessment"
          className="inline-block bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-base px-10 py-4 rounded-lg shadow-[0_4px_16px_hsl(261_84%_58%/0.2)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline"
        >
          Take the Free Assessment
        </a>
      </AnimatedSection>
    </div>
  );
};

export default CaseStudyDetail;
