import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import aboutVisual from '@/assets/about-visual.jpg';
import DecorativeShapes from '@/components/DecorativeShapes';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="bg-background py-24 relative overflow-hidden" id="about">
      <DecorativeShapes variant="starburst" className="opacity-[0.06]" />
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <AnimatedSection>
              <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
                About
              </div>
              <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-10">
                Built by experience, not theory
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
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

          <AnimatedSection delay={0.3}>
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={aboutVisual}
                alt="Abstract geometric shapes representing structured consulting methodology"
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
                width={800}
                height={1024}
                style={{ y: imageY }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
