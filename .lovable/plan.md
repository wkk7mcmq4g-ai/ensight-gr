

# Plan: Add "Data Clarity" Product Page

## Summary
Convert the uploaded HTML page into a new React route at `/data-clarity`, fully integrated into the existing app with shared layout, navbar, and footer.

## What gets built

A dedicated **Data Clarity** product page with these sections (all extracted from the uploaded HTML):

1. **Hero** — dark background with animated grid, headline ("Your data exists. The clarity doesn't."), subtitle, two CTAs, and three animated metric cards (Revenue MTD, Net Margin, ABC tier)
2. **Problem** — 4-card grid (no real-time visibility, no single truth, unallocated costs, scattered data)
3. **The Service** — three numbered components: Assessment → Analytics Build → Retainer, each with deliverables and feature lists
4. **Assessment Scoring** — dark section with 5 dimension cards (Data Availability, Consistency, Cost Visibility, System Integration, Reporting Maturity) plus 3 verdict tiers (Build-Ready / Foundation First / Not Viable Yet)
5. **How It Connects** — flow diagram showing Operational Clarity → Data Clarity pipeline
6. **Who This Is For** — 3 sector cards (Manufacturing, Tourism, Financial Services)
7. **CTA** — dark section with "Book Your Assessment" and contact info

## Files changed

### New: `src/pages/DataClarity.tsx`
- Full React component with all 7 sections above
- Uses `framer-motion` for scroll-reveal animations (matching existing `AnimatedSection` patterns)
- Styled with Tailwind, reusing existing color tokens where possible and adding Data Clarity accent colors (cyan `#06B6D4`, electric indigo `#4F46E5`)
- Responsive grid layouts matching the uploaded design

### Edit: `src/App.tsx`
- Add route: `/data-clarity` → `<DataClarity />`

### Edit: `src/components/layout/Navbar.tsx`
- Add "Data Clarity" to `navLinks` array, linking to `/data-clarity`

### Edit: `src/components/layout/Footer.tsx`
- Add "Data Clarity" link in footer navigation

## Technical notes
- No new dependencies needed — uses existing framer-motion and Tailwind
- The page uses the shared `Layout` wrapper (navbar + footer) rather than the standalone nav from the HTML
- CSS animations (grid pan, blob pulse, metric card slides) will be implemented via Tailwind arbitrary values and framer-motion
- All content is static — no backend needed

