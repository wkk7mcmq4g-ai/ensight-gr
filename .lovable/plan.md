

# Hero Headline Visual Impact

## Changes — `src/components/home/HeroSection.tsx` only

### 1. Headline font size
- Change `text-[clamp(28px,6vw,68px)]` → `text-[clamp(32px,7vw,80px)]`
- Keeps the existing `leading-[1.08]` (already within the 1.05–1.1 range) and `tracking-tight`

### 2. Accent the word "transform"
- Split the headline text so "transform" is wrapped in `<span className="text-[#0A7EA4]">transform</span>`

### 3. Subheading style update
- Change `text-muted-foreground` → `text-[#3D5A68]`
- Add `font-medium` (500 weight)

No other files touched.

