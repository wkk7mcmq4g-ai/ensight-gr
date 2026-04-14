

# Widen About Section + Add Abstract Background Lines

## Changes

**File: `src/components/home/AboutSection.tsx`**

1. Widen the text container from `max-w-[600px]` to `max-w-[800px]`
2. Replace the `DecorativeShapes` starburst with a custom inline SVG background of fine, subtle diagonal/intersecting lines in violet tones — low opacity, spanning the full section width. These will be thin geometric lines (not the heavy starburst) with slight transparency, positioned absolutely behind the content.

The abstract lines will be a set of ~8-10 thin diagonal lines crossing the section at various angles, using `hsl(var(--primary))` at ~0.06-0.10 opacity, plus a couple of faint horizontal lines for layering.

