

## Plan: Apply Charcoal + Electric Blue + White Palette

New palette:
- **Charcoal** `#121417` (HSL ~216 10% 8%) → primary dark, nav, headings
- **Secondary** `#2A2F36` (HSL ~213 13% 19%) → secondary dark
- **Electric Blue** `#3B82F6` (HSL ~217 91% 60%) → accent
- **Background** `#FFFFFF` / `#F7F7F7` (HSL ~0 0% 97%) → light backgrounds
- **Text** `#111827` (HSL ~222 47% 11%) → body text

### Changes

**`src/index.css`** — Update all CSS custom properties:

Light mode:
- `--background` → `0 0% 97%` (#F7F7F7)
- `--foreground` → `222 47% 11%` (#111827)
- `--primary` → `217 91% 60%` (Electric Blue)
- `--primary-foreground` → white
- `--secondary` → `213 13% 19%` (#2A2F36)
- `--secondary-foreground` → white
- `--card`, `--popover` → `0 0% 100%` (white)
- `--muted`, `--accent` → `0 0% 95%`
- `--muted-foreground` → `215 14% 46%` (mid gray)
- `--border`, `--input` → `0 0% 91%`
- `--ring` → Electric Blue

Dark mode:
- `--background` → `216 10% 6%` (deeper charcoal)
- `--foreground` → `0 0% 95%`
- `--card` → `216 10% 8%` (Charcoal)
- `--border` → `213 13% 19%`

Brand tokens:
- `--electric` → `216 10% 8%` (Charcoal)
- `--electric-bright` → `213 13% 19%` (Secondary)
- `--electric-glow` → `217 91% 60%` (Electric Blue)
- `--ordinal-green/cyan` → Electric Blue
- `--ordinal-body` → `222 47% 11%` (Text)
- `--ordinal-dim` → `215 14% 46%`
- `--ordinal-faint` → `215 12% 60%`
- Pink, amber kept as-is

Sidebar tokens updated to match.

**`mem://design/tokens`** and **`mem://index.md`** — Updated with new palette hex codes.

### Files changed
- `src/index.css`
- `mem://design/tokens`
- `mem://index.md`

All components auto-update via CSS variables.

