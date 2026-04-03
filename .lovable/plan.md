

## Plan: Enhance Assessment with New Questions, Mid-Range Scoring & Categorized Results

### Summary
Add 4 new questions, introduce mid-range (score 2) options to existing questions, group results into thematic categories with recommendations, and update the results page accordingly.

---

### 1. Add 4 New Questions to `src/data/questions.ts`

Add a `category` field to the `Question` interface. Assign categories to all questions:

| Category | Questions |
|---|---|
| **Communication** | whatsapp (existing) |
| **People Dependencies** | human_router (existing), onboarding (new) |
| **Visibility** | invisible_queue, status_meetings (existing) |
| **Automation** | copy_paste, manual_hours (existing), rework (new) |
| **Scalability** | scaling, approvals, failed_tool (existing) |
| **Customer Impact** | customer_impact (new) |
| **Decision Making** | data_decisions (new) |

**New questions:**
1. **Onboarding** — "How long does it take a new hire to become fully productive?" (Under 2 weeks / 1–3 months / 3+ months)
2. **Rework/Errors** — "How often does your team redo work due to miscommunication or unclear processes?" (Rarely / Occasionally / Frequently)
3. **Customer Impact** — "Do operational inefficiencies ever visibly affect your customers?" (Never / Sometimes / Regularly)
4. **Data-Driven Decisions** — "How does management typically make operational decisions?" (Data-driven dashboards / Mix of data and gut / Mostly intuition and experience)

All new questions get 3 options with scores 0, 2, 3.

### 2. Add Mid-Range Options to Existing Questions

Update existing 3-option questions to include a score-2 middle option where currently only 0/1/3 exists. This improves scoring granularity. Example for `whatsapp`:
- Score 0: Structured system with audit trails
- Score 1: Mostly email, with some informal messaging
- **Score 2: Mix of tools — some structured, some chat-based** (new)
- Score 3: Heavily reliant on WhatsApp/Viber

Update `maxScore` calculation in Results to use actual max per question instead of hardcoded 3.

### 3. Update Results with Categories & Recommendations — `src/components/assessment/Results.tsx`

- Group breakdown items by category
- Show category headers with an overall category status (Good/At Risk/Critical based on average score)
- Add a short actionable recommendation per category when score is At Risk or Critical
- Update methodology text to reflect 14 questions and new max score

### 4. Update Progress & Assessment Page — `src/pages/Assessment.tsx`

- Assessment description text updated from "10 questions" to "14 questions"
- No other structural changes needed (already uses `questions.length` for total)

---

### Technical Details

**Files modified:**
- `src/data/questions.ts` — Add `category` to interface, add 4 questions, add mid-range options
- `src/components/assessment/Results.tsx` — Categorized breakdown, dynamic max score, recommendations
- `src/pages/Assessment.tsx` — Update description copy

**No new dependencies required.**

