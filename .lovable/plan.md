

# Section Background Alternation & Dark Proof Section

## Overview
Apply alternating background colors across homepage sections for visual rhythm, and convert the Proof Points section to a full-width dark (#0B1E27) treatment. Also update the CTA/contact section to use the dark background instead of primary.

## Changes

### 1. `src/pages/Home.tsx` — Wrap sections in background containers
Currently sections use `max-w-[1200px]` internally with no full-width background wrappers. We need to wrap each section in a full-width `div` with the correct background color and remove the `<div className="h-px bg-border ...">` dividers (the alternating backgrounds provide visual separation).

Section order and backgrounds:
- Hero + LogoStrip: default (linen `bg-background`)
- ValuePillars: `bg-white`
- HowWeHelp: `bg-background` (linen)
- BeforeAfter: `bg-white`
- SelectedWork: `bg-background` (linen)
- ProofSection: `bg-dark-section` (handled inside component)
- QuoteSection: already dark, keep as-is
- AboutSection: `bg-background` (linen) — update component internally
- EngageSection: `bg-white` — update component internally
- CTASection: change from `bg-primary` to `bg-dark-section`

### 2. `src/components/home/ProofSection.tsx` — Dark full-width treatment
- Wrap in full-width `bg-dark-section` container
- Section label: `text-[#C8973F]` (amber) instead of `text-primary`
- Headline: `text-white`
- Body text: `text-white/70`
- Remove individual card gradient backgrounds; use `bg-white/10` or `bg-white/5` for subtle card surfaces
- Stat numbers: keep `text-stat-accent` (#C8973F)
- Stat labels (desc): `text-white`
- Detail text: `text-white/70`

### 3. `src/components/home/AboutSection.tsx` — Change bg
- Line 16: change `bg-muted/30` to `bg-background`

### 4. `src/components/home/EngageSection.tsx` — White bg wrapper
- Wrap the section in a `bg-white` full-width container, or add `bg-white` class to the section's outer wrapper

### 5. `src/components/home/CTASection.tsx` — Dark section bg
- Line 20: change `bg-primary` to `bg-dark-section`
- Button: keep `bg-primary text-white` (the #0A7EA4 button on dark background)
- Update button from `bg-white text-primary` to `bg-primary text-white`

### 6. `src/components/home/ValuePillarsSection.tsx`, `HowWeHelpSection.tsx`, `BeforeAfterSection.tsx`, `SelectedWorkSection.tsx`
- No internal changes needed — backgrounds applied via wrapper divs in Home.tsx

## What stays the same
All content, layout, spacing, typography, animations, and component structure.

