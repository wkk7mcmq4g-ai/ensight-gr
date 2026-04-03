

# Plan: Apply All Five Enhancements

## Summary
Implement all five previously suggested features: (1) email capture before results, (2) social sharing on results, (3) About/Team page, (4) case study pages, and (5) enhanced assessment animations.

---

## 1. Email Capture Gate Before Results

**New file**: `src/components/assessment/EmailCapture.tsx`
- Simple card component with name + email fields and a "Skip" link
- On submit or skip, calls a callback to proceed to results
- Stores captured data in component state (no backend needed for now)

**Edit**: `src/pages/Assessment.tsx`
- Add a new state `showEmailCapture` between quiz completion and results
- When last question answered, show `EmailCapture` instead of `Results`
- On submit/skip, transition to `Results`

## 2. Social Sharing Buttons on Results

**Edit**: `src/components/assessment/Results.tsx`
- Add LinkedIn and Twitter/X share buttons in the Actions section alongside Download PDF and Retake
- LinkedIn: share URL with pre-filled text about Process Debt score
- Twitter/X: `https://twitter.com/intent/tweet?text=...&url=...`
- Use `lucide-react` icons or inline SVG for LinkedIn and X logos
- Share text: "I just scored {pct} on the Process Debt Assessment by Ensight. Find out your score:"

## 3. About/Team Page

**New file**: `src/pages/About.tsx`
- Hero section with company story (Ensight, Athens)
- Team bios section with photo placeholders, names, titles, short bios
- Values/approach section highlighting the operational methodology
- Styled consistently with the existing dark-themed design

**Edit**: `src/App.tsx` - Add `/about` route

**Edit**: `src/components/layout/Navbar.tsx` - Add "About" nav link

**Edit**: `src/components/layout/Footer.tsx` - Add "About" footer link

## 4. Case Study Pages

**New file**: `src/pages/CaseStudies.tsx`
- Overview page with 3 cards (Tourism, Financial Services, Manufacturing)
- Each card links to a detail view

**New file**: `src/pages/CaseStudyDetail.tsx`
- Dynamic page using URL param for case ID
- Sections: Challenge, Approach, Results (before/after metrics), Timeline
- Data stored in a local array/object (no backend)

**New file**: `src/data/caseStudies.ts`
- Data for all 3 case studies with sector, challenge, approach, metrics, timeline

**Edit**: `src/App.tsx` - Add `/case-studies` and `/case-studies/:id` routes

**Edit**: `src/components/layout/Navbar.tsx` - Add "Case Studies" nav link

**Edit**: `src/components/layout/Footer.tsx` - Add "Case Studies" footer link

## 5. Enhanced Assessment Animations

**Edit**: `src/components/assessment/Results.tsx`
- Add animated counter for the cost estimate (count up from 0 to final value over ~1.5s)
- Add a subtle confetti/sparkle burst when results first load (use a lightweight CSS animation or a small utility, no heavy library)
- Add staggered fade-in for category breakdown items using framer-motion

**Edit**: `src/components/assessment/QuestionCard.tsx`
- Already has framer-motion transitions; enhance with slightly more polished easing

**Edit**: `src/components/assessment/ProgressBar.tsx`
- Add smooth animated fill transition (CSS transition on width)

---

## Technical Notes

- No backend or Supabase needed; all data is local/static
- Social sharing uses native URL intent links (no third-party SDKs)
- Framer-motion already installed; will reuse for new animations
- All new pages follow existing patterns: section-based layout, AnimatedSection wrappers, same color tokens and typography
- About and Case Studies pages will use the existing `Layout` wrapper with Navbar/Footer

