

## Plan: Add JSON-LD Structured Data

Add a `<script type="application/ld+json">` block to `index.html` inside `<head>` with an `Organization` schema containing:

- `name`: Ensight
- `url`: https://ensight-gr.lovable.app
- `description`: current meta description
- `contactPoint`: email (hello@ensight.gr)
- `address`: Athens, Greece
- `sameAs`: empty array (can add social links later)

### Files changed
- `index.html` — add JSON-LD script block in `<head>`

