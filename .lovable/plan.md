

## Plan: Apply Charcoal + Teal + Off-White Palette

New palette:
- **Charcoal** `#1A1A2E` (HSL ~240 27% 14%) → dark backgrounds, body text
- **Teal** `#0D9488` (HSL ~175 83% 32%) → primary accent
- **Off-White** `#FAFAF9` (HSL ~60 20% 98%) → light backgrounds
- **Cool Gray** `#6B7280` (HSL ~220 9% 46%) → muted text
- **Light Gray** `#9CA3AF` (HSL ~218 11% 65%) → faint/secondary text

### Changes

**`src/index.css`** — Update all CSS custom properties:

Light mode:
- `--background` → `60 20% 98%` (Off-White)
- `--foreground` → `240 27% 14%` (Charcoal)
- `--primary` → `175 83% 32%` (Teal)
- `--primary-foreground` → white
- `--card`, `--popover` → `0 0% 100%`
- `--muted`, `--secondary`, `--accent` → `60 5% 93%`
- `--muted-foreground` → `220 9% 46%` (Cool Gray)
- `--border`, `--input` → `60 5% 90%`
- `--ring` → Teal

Dark mode:
- `--background` → `240 27% 8%` (deeper Charcoal)
- `--foreground` → `60 10% 93%`
- `--primary` → Teal
- `--card` → `240 25% 14%` (Charcoal)
- `--border` → `240 20% 20%`

Brand tokens:
- `--electric` → Charcoal (`240 27% 14%`)
- `--electric-bright` → `240 22% 22%`
- `--electric-glow` → Teal (`175 83% 32%`)
- `--ordinal-green` / `--ordinal-cyan` → Teal shades
- `--ordinal-pink` → warm coral kept
- `--ordinal-amber` → kept
- `--ordinal-body` → Charcoal
- `--ordinal-dim` → Cool Gray
- `--ordinal-faint` → Light Gray

Sidebar tokens updated to match.

**Memory** — Update `mem://design/tokens` and `mem://index.md` with new palette.

### Files changed
- `src/index.css`
- `mem://design/tokens`
- `mem://index.md`

All components auto-update via CSS variables.

