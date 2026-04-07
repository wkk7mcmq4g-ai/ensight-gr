

## Plan: Add Starburst/Radial Decorative Elements

Inspired by the brand guide's radial/starburst motifs, add a new `'starburst'` variant to `DecorativeShapes` and place it in key sections.

### What gets built

A new SVG starburst variant featuring:
- Radial lines emanating from a center point (sunburst pattern)
- Concentric rings at varying opacities
- Subtle animated rotation on scroll (using existing parallax logic)
- Uses `hsl(var(--primary))` and `hsl(var(--secondary))` for brand consistency
- Very low opacity (0.08–0.15) so it's atmospheric, not distracting

### Files changed

**`src/components/DecorativeShapes.tsx`**
- Add `'starburst'` to the variant union type
- New SVG block: ~24 radial lines from center, 2–3 concentric circle rings, a few accent dots — all animated in with staggered delays
- Parallax scroll rotation via existing `useTransform`

**`src/components/home/HeroSection.tsx`**
- Import `DecorativeShapes`
- Add `<DecorativeShapes variant="starburst" />` inside the section (behind content, pointer-events-none)

**`src/components/home/CTASection.tsx`**
- Add a starburst behind the CTA section (using `className` to invert color to white at low opacity since this section has a colored background)

**`src/components/home/OpTransformHero.tsx`**
- Switch existing `DecorativeShapes` from `variant="dots"` to `variant="starburst"`

### Technical notes
- No new dependencies
- All decorative elements are `aria-hidden` and `pointer-events-none`
- Animations use existing framer-motion patterns already in `DecorativeShapes`

