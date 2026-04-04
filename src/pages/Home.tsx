import HeroSection from '@/components/home/HeroSection';
import PainPointsSection from '@/components/home/PainPointsSection';
import StatStrip from '@/components/home/StatStrip';
import ProblemsSection from '@/components/home/ProblemsSection';
import HowWeHelpSection from '@/components/home/HowWeHelpSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import AboutSection from '@/components/home/AboutSection';
import ProofSection from '@/components/home/ProofSection';
import FrameworkSection from '@/components/home/FrameworkSection';
import BeforeYouAutomate from '@/components/home/BeforeYouAutomate';
import QuoteSection from '@/components/home/QuoteSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';

const Home = () => (
  <>
    <HeroSection />
    <PainPointsSection />
    <StatStrip />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ProblemsSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <HowWeHelpSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <SelectedWorkSection />
    <AboutSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <ProofSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <FrameworkSection />
    <BeforeYouAutomate />
    <QuoteSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <EngageSection />
    <div className="h-px bg-border max-w-[1200px] mx-auto" />
    <CTASection />
  </>
);

export default Home;
