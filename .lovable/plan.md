
# Professional Visual Refinements

## 1. Color palette — Desaturate purple (`index.css`)
- Primary: `270 70% 40%` → `268 45% 32%` (deeper, more muted)
- Electric-bright: `270 80% 50%` → `268 50% 42%`
- Reduce saturation on all ordinal accent colors
- Body text slightly darker for better readability

## 2. Border radius — Sharpen (`index.css`)
- `--radius: 1rem` → `--radius: 0.5rem` (consulting-sharp, not SaaS-round)

## 3. Typography weights — Restrain
Across all section components:
- `font-black` → `font-bold`
- `font-extrabold` → `font-semibold` (on headings)
- Keep one `font-bold` level for H1 hero only

## 4. Remove `// LABEL` monospace pattern
Replace `font-mono-label text-[10px] ... {"// What We Do"}` with clean uppercase sans-serif labels:
- Remove `font-mono-label`, use regular font
- Remove `//` prefix
- Files: ValuePillarsSection, HowWeHelpSection, HeroSection (if applicable), Services page sections

## 5. Navbar gradient bar
- Replace rainbow gradient (`from-[#3D1A78] via-primary to-ordinal-green`) with single muted primary color line

## 6. Card accent bars
- Keep colored top bars but make them thinner (3px → 2px) and more muted
- Alternatively: remove entirely for cleaner look

## Files changed
| File | Change |
|------|--------|
| `src/index.css` | Desaturate palette, reduce radius |
| `src/components/home/ValuePillarsSection.tsx` | Font weights, remove monospace label |
| `src/components/home/HowWeHelpSection.tsx` | Font weights, remove monospace label |
| `src/components/home/HeroSection.tsx` | Font weight refinement |
| `src/components/layout/Navbar.tsx` | Simplify gradient bar |
| `src/pages/Services.tsx` | Font weights, remove monospace labels |
| Other section components | Same pattern where applicable |
