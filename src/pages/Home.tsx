import HeroSection from '@/components/home/HeroSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import FrameworkSection from '@/components/home/FrameworkSection';
import QuoteSection from '@/components/home/QuoteSection';
import ProofSection from '@/components/home/ProofSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const Home = () => (
  <>
    <HeroSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ProblemsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <FrameworkSection />
    <QuoteSection />
    <ProofSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <EngageSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <CTASection />
  </>
);

export default Home;
