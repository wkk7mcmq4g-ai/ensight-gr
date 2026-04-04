

# Add "How We Work" Process Section

## New file: `src/components/home/HowWeWorkSection.tsx`

- Mono-label: `// How We Work`
- Headline: "How we work"
- Subtitle: "A structured approach from problem to solution"
- 4-step horizontal layout on desktop (`grid-cols-4`), vertical stack on mobile
- Each step: numbered circle (01–04) with accent color, bold title, description text
- Connecting line between steps: a horizontal `bg-border` line running behind the step numbers on desktop (using absolute positioning), hidden on mobile
- Step accent colors cycling through existing palette: `primary`, `ordinal-cyan`, `electric-bright`, `ordinal-green`
- Use `AnimatedSection` + `StaggerChildren`/`StaggerItem` for entrance animations
- Clean consulting style: generous whitespace, `text-sm text-ordinal-body` descriptions

## Edit: `src/pages/Home.tsx`

Insert `<HowWeWorkSection />` after `<FrameworkSection />` (line 30), with a divider before it. This places the process steps logically after the framework methodology.

