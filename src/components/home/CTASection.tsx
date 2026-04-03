import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 text-center">
    <h2 className="text-[clamp(32px,5vw,48px)] font-black tracking-tight mb-4">
      Ready to see what process debt is{' '}
      <span className="bg-gradient-to-br from-electric-bright to-ordinal-green-bright bg-clip-text text-transparent">
        costing you?
      </span>
    </h2>
    <p className="text-[17px] text-ordinal-body leading-relaxed max-w-[520px] mx-auto mb-9">
      Start with a 30-minute briefing. No obligation. No sales pitch. Just a conversation about whether there's a fit.
    </p>
    <div className="flex gap-3 justify-center flex-wrap">
      <a
        href="mailto:hello@ensight.co?subject=X-Ray Briefing"
        className="bg-ordinal-green text-white text-base font-bold px-9 py-4 rounded-xl shadow-[0_4px_16px_rgba(16,185,129,0.15)] hover:bg-ordinal-green-bright hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)] transition-all no-underline"
      >
        Book Your X-Ray Briefing
      </a>
      <Link
        to="/assessment"
        className="bg-card text-foreground text-base font-semibold px-9 py-4 rounded-xl border border-border hover:bg-muted hover:border-ordinal-faint transition-all no-underline"
      >
        Take the Free Assessment
      </Link>
    </div>
  </section>
);

export default CTASection;
