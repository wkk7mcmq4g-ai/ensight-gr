

# Streamline Homepage to ~8 Sections

## Current state (16 sections)
HeroSection → PainPointsSection → StatStrip → ProblemsSection → HowWeHelpSection → SelectedWorkSection → AboutSection → ProofSection → FrameworkSection → HowWeWorkSection → BeforeAfterSection → BeforeYouAutomate → QuoteSection → EngageSection → FreeAuditSection → CTASection

## Proposed flow (8 sections)

```text
1. HeroSection          — keep as-is
2. ProblemsSection      — the "Six Signs" cards (merge PainPoints into this)
3. HowWeHelpSection     — what we do (4 service cards)
4. SelectedWorkSection  — case studies
5. ProofSection         — metrics/proof points
6. AboutSection         — who we are
7. EngageSection        — three ways to start
8. CTASection           — final CTA
```

## Sections removed
- **PainPointsSection** — redundant with ProblemsSection; fold the "if this sounds familiar" intro line into ProblemsSection's header
- **StatStrip** — standalone stat bar feels salesy; key numbers already live in ProofSection
- **FrameworkSection** — too detailed for homepage; can live on Services page
- **HowWeWorkSection** — similar overlap with EngageSection; move to Services if needed
- **BeforeAfterSection** — visual but repetitive; proof points already convey the transformation
- **BeforeYouAutomate** — guarantee language is too pitch-heavy for boutique tone
- **QuoteSection** — can be re-added later if a real client testimonial is available
- **FreeAuditSection** — lead-gen tactic; conflicts with boutique positioning

## File changes

### 1. `src/pages/Home.tsx`
Strip down to 8 sections with thin dividers between select sections:
```
HeroSection
ProblemsSection
divider
HowWeHelpSection
divider
SelectedWorkSection
divider
ProofSection
divider
AboutSection
EngageSection
CTASection
```

### 2. `src/components/home/ProblemsSection.tsx`
Add a brief intro line before the cards: "If any of this sounds familiar, your organisation has accumulated process debt." This absorbs PainPointsSection's purpose.

### 3. No other component files modified
The removed sections' files stay in the codebase (no deletion) — they're simply no longer imported. This keeps them available if you want to re-add or move them to other pages later.

