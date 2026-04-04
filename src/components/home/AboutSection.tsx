import AnimatedSection from './AnimatedSection';

const AboutSection = () => (
  <section className="bg-muted/30 py-24" id="about">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <AnimatedSection>
        <div className="text-[10px] font-medium tracking-[3px] uppercase text-primary mb-3">
          About
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-tight leading-[1.15] mb-10 max-w-[680px]">
          Built by experience, not theory
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="max-w-[680px] space-y-5 text-[15px] text-ordinal-body leading-relaxed">
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
  </section>
);

export default AboutSection;
