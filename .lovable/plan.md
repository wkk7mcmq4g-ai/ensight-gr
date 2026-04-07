
## Plan: Apply Slate & Coral Palette

New palette:
- **Slate Dark** `#1E293B` (HSL ~217 33% 17%) → dark backgrounds, body text
- **Coral** `#F97316` (HSL ~25 95% 53%) → primary accent
- **Soft White** `#F8FAFC` (HSL ~210 40% 98%) → light backgrounds
- **Mid Slate** `#64748B` (HSL ~215 16% 47%) → muted text
- **Light Slate** `#94A3B8` (HSL ~215 16% 65%) → faint/secondary text
- **Warm Coral Glow** `#FB923C` (HSL ~27 96% 61%) → secondary accent / gradients

### Changes

**`src/index.css`** — Update all CSS custom properties:

Light mode:
- `--background` → `210 40% 98%` (Soft White)
- `--foreground` → `217 33% 17%` (Slate Dark)
- `--primary` → `25 95% 53%` (Coral)
- `--primary-foreground` → white
- `--card`, `--popover` → `0 0% 100%`
- `--muted`, `--secondary`, `--accent` → `210 20% 93%`
- `--muted-foreground` → `215 16% 47%` (Mid Slate)
- `--border`, `--input` → `210 15% 90%`
- `--ring` → Coral

Dark mode:
- `--background` → `217 33% 7%` (deep slate)
- `--foreground` → `210 20% 93%`
- `--primary` → Coral
- `--card` → `217 30% 14%` (Slate Dark)
- `--border` → `217 25% 20%`

Brand tokens:
- `--electric` → `217 33% 17%` (Slate Dark)
- `--electric-bright` → `217 28% 24%`
- `--electric-glow` → `25 95% 53%` (Coral)
- `--ordinal-green` / `--ordinal-cyan` → Coral shades
- `--ordinal-pink` → Warm Coral Glow (`27 96% 61%`)
- `--ordinal-amber` → kept
- `--ordinal-body` → Slate Dark
- `--ordinal-dim` → Mid Slate (`215 16% 47%`)
- `--ordinal-faint` → Light Slate (`215 16% 65%`)

Sidebar tokens updated to match.

**`src/pages/DataClarity.tsx`** — Update dark section backgrounds from `hsl(220,20%,8%)` → `hsl(217,33%,7%)` and card darks to match.

**Memory** — Update `mem://design/tokens` and `mem://index.md` with new palette.

### Files changed
- `src/index.css`
- `src/pages/DataClarity.tsx`
- `mem://design/tokens`
- `mem://index.md`
