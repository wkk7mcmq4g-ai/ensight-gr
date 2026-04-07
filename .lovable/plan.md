

## Plan: Apply Neon Mint / Core Navy / Soft Gray / Graphite Black Palette

Based on the uploaded palette image, the new colors are:
- **Neon Mint** `#36ECDE` → primary accent (replaces purple)
- **Core Navy** `#00203F` → dark backgrounds
- **Soft Gray** `#E6E9EC` → light backgrounds, borders, muted surfaces
- **Graphite Black** `#2F2F2F` → body text, dark elements

### What changes

**1. `src/index.css`** — Replace all CSS custom property values:

Light mode:
- `--background` → Soft Gray-ish white (~210 10% 97%)
- `--foreground` → Graphite Black (~0 0% 18%)
- `--primary` → Neon Mint (~174 82% 57%)
- `--primary-foreground` → Core Navy (~205 100% 12%)
- `--card`, `--popover` → white
- `--muted`, `--secondary`, `--accent` → Soft Gray tones
- `--border`, `--input` → Soft Gray
- `--ring` → Neon Mint

Dark mode:
- `--background` → Core Navy (~205 100% 8%)
- `--foreground` → Soft Gray (~210 10% 92%)
- `--primary` → Neon Mint (~174 82% 57%)
- `--card` → slightly lighter navy
- `--border` → dark navy tones

Brand tokens remapped:
- `--electric` → Core Navy variants
- `--electric-bright` → lighter navy
- `--ordinal-green` → Neon Mint shade
- `--ordinal-cyan` → Neon Mint variant
- `--ordinal-pink` → warm coral accent (complementary)
- `--ordinal-amber` → kept warm for contrast
- `--ordinal-body` → Graphite Black
- `--ordinal-dim` → mid gray
- `--ordinal-faint` → Soft Gray

**2. `src/components/layout/Navbar.tsx`** — Update any hardcoded nav accent color if present.

**3. `src/components/home/StatStrip.tsx`** — Colors already use CSS variables via `bg-primary`, `bg-ordinal-*` so they auto-update.

**4. Memory update** — Update `mem://design/tokens` and `mem://index.md` to reflect the new palette.

### Files changed
- `src/index.css` — All CSS custom properties updated to new palette
- `mem://design/tokens` — Updated palette documentation
- `mem://index.md` — Updated core description

Most components use Tailwind classes referencing CSS variables (`bg-primary`, `text-primary`, etc.), so they will automatically pick up the new colors with no code changes needed.

### Revert safety
You can revert to the current purple palette at any time using the revert button on the message before these changes, or via the History tab.

