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
    <SelectedWorkSection
      ids={['loan-servicing', 'charity-crm', 'touro-driver-ux']}
      eyebrow="Applications We Built"
      heading="Systems the work actually runs on"
      lead="Each of these replaced a spreadsheet, an inbox or a process that lived in somebody's head — and each is still in daily use."
    />
    <EngageSection
      lead="Quick Win"
      heading="Start with one problem."
      intro="You do not have to commit to a programme to find out whether this works. Pick the thing that costs you the most time, and we solve that one first."
    />
    <CTASection />
  </>
);

export default OperationalTransformation;
