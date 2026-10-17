import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { Target, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import georgeAvatar from '@/assets/george-kondylis-avatar.jpg';
import DecorativeShapes from '@/components/DecorativeShapes';
import { CONTACT_HREF } from '@/lib/contact';

const DESCRIPTION =
  'George Kondylis, founder of Ensight in Athens. Experience in data leadership, business applications, reporting, automation and applied AI.';

const values = [
  {
    icon: Eye,
    title: 'Clear, reliable information',
    desc: 'Agreed definitions and figures that can be traced to their source.',
  },
  {
    icon: Target,
    title: 'Practical solutions',
    desc: 'Reports, applications and automation shaped around the decisions and tasks that matter.',
  },
  {
    icon: Users,
    title: 'Direct collaboration',
    desc: 'You work with me, alongside the people who use the solution every day.',
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
        Business understanding.{' '}
        <span className="bg-gradient-to-br from-primary to-accent-blue bg-clip-text text-transparent">
          Hands-on delivery.
        </span>
      </h1>
      <p className="text-lg text-ordinal-body leading-relaxed max-w-[600px] mx-auto">
        I’m George Kondylis, founder of Ensight, based in Athens. I help businesses make better use of their data, improve everyday processes and build the applications and automation their teams need.
      </p>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[640px] mx-auto mt-4">
        My work combines understanding the business problem with designing and delivering the solution—from reporting and costing to operational applications and AI assistants connected to business data.
      </p>
    </AnimatedSection>

    {/* Background */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-8 md:p-10 mb-12">
      <h2 className="text-xl font-bold mb-4">My experience</h2>
      <div className="text-[15px] text-ordinal-body leading-relaxed space-y-4">
        <p>
          My background spans data, technology and business systems across financial services, real estate, manufacturing and consulting. Earlier roles at KPMG, Piraeus Bank, Sky, Lloyds Banking Group and Efficio gave me experience in analytics, risk, audit and procurement.
        </p>
        <p>
          Since 2018, I have led data and business applications at QSix, an institutional real estate manager operating in London and Berlin. My work covers data architecture, management reporting, operational applications, automation and, more recently, applied AI and governance.
        </p>
        <p>
          Alongside this, I have advised Loux since 2009, working with management on costing, pricing, reporting and ERP-related change. That long-term relationship has involved adapting systems and information as the business evolves.
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
        Business systems hold valuable information, but teams can still spend hours assembling reports, moving data and coordinating work. Ensight brings the data and processes together through reporting, connected workflows and applications built around how the business operates.
      </p>
    </AnimatedSection>

    {/* Principles */}
    <AnimatedSection className="mb-16">
      <h2 className="text-xl font-bold mb-6 px-1">What to expect</h2>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      <Link to="/how-i-work" className="inline-block mt-5 text-sm font-semibold text-primary hover:underline">See how we would work together →</Link>
    </AnimatedSection>

    {/* CTA */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent-blue" />
      <h2 className="text-[22px] font-bold mb-3">What would you like your business to do better?</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
        Tell me about the decision, process or application you want to improve. A first conversation takes thirty minutes and costs nothing.
      </p>
      <a
        href={CONTACT_HREF}
        className="inline-block bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_hsl(261_84%_58%/0.2)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline"
      >
        Email George
      </a>
    </AnimatedSection>
  </div>
);

export default About;
