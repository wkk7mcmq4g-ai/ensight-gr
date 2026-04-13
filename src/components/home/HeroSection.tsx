import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';
import DecorativeShapes from '@/components/DecorativeShapes';

const HeroSection = () => (
  <section className="px-6 md:px-12 pt-24 pb-10 md:pt-32 md:pb-16 max-w-[1200px] mx-auto relative overflow-hidden">
    <DecorativeShapes variant="starburst" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-[clamp(32px,7vw,80px)] font-bold leading-[1.08] tracking-tight mb-6 text-foreground">
          We <span className="bg-gradient-to-r from-[hsl(195,89%,34%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">transform</span> how organisations work with technology and data.
        </h1>

        <p className="text-base md:text-xl text-[#3D5A68] font-medium leading-relaxed max-w-[600px] mb-7">
          Strategy, platforms, automation, and analytics — designed around how your business actually operates.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#pillars"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[hsl(195,89%,34%)] to-[hsl(217,91%,60%)] text-primary-foreground text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg shadow-[0_4px_16px_hsl(195_89%_34%/0.25)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsl(195_89%_34%/0.3)] transition-all no-underline"
          >
            Learn More
          </a>
          <Link
            to="/assessment"
            className="border-2 border-primary text-primary text-sm md:text-base font-semibold px-6 py-3 md:px-9 md:py-4 rounded-lg hover:bg-primary/10 hover:-translate-y-0.5 transition-all no-underline"
          >
            Get a Free Assessment
          </Link>
        </div>
      </div>

      <div className="hidden md:block relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(195_89%_34%/0.12)_0%,_transparent_70%)] scale-150" />
        <HeroVisual />
      </div>
    </div>
  </section>
);

export default HeroSection;
