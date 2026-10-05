import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import georgeAvatar from '@/assets/george-kondylis-avatar.jpg';

const AboutSection = () => (
  <section className="py-24 relative overflow-hidden" id="about">
    {/* Abstract background lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden preserveAspectRatio="none">
      <line x1="0%" y1="20%" x2="100%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.06" />
      <line x1="10%" y1="0%" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.05" />
      <line x1="60%" y1="0%" x2="30%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.07" />
      <line x1="0%" y1="45%" x2="100%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.04" />
      <line x1="85%" y1="0%" x2="95%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" />
      <line x1="0%" y1="75%" x2="100%" y2="85%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.06" />
      <line x1="40%" y1="0%" x2="70%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.04" />
      <line x1="0%" y1="90%" x2="55%" y2="10%" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.05" />
      <line x1="20%" y1="100%" x2="100%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="0.4" opacity="0.06" />
    </svg>

    <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative">
      <AnimatedSection className="max-w-[800px]">
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          About
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-8">
          Who you would be working with
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={georgeAvatar}
            alt="George Kondylis"
            className="w-24 h-24 rounded-full object-cover shrink-0"
            loading="lazy"
            width={384}
            height={384}
          />
          <div>
            <p className="text-[15px] text-ordinal-body leading-relaxed mb-5">
              I'm George Kondylis. I started in IT audit at KPMG, then worked in risk at Piraeus Bank and internal audit at Lloyds Banking Group, where a number only counts if you can show where it came from. Since 2009 I have advised Loux, a Greek soft-drinks manufacturer, on costing, pricing and reporting. Since 2018 I have run data and business applications for QSix, an institutional real estate manager in London and Berlin.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all no-underline"
            >
              About <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
