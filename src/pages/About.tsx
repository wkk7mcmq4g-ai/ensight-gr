import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { Target, Eye, Zap, Users } from 'lucide-react';
import georgeAvatar from '@/assets/george-kondylis.jpg';
import DecorativeShapes from '@/components/DecorativeShapes';
import { CONTACT_HREF } from '@/lib/contact';

const team = [
  {
    name: 'George Kondylis',
    role: 'Founder & Principal',
    bio: 'Eighteen years in data and finance systems across banking, institutional real estate, consulting and manufacturing \u2014 building warehouses, costing models and the reporting that management actually runs on. George built Ensight on one observation: most companies are not short of data, they are short of numbers they can defend.',
  },
];

const values = [
  {
    icon: Eye,
    title: 'One Number, Defensible',
    desc: 'Every figure has one definition, agreed by the people who use it, and can be traced back to where it came from.',
  },
  {
    icon: Target,
    title: 'Precision Over Volume',
    desc: 'No 200-page reports. We answer the three or four questions the management team keeps asking and cannot currently settle.',
  },
  {
    icon: Zap,
    title: 'Speed to Impact',
    desc: 'Engagements are measured in weeks. You see the first real answer before the invoice lands.',
  },
  {
    icon: Users,
    title: 'Embedded, Not External',
    desc: 'We work alongside your team, not from a boardroom. The real cost drivers are on the floor, not in the org chart.',
  },
];

const About = () => (
  <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20 relative">
    <SEO title="About · Ensight" description="Eighteen years in data, costing and finance systems. We build management information businesses can defend \u2014 and fix the process underneath it first." path="/about" ogImage="/og/about.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ensight-gr.lovable.app/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ensight-gr.lovable.app/about" }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Ensight",
        "description": "Eighteen years in data, costing and finance systems. We build management information businesses can defend \u2014 and fix the process underneath it first.",
        "url": "https://ensight-gr.lovable.app/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Ensight",
          "url": "https://ensight-gr.lovable.app",
          "founder": {
            "@type": "Person",
            "name": "George Kondylis",
            "jobTitle": "Founder & Principal"
          }
        }
      })}</script>
    </Helmet>
    <DecorativeShapes variant="circles" />
    {/* Hero */}
    <AnimatedSection className="text-center mb-20">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
        <span className="w-[6px] h-[6px] bg-primary rounded-full" />
        About Ensight
      </div>
      <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-tight mb-5">
        We Find the Capacity{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          Already Inside
        </span>{' '}
        Your Organisation
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[600px] mx-auto">
        Based in Athens, Ensight is an operational consultancy that helps growing companies eliminate process debt — the invisible inefficiency that compounds as you scale.
      </p>
    </AnimatedSection>

    {/* Story */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-10 mb-12">
      <h2 className="text-xl font-bold mb-4">Our Story</h2>
      <div className="text-[15px] text-ordinal-body leading-relaxed space-y-4">
        <p>
          Ensight was founded on a simple observation: most companies are not short of data. They are short of numbers they can defend. The ERP records every transaction faithfully and still cannot say what a product costs to make and move, or what a customer actually earns.
        </p>
        <p>
          The reason is almost never the reporting tool. It is <strong className="text-foreground">process debt</strong> — the temporary workarounds that became permanent, each one quietly breaking the link between what happened and what the numbers say happened. Like technical debt it compounds, and unlike technical debt almost nobody is measuring it.
        </p>
        <p>
          So we work in that order. The Operational X-Ray makes the gap visible and quantified; the process gets fixed; and only then is the costing, the reporting and the automation built on top of it. Numbers built any other way are confident and wrong.
        </p>
      </div>
    </AnimatedSection>

    {/* Values */}
    <AnimatedSection className="mb-16">
      <h2 className="text-xl font-bold mb-6 text-center">How We Work</h2>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map((v) => (
          <StaggerItem key={v.title}>
            <div className="bg-card border border-border rounded-lg p-7 h-full">
              <v.icon className="text-primary mb-3" size={22} />
              <h3 className="text-base font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-ordinal-body leading-relaxed">{v.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </AnimatedSection>

    {/* Team */}
    <AnimatedSection className="mb-16">
      <h2 className="text-xl font-bold mb-6 text-center">The Team</h2>
      <div className="max-w-[360px] mx-auto">
        {team.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-7 text-center">
            <img
              src={georgeAvatar}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              loading="lazy"
              width={512}
              height={512}
            />
            <h3 className="text-base font-bold mb-1">{t.name}</h3>
            <div className="text-[10px] text-primary tracking-[1px] uppercase mb-3 font-medium">
              {t.role}
            </div>
            <p className="text-sm text-ordinal-body leading-relaxed">{t.bio}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>

    {/* CTA */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
      <h2 className="text-[22px] font-bold mb-3">Ready to Uncover Your Hidden Capacity?</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
        Get in touch to discuss an Operational X-Ray for your team.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={CONTACT_HREF}
          className="inline-block bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_hsl(261_84%_58%/0.2)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline"
        >
          Book an Operational X-Ray
        </a>
      </div>
    </AnimatedSection>
  </div>
);

export default About;
