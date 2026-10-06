import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import LogoStripSection from '@/components/home/LogoStripSection';
import ValuePillarsSection from '@/components/home/ValuePillarsSection';
import ProblemsSection from '@/components/home/ProblemsSection';
import HowIWorkTeaser from '@/components/home/HowIWorkTeaser';
import DataLayerSection from '@/components/sections/DataLayerSection';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import AboutSection from '@/components/home/AboutSection';
import EngageSection from '@/components/home/EngageSection';
import CTASection from '@/components/home/CTASection';
import ParallaxDivider from '@/components/home/ParallaxDivider';

const DESCRIPTION =
  'I build the data and reporting that show what each product and customer really earns, and automate the manual work between your systems.';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ensight",
  "url": "https://www.ensight.gr",
  "logo": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9131ee5a-adf6-4644-9666-66d96e6a8601/id-preview-d3f8e6df--80d094a5-b6ff-4e3d-9b55-194fe071745a.lovable.app-1775244958373.png",
  "description": DESCRIPTION,
  "email": "hello@ensight.gr",
  "founder": {
    "@type": "Person",
    "name": "George Kondylis"
  },
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
    <SEO title="Ensight | Data, reporting and AI automation for mid-sized businesses" description={DESCRIPTION} path="/" ogImage="/og/home.jpg" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
    <HeroSection />
    <ParallaxDivider />
    <LogoStripSection />
    <ParallaxDivider />
    <ValuePillarsSection />
    <ParallaxDivider />
    <DataLayerSection />
    <ParallaxDivider />
    <ProblemsSection />
    <ParallaxDivider />
    <SelectedWorkSection />
    <HowIWorkTeaser />
    <ParallaxDivider />
    <AboutSection />
    <ParallaxDivider />
    <EngageSection />
    <CTASection />
  </>
);

export default Home;
