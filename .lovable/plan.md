

# Make Hero Section More Compact

Reduce the vertical size of the hero section by tightening padding, font sizes, and spacing.

## Changes

**File: `src/components/home/HeroSection.tsx`**

1. Reduce top/bottom padding: `pt-24 pb-10 md:pt-32 md:pb-16` → `pt-16 pb-6 md:pt-24 md:pb-10`
2. Reduce headline max font size: `clamp(32px,7vw,80px)` → `clamp(28px,5.5vw,60px)`
3. Tighten headline bottom margin: `mb-6` → `mb-4`
4. Tighten subtitle bottom margin: `mb-7` → `mb-5`
5. Reduce grid gap: `gap-8` → `gap-6`

**File: `src/components/home/HeroVisual.tsx`**

6. Reduce the SVG minimum height: `min-h-[320px]` → `min-h-[260px]`

