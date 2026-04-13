

# Enhance Case Studies

Upgrade both the listing page and detail page with richer data, better visual hierarchy, and more engaging layout.

## 1. Enrich the data model (`src/data/caseStudies.ts`)

Add new fields to `CaseStudy` interface and populate for all 4 entries:

- `icon`: string (Lucide icon name) — visual identifier per study
- `testimonial`: `{ quote: string; author: string; role: string }` (optional) — adds social proof
- `keyResult`: string — one bold headline stat (e.g. "60% less manual work") for the listing cards

## 2. Upgrade listing page (`src/pages/CaseStudies.tsx`)

- **Card layout**: Switch from stacked list to a 2-column grid on desktop for better visual density
- **Hero stat pill**: Show `keyResult` as a prominent violet pill badge on each card
- **Icon**: Add a Lucide icon in the card header next to the sector label
- **Glass card treatment**: Apply `bg-white/75 backdrop-blur-xl` consistent with homepage cards
- **Hover**: Add gradient left-border glow on hover (2px violet→blue)

## 3. Upgrade detail page (`src/pages/CaseStudyDetail.tsx`)

- **Visual timeline for approach**: Replace bullet list with a numbered vertical timeline (step connectors with violet dots and lines)
- **Before/After results cards**: Show both before and after side-by-side in each metric card with a visual arrow, instead of the current redundant display
- **Testimonial block**: Add a styled quote block after the Results section (if testimonial exists)
- **Glass cards**: Apply frosted glass treatment to Challenge, Approach, and Results cards
- **Wider layout**: Bump max-width from 800px to 900px for breathing room

## 4. Homepage SelectedWorkSection (`src/components/home/SelectedWorkSection.tsx`)

- Pull data from the shared `caseStudies` data file instead of duplicating
- Add `keyResult` badge and link each card to its detail page
- Add sector label above each card title

## Files changed
- `src/data/caseStudies.ts` — new fields
- `src/pages/CaseStudies.tsx` — 2-col grid, glass cards, icon + keyResult pill
- `src/pages/CaseStudyDetail.tsx` — timeline approach, better metrics, testimonial, glass cards
- `src/components/home/SelectedWorkSection.tsx` — use shared data, link to detail pages

