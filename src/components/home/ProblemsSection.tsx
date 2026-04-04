import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const problems = [
  { emoji: '💬', title: 'The WhatsApp Organisation', desc: "Decisions, approvals, and critical updates flowing through chat groups with no structure and no audit trail.", color: 'bg-electric-bright' },
  { emoji: '🧠', title: 'The Human Router', desc: "One person holds the operation together. When they're out, everything slows or stops.", color: 'bg-ordinal-cyan' },
  { emoji: '👻', title: 'The Invisible Queue', desc: "Work piles up and nobody sees it until it's a crisis. Requests sit in inboxes for days.", color: 'bg-primary' },
  { emoji: '📋', title: 'The Copy-Paste Economy', desc: "Staff manually moving data between systems. The waste isn't in the tools — it's in the gaps between them.", color: 'bg-ordinal-pink' },
  { emoji: '🗓️', title: 'The Meeting Trap', desc: "Weekly meetings that exist only because management has no other way to find out what's happening.", color: 'bg-ordinal-amber' },
  { emoji: '📈', title: 'Growth by Headcount', desc: "Every new client means more admin. You're scaling linearly when you should be scaling smart.", color: 'bg-ordinal-green' },
];

const ProblemsSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="problems">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        Sound Familiar?
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-4">
        The Six Signs of Process Debt
      </h2>
      <p className="text-base text-ordinal-body leading-relaxed max-w-[560px] mb-12">
        If any of this sounds familiar, your organisation has accumulated process debt — and it{"'"}s compounding every month.
      </p>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {problems.map((p, i) => (
        <StaggerItem key={i}>
          <div className="bg-card border border-border rounded-lg p-7 relative overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-ordinal-faint transition-all group h-full">
            <div className={`absolute top-0 left-0 w-full h-[2px] ${p.color}`} />
            <div className="text-[28px] mb-3">{p.emoji}</div>
            <h3 className="text-base font-bold mb-1.5">{p.title}</h3>
            <p className="text-sm text-ordinal-body leading-relaxed">{p.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default ProblemsSection;
