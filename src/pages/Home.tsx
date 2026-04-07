import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import LogoStripSection from '@/components/home/LogoStripSection';
import ValuePillarsSection from '@/components/home/ValuePillarsSection';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import ProofSection from '@/components/home/ProofSection';
import QuoteSection from '@/components/home/QuoteSection';
import AboutSection from '@/components/home/AboutSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const Home = () => (
  <>
    <HeroSection />
    <LogoStripSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ValuePillarsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <BeforeAfterSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ProofSection />
    <QuoteSection />
    <AboutSection />
    <EngageSection />
    <CTASection />
  </>
);

export default Home;
