

# Add "Free Operational Audit" Section

## New file: `src/components/home/FreeAuditSection.tsx`

- Mono-label: `// Free Audit`
- Headline: "Free Operational Audit"
- Subtitle: "Identify inefficiencies and opportunities in your business"
- Intro paragraph followed by a styled checklist of 4 deliverables using `CheckCircle2` icons in `text-ordinal-green`
- Primary CTA button: "Request Free Audit" — prominent, styled like the CTA section's primary button (`bg-primary text-primary-foreground`, large padding, rounded-xl, shadow)
- **Standout design**: Use a subtle highlighted background (`bg-muted/30`) on the full section to differentiate it from surrounding sections
- Content centered, max-width constrained for readability
- Use `AnimatedSection` for entrance animations
- Consistent section styling: `max-w-[1200px] mx-auto px-6 md:px-12 py-24`

## Edit: `src/pages/Home.tsx`

Insert `<FreeAuditSection />` after `<EngageSection />` divider (line 41), before the final `<CTASection />`. This places the audit offer as a high-value lead magnet just before the closing CTA.

