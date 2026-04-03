

# Add PDF Download to Data Clarity Assessment Results

## Summary
Add a "Download PDF" button to the Data Clarity Assessment results, mirroring the Process Debt PDF but adapted for data readiness content.

## Changes

### New: `src/utils/generateDataClarityPDF.ts`
- Clone the structure from `generatePDF.ts` but adapt for Data Clarity:
  - Title: "Data Readiness Report"
  - Score label uses verdict tiers (Build-Ready / Foundation First / Not Viable Yet)
  - Category breakdown includes weight percentages
  - CTA references "Data Clarity Assessment" instead of "Operational X-Ray"
  - Filename: `Data-Readiness-Report-{pct}pct.pdf`

### Edit: `src/pages/DataClarityAssessment.tsx` (Actions section, ~line 359)
- Add a "Download PDF" button before the LinkedIn share button
- Wire it to call `generateDataClarityPDF()` with the results data (readinessPct, verdictLabel, headline, desc, costFormatted, teamSize, categories)
- Same styling as the Process Debt download button

