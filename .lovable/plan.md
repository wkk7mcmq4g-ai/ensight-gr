
## Remove all remaining entrance animations

### What I found
There are no remaining `whileInView` usages in `src`, and `src/components/home/AnimatedSection.tsx` is already a pass-through wrapper. The remaining visibility/entrance animations are coming from direct `framer-motion` usage elsewhere.

### Files that still hide or animate content on entry
- `src/components/layout/PageTransition.tsx` — page-level fade/slide on route change
- `src/pages/Services.tsx` — hero label, heading, paragraph
- `src/pages/DataClarity.tsx` — hero label, heading, paragraph, CTA group
- `src/pages/Assessment.tsx` — intro, step transitions, results wrapper, methodology expand, animated bar fill
- `src/pages/DataClarityAssessment.tsx` — intro, step transitions, results wrapper, animated bar fill
- `src/components/layout/Navbar.tsx` — dropdowns and mobile menu animate in/out
- `src/components/layout/BackToTop.tsx` — button fades/scales in
- `src/components/DecorativeShapes.tsx` — decorative SVGs still use opacity/path/scale entrance sequences
- `src/components/home/HeroVisual.tsx` — should be kept, but only the node graph animation

### Implementation approach
1. Remove entrance animation props anywhere content starts hidden or offset:
   - remove `initial={{ opacity: 0 ... }}`
   - remove `animate={{ opacity: 1 ... }}`
   - remove `exit={...}` where it only supports reveal/hide transitions
   - replace `motion.*` with normal elements when animation is no longer needed

2. Keep only the hero node graph animation:
   - preserve `src/components/home/HeroVisual.tsx`
   - but make sure anything that is part of the hero graph is visible immediately if needed, while preserving the ongoing node-graph motion the user explicitly wants

3. Remove route and UI entrance effects that still create delayed appearance:
   - `PageTransition.tsx` should become a plain wrapper
   - `Navbar.tsx` dropdowns/mobile menu should open instantly
   - `BackToTop.tsx` should appear/disappear without fade/scale

4. Remove decorative intro sequencing:
   - `DecorativeShapes.tsx` should render static shapes with scroll-parallax only if desired, or fully static if safer
   - no opacity/pathLength/scale “drawing in” effects

5. Keep non-entrance behavior:
   - hover states stay
   - assessment logic stays
   - count-up and progress-ring/bar animation can stay only if they do not hide content on first render; otherwise set them to final state immediately for consistency

### Recommended file-by-file changes
- `src/components/layout/PageTransition.tsx`
  - replace `motion.div` with plain `div`

- `src/pages/Services.tsx`
  - replace hero `motion.div`, `motion.h1`, `motion.p` with regular elements

- `src/pages/DataClarity.tsx`
  - replace hero `motion.*` wrappers with regular elements

- `src/pages/Assessment.tsx`
  - remove step/result entrance transitions
  - replace `AnimatePresence` with direct conditional rendering if practical
  - convert progress-bar fill from animated width to immediate width
  - keep methodology toggle only as instant show/hide, no fade/height animation

- `src/pages/DataClarityAssessment.tsx`
  - same cleanup as `Assessment.tsx`

- `src/components/layout/Navbar.tsx`
  - make dropdown panels and mobile menu render instantly with no motion wrappers

- `src/components/layout/BackToTop.tsx`
  - render plain button when `visible` is true

- `src/components/DecorativeShapes.tsx`
  - remove all entrance sequencing on SVG children
  - keep static rendering; optionally keep subtle scroll-linked transform if it doesn’t hide content

- `src/components/home/HeroVisual.tsx`
  - preserve as the only animated visual system

### Technical note
The biggest remaining UX offenders are not homepage section wrappers anymore; they are page transitions, assessment step wrappers, and decorative Framer Motion SVGs. Once these are removed, all content will be present immediately with no fade-in, slide-in, or delayed reveal anywhere except the hero node graph.
