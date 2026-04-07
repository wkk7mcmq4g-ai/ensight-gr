

## Plan: Replace Heading Font with a Jeko-like Free Alternative

Jeko Black is a bold, geometric, rounded sans-serif. The closest free match is **Plus Jakarta Sans** (available on Google Fonts) at weight 800 — it shares Jeko's geometric proportions, rounded terminals, and modern feel.

### Changes

**`src/index.css`**
- Replace the Google Fonts import: swap `Outfit` for `Plus Jakarta Sans:wght@400;500;600;700;800` (keep Outfit for body, add Plus Jakarta for headings)
- Actually: keep Outfit for body text, add Plus Jakarta Sans for headings
- Update the `body` font-family to keep Outfit
- Add a new utility class `.font-heading` using Plus Jakarta Sans 800

**`tailwind.config.ts`**
- Add `fontFamily.heading: ['Plus Jakarta Sans', 'sans-serif']` to the theme extend

**Heading components** (HeroSection, CTASection, ValuePillarsSection, HowWeHelpSection, BeforeAfterSection, SelectedWorkSection, ProofSection, ProblemsSection, AboutSection, EngageSection, QuoteSection, etc.)
- Add `font-heading` class to all `<h1>` and `<h2>` elements

### Result
Bold, geometric headings that approximate the Jeko Black aesthetic, paired with Outfit for body text.

