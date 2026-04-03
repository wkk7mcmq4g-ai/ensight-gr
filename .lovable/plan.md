

# Rebuild Process Debt Assessment to Match Data Clarity Style

## Summary
Align the Process Debt Assessment with the same UX patterns used in the Data Clarity Assessment: intro screen, grouped-by-category pages, upgraded results layout, and improved scoring model.

## Changes

### 1. Refactor `src/data/questions.ts`
- Group questions by category (7 categories, 2 questions each = 14 scored questions + 1 number input for team size)
- Add category metadata (weight, description) similar to `DIMS` in the Data Clarity data file
- Add verdict tiers with specific next-steps text per tier (Low / Moderate / High Process Debt)
- Add helper functions: `categoryScore`, `compositeScore`, `getVerdict`, `categoryComplete`, `allCategoriesComplete`
- Keep the 0–3 scoring scale (higher = worse) since it's semantically correct for "debt"

### 2. Rebuild `src/pages/Assessment.tsx`
**Intro Screen** — card showing the 7 categories with weights, question count, and estimated time. "Begin Assessment" button.

**Category Pages** — one page per category showing 2 questions together (same layout as Data Clarity dimension pages). Includes:
- Category name and description header
- Segmented progress bar (7 segments)
- Auto-scroll to next unanswered question
- Back / Next navigation

**Team Size** — shown as its own step before results (or as part of intro)

**Results View** — rebuilt to match Data Clarity layout:
- Side-by-side: score ring (left) + verdict box (right)
- Category bar chart showing per-category scores with color coding
- Flags section listing Critical and At Risk categories
- Numbered next steps specific to the verdict tier
- Cost estimate card (kept, with methodology toggle)
- CTA card for Operational X-Ray
- Download PDF + social share buttons

### 3. Update `src/utils/generatePDF.ts`
- Update to reflect new results layout (bar chart, flags, next steps)
- Match the structure of the Data Clarity PDF generator

### 4. Remove old components no longer needed
- `src/components/assessment/QuestionCard.tsx` — replaced by inline category page
- `src/components/assessment/ProgressBar.tsx` — replaced by segment bar
- `src/components/assessment/Results.tsx` — replaced by inline results in Assessment.tsx
- `src/components/assessment/EmailCapture.tsx` — can be kept or moved inline

### Technical Notes
- Reuse the same UI patterns (motion animations, card styles, bar chart) from `DataClarityAssessment.tsx`
- The team size input moves to either the intro screen or a dedicated first step before categories
- Email capture remains optional between completion and results

