

# Add Subtle Parallax Effects to Hero & Section Dividers

## What we're adding

1. **Hero parallax background** — A soft radial gradient orb behind the hero that moves slower than the page scroll, creating depth.

2. **Section divider parallax accents** — Replace the flat `border-b` dividers in `Home.tsx` with a `ParallaxDivider` component that includes a subtle decorative line with a small gradient dot that shifts horizontally on scroll.

3. **Hero content stagger** — The hero headline, subtitle, and CTA buttons will have slightly different scroll speeds (very subtle, 5-10px range) so they feel layered.

## Technical approach

- Use `framer-motion`'s `useScroll` + `useTransform` (already in the project) for all parallax — no extra dependencies.
- Respect `prefers-reduced-motion` by disabling parallax when the user prefers reduced motion.

## Files changed

| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Wrap in a scroll-tracked container. Add a large, soft violet radial gradient `motion.div` behind content that scrolls at 0.5× speed. Add subtle differential scroll offsets to headline vs. subtitle vs. CTA. |
| `src/components/home/ParallaxDivider.tsx` | **New.** A thin horizontal line with a small glowing dot that translates horizontally as the user scrolls past it. Uses `useScroll`/`useTransform`. |
| `src/pages/Home.tsx` | Replace `border-b border-[#D6D0C9]` wrapper divs with `<ParallaxDivider />` between sections. |

## Details

**Hero gradient orb**: A 600×600px radial gradient (primary color at 8% opacity) positioned behind the grid, translated vertically at half the scroll rate. Adds perceived depth without distracting from content.

**ParallaxDivider**: A `1px` line with a `6px` circle accent. The circle translates from ~20% to ~80% horizontally as the section scrolls through the viewport. Very subtle — purely decorative polish.

**Differential hero layers**: Headline gets `translateY(scrollY * -0.03)`, subtitle `translateY(scrollY * -0.05)`, buttons `translateY(scrollY * -0.07)`. Creates a gentle layered feel.

