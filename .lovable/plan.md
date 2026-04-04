

# Add "About" Section to Homepage

## New file: `src/components/home/AboutSection.tsx`

- Mono-label: `// About`
- Headline: "Built by experience, not theory"
- Three paragraphs as provided, wrapped in a narrower container (`max-w-[680px]`) for readability
- Use `bg-muted/30` or subtle background to differentiate
- Use `AnimatedSection` for entrance animation
- Professional, clean typography: `text-[15px] text-ordinal-body leading-relaxed`

## Edit: `src/pages/Home.tsx`

Insert `<AboutSection />` after `<SelectedWorkSection />` (line 24), with a divider before `<ProofSection />`.

