/**
 * Vite plugin: generates static HTML shells for each route at build time
 * so social-media crawlers see correct OG / Twitter meta tags without JS.
 */
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://ensight-gr.lovable.app';
const OG_IMAGE =
  'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9131ee5a-adf6-4644-9666-66d96e6a8601/id-preview-d3f8e6df--80d094a5-b6ff-4e3d-9b55-194fe071745a.lovable.app-1775244958373.png';

interface RouteMeta {
  title: string;
  description: string;
}

const routes: Record<string, RouteMeta> = {
  '/': {
    title: 'Ensight | Strategy, Automation & Data',
    description:
      'Ensight helps organisations streamline operations through strategy, automation, and data clarity — so teams work smarter, not harder.',
  },
  '/about': {
    title: 'About Ensight | Our Story & Team',
    description:
      'Learn about Ensight — the consultancy helping organisations streamline operations through strategy, automation, and data clarity.',
  },
  '/services': {
    title: 'Services | Ensight',
    description:
      "Explore Ensight\u2019s services: operational strategy, workflow automation, data clarity, and custom platform builds.",
  },
  '/case-studies': {
    title: 'Case Studies | Ensight',
    description:
      'See how Ensight has helped organisations cut costs, automate workflows, and gain real-time visibility.',
  },
  '/case-studies/loan-servicing': {
    title: 'Loan Servicing Platform | Ensight Case Study',
    description:
      'Custom end-to-end servicing system replacing fragmented processes — cutting manual processing by 60%.',
  },
  '/case-studies/charity-crm': {
    title: 'Charity CRM System | Ensight Case Study',
    description:
      'Unified platform for programme management, compliance, and reporting across a national charity.',
  },
  '/case-studies/financial-reporting': {
    title: 'Financial Reporting Automation | Ensight Case Study',
    description:
      'Automated pipelines and dashboards replacing manual data extraction — reporting reduced from days to minutes.',
  },
  '/case-studies/touro-driver-ux': {
    title: 'Touro — Driver UX Redesign | Ensight Case Study',
    description:
      'Mobile-first, card-based interface that reduced cognitive load and improved real-time operational reliability.',
  },
  '/data-clarity': {
    title: 'Data Clarity | Ensight',
    description:
      'Understand where your data is, how it flows, and how to make it work for your organisation.',
  },
  '/data-clarity-assessment': {
    title: 'Data Clarity Assessment | Ensight',
    description:
      "Take our free data clarity assessment to understand your organisation\u2019s data maturity.",
  },
  '/operational-transformation': {
    title: 'Operational Transformation | Ensight',
    description:
      'Transform your operations with Ensight — from strategy to execution.',
  },
  '/assessment': {
    title: 'Free Operations Assessment | Ensight',
    description:
      'Take our free assessment to uncover operational inefficiencies and automation opportunities.',
  },
};

function buildMetaHtml(routePath: string, meta: RouteMeta): string {
  const canonical = `${BASE_URL}${routePath === '/' ? '' : routePath}`;
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
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
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
        if (routePath === '/') continue; // index.html already exists

        const dir = path.join(outDir, routePath.slice(1));
        fs.mkdirSync(dir, { recursive: true });

        const filePath = path.join(dir, 'index.html');
        if (fs.existsSync(filePath)) continue; // don't overwrite

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
        // Insert OG tags before </head>
        const ogBlock = [
          `<link rel="canonical" href="${BASE_URL}${routePath}" />`,
          `<meta property="og:type" content="website" />`,
          `<meta property="og:url" content="${BASE_URL}${routePath}" />`,
          `<meta property="og:title" content="${meta.title}" />`,
          `<meta property="og:description" content="${meta.description}" />`,
          `<meta property="og:image" content="${OG_IMAGE}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${meta.title}" />`,
          `<meta name="twitter:description" content="${meta.description}" />`,
          `<meta name="twitter:image" content="${OG_IMAGE}" />`,
        ].join('\n    ');
        html = html.replace('</head>', `    ${ogBlock}\n</head>`);

        fs.writeFileSync(filePath, html);
      }
      console.log(`[seo-prerender] Generated ${Object.keys(routes).length - 1} route HTML files`);
    },
  };
}
