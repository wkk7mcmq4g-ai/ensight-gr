

# Fix Client Logos on Case Study Pages

The current logo files are 512x512 AI-generated square images that don't resemble real client wordmarks. They look passable on the homepage (which applies `grayscale opacity-50`) but appear broken/unprofessional on case study pages at full opacity.

## Approach

Regenerate all four logo PNGs as clean, text-based wordmarks on transparent backgrounds — wide/horizontal format (e.g. 400x100) matching typical logo proportions.

| File | Text | Style |
|------|------|-------|
| `logo-hms.png` | HMS | Bold, professional sans-serif |
| `logo-myathenstransfers.png` | myAthensTransfers | Clean sans-serif |
| `logo-volunteering-matters.png` | Volunteering Matters | Friendly sans-serif |
| `logo-qsix.png` | QSIX | Modern geometric sans-serif |

Generate using Python/Pillow with a clean dark gray (#1a1a2e) text on transparent background. This ensures they look crisp on both the homepage (with grayscale filter) and case study pages.

## Files changed
- `src/assets/logo-hms.png` — regenerated as text wordmark
- `src/assets/logo-myathenstransfers.png` — regenerated
- `src/assets/logo-volunteering-matters.png` — regenerated
- `src/assets/logo-qsix.png` — regenerated

No code changes needed — the sizing/styling in the templates is already correct for horizontal logos.

