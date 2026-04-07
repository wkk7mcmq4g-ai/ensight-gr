
## Fix SEO Issues

### 1. Clean up `index.html`
- Change `<meta name="author" content="Lovable">` → `"Ensight"`
- Change `<meta name="twitter:site" content="@Lovable">` → `"@ensaboratory"` (or remove if no Twitter handle exists)
- Remove duplicate OG/Twitter meta tags from `<head>` that conflict with Helmet-injected ones: `og:title`, `og:description`, `og:type`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. Keep only `<title>`, `<meta name="description">`, and `<meta name="author">` as fallbacks.

### 2. Update `sitemap.xml`
- Add all four case study detail URLs:
  - `/case-studies/loan-servicing`
  - `/case-studies/charity-crm`
  - `/case-studies/financial-reporting`
  - `/case-studies/touro-driver-ux`
- Priority 0.7, changefreq monthly.

### 3. Files changed
- `index.html`
- `public/sitemap.xml`

Two files, straightforward edits.
