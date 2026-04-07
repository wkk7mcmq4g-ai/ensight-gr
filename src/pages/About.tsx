import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
import AnimatedSection, { StaggerChildren, StaggerItem } from '@/components/home/AnimatedSection';
import { Target, Eye, Zap, Users } from 'lucide-react';
import georgeAvatar from '@/assets/george-kondylis.jpg';
import DecorativeShapes from '@/components/DecorativeShapes';

const team = [
  {
    name: 'George Kondylis',
    role: 'Founder & Principal',
    bio: 'Direct operational experience across tourism, financial services, and manufacturing/export. George built Ensight on one observation: most companies don\'t have a technology problem — they have a process problem. The Operational X-Ray methodology exists to make that visible, fast.',
  },
];

const values = [
  {
    icon: Eye,
    title: 'Radical Visibility',
    desc: 'You can\'t fix what you can\'t see. We make the invisible visible before recommending a single change.',
  },
  {
    icon: Target,
    title: 'Precision Over Volume',
    desc: 'We don\'t deliver 200-page reports. We find the 3-5 changes that unlock the most capacity.',
  },
  {
    icon: Zap,
    title: 'Speed to Impact',
    desc: 'Our engagements are measured in weeks, not months. You see results before the invoice lands.',
  },
  {
    icon: Users,
    title: 'Embedded, Not External',
    desc: 'We work alongside your team, not from a boardroom. Real insight comes from the floor, not the org chart.',
  },
];

const About = () => (
  <div className="max-w-[900px] mx-auto px-6 pt-28 pb-20 relative">
    <SEO title="About · Ensight" description="Meet the team behind Ensight. We find the capacity already inside your organisation by eliminating process debt." path="/about" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ensight-gr.lovable.app/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://ensight-gr.lovable.app/about" }
        ]
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
        <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
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
          Ensight was founded on a simple observation: most companies don't have a people problem or a technology problem — they have a process problem. Teams are working hard, tools are in place, yet capacity keeps disappearing into workarounds, re-work, and coordination overhead.
        </p>
        <p>
          We call this <strong className="text-foreground">Process Debt</strong>. Like technical debt, it accumulates silently and compounds over time. Unlike technical debt, almost nobody is measuring it.
        </p>
        <p>
          Our Operational X-Ray methodology was built to make process debt visible, quantifiable, and fixable — fast. We embed with your team, map what's really happening, and deliver targeted changes that unlock trapped capacity within weeks, not months.
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
              <v.icon className="text-electric-glow mb-3" size={22} />
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
            <div className="font-mono-label text-[10px] text-electric-glow tracking-[1px] uppercase mb-3">
              {t.role}
            </div>
            <p className="text-sm text-ordinal-body leading-relaxed">{t.bio}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>

    {/* CTA */}
    <AnimatedSection className="bg-card border border-border rounded-lg p-10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-ordinal-green to-ordinal-cyan" />
      <h2 className="text-[22px] font-bold mb-3">Ready to Uncover Your Hidden Capacity?</h2>
      <p className="text-[15px] text-ordinal-body leading-relaxed mb-6 max-w-[440px] mx-auto">
        Start with our free Process Debt Assessment, or get in touch to discuss an Operational X-Ray for your team.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/assessment"
          className="inline-block bg-ordinal-green text-white font-bold text-base px-10 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 transition-all duration-200 no-underline"
        >
          Take the Assessment
        </a>
      </div>
    </AnimatedSection>
  </div>
);

export default About;
