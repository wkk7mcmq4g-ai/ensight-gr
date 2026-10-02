import { Map, Scissors, Users, Zap } from 'lucide-react';
import AnimatedSection, { StaggerChildren, StaggerItem } from './AnimatedSection';

const solutions = [
  { icon: Map, title: 'Map what actually happens', desc: 'Not the org chart version. Where work waits, who it waits on, and what that costs.', hsl: 'hsl(var(--primary))' },
  { icon: Scissors, title: 'Redesign before building', desc: 'Remove the steps that exist only because something else was broken. Make ownership explicit.', hsl: 'hsl(var(--accent-blue))' },
  { icon: Zap, title: 'Build and integrate', desc: 'Approval flows, document handling, and the connections between systems that were bridged by hand.', hsl: 'hsl(var(--primary))' },
  { icon: Users, title: 'Stay through adoption', desc: 'Train the team, manage the resistance, and leave only once the new way is the way.', hsl: 'hsl(var(--secondary))' },
];

const HowWeHelpSection = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24" id="solutions">
    <AnimatedSection>
      <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
        The Sequence
      </div>
      <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-12">
        Four steps, and the technology comes third
      </h2>
    </AnimatedSection>
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {solutions.map((s, i) => (
        <StaggerItem key={i}>
          <div className="bg-white/75 backdrop-blur-xl border border-border/60 rounded-lg p-7 relative overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_36px_-8px_hsl(var(--primary)/0.15)] hover:border-primary/30 transition-all duration-300 h-full group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-blue" />
            <div
              className="mb-4 w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${s.hsl}15`, color: s.hsl }}
            >
              <s.icon size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold mb-1.5">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  </section>
);

export default HowWeHelpSection;