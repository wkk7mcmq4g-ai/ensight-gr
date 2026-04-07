/**
 * Vite plugin: generates static HTML shells for each route at build time
 * so social-media crawlers see correct OG / Twitter meta tags without JS.
 */
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://ensight-gr.lovable.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/home.jpg`;

interface RouteMeta {
  title: string;
  description: string;
  ogImage?: string;
}

const routes: Record<string, RouteMeta> = {
  '/': {
    title: 'Ensight | Strategy, Automation & Data',
    description: 'Ensight helps organisations streamline operations through strategy, automation, and data clarity.',
    ogImage: '/og/home.jpg',
  },
  '/about': {
    title: 'About Ensight | Our Story & Team',
    description: 'Learn about Ensight \u2014 the consultancy helping organisations streamline operations.',
    ogImage: '/og/about.jpg',
  },
  '/services': {
    title: 'Services | Ensight',
    description: "Explore Ensight\u2019s services: operational strategy, workflow automation, data clarity, and custom platform builds.",
    ogImage: '/og/services.jpg',
  },
  '/case-studies': {
    title: 'Case Studies | Ensight',
    description: 'See how Ensight has helped organisations cut costs, automate workflows, and gain real-time visibility.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/loan-servicing': {
    title: 'Loan Servicing Platform | Ensight Case Study',
    description: 'Custom end-to-end servicing system replacing fragmented processes \u2014 cutting manual processing by 60%.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/charity-crm': {
    title: 'Charity CRM System | Ensight Case Study',
    description: 'Unified platform for programme management, compliance, and reporting across a national charity.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/financial-reporting': {
    title: 'Financial Reporting Automation | Ensight Case Study',
    description: 'Automated pipelines and dashboards replacing manual data extraction \u2014 reporting reduced from days to minutes.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/touro-driver-ux': {
    title: 'Touro \u2014 Driver UX Redesign | Ensight Case Study',
    description: 'Mobile-first, card-based interface that reduced cognitive load and improved operational reliability.',
    ogImage: '/og/case-studies.jpg',
  },
  '/data-clarity': {
    title: 'Data Clarity | Ensight',
    description: 'Understand where your data is, how it flows, and how to make it work for your organisation.',
    ogImage: '/og/data-clarity.jpg',
  },
  '/data-clarity-assessment': {
    title: 'Data Clarity Assessment | Ensight',
    description: "Take our free data clarity assessment to understand your organisation\u2019s data maturity.",
    ogImage: '/og/data-clarity.jpg',
  },
  '/operational-transformation': {
    title: 'Operational Transformation | Ensight',
    description: 'Transform your operations with Ensight \u2014 from strategy to execution.',
    ogImage: '/og/operational-transformation.jpg',
  },
  '/assessment': {
    title: 'Free Operations Assessment | Ensight',
    description: 'Take our free assessment to uncover operational inefficiencies and automation opportunities.',
    ogImage: '/og/assessment.jpg',
  },
};

function buildMetaHtml(routePath: string, meta: RouteMeta): string {
  const canonical = `${BASE_URL}${routePath === '/' ? '' : routePath}`;
  const image = meta.ogImage ? `${BASE_URL}${meta.ogImage}` : DEFAULT_OG_IMAGE;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta name="author" content="Ensight" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${image}" />
  <meta http-equiv="refresh" content="0;url=${canonical}" />
</head>
<body>
  <p>Redirecting to <a href="${canonical}">${meta.title}</a>…</p>
</body>
</html>`;
}

export default function seoPrerender() {
  return {
    name: 'seo-prerender',
    closeBundle() {
      const outDir = path.resolve(process.cwd(), 'dist');
      const indexHtml = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');

      for (const [routePath, meta] of Object.entries(routes)) {
        let filePath: string;
        if (routePath === '/') {
          filePath = path.join(outDir, 'index.html');
        } else {
          const dir = path.join(outDir, routePath.slice(1));
          fs.mkdirSync(dir, { recursive: true });
          filePath = path.join(dir, 'index.html');
          if (fs.existsSync(filePath)) continue; // don't overwrite
        }

        // Inject correct meta into the real SPA shell
        let html = indexHtml;
        html = html.replace(
          /<title>[^<]*<\/title>/,
          `<title>${meta.title}</title>`
        );
        html = html.replace(
          /<meta name="description" content="[^"]*">/,
          `<meta name="description" content="${meta.description}">`
        );
        const image = meta.ogImage ? `${BASE_URL}${meta.ogImage}` : DEFAULT_OG_IMAGE;
        const ogBlock = [
          `<link rel="canonical" href="${BASE_URL}${routePath}" />`,
          `<meta property="og:type" content="website" />`,
          `<meta property="og:url" content="${BASE_URL}${routePath}" />`,
          `<meta property="og:title" content="${meta.title}" />`,
          `<meta property="og:description" content="${meta.description}" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${meta.title}" />`,
          `<meta name="twitter:description" content="${meta.description}" />`,
          `<meta name="twitter:image" content="${image}" />`,
        ].join('\n    ');
        html = html.replace('</head>', `    ${ogBlock}\n</head>`);

        fs.writeFileSync(filePath, html);
      }
      console.log(`[seo-prerender] Generated ${Object.keys(routes).length - 1} route HTML files`);
    },
  };
}
