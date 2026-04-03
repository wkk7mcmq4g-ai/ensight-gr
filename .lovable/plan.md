

# Make Data Clarity Hero Section Shorter

## Change
In `src/pages/DataClarity.tsx` line 98, the hero section uses `min-h-screen` which forces it to fill the full viewport height. I'll replace it with a fixed, shorter height.

### File: `src/pages/DataClarity.tsx` (line 98)
- Change `min-h-screen` to `min-h-[70vh]` — this reduces the hero from 100vh to roughly 70% of viewport, making it feel appropriately sized without being cramped.

One-line change.

