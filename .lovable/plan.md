

# Update Hero Section Content & Styling

## Changes to `src/components/home/HeroSection.tsx`

### Content updates
- **Remove** the pill/badge ("Operational Transformation")
- **Headline**: "We build systems that eliminate operational bottlenecks."
  - No gradient span — solid white/foreground, `font-black`
- **Subheading**: "Custom platforms, automation, and reporting solutions that replace spreadsheets, manual workflows, and disconnected systems."
- **Primary CTA**: "Book a Call" → links to `mailto:hello@ensight.gr?subject=Book a Call`
- **Secondary CTA**: "See Use Cases" → links to `/case-studies`
- **Remove** the "For mid-sized businesses…" footer line

### Styling adjustments
- Keep left-aligned layout (`flex-col`, no `text-center`)
- Headline: bump max-width to ~800px, keep `font-black`, `leading-[1.08]`, `tracking-tight`
- Subheading: `text-lg md:text-xl`, `text-muted-foreground`, `max-w-[600px]`
- Primary button: solid `bg-primary text-white`, clean shadow, no green
- Secondary button: outlined style (unchanged approach, `bg-card border`)
- Keep existing motion animations and easing

### Files changed
- `src/components/home/HeroSection.tsx` only

