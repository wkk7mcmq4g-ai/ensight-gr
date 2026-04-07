import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://ensight-gr.lovable.app';
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
