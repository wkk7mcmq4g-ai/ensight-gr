

# Regenerate Case Study Images

Generate four new AI-created images with a consistent abstract/geometric style that matches the violet + cool gray design system.

## Style direction
Each image: abstract geometric composition on a cool gray (#F8F9FA) background with violet (#7C3AED) and blue (#3B82F6) accent shapes. Minimal, clean, consulting-grade — no stock photography, no people, no text. Think: abstract data visualization / network patterns relevant to each case study's theme.

## Images to generate

1. **case-study-loan.jpg** — Abstract financial network: interconnected nodes and flowing lines suggesting a unified platform, violet-to-blue gradient elements on light gray
2. **case-study-charity.jpg** — Abstract organizational structure: overlapping translucent circles/cards suggesting programme unification, violet and blue tones
3. **case-study-reporting.jpg** — Abstract data flow: geometric bars, flowing data streams, dashboard-like shapes suggesting automated reporting, violet-to-blue gradient
4. **case-study-touro.jpg** — Abstract mobile interface: card-like geometric layers with route/map-inspired lines, clean violet accents

## Process
- Use AI image generation (Nano banana 2 / `google/gemini-3.1-flash-image-preview`) for each image
- Consistent prompt template with shared style tokens for visual cohesion
- Save to `src/assets/case-study-*.jpg`
- QA all four images before delivering

## Files changed
- `src/assets/case-study-loan.jpg` — regenerated
- `src/assets/case-study-charity.jpg` — regenerated
- `src/assets/case-study-reporting.jpg` — regenerated
- `src/assets/case-study-touro.jpg` — regenerated

No code changes needed — filenames stay the same.

