

## Plan: Enhance JSON-LD Structured Data on Homepage

### What changes

**1. Remove existing JSON-LD from `index.html`** — move it to be managed by React so it's co-located with page content.

**2. Update `src/pages/Home.tsx`** — Add two JSON-LD blocks via `<Helmet>`:

- **Organization schema** (enhanced):
  - `name`, `url`, `description`, `email`
  - `logo` (use the favicon or OG image URL)
  - `address` (Athens, Greece)
  - `sameAs` (empty array, ready for social links)
  - `foundingDate`, `areaServed`

- **WebSite schema**:
  - `name: "Ensight"`, `url`, basic site identity for Google Knowledge Panel

### Files changed
- `index.html` — remove the `<script type="application/ld+json">` block
- `src/pages/Home.tsx` — add JSON-LD via Helmet

