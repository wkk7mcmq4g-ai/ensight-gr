

# Add "How We Help" Section

## New file: `src/components/home/HowWeHelpSection.tsx`

Create a section with:
- Mono-label tag: `// How We Help`
- Headline: "How we help"
- 4-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`)
- Cards matching existing card style (bg-card, border, rounded-lg, shadow-sm, hover lift) with a subtle top accent bar in muted tones
- Icons from lucide-react: `Monitor` (Custom Applications), `Users` (CRM & Workflows), `BarChart3` (Data & Reporting), `Zap` (Automation & Integration)
- Use `AnimatedSection` + `StaggerChildren`/`StaggerItem` for entrance animations, consistent with ProblemsSection and FrameworkSection

## Edit: `src/pages/Home.tsx`

Insert `<HowWeHelpSection />` after `<ProblemsSection />` (after line 18's divider), with a divider above it.

