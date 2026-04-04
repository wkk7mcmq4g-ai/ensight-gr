import HeroSection from '@/components/home/HeroSection';
import ValuePillarsSection from '@/components/home/ValuePillarsSection';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import ProofSection from '@/components/home/ProofSection';
import AboutSection from '@/components/home/AboutSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const Home = () => (
  <>
    <HeroSection />
    <ValuePillarsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ProofSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <AboutSection />
    <EngageSection />
    <CTASection />
  </>
);

export default Home;
