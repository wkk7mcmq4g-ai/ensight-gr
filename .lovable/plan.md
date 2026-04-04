
# Site Polish — From 7.5 to 9/10

## 1. Hero visual balance
The right half of the hero is empty. Add a subtle abstract graphic — a grid of floating, gently animated dots or a minimal geometric pattern using SVG/framer-motion — to fill the space without competing with the headline.

## 2. Client logo strip
Add a "Trusted by" logo strip directly below the hero. Use 4–5 greyscale placeholder logos (generated as subtle, abstract company marks) with a muted label like "Trusted by teams across financial services, non-profits, and professional services."

## 3. Fix hero CTA visibility
The "Learn More" button appears to be rendering but may be lost visually. Verify it's visible and increase contrast/spacing if needed.

## 4. Layout variation between sections
Break the repeating label → heading → grid rhythm:
- **About section**: Convert to an asymmetric two-column layout (text left, a branded visual/pattern right)
- **QuoteSection**: Already inserted — confirms it's breaking the rhythm as intended

## 5. Add editorial imagery
Generate and place 1–2 tasteful abstract/workspace images:
- One in the About section (right column of the new two-column layout)
- Subtle, muted, consulting-appropriate (not stock-photo-generic)

## 6. Real contact form with Lovable Cloud
Replace the `mailto:` hack with a proper form submission:
- Enable Lovable Cloud
- Create a `contact_submissions` table (name, email, message, created_at)
- Submit form data to the database
- Show a success toast on submission
- Add input validation with zod

## Files Changed

| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Add abstract visual element on the right, verify CTA visibility |
| `src/components/home/LogoStripSection.tsx` | **New** — greyscale logo strip with label |
| `src/components/home/AboutSection.tsx` | Asymmetric two-column layout with image |
| `src/components/home/CTASection.tsx` | Replace mailto with Lovable Cloud form submission + zod validation |
| `src/pages/Home.tsx` | Insert LogoStripSection after hero |
| Lovable Cloud | Enable, create `contact_submissions` table |
| Generated assets | Abstract hero visual, about section image, placeholder logos |
