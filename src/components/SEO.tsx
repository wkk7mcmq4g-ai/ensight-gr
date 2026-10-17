import { englishPath, greekPath, isGreekPath, translatedPaths } from '@/lib/languages';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.ensight.gr';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/home.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const SEO = ({ title, description, path = '', ogImage }: SEOProps) => {
  const canonical = `${BASE_URL}${path}`;
  const image = ogImage ? `${BASE_URL}${ogImage}` : DEFAULT_OG_IMAGE;
  return (
    <Helmet>
      <html lang={isGreekPath(path) ? "el" : "en"} />
      <meta property="og:locale" content={isGreekPath(path) ? "el_GR" : "en_GB"} />
      {translatedPaths.includes(englishPath(path || "/")) && [
        <link key="en" rel="alternate" hrefLang="en" href={BASE_URL + englishPath(path || "/")} />,
        <link key="el" rel="alternate" hrefLang="el" href={BASE_URL + greekPath(englishPath(path || "/"))} />,
        <link key="default" rel="alternate" hrefLang="x-default" href={BASE_URL + englishPath(path || "/")} />,
      ]}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
