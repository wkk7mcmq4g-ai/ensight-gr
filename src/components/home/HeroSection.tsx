import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="min-h-screen px-6 md:px-12 pt-40 pb-20 flex flex-col justify-center max-w-[1200px] mx-auto relative overflow-hidden">
    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary font-mono-label text-[10px] font-medium tracking-[3px] uppercase px-4 py-2 rounded-full mb-7 w-fit">
      <span className="w-[6px] h-[6px] bg-electric-bright rounded-full" />
      Operational Transformation
    </div>

    <h1 className="text-[clamp(40px,6vw,68px)] font-black leading-[1.08] tracking-tight mb-6 max-w-[750px]">
      Your operations have outgrown your systems.{' '}
      <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
        We fix that.
      </span>
    </h1>

    <p className="text-lg text-ordinal-body leading-relaxed max-w-[560px] mb-9">
      70% of digital transformations fail because they start with technology. We start with your operation — mapping how work actually flows, redesigning what's broken, and building what's missing.
    </p>

    <div className="flex gap-3 flex-wrap">
      <a
        href="mailto:hello@ensight.co?subject=X-Ray Briefing"
        className="bg-ordinal-green text-white text-base font-bold px-9 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)] transition-all no-underline"
      >
        Start with an X-Ray
      </a>
      <Link
        to="/assessment"
        className="bg-card text-foreground text-base font-semibold px-9 py-4 rounded-xl border border-border hover:bg-muted hover:border-ordinal-faint transition-all no-underline"
      >
        Take the Assessment
      </Link>
    </div>

    <div className="flex gap-12 mt-[72px] pt-9 border-t border-border flex-wrap">
      {[
        { num: '92%', label: 'Reduction in\nscheduling time', color: 'text-ordinal-green' },
        { num: '60%', label: 'Faster client\nonboarding', color: 'text-electric-bright' },
        { num: '70%', label: 'Transformation\nfailure rate (BCG)', color: 'text-ordinal-pink' },
        { num: '10–24', label: 'Weeks, end-to-end\ntransformation', color: 'text-ordinal-cyan' },
      ].map((stat, i) => (
        <div key={i}>
          <div className={`text-4xl font-black leading-none ${stat.color}`}>{stat.num}</div>
          <div className="text-[13px] text-ordinal-dim mt-1.5 leading-snug whitespace-pre-line">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
