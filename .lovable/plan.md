

# Add "Selected Work" Section

## New file: `src/components/home/SelectedWorkSection.tsx`

Create a section with:
- Mono-label: `// Selected Work`
- Headline: "Selected Work"
- 3-column responsive grid (`grid-cols-1 md:grid-cols-3 gap-4`)
- Cards using existing style (bg-card, border, rounded-lg, p-7/p-8, shadow-sm, hover lift)
- Each card: title in bold, then a `ul` with 3 bullet points using a small check or dot icon (e.g. `CheckCircle2` from lucide at 16px, `text-ordinal-green`)
- Content exactly as specified for the three case studies
- Use `AnimatedSection` + `StaggerChildren`/`StaggerItem` for entrance animations

## Edit: `src/pages/Home.tsx`

Insert `<SelectedWorkSection />` after `<HowWeHelpSection />` (line 21), with a divider between them. The existing divider on line 22 moves after SelectedWork, before ProofSection.

