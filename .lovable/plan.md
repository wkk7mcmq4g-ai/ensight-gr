

# High-Impact Visual Details

## 1. Value Pillars — Left border accent (`src/components/home/ValuePillarsSection.tsx`)
Replace the existing top accent bar (`absolute top-0 left-0 w-full h-[2px]`) with a 3px left border using `border-l-[3px] border-l-[#0A7EA4]` on each card's Link element. Remove the absolute-positioned top bar div (line 60).

## 2. Engage Section — Recommended card tint (`src/components/home/EngageSection.tsx`)
Add a `highlighted` boolean to each engagement data object. For the "Operational X-Ray" card, conditionally apply `bg-[#E8F4F8]` instead of `bg-card`. Change line 49's className to use `e.showTag ? 'bg-[#E8F4F8]' : 'bg-card'`.

## 3. Navbar — Top accent line (`src/components/layout/Navbar.tsx`)
Line 60 already has `<div className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100]" />`. Change `h-[2px]` to `h-[2px]` stays — it's already #0A7EA4 via `bg-primary`. Already correct. No change needed here.

## 4. Section bottom borders (`src/pages/Home.tsx`)
Add `border-b border-[#D6D0C9]` to each section wrapper div (except the last CTASection and dark sections like ProofSection/QuoteSection where a border would look wrong). Apply to: HeroSection wrapper, LogoStrip wrapper, ValuePillars wrapper, HowWeHelp wrapper, BeforeAfter wrapper, SelectedWork wrapper, AboutSection wrapper, EngageSection wrapper.

## Files changed
- `src/components/home/ValuePillarsSection.tsx` — left border on cards
- `src/components/home/EngageSection.tsx` — teal tint on recommended card
- `src/pages/Home.tsx` — bottom borders on section wrappers

