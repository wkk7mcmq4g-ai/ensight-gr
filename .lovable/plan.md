

## Plan: Add Open Graph Image Meta Tags

### What changes

**`src/components/SEO.tsx`** — Add OG image meta tags using the existing logo/preview image URL already referenced in the Organization schema on the homepage.

Tags to add:
- `<meta property="og:image" content="...">` 
- `<meta property="og:image:width" content="1200">`
- `<meta property="og:image:height" content="630">`
- `<meta name="twitter:card" content="summary_large_image">` (upgrade from `summary`)
- `<meta name="twitter:image" content="...">`

Image URL: `https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9131ee5a-adf6-4644-9666-66d96e6a8601/id-preview-d3f8e6df--80d094a5-b6ff-4e3d-9b55-194fe071745a.lovable.app-1775244958373.png` (already used in the Organization schema logo)

### Files changed
- `src/components/SEO.tsx` — add OG image and Twitter image meta tags (applies to all pages automatically)

