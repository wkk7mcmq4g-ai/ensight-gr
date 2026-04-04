

# Homepage Content Refinement

## Changes

### 1. Trim the Hero (`src/components/home/HeroSection.tsx`)
- Remove `min-h-screen`, use `pt-32 pb-16`
- Remove the stats bar at the bottom (duplicates Proof section)
- Add a one-liner "Who we work with" line below the CTAs: *"For ops-led teams in logistics, professional services, and healthcare who've outgrown spreadsheets and workarounds."*

### 2. Reorder sections (`src/pages/Home.tsx`)
New flow: Hero → Problems → Framework → Engage → Quote → Proof → CTA
- Move Framework before Engage (explain *how* before *how to start*)
- Remove DataClarityTeaser and its divider

### 3. Fix broken links (`src/components/home/EngageSection.tsx`)
- Change `Link to="/services"` to `<a href="#method">` so "Learn more" scrolls to the Framework section

### Technical Details
**Files edited:** `HeroSection.tsx`, `Home.tsx`, `EngageSection.tsx`
**Files unchanged:** All other pages, Navbar dropdown, Footer

