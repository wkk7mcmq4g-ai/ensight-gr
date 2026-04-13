

# Modern Color Refresh — Neutral + One Bold Accent

## Direction
Replace the warm teal/amber/linen palette with a clean neutral foundation and a single striking accent — **electric violet (#7C3AED)**. This gives a contemporary, high-end SaaS feel while staying professional.

## New palette

| Role | Old | New |
|------|-----|-----|
| Background | `#F4EFE9` warm linen | `#F8F9FA` cool gray-white |
| Foreground/headlines | `#0E2D3D` teal-slate | `#111827` near-black (gray-900) |
| Body text | `#3D5A68` teal-gray | `#4B5563` neutral gray-600 |
| Faint/dim text | teal-tinted grays | `#6B7280` gray-500, `#9CA3AF` gray-400 |
| Primary (accent) | `#0A7EA4` ocean teal | `#7C3AED` electric violet |
| Secondary | `#195A73` dark teal | `#6D28D9` deeper violet |
| Gradient CTA | teal → blue | `#7C3AED` → `#3B82F6` (violet → blue) |
| Stat numbers | `#06B6D4` cyan | `#7C3AED` violet |
| Card bg | white | `#FFFFFF` (stays white, clean against gray bg) |
| Card borders | `#D6D0C9` warm | `#E5E7EB` cool gray-200 |
| Dark sections | `#0B1E27` teal-dark | `#0F172A` slate-900 |
| Muted bg | warm beige | `#F1F5F9` slate-50 |

## Files to change

### 1. `src/index.css` — All CSS custom properties
Swap every token to the neutral palette above. Update gradient variables to violet→blue.

### 2. `tailwind.config.ts` — Remove teal-specific color names
Clean up `ordinal-*` tokens that reference old teal hues. Keep the token structure but with new values.

### 3. `src/components/home/HeroSection.tsx`
- Gradient text: violet → blue instead of teal → blue
- CTA buttons: violet → blue gradient
- Ghost button border: violet

### 4. `src/components/home/ValuePillarsSection.tsx`
- Icon tints and gradient accent bars: use violet shades
- Glass cards: `border-gray-200/60` instead of `border-white/40`

### 5. `src/components/home/HowWeHelpSection.tsx`
- Same card and accent bar updates

### 6. `src/components/home/EngageSection.tsx`
- Gradient bars and recommended tag: violet
- Recommended card tint: light violet instead of teal

### 7. `src/components/home/ProofSection.tsx`
- Dark section bg: slate-900
- Stat numbers and labels: violet accent
- Card borders: slate tones

### 8. `src/components/home/CTASection.tsx`
- Dark bg: slate-900
- CTA button: violet → blue gradient

### 9. `src/components/layout/Navbar.tsx`
- Top accent line: violet → blue gradient
- Assessment button: same gradient
- Body text colors: neutral grays

### 10. `src/components/layout/Footer.tsx`
- Text colors: neutral grays (will inherit from token changes)

### 11. `src/components/home/QuoteSection.tsx`
- Dark bg: slate-900

### 12. All other section components
- Section labels (`text-accent-cyan`): switch to violet accent
- Body text classes referencing `ordinal-body`, `ordinal-dim`: will pick up new token values automatically

### 13. `mem://design/tokens` — Update memory
Record the new neutral + violet palette.

## What stays the same
- All layouts, spacing, typography weights, and font families
- Glass card treatment (backdrop-blur)
- Hero node graph animation
- Dark section pattern (Proof, Quote, CTA)
- All content and copy

