

# Plan: Data Clarity Assessment Quiz

## Summary
Create a standalone Data Clarity assessment at `/data-clarity-assessment` that mirrors the existing Process Debt assessment architecture but focuses on the five data readiness dimensions from the Data Clarity page.

## What gets built

A 10-question quiz scoring across five dimensions: **Data Availability**, **Data Consistency**, **Cost Visibility**, **System Integration**, and **Reporting Maturity**. Results show a weighted score (using the weights from the Data Clarity page: 25/25/20/15/15), a verdict tier (Build-Ready / Foundation First / Not Viable Yet), per-dimension breakdown, and a CTA to book an assessment.

## Questions (2 per dimension)

1. **Team size** (number input — reused for cost estimate)
2. **Data Availability** — "Where does your core financial and operational data live?"
3. **Data Availability** — "How much of your reporting data requires manual collection or reconstruction?"
4. **Data Consistency** — "Do different departments produce the same number for the same metric?"
5. **Data Consistency** — "How often do meetings become reconciliation exercises about whose figures are correct?"
6. **Cost Visibility** — "Can you see net margin at the individual client or product level?"
7. **Cost Visibility** — "How are indirect costs (overhead, shared resources) allocated?"
8. **System Integration** — "How do your key systems (accounting, CRM, operations) share data?"
9. **System Integration** — "How much manual effort goes into assembling a cross-system report?"
10. **Reporting Maturity** — "What does your current reporting look like?"
11. **Reporting Maturity** — "How frequently are reports used to make actual business decisions?"

## Files

### New: `src/data/dataClarityQuestions.ts`
- Question definitions with `DataClarityCategory` type matching the 5 dimensions
- Category weights and recommendations
- Verdict thresholds and descriptions

### New: `src/pages/DataClarityAssessment.tsx`
- Reuses existing components: `ProgressBar`, `QuestionCard`, `EmailCapture`
- Custom `DataClarityResults` component inline (or separate file) showing:
  - Weighted overall score with ring visualization
  - Verdict tier (Build-Ready / Foundation First / Not Viable Yet) with matching colors
  - Per-dimension breakdown with weighted scoring
  - CTA linking to book assessment / contact

### Edit: `src/App.tsx`
- Add route `/data-clarity-assessment`

### Edit: `src/pages/DataClarity.tsx`
- Update CTA buttons to link to `/data-clarity-assessment` where appropriate

### Edit: `src/components/layout/Navbar.tsx`
- No change needed (accessible via Data Clarity page CTAs)

## Technical notes
- Reuses `ProgressBar`, `QuestionCard`, and `EmailCapture` components as-is — same interface
- Scoring uses weighted averages (25/25/20/15/15) per dimension
- Verdict thresholds: 75-100% = Build-Ready (green), 50-74% = Foundation First (amber), <50% = Not Viable Yet (pink)
- Same visual patterns as Process Debt results (animated ring, category breakdown, confetti)
- Email capture text adapted to "Data Readiness Report"

