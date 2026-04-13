import DecorativeShapes from '@/components/DecorativeShapes';

const QuoteSection = () => (
  <div className="bg-dark-section py-20 px-6 md:px-12 text-center overflow-hidden relative">
    <DecorativeShapes variant="starburst" className="opacity-[0.08] [&_line]:!stroke-white [&_circle]:!stroke-white [&_.accent-dot]:!fill-white" />
    <blockquote className="text-[clamp(22px,3.5vw,32px)] font-medium italic text-white leading-snug max-w-[800px] mx-auto tracking-tight">
      "We don't hand you a diagnosis. We stay, we build, and we don't leave until it's working."
    </blockquote>
  </div>
);

export default QuoteSection;