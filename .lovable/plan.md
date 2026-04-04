

# Trim the Hero Section

The hero already had the stats bar removed previously. The remaining changes focus on tightening spacing and making copy punchier for mobile.

## Changes to `src/components/home/HeroSection.tsx`

### Reduce padding
- Change `pt-32 pb-16` to `pt-24 pb-10 md:pt-32 md:pb-16` so mobile gets less vertical whitespace
- Reduce `mb-7` on the pill to `mb-5`, `mb-9` on the subhead to `mb-7`, `mt-8` on the "who we work with" line to `mt-5`

### Make copy punchier
- Shorten the subhead paragraph from the verbose 2-sentence version to: *"Most transformations fail because they start with tech. We start with how your operation actually works — then fix what's broken."*
- Reduce CTA button padding on mobile: `px-7 py-3 md:px-9 md:py-4`

### Mobile headline size
- Adjust clamp from `clamp(40px,6vw,68px)` to `clamp(34px,6vw,68px)` so it doesn't crowd small screens

