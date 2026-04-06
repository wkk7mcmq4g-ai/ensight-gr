

## Plan: Enhance Case Studies

### 1. Enrich case study data (`src/data/caseStudies.ts`)

Add new fields to the `CaseStudy` interface and populate them:

- **`outcome`** — a single-sentence summary of the result (displayed prominently)
- **`tools`** — array of technologies/methods used (e.g. "Custom Platform", "Automated Pipelines", "CRM Design")
- **`quote` / `quoteAuthor`** — add testimonial quotes to all three studies (currently empty)

### 2. Upgrade listing page (`src/pages/CaseStudies.tsx`)

- Add a **sector filter strip** at the top (All / Financial Services / Non-Profit) using pill-style toggles
- Show the **timeline badge** on each card (e.g. "12 weeks")
- Add a subtle **top accent bar** (2px, primary gradient) to each card for visual rhythm
- Improve hover state with a slight scale + shadow lift

### 3. Upgrade detail page (`src/pages/CaseStudyDetail.tsx`)

- Add a **hero banner area** with a gradient background strip behind the title, making the page feel less plain
- Display **tools/methods used** as small badges below the subtitle
- Restyle the **Results section** as a 3-column grid with larger metric numbers and a subtle background tint per card
- Add a **timeline progress visual** — a simple horizontal bar showing the engagement duration
- Add **prev/next case study navigation** at the bottom so users can browse without going back to the listing
- Style the **quote section** with a left border accent instead of a floating icon, for a cleaner look

### 4. Polish shared elements

- Replace `font-mono-label` references (per memory: no monospace labels) with the standard font stack
- Ensure the CTA button at the bottom uses the project's standard `rounded-lg` (0.5rem) instead of `rounded-xl`

### Files changed
- `src/data/caseStudies.ts` — new fields + quote content
- `src/pages/CaseStudies.tsx` — filter strip, card enhancements
- `src/pages/CaseStudyDetail.tsx` — hero, badges, navigation, restyled sections

