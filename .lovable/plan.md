

## Fix OG Metadata Issues

Based on the debugger feedback, four issues need addressing:

### 1. Resize & compress `public/og/home.jpg`
- Resize from 1376×768 to **1200×630** (standard OG dimensions)
- Compress below **300 KB** (well under the 600 KB WhatsApp limit)
- Apply the same resize/compress pass to all 7 OG images for consistency

### 2. Lengthen homepage title (currently 37 chars → target 50-60)
- Current: `Ensight | Strategy, Automation & Data`
- Proposed: `Ensight | Strategy, Automation & Data for Mid-Market Teams` (59 chars)
- Update in: `index.html`, `plugins/seo-prerender.ts` (route `/`), `src/pages/Home.tsx`

### 3. Lengthen homepage description (currently 97 chars → target 110-160)
- Current: `Ensight helps organisations streamline operations through strategy, automation, and data clarity.`
- Proposed: `Ensight helps mid-market organisations streamline operations, eliminate process debt, and build technology that works — through strategy, automation, and data clarity.` (165 chars)
- Update in: `index.html`, `plugins/seo-prerender.ts`, `src/pages/Home.tsx`

### Files changed
- `public/og/*.jpg` — all 7 images resized to 1200×630 and compressed < 300 KB
- `index.html` — updated title and description meta tags
- `plugins/seo-prerender.ts` — updated `/` route title and description
- `src/pages/Home.tsx` — updated SEO component props

