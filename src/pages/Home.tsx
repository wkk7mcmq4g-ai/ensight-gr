import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import LogoStripSection from '@/components/home/LogoStripSection';
import ValuePillarsSection from '@/components/home/ValuePillarsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import BeforeYouAutomate from '@/components/home/BeforeYouAutomate';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import ProofSection from '@/components/home/ProofSection';
import QuoteSection from '@/components/home/QuoteSection';
import AboutSection from '@/components/home/AboutSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';
import ParallaxDivider from '@/components/home/ParallaxDivider';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ensight",
  "url": "https://www.ensight.gr",
  "logo": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9131ee5a-adf6-4644-9666-66d96e6a8601/id-preview-d3f8e6df--80d094a5-b6ff-4e3d-9b55-194fe071745a.lovable.app-1775244958373.png",
  "description": "Ensight builds management information mid-market businesses can trust — insight, costing and reporting, the business applications and automation that keep them running, and AI applied where it earns its place.",
  "email": "hello@ensight.gr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Athens",
    "addressCountry": "GR"
  },
  "areaServed": "Europe",
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ensight",
  "url": "https://www.ensight.gr"
};

const Home = () => (
  <>
    <SEO title="Ensight | Insight, Reporting & Automation for Mid-Market Teams" description="Ensight builds management information you can trust — costing, reporting, business applications and the automation that keeps them running. We fix the process before we build the technology." path="/" ogImage="/og/home.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
    <HeroSection />
    <ParallaxDivider />
    <LogoStripSection />
    <ParallaxDivider />
    <ProblemsSection />
    <ParallaxDivider />
    <ValuePillarsSection />
    <BeforeYouAutomate />
    <ParallaxDivider />
    <BeforeAfterSection />
    <ParallaxDivider />
    <SelectedWorkSection />
    <ProofSection />
    <QuoteSection />
    <ParallaxDivider />
    <AboutSection />
    <ParallaxDivider />
    <EngageSection />
    <CTASection />
  </>
);

export default Home;
