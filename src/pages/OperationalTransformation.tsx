import SEO from '@/components/SEO';
import OpTransformHero from '@/components/home/OpTransformHero';
import ProcessProblemsSection from '@/components/home/ProcessProblemsSection';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const OperationalTransformation = () => (
  <>
    <SEO title="Applications &amp; Automation · Ensight" description="Custom business applications, workflow automation and system integration — built around a process that has been fixed first." path="/operational-transformation" ogImage="/og/operational-transformation.jpg" />
    <OpTransformHero />
    <ProcessProblemsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <EngageSection />
    <CTASection />
  </>
);

export default OperationalTransformation;
