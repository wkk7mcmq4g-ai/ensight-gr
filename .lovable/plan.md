

# Color Palette Overhaul

## Color Mapping (Hex → HSL)

| Role | Old Hex | New Hex | New HSL |
|------|---------|---------|---------|
| Headlines / foreground | #1D1532 | #0F2A36 | `192 56% 14%` |
| CTA / primary | #7050D7 | #0ABFBC | `179 90% 39%` |
| Stats accent (new) | — | #E8A838 | `36 80% 56%` |
| Background | #F5F0EB | #F4EFE9 | `30 25% 93%` |
| Card surfaces | current | #FFFFFF | `0 0% 100%` |
| Body / muted text | #6D6487 | #4A6470 | `195 20% 36%` |
| Borders | #E3E0DD | #D9D4CE | `33 10% 83%` |

## Files to Change

### 1. `src/index.css` — Update `:root` variables
- `--foreground` → `192 56% 14%`
- `--card-foreground`, `--popover-foreground`, `--accent-foreground` → same deep teal
- `--primary` → `179 90% 39%` (electric teal)
- `--ring` → match primary
- `--background` → `30 25% 93%`
- `--muted-foreground` → `195 20% 36%`
- `--border`, `--input` → `33 10% 83%`
- Brand tokens: update `--electric`, `--electric-bright`, `--electric-glow` to teal variants
- `--ordinal-body` → `192 56% 14%`; `--ordinal-dim` → `195 20% 36%`
- Add new `--stat-accent: 36 80% 56%` for amber highlights
- Update sidebar vars to match

### 2. `tailwind.config.ts` — Add stat-accent color
- Add `"stat-accent": "hsl(var(--stat-accent))"` to colors

### 3. `src/components/home/HeroVisual.tsx` — SVG nodes use `hsl(var(--primary))` already
- These will automatically pick up the new teal via the CSS variable change. No file edit needed.

### 4. `src/components/DecorativeShapes.tsx` — Same as above
- All SVG strokes/fills reference `hsl(var(--primary))`, so they'll auto-update. No edit needed.

### 5. `src/components/home/StatStrip.tsx` — Update stat number styling
- Add `text-stat-accent` or use the amber color for the stat numbers

### 6. `src/components/home/ProofSection.tsx` — Stat metrics
- Apply amber accent color to the metric numbers (`~60%`, `Days → Min`, etc.)
- Update card background gradients from purple tones to teal tones

### 7. Update memory
- Update `mem://design/tokens` and `mem://index.md` to reflect the new teal+amber palette

## What stays the same
- All layout, typography weights, font families, spacing, and content
- Component structure and animations
- Dark mode (untouched unless requested)

## Summary
This is primarily a CSS variable swap in `index.css` — most components already use semantic tokens (`bg-primary`, `text-foreground`, etc.) so they'll update automatically. The main manual work is adding the amber stat accent and updating the few components that use hardcoded brand token classes for stat highlighting.

