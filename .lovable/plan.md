

## Plan: Apply Royal Blue / Turquoise / Athens Gray / Port Gore / Bunker Palette

From the uploaded palette:
- **Royal Blue** `#6045F4` (HSL ~247 89% 60%) → primary accent
- **Turquoise Blue** `#1BEEDF` (HSL ~175 85% 52%) → secondary accent / electric-glow
- **Athens Gray** `#EBEBED` (HSL ~240 4% 93%) → light backgrounds, borders, muted surfaces
- **Port Gore** ~`#29245B` (HSL ~244 43% 25%) → dark navy-purple for dark backgrounds
- **Bunker** `#0E1417` (HSL ~200 25% 7%) → deepest dark, near-black

### What changes

**`src/index.css`** — Update all CSS custom properties:

Light mode:
- `--background` → Athens Gray-ish white (~240 4% 97%)
- `--foreground` → Bunker-based dark (~200 15% 10%)
- `--primary` → Royal Blue (~247 89% 60%)
- `--primary-foreground` → white
- `--muted`, `--secondary`, `--accent` → Athens Gray tones
- `--border`, `--input` → Athens Gray
- `--ring` → Royal Blue

Dark mode:
- `--background` → Bunker (~200 25% 7%)
- `--foreground` → Athens Gray (~240 4% 93%)
- `--primary` → Royal Blue
- `--card` → Port Gore-ish dark (~244 40% 15%)
- `--border` → Port Gore tones

Brand tokens remapped:
- `--electric` → Port Gore / Bunker variants
- `--electric-glow` → Turquoise Blue
- `--ordinal-green` → Turquoise Blue shade
- `--ordinal-cyan` → Turquoise Blue
- `--ordinal-pink` → warm coral (complementary accent, kept)
- `--ordinal-amber` → kept warm for contrast
- `--ordinal-body` → Bunker-dark
- `--ordinal-dim` → mid gray
- `--ordinal-faint` → Athens Gray

**Memory** — Update `mem://design/tokens` and `mem://index.md` with new palette.

### Files changed
- `src/index.css` — All CSS custom properties
- `mem://design/tokens` — Palette docs
- `mem://index.md` — Core description

Most components use Tailwind classes referencing CSS variables, so they auto-update.

### Revert safety
You can revert at any time via History tab or the revert button on previous messages.

