

# Vibrant Modern Refresh

All four directions combined into a cohesive upgrade. No layout or content changes.

## 1. New Color Tokens (`src/index.css`)

Add a secondary electric blue accent and gradient utility variables:

- `--accent-blue: 217 91% 60%` → `#2563EB`
- `--accent-cyan: 187 96% 42%` → `#06B6D4`
- Gradient CSS custom properties for reuse:
  - `--gradient-cta: linear-gradient(135deg, hsl(195 89% 34%), hsl(217 91% 60%))` (teal → blue)
  - `--gradient-accent: linear-gradient(135deg, hsl(195 89% 34%), hsl(187 96% 42%))` (teal → cyan)

Update `tailwind.config.ts` to expose `accent-blue` and `accent-cyan` as color tokens.

## 2. Glass/Frosted Cards — All card elements site-wide

Replace flat white `bg-card` cards with frosted glass:

- **ValuePillarsSection.tsx**: Cards get `bg-white/75 backdrop-blur-xl border-white/40 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]` instead of `bg-card border-border`
- **HowWeHelpSection.tsx**: Same glass treatment on 4 solution cards
- **SelectedWorkSection.tsx**: Same on 3 case study cards
- **EngageSection.tsx**: Same on 3 engagement cards (recommended card keeps its teal tint but as `bg-[#E8F4F8]/80 backdrop-blur-xl`)
- **BeforeAfterSection.tsx**: "After" dashboard panel gets subtle glass border glow

## 3. Gradient Accents — CTA buttons and card accent bars

- **HeroSection.tsx**: "Learn More" button gets gradient background `bg-gradient-to-r from-[#0A7EA4] to-[#2563EB]` with a subtle white shine pseudo-element on hover
- **CTASection.tsx**: "Send Message" button same gradient
- **Navbar.tsx**: "Free Assessment" CTA button same gradient
- **Card accent bars**: Replace flat `bg-primary` top/left bars in ValuePillars, HowWeHelp, and Engage cards with `bg-gradient-to-r from-[#0A7EA4] to-[#06B6D4]`

## 4. Bolder Color Contrast

- **ProofSection.tsx**: Stat metric numbers change from `text-stat-accent` (amber) to `text-[#06B6D4]` (vibrant cyan) for more pop against the dark background
- **Section labels**: The small uppercase "What We Do" / "Proof Points" labels get `text-[#06B6D4]` instead of `text-primary` for extra vibrancy
- **ValuePillarsSection.tsx** icon containers: brighter tinted backgrounds using the new cyan/blue tokens
- **Navbar** top accent line: gradient `bg-gradient-to-r from-[#0A7EA4] to-[#2563EB]` instead of flat `bg-primary`

## 5. Hero Energy Boost (`src/components/home/HeroSection.tsx` + `HeroVisual.tsx`)

- Add a radial gradient glow behind the hero visual: `absolute` div with `bg-[radial-gradient(circle_at_center,_hsl(195_89%_34%/0.12)_0%,_transparent_70%)]`
- Add a second ghost CTA button: "Get a Free Assessment" with `border-2 border-[#0A7EA4] text-[#0A7EA4] hover:bg-[#0A7EA4]/10` linking to `/assessment`
- Hero keyword "transform" gets a gradient text treatment: `bg-gradient-to-r from-[#0A7EA4] to-[#2563EB] bg-clip-text text-transparent`

## Files changed
- `src/index.css` — new CSS variables
- `tailwind.config.ts` — new color tokens
- `src/components/home/HeroSection.tsx` — gradient text, ghost CTA, hero glow
- `src/components/home/ValuePillarsSection.tsx` — glass cards, gradient accent bars
- `src/components/home/HowWeHelpSection.tsx` — glass cards, gradient bars
- `src/components/home/SelectedWorkSection.tsx` — glass cards
- `src/components/home/EngageSection.tsx` — glass cards
- `src/components/home/ProofSection.tsx` — cyan stat numbers
- `src/components/home/CTASection.tsx` — gradient CTA button
- `src/components/layout/Navbar.tsx` — gradient top bar, gradient assessment button

