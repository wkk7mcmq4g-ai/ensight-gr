import DecorativeShapes from '@/components/DecorativeShapes';

const OpTransformHero = () => (
  <section className="px-6 md:px-12 pt-24 pb-10 md:pt-32 md:pb-16 flex flex-col justify-center max-w-[1200px] mx-auto relative overflow-hidden">
    <DecorativeShapes variant="starburst" />
    <h1 className="text-[clamp(34px,6vw,68px)] font-bold leading-[1.08] tracking-tight mb-6 max-w-[800px] text-foreground">
      Fix the flow, then automate it.
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px] mb-7">
      Most automation fails because it encodes the workaround and makes it permanent. We map how the work actually moves, remove what should not be there, make ownership explicit — and only then build.
    </p>

    <div className="flex gap-3 flex-wrap">
      <a
        href="#problems"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-primary text-primary-foreground text-base font-bold px-7 py-3 md:px-9 md:py-4 rounded-xl shadow-[0_4px_16px_hsl(var(--primary)/0.15)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(var(--primary)/0.2)] transition-all no-underline"
      >
        See where it goes wrong
      </a>
    </div>
  </section>
);

export default OpTransformHero;
