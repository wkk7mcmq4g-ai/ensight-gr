

# Broaden Homepage + Create Dedicated Operational Transformation Page

## Overview
Move the current homepage content (bottleneck-focused) to a new `/operational-transformation` route. Replace the homepage with a broader, higher-level page that positions Ensight as a technology & data transformation partner. Update navigation accordingly.

## New Homepage (`/`)

### Hero
- **Headline**: "We transform how organisations work with technology and data."
- **Subtitle**: "Strategy, platforms, automation, and analytics — designed around how your business actually operates."
- Single "Learn More" button scrolling to value pillars.

### Value Pillars section (replaces ProblemsSection on homepage)
4 positive capability cards in a grid:
- **Digital Transformation** — Redesign processes and systems for efficiency and scale.
- **Data & Analytics** — Turn fragmented data into clear, actionable insight.
- **Custom Platforms** — Purpose-built applications that replace spreadsheets and manual workflows.
- **Automation & Integration** — Connect systems, eliminate repetitive tasks, scale without headcount.

### Remaining sections
Keep: HowWeHelpSection, SelectedWorkSection, ProofSection, AboutSection, EngageSection, CTASection (with softened "challenge" copy instead of "bottleneck").

## New Operational Transformation page (`/operational-transformation`)

A new page that reuses the current bottleneck-focused components:
- Current HeroSection (with "operational bottlenecks" messaging)
- ProblemsSection (6 pain-point cards)
- HowWeHelpSection
- SelectedWorkSection
- EngageSection
- CTASection

Essentially the current `Home.tsx` content moved to a dedicated page.

## Navigation update

Update `Navbar.tsx` service options:
- "Operational Transformation" → `/operational-transformation`
- "Data Clarity" → `/data-clarity` (unchanged)

## Files changed

| File | Change |
|------|--------|
| `src/pages/Home.tsx` | New broader homepage with value pillars instead of ProblemsSection, updated hero |
| `src/components/home/HeroSection.tsx` | Broaden headline/subtitle |
| `src/components/home/ValuePillarsSection.tsx` | **New file** — 4 capability cards |
| `src/pages/OperationalTransformation.tsx` | **New file** — current homepage content (old hero + problems + all sections) |
| `src/components/home/OpTransformHero.tsx` | **New file** — the current bottleneck-focused hero (extracted from current HeroSection) |
| `src/components/home/CTASection.tsx` | Soften subtitle copy |
| `src/components/layout/Navbar.tsx` | Update "Operational Transformation" link to `/operational-transformation` |
| `src/App.tsx` | Add `/operational-transformation` route |

