import OpTransformHero from '@/components/home/OpTransformHero';
import ProblemsSection from '@/components/home/ProblemsSection';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const OperationalTransformation = () => (
  <>
    <OpTransformHero />
    <ProblemsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <EngageSection />
    <CTASection />
  </>
);

export default OperationalTransformation;
