

## Plan: Add Per-Page SEO Meta Tags with react-helmet-async

### Overview
Install `react-helmet-async` and add unique `<title>` and `<meta name="description">` tags to each page, plus canonical URLs and Open Graph tags.

### Changes

**1. Install dependency**
- `npm install react-helmet-async`

**2. `src/main.tsx`** — Wrap `<App />` with `<HelmetProvider>`

**3. Create `src/components/SEO.tsx`** — Reusable component accepting `title`, `description`, and `path` props. Renders `<Helmet>` with:
- `<title>{title} | Ensight</title>`
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph & Twitter meta tags

**4. Add `<SEO>` to each page:**

| Page | Title | Description |
|------|-------|-------------|
| Home | `Ensight · Strategy, Automation & Data` | Current global description |
| Services | `Services · Ensight` | Technology and data, designed for your business |
| About | `About · Ensight` | Meet the team behind Ensight |
| Case Studies | `Case Studies · Ensight` | Real results, measured in weeks |
| Operational Transformation | `Operational Transformation · Ensight` | Process-first change for mid-market teams |
| Data Clarity | `Data Clarity · Ensight` | Management analytics that drive decisions |
| Assessment | `Process Debt Assessment · Ensight` | Score your operational efficiency |
| Data Clarity Assessment | `Data Clarity Assessment · Ensight` | Assess your data readiness |

### Files changed
- `package.json` (add react-helmet-async)
- `src/main.tsx` (add HelmetProvider)
- `src/components/SEO.tsx` (new — reusable component)
- All 8 page files (add `<SEO>` component at top)

