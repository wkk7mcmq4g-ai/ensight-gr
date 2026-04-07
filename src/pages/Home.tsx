import { Helmet } from 'react-helmet-async';
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ensight",
  "url": "https://ensight-gr.lovable.app",
  "logo": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9131ee5a-adf6-4644-9666-66d96e6a8601/id-preview-d3f8e6df--80d094a5-b6ff-4e3d-9b55-194fe071745a.lovable.app-1775244958373.png",
  "description": "Ensight helps organisations streamline operations through strategy, automation, and data clarity — so teams work smarter, not harder.",
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
  "url": "https://ensight-gr.lovable.app"
};

const Home = () => (
  <>
    <SEO title="Ensight | Strategy, Automation & Data for Mid-Market Teams" description="Ensight helps mid-market organisations streamline operations, eliminate process debt, and build technology that works — with strategy, automation, and data." path="/" ogImage="/og/home.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
    <div className="border-b border-[#D6D0C9]"><HeroSection /></div>
    <div className="border-b border-[#D6D0C9]"><LogoStripSection /></div>
    <div className="bg-white border-b border-[#D6D0C9]">
      <ValuePillarsSection />
    </div>
    <div className="border-b border-[#D6D0C9]"><HowWeHelpSection /></div>
    <div className="bg-white border-b border-[#D6D0C9]">
      <BeforeAfterSection />
    </div>
    <div className="border-b border-[#D6D0C9]"><SelectedWorkSection /></div>
    <ProofSection />
    <QuoteSection />
    <div className="border-b border-[#D6D0C9]"><AboutSection /></div>
    <div className="bg-white border-b border-[#D6D0C9]">
      <EngageSection />
    </div>
    <CTASection />
  </>
);

export default Home;
