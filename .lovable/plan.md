

# Update remaining pages to new violet palette

All homepage sections were updated to the new neutral + violet palette, but the secondary pages still reference old teal-era tokens. This plan brings them in line.

## Files to change

### 1. `src/pages/About.tsx`
- Gradient text `from-electric-bright to-ordinal-green-bright` → `from-primary to-accent-blue` (violet→blue, matching hero)
- `text-electric-glow` on icons and role label → `text-primary`
- CTA button `bg-ordinal-green` → violet→blue gradient (matching site CTAs)
- CTA accent bar `from-primary via-ordinal-green to-ordinal-cyan` → `from-primary to-accent-blue`

### 2. `src/pages/Services.tsx`
- Gradient text `from-electric-bright to-ordinal-green-bright` → `from-primary to-accent-blue`
- Multi-color bar/icon system for offerings and methodology: replace `bg-ordinal-green`, `bg-ordinal-cyan`, `bg-electric-bright` with violet shades (`bg-primary`, `bg-primary/70`, `bg-accent-blue`, `bg-secondary`)
- Same for engagement model cards

### 3. `src/pages/CaseStudies.tsx`
- Gradient text → `from-primary to-accent-blue`
- Card accent bar `from-primary via-ordinal-green to-ordinal-cyan` → `from-primary to-accent-blue`
- Metric values `text-ordinal-green` → `text-primary`

### 4. `src/pages/CaseStudyDetail.tsx`
- Outcome highlight box: `bg-ordinal-green/5 border-ordinal-green/20 text-ordinal-green` → `bg-primary/5 border-primary/20 text-primary`
- Checkmark icons: `text-ordinal-green` → `text-primary`
- Metric values: `text-ordinal-green` → `text-primary`
- CTA accent bar → `from-primary to-accent-blue`
- CTA button: `bg-ordinal-green` → violet→blue gradient

### 5. `src/pages/Assessment.tsx`
- Progress bar completed segments: `bg-ordinal-green` → `bg-primary`
- Active segment: `bg-electric-bright` → `bg-accent-blue`
- All `text-electric-glow` → `text-primary`
- All `bg-electric-bright` → `bg-primary`
- Email capture accent bar → `from-primary to-accent-blue`
- Email submit button: `bg-ordinal-green` → violet→blue gradient
- Cost estimate gradient text: `from-ordinal-pink-bright via-ordinal-amber to-ordinal-green-bright` → `from-primary via-accent-blue to-secondary`
- Header badge: update glow shadow to violet

### 6. `src/pages/DataClarityAssessment.tsx`
- Progress bar: `bg-ordinal-green` → `bg-primary`, `bg-[#06B6D4]` → `bg-accent-blue`
- Selected option styling: `border-[#06B6D4] bg-[#06B6D4]` → `border-primary bg-primary`

### 7. `src/pages/DataClarity.tsx`
- Section labels with `// The Problem` prefix: remove `//` prefix (per memory rule)
- Hero CTA button `bg-[#10B981]` → violet→blue gradient
- Dark section backgrounds stay slate-900 (already dark, fine)
- Accent colors in hero label and dots from cyan to violet

### 8. `src/components/home/BeforeYouAutomate.tsx`
- Background gradient: `from-primary/5 to-ordinal-green/5` → `from-primary/5 to-accent-blue/5`
- Accent bar: `from-primary via-ordinal-green to-ordinal-cyan` → `from-primary to-accent-blue`

### 9. `src/components/home/BeforeAfterSection.tsx`
- `bg-ordinal-green` references in the "After" dashboard mock → `bg-primary`

### 10. Memory update
- Update `mem://design/tokens` to note all pages now use the unified violet palette

## What stays the same
- DataClarity page's multi-color problem cards (indigo, cyan, violet, amber) — these are intentional categorical differentiation, not brand accent colors
- All layouts, content, and typography
- Dark section backgrounds (already slate-900 toned)

