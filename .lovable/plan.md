

# Final Professional Polish

After reviewing the full codebase, here are the remaining issues that still read as "startup template" rather than professional consulting:

## Issues Found

1. **Duplicate heading text** — HowWeHelpSection has label "How We Help" AND h2 "How we help" (redundant, inconsistent casing)
2. **SelectedWorkSection** — same issue: label "Selected Work" + h2 "Selected Work"
3. **CTA form inputs still use `rounded-xl`** — should be `rounded-lg` to match the sharpened 0.5rem system
4. **Hero CTA button uses `rounded-xl`** — same issue
5. **CTA button says "font-bold"** — should be `font-semibold` for consistency (only H1 gets bold)
6. **QuoteSection quote uses `font-bold`** — should be `font-semibold` or even `font-medium italic` for editorial feel
7. **Background blobs in Layout** — the purple radial gradients are a SaaS pattern; consulting sites use cleaner backgrounds
8. **No QuoteSection in Home page flow** — it exists but isn't used on the homepage
9. **Mobile nav still uses `font-mono-label`** for group labels ("Services", "Free Assessments")
10. **Footer copyright missing** — professional sites always include © year

## Plan

### 1. Fix duplicate section headings
- **HowWeHelpSection**: Change h2 to a descriptive subtitle like "Technology that fits your operations" instead of repeating the label
- **SelectedWorkSection**: Change h2 to "Engagements that delivered" or similar

### 2. Standardize border radius across all components
- Replace remaining `rounded-xl` with `rounded-lg` in: CTASection inputs/button, HeroSection CTA button, EngageSection tag badge, mobile nav cards

### 3. Refine typography consistency
- CTA button: `font-bold` → `font-semibold`
- QuoteSection: make it `font-medium italic` for a more editorial blockquote feel

### 4. Remove background blobs from Layout
- Delete the two fixed radial-gradient divs — clean white/off-white background is more authoritative

### 5. Add QuoteSection to homepage
- Insert between ProofSection and AboutSection as a visual break

### 6. Clean up mobile nav mono labels
- Remove `font-mono-label` from the two group headers in Navbar mobile menu

### 7. Add footer copyright
- Add `© {year} Ensight. All rights reserved.` to Footer

## Files Changed

| File | Change |
|------|--------|
| `src/components/home/HowWeHelpSection.tsx` | Fix duplicate heading |
| `src/components/home/SelectedWorkSection.tsx` | Fix duplicate heading |
| `src/components/home/CTASection.tsx` | `rounded-xl` → `rounded-lg`, font-bold → font-semibold |
| `src/components/home/HeroSection.tsx` | `rounded-xl` → `rounded-lg` on CTA |
| `src/components/home/QuoteSection.tsx` | Font weight to medium italic |
| `src/components/layout/Layout.tsx` | Remove background blobs |
| `src/components/layout/Navbar.tsx` | Remove `font-mono-label` from mobile menu |
| `src/components/layout/Footer.tsx` | Add copyright line |
| `src/pages/Home.tsx` | Add QuoteSection between Proof and About |

