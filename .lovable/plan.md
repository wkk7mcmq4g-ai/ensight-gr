

# Add a Services Page & Reorganise Navigation

## Why
The current site scatters service information across homepage sections (EngageSection, FrameworkSection) and a standalone Data Clarity page. A dedicated Services page creates a clear entry point for prospects evaluating what Ensight offers.

## Changes

### 1. Create `src/pages/Services.tsx`
A single page combining:
- **Hero** — "What We Do" with a one-liner positioning statement
- **Three service cards** — Operational X-Ray, Quick Win, Full Transformation (pulled from EngageSection data but with more detail: who it's for, what's included, typical outcomes)
- **Data Clarity section** — positioned as a standalone product/tool with a link to `/data-clarity`
- **The Framework** — the 4-step method (Diagnose → Redesign → Build → Embed) shown as a horizontal timeline or reused from FrameworkSection
- **CTA** — "Not sure where to start? Book an X-Ray Briefing"

### 2. Update Navigation (`src/components/layout/Navbar.tsx`)
Replace the current nav links with a cleaner structure:
- **Services** → `/services`
- **Case Studies** → `/case-studies`
- **About** → `/about`
- **Free Assessment** (dropdown, unchanged)

Remove the homepage anchor links (Problems, Method, Results) from the top nav — they clutter the menu and are only relevant on the homepage. The homepage sections remain scrollable; they just don't need dedicated nav slots.

### 3. Add Route (`src/App.tsx`)
Add `/services` route pointing to the new Services page.

### 4. Update Homepage Links
Update any CTAs on the homepage that reference services to link to `/services` where appropriate (e.g., EngageSection cards could link to the services page for more detail).

## What stays the same
- Homepage sections (EngageSection, FrameworkSection, etc.) remain on the homepage
- Data Clarity page stays as its own page
- Case Studies, About pages unchanged
- Assessment flows unchanged

