

## Add Security Headers via Meta Tags

Since this is a static client-side app hosted on Lovable's infrastructure, we cannot set HTTP response headers directly. However, we can add a `Content-Security-Policy` meta tag to `index.html` to address both findings.

**Limitation**: The `frame-ancestors` CSP directive (clickjacking protection) is **not supported** in `<meta>` tags — it only works as an HTTP header. Similarly, `X-Frame-Options` is header-only. For full clickjacking protection, you would need control over the hosting server or a reverse proxy (e.g., Cloudflare, custom domain with Vercel/Netlify). We can still add the CSP meta tag for the directives that *are* supported.

### Changes

**`index.html`** — Add a CSP meta tag to `<head>`:

```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; object-src 'none'; base-uri 'self'; frame-src 'none';" />
```

This covers:
- `script-src` — only self + inline (needed for Vite)
- `object-src 'none'` — blocks Flash/plugin embeds
- `base-uri 'self'` — prevents base tag injection
- `frame-src 'none'` — blocks embedding iframes from external sources

**Note on clickjacking**: Full `X-Frame-Options` / `frame-ancestors` protection requires HTTP headers. If you publish to a custom domain via Cloudflare or Netlify, those headers can be added there. This is a hosting-level concern, not something fixable in HTML alone.

### Files changed
- `index.html` — add `<meta http-equiv="Content-Security-Policy">` tag

