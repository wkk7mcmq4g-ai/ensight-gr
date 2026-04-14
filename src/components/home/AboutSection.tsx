import { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden" id="about">
      {/* Abstract background lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden preserveAspectRatio="none">
        <line x1="0%" y1="20%" x2="100%" y2="60%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.07" />
        <line x1="10%" y1="0%" x2="80%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.06" />
        <line x1="60%" y1="0%" x2="30%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.08" />
        <line x1="0%" y1="45%" x2="100%" y2="35%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" />
        <line x1="85%" y1="0%" x2="95%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.7" opacity="0.06" />
        <line x1="0%" y1="75%" x2="100%" y2="85%" stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.07" />
        <line x1="40%" y1="0%" x2="70%" y2="100%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.05" />
        <line x1="0%" y1="90%" x2="55%" y2="10%" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.06" />
        <line x1="20%" y1="100%" x2="100%" y2="15%" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.07" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative">
        <div className="max-w-[800px]">
          <AnimatedSection>
            <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
              About
            </div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-10">
              Built by experience, not theory
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-5 text-[15px] text-ordinal-body leading-relaxed">
              <p>
                Ensight is led by a senior data and technology professional with over 18 years of experience across consulting, financial services, and digital transformation.
              </p>
              <p>
                We specialise in designing and delivering practical, scalable systems that solve real business problems — from operational workflows and CRM platforms to advanced reporting and automation.
              </p>
              <p>
                Our approach combines strategic thinking with hands-on execution, ensuring solutions are not only well-designed but also fully implemented and adopted.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
