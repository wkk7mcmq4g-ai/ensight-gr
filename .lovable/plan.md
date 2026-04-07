

## Plan: Apply Deep Navy + Electric Blue + Warm White Palette

New palette:
- **Deep Navy** `#0A1628` (HSL ~216 60% 10%) → dark backgrounds, body
- **Electric Blue** `#2563EB` (HSL ~217 91% 53%) → primary accent
- **Warm White** `#F8F7F4` (HSL ~40 25% 97%) → light backgrounds
- **Slate** `#64748B` (HSL ~215 16% 47%) → muted text, dim elements
- **Light Slate** `#94A3B8` (HSL ~215 16% 65%) → faint/secondary text

### Changes

**`src/index.css`** — Update all CSS custom properties:

Light mode:
- `--background` → `40 25% 97%` (Warm White)
- `--foreground` → `216 60% 10%` (Deep Navy)
- `--primary` → `217 91% 53%` (Electric Blue)
- `--primary-foreground` → `0 0% 100%` (white)
- `--card`, `--popover` → `0 0% 100%` (white)
- `--muted`, `--secondary`, `--accent` → `40 15% 93%` (warm gray)
- `--border`, `--input` → `40 10% 90%`
- `--ring` → `217 91% 53%` (Electric Blue)

Dark mode:
- `--background` → `216 60% 7%` (Deep Navy dark)
- `--foreground` → `40 15% 93%` (Warm White-ish)
- `--primary` → `217 91% 53%` (Electric Blue)
- `--card` → `216 50% 12%` (slightly lighter navy)
- `--border` → `216 40% 18%`

Brand tokens:
- `--electric` → `216 60% 10%` (Deep Navy)
- `--electric-bright` → `216 50% 18%`
- `--electric-glow` → `217 91% 53%` (Electric Blue)
- `--ordinal-green/cyan` → Electric Blue shades
- `--ordinal-pink` → warm coral kept (`12 70% 55%`)
- `--ordinal-amber` → kept (`38 72% 48%`)
- `--ordinal-body` → Deep Navy
- `--ordinal-dim` → Slate (`215 16% 47%`)
- `--ordinal-faint` → Light Slate (`215 16% 65%`)

Sidebar tokens updated to match.

**`mem://design/tokens`** and **`mem://index.md`** — Updated to reflect new palette.

### Files changed
- `src/index.css`
- `mem://design/tokens`
- `mem://index.md`

All components using Tailwind CSS variable classes auto-update.

