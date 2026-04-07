import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://ensight-gr.lovable.app';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SEO = ({ title, description, path = '' }: SEOProps) => {
  const canonical = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
