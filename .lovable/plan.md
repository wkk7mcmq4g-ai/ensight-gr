

## Convert Ordinal Process Debt Assessment to React

Rebuild the uploaded HTML assessment as a fully functional React app, faithfully matching the original design and behavior.

### Design System
- **Fonts**: Outfit (headings/body) + JetBrains Mono (labels/badges)
- **Colors**: Light theme with electric indigo (#4F46E5), green (#10B981), pink accents on a #F5F5F8 background
- **Style**: Clean cards with subtle borders, gradient accents, smooth animations

### Pages & Components
1. **Assessment Page** (single page app)
   - **Header** — ordinal logo with green dot, badge, gradient headline, description
   - **Progress Bar** — step counter + animated fill bar
   - **Question Card** — animated card showing one question at a time
     - Number input (team size question)
     - Radio-style option cards for multiple choice
   - **Navigation** — Back/Next buttons with proper disabled states
   
2. **Results View** (replaces assessment on completion)
   - **Score Card** — animated SVG ring with percentage, colored by severity (low/medium/high)
   - **Cost Card** — dark gradient card showing estimated annual cost (€)
   - **Breakdown Card** — per-question results with Good/At Risk/Critical badges
   - **CTA Card** — "Book Your X-Ray Briefing" with mailto link

### Interactions
- Smooth fadeUp animations on card transitions
- SVG ring animation on results reveal
- Score calculation: sum of option scores → percentage → cost estimate (team × €40k × waste factor)
- Three severity tiers: Low (≤25%), Moderate (≤55%), High (>55%)

### Background Effects
- Subtle radial gradient blobs (indigo top-right, green bottom-left)

