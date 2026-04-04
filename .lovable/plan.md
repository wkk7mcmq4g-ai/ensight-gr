

# Consolidate CTAs to Two

## Current CTA inventory (7 total)
- **Hero**: "Book a Call" (mailto) + "See Use Cases" (link to /case-studies)
- **EngageSection**: 3× "Get started" mailto links on each card
- **CTASection**: "Book a 30-minute Strategy Call" (mailto) + "Contact Us" (link to /contact)

## Target: 2 CTAs

### 1. Hero — single "Learn More" button
Replace the two hero buttons with one "Learn More" that smooth-scrolls to `#solutions` (the HowWeHelpSection). Removes the immediate sales pressure; the hero becomes purely informational.

### 2. Final section — "Get in Touch" contact form
Replace the current CTASection (two mailto/link buttons) with an inline contact form containing: Name, Email, Message, and a Submit button. On submit, opens a `mailto:hello@ensight.gr` with the form data pre-filled (no backend needed). Keeps the purple background for visual weight.

### 3. EngageSection — remove per-card CTAs
Remove the "Get started →" links from each engagement card. The cards become informational only, reducing noise. Users who are ready will scroll to the contact form below.

## Files changed

| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Replace 2 buttons with single "Learn More" anchor to `#solutions` |
| `src/components/home/EngageSection.tsx` | Remove the `<a>Get started</a>` link from each card |
| `src/components/home/CTASection.tsx` | Replace buttons with a Name/Email/Message contact form; submit opens mailto with pre-filled data |

