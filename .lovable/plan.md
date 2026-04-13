

# Strengthen Hero CTA Buttons

Swap the button hierarchy and improve copy in `src/components/home/HeroSection.tsx`.

## Changes

**File: `src/components/home/HeroSection.tsx`**

1. Make "Get a Free Assessment" the **primary** button — move it first, apply the existing gradient styling (`bg-gradient-to-r from-primary to-accent-blue`, solid shadow, bold font).
2. Change "Learn More" to **"See How We Work"** — restyle as a ghost/outline button (`border-2 border-primary text-primary`, transparent bg, hover `bg-primary/10`), keep the smooth-scroll to `#pillars`.
3. Swap the order so the primary CTA (assessment link) appears first visually.

No other files affected.

