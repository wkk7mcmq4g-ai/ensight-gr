import SEO from '@/components/SEO';
import OpTransformHero from '@/components/home/OpTransformHero';
import ProblemsSection from '@/components/home/ProblemsSection';
import BeforeAfterCards from '@/components/home/BeforeAfterCards';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const OperationalTransformation = () => (
  <>
    <SEO title="Operational Transformation · Ensight" description="Process-first change for mid-market teams. We embed with your team to diagnose bottlenecks, redesign workflows, and build platforms." path="/operational-transformation" ogImage="/og/operational-transformation.jpg" />
    <OpTransformHero />
    <ProblemsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <BeforeAfterCards />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <EngageSection />
    <CTASection />
  </>
);

export default OperationalTransformation;
