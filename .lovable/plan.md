

## Plan: Reorder sectors in logo strip tagline

**Current**: "Trusted by teams across financial services, non-profits, consumer goods, and professional services"

**Issue**: "financial services" and "professional services" both end with "services", and placing them at positions 1 and 4 creates an awkward echo.

**Proposed**: "Trusted by teams across consumer goods, financial services, non-profits, and professional services"

This groups the two "services" entries apart from each other and leads with the most tangible/visual sector first, ending on the broadest category.

### Change
**`src/components/home/LogoStripSection.tsx`** — update the tagline string on the `<p>` element.

