import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { ArrowRight, Clock } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import DecorativeShapes from '@/components/DecorativeShapes';

const sectors = ['All', ...Array.from(new Set(caseStudies.map((cs) => cs.sector)))];

const CaseStudies = () => {
  const [activeSector, setActiveSector] = useState('All');

  const filtered = useMemo(
    () => (activeSector === 'All' ? caseStudies : caseStudies.filter((cs) => cs.sector === activeSector)),
    [activeSector],
  );

  return (
    <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20 relative">
      <SEO title="Case Studies · Ensight" description="Real results, measured in weeks. See how we've helped organisations uncover hidden capacity and eliminate process debt." path="/case-studies" ogImage="/og/case-studies.jpg" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ensight-gr.lovable.app/" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://ensight-gr.lovable.app/case-studies" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Case Studies · Ensight",
          "description": "Real results, measured in weeks. See how we've helped organisations uncover hidden capacity and eliminate process debt.",
          "url": "https://ensight-gr.lovable.app/case-studies",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": caseStudies.map((cs, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": cs.title,
              "url": `https://ensight-gr.lovable.app/case-studies/${cs.id}`
            }))
          }
        })}</script>
      </Helmet>
      <DecorativeShapes variant="minimal" />
      <AnimatedSection className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
          <span className="w-[6px] h-[6px] bg-primary rounded-full" />
          Case Studies
        </div>
        <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-tight mb-5">
          Real Results,{' '}
          <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
            Measured in Weeks
          </span>
        </h1>
        <p className="text-lg text-ordinal-body leading-relaxed max-w-[560px] mx-auto">
          See how we've helped organisations uncover hidden capacity and eliminate process debt across industries.
        </p>
      </AnimatedSection>

      {/* Sector filter */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSector(s)}
            className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              activeSector === s
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card border-border text-ordinal-body hover:border-primary/40 hover:text-foreground'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <StaggerChildren className="space-y-5">
        {filtered.map((cs) => (
          <StaggerItem key={cs.id}>
            <Link
              to={`/case-studies/${cs.id}`}
              className="block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-lg hover:scale-[1.005] transition-all duration-200 group no-underline"
            >
              {/* Accent bar */}
              <div className="h-[2px] bg-gradient-to-r from-primary via-ordinal-green to-ordinal-cyan" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-medium text-primary tracking-[3px] uppercase">
                    {cs.sector}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-ordinal-dim">
                    <Clock size={12} />
                    {cs.timeline}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{cs.title}</h2>
                <p className="text-[15px] text-ordinal-body leading-relaxed mb-4">{cs.subtitle}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-background/50 border border-border/50 rounded-lg p-3">
                      <div className="text-[10px] text-ordinal-dim tracking-[1px] uppercase mb-1">
                        {m.label}
                      </div>
                      <div className="text-sm font-bold text-ordinal-green">{m.after}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Read full case study <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
};

export default CaseStudies;
