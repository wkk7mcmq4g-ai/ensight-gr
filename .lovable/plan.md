

# Simplify Scroll-Reveal Animations

## Problem
Current animations use `y: 40px` / `y: 24px` translate distances, `0.6s` / `0.5s` durations, `-80px` viewport margins (delays trigger), and stagger delays — causing large blank gaps while scrolling.

## Approach
Reduce all values in the single shared animation file. Also fix inline animations in individual section components.

## Changes

### 1. `src/components/home/AnimatedSection.tsx`
- `AnimatedSection`: `y: 40` → `y: 12`, `duration: 0.6` → `0.3`, `margin: '-80px'` → `'-20px'`, cap `delay` to max `0.1`
- `StaggerChildren`: `margin: '-80px'` → `'-20px'`, `staggerChildren: 0.1` → `0.05`
- `StaggerItem`: `y: 24` → `y: 12`, `duration: 0.5` → `0.3`

### 2. `src/components/home/ProofSection.tsx`
- ProofCard stat number animation: `delay: 0.2 + i * 0.1` → `delay: i * 0.05`, `duration: 0.6` → `0.3`

### 3. `src/components/home/PainPointsSection.tsx`
- List items: `x: -12` → `x: -8`, `duration: 0.4` → `0.25`, `delay: i * 0.08` → `delay: i * 0.04`

### 4. `src/components/home/HeroSection.tsx`
- Already uses `animate` (not `whileInView`) so it triggers on mount — keep as-is but reduce delays slightly if any exceed 0.1s for secondary elements

All layout, content, and spacing unchanged.

