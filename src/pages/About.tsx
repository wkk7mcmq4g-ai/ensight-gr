import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { Target, Eye, Zap, Users } from 'lucide-react';
import georgeAvatar from '@/assets/george-kondylis-avatar.jpg';
import DecorativeShapes from '@/components/DecorativeShapes';
import { CONTACT_HREF } from '@/lib/contact';

const DESCRIPTION =
  'George Kondylis: eighteen years in data, costing and finance systems, from bank audit to a seventeen-year advisory relationship with a Greek manufacturer.';

const values = [
  {
    icon: Eye,
    title: 'One number, defensible',
    desc: 'Every figure has one definition, agreed by the people who use it, and can be traced back to its source.',
  },
  {
    icon: Target,
    title: 'Precision over volume',
    desc: 'No 200-page reports. I answer the three or four questions the management team keeps asking and cannot settle.',
  },
  {
    icon: Zap,
    title: 'Speed to impact',
    desc: 'Engagements are measured in weeks. You see the first real answer before the invoice lands.',
  },
  {
    icon: Users,
    title: 'Alongside your team',
    desc: 'I work where the work happens. The real cost drivers are on the floor, not in the org chart.',
  },
];

const About = () => (
  <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20 relative">
    <SEO title="About · Ensight" description={DESCRIPTION} path="/about" ogImage="/og/about.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ensight.gr/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.ensight.gr/about" }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Ensight",
        "description": DESCRIPTION,
        "url": "https://www.ensight.gr/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Ensight",
          "url": "https://www.ensight.gr",
          "founder": {
            "@type": "Person",
            "name": "George Kondylis",
            "jobTitle": "Founder"
          }
        }
      })}</script>
    </Helmet>
    <DecorativeShapes variant="circles" />

    {/* Hero */}
    <AnimatedSection className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7">
        <span className="w-[6px] h-[6px] bg-primary rounded-full" />
        About
      </div>
      <img
        src={georgeAvatar}
        alt="George Kondylis"
        className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
        width={384}
        height={384}
      />
      <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-[1.1] tracking-tight mb-5">
        I build the numbers a management team{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          can defend
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[600px] mx-auto">
        Ensight is my consulting practice, based in Athens. I work with mid-sized companies on data, reporting and the automation that keeps both running.
      </p>
    </AnimatedSection>

    {/* Background */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-8 md:p-10 mb-12">
      <h2 className="text-xl font-bold mb-4">Where I learned this</h2>
      <div className="text-[15px] text-ordinal-body leading-relaxed space-y-4">
        <p>
          I started in IT audit at KPMG in Athens and in risk data at Piraeus Bank. In London I worked on analytics at Sky, as a data specialist in internal audit at Lloyds Banking Group, and as analytics lead at Efficio, a procurement consultancy.
        </p>
        <p>
          Audit set a standard that has stayed with me. A number is only useful if you can show where it came from and defend how it was calculated.
        </p>
        <p>
          Since 2009 I have advised Loux, a Greek soft-drinks manufacturer, on costing, pricing and reporting, including its move to SoftOne. Since 2018 I have run data and business applications for QSix, an institutional real estate manager in London and Berlin. There I built the data warehouse, the reporting platform, and the firm's AI tooling and policy.
        </p>
      </div>
      <div className="mt-6 pt-5 border-t border-border text-[13px] text-ordinal-dim">
        MSc, University of Warwick · BSc Computer Science, Lancaster University
      </div>
    </AnimatedSection>

    {/* Why Ensight exists */}
    <AnimatedSection className="mb-12 px-1">
      <h2 className="text-xl font-bold mb-4">Why Ensight exists</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed">
        Most companies are not short of data. They are short of numbers they can defend. The ERP records every transaction and still cannot say what a product costs to make and move, or what a customer earns. Closing that gap is the work.
      </p>
    </AnimatedSection>

    {/* Principles */}
    <AnimatedSection className="mb-16">
      <h2 className="text-xl font-bold mb-6 px-1">What to expect</h2>
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

    {/* CTA */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
      <h2 className="text-[22px] font-bold mb-3">Have a question your numbers can't answer?</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
        Tell me what it is. A first call takes thirty minutes and costs nothing.
      </p>
      <a
        href={CONTACT_HREF}
        className="inline-block bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_hsl(261_84%_58%/0.2)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline"
      >
        Book a call
      </a>
    </AnimatedSection>
  </div>
);

export default About;
