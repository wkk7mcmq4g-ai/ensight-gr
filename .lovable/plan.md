

# Remove Section Background Alternation

## What changes
All sections on the homepage get a uniform `#F4EFE9` (linen) background, except the three dark sections (ProofSection, QuoteSection, CTASection) which keep their existing `bg-dark-section` (#0B1E27).

## Files to edit

### 1. `src/pages/Home.tsx`
Remove `bg-white` from the wrapper divs around ValuePillarsSection, BeforeAfterSection, and EngageSection. All wrapper divs keep their `border-b border-[#D6D0C9]` but no background override — the page-level linen background handles it.

### 2. `src/components/home/AboutSection.tsx`
Change `bg-background` on the section element to remove it (let the parent linen show through), or leave as-is if `bg-background` already maps to linen.

### 3. `src/index.css` or `tailwind.config.ts`
Verify `--background` CSS variable equals `#F4EFE9`. If not, set it. This ensures `bg-background` on the page body produces the linen tone everywhere.

### 4. Individual section components — no background overrides
- `PainPointsSection.tsx`: remove `bg-muted/50` from the section
- `FreeAuditSection.tsx`: remove `bg-muted/30` from the section (if used on homepage)
- Cards (`bg-card`) stay as-is — they're element-level, not section-level

## Dark sections (unchanged)
- `ProofSection` — keeps `bg-dark-section`
- `QuoteSection` — keeps `bg-dark-section`
- `CTASection` — keeps `bg-dark-section`

