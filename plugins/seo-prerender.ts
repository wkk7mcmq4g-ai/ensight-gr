/**
 * Vite plugin: generates static HTML shells for each route at build time
 * so social-media crawlers see correct OG / Twitter meta tags without JS.
 */
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.ensight.gr';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/home.jpg`;

interface RouteMeta {
  title: string;
  description: string;
  ogImage?: string;
}

const routes: Record<string, RouteMeta> = {
  '/': {
    title: 'Ensight | Costing, reporting and AI automation for mid-sized businesses',
    description: 'I build the costing and reporting that show what each product and customer really earns, and automate the manual work between your systems.',
    ogImage: '/og/home.jpg',
  },
  '/about': {
    title: 'About | Ensight',
    description: 'George Kondylis: eighteen years in data, costing and finance systems, from bank audit to a seventeen-year advisory relationship with a Greek manufacturer.',
    ogImage: '/og/about.jpg',
  },
  '/data-clarity': {
    title: 'Costing & Reporting | Ensight',
    description: 'Product and customer margin, one definition per metric, and a month-end pack that assembles itself.',
    ogImage: '/og/data-clarity.jpg',
  },
  '/ai-automation': {
    title: 'AI & Automation | Ensight',
    description: 'Invoices read instead of retyped, approvals with a record, and plain-language answers from your own data, with a person approving anything that posts or pays.',
    ogImage: '/og/operational-transformation.jpg',
  },
  '/how-i-work': {
    title: 'How I work | Ensight',
    description: 'Process first, technology second: four stages, and a guarantee with a cost attached.',
    ogImage: '/og/services.jpg',
  },
  '/costing': {
    title: 'What a Product Actually Costs | Ensight',
    description: 'Why true product and customer cost does not come out of the ERP, the three layers of costing, and what has to be true before you can build it.',
    ogImage: '/og/services.jpg',
  },
  '/case-studies': {
    title: 'Work | Ensight',
    description: 'Costing, reporting and automation, built so management can answer a question the business could not answer before.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/costing-bi-platform': {
    title: 'Activity-Based Costing & BI Platform | Ensight Case Study',
    description: 'A costing model and reporting layer built on SoftOne — margin visible by product, customer and channel.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/financial-reporting': {
    title: 'One Set of Numbers | Ensight Case Study',
    description: 'A governed reporting layer for an institutional portfolio — one agreed definition per metric, with lineage back to source.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/invoice-extraction': {
    title: 'Invoices the Machine Reads | Ensight Case Study',
    description: 'AI extraction pulling supplier invoices into the finance system structured and consistent \u2014 with a person approving every posting.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/governed-ai-access': {
    title: 'Ask the Data | Ensight Case Study',
    description: 'Plain-language access to live portfolio, finance and spend data, with every query scoped and logged.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/loan-servicing': {
    title: 'Loan Servicing Platform | Ensight Case Study',
    description: 'Custom end-to-end servicing system replacing fragmented processes \u2014 cutting manual processing by 60%.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/charity-crm': {
    title: 'Charity CRM System | Ensight Case Study',
    description: 'Unified platform for programme management, compliance, and reporting across a national charity. Built pro bono.',
    ogImage: '/og/case-studies.jpg',
  },
  '/case-studies/touro-driver-ux': {
    title: 'Touro: the app my drivers work from | Ensight Case Study',
    description: 'A mobile-first redesign of the driver screen at my own transfer company, built for a phone on the move.',
    ogImage: '/og/case-studies.jpg',
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
