

## Fix Remaining OG Metadata Issues

### 1. Shorten homepage description to ≤160 chars
Current (167 chars): "Ensight helps mid-market organisations streamline operations, eliminate process debt, and build technology that works — through strategy, automation, and data clarity."

Proposed (156 chars): "Ensight helps mid-market organisations streamline operations, eliminate process debt, and build technology that works — with strategy, automation, and data."

Update in: `index.html`, `plugins/seo-prerender.ts`, `src/pages/Home.tsx`

### 2. Add call-to-action text to the OG image
Regenerate `public/og/home.jpg` (1200×630) with a CTA overlay such as "Book a Free Audit" or "See How We Help" to improve click-through when shared on social platforms.

### Files changed
- `index.html` — shorter description
- `plugins/seo-prerender.ts` — shorter description for `/` route
- `src/pages/Home.tsx` — shorter description in SEO component
- `public/og/home.jpg` — regenerated with CTA text overlay

