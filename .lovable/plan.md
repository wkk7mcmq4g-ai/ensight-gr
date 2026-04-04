

# Replace Emoji Icons with Professional Lucide Icons

## Problem
The homepage Value Pillars section uses emoji icons (🔄, 📊, 🛠️, ⚡) which look childish and inconsistent with the rest of the site, which uses clean Lucide stroke icons.

## Changes

### `src/components/home/ValuePillarsSection.tsx`
- Replace emoji strings with Lucide icon components (matching the Services page pattern):
  - Digital Transformation: `Workflow` (same as Services page)
  - Data & Analytics: `BarChart3`
  - Custom Platforms: `Code2`
  - Automation & Integration: `Zap`
- Render icons as proper Lucide components with `size={24}`, `strokeWidth={1.5}`, and color classes matching each pillar's accent color
- This aligns the homepage with the Services page, which already uses these exact Lucide icons for the same four areas

No other files need changes — the Services page, HowWeHelp section, and methodology cards already use Lucide icons correctly.

