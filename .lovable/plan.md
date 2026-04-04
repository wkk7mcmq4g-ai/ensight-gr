

# Add "From Complexity to Clarity" Before/After Section

## New file: `src/components/home/BeforeAfterSection.tsx`

- Mono-label: `// Transformation`
- Headline: "From complexity to clarity"
- Two-column grid (`grid-cols-1 md:grid-cols-2 gap-6`)
- **Left card ("Before")**: `bg-muted/40` subtle darker feel, border, rounded-xl. Title in bold with `XCircle` icon (lucide, `text-destructive`). Bullet points with `XCircle` icons at 16px.
- **Right card ("After")**: `bg-primary/5` lighter/accent feel, `border-primary/20`, rounded-xl. Title in bold with `CheckCircle2` icon (`text-ordinal-green`). Bullet points with `CheckCircle2` icons at 16px.
- Bottom tagline centered below the grid: "We transform fragmented operations into streamlined, scalable systems." in `text-ordinal-body`
- Use `AnimatedSection` + `StaggerChildren`/`StaggerItem` for entrance animations
- Consistent section styling: `max-w-[1200px] mx-auto px-6 md:px-12 py-24`

## Edit: `src/pages/Home.tsx`

Insert `<BeforeAfterSection />` after `<HowWeWorkSection />` (line 33), before `<BeforeYouAutomate />`, with a divider between them. This logically flows: how we work → what the transformation looks like → our guarantee.

