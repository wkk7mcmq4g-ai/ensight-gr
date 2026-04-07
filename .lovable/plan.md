

## Problem

The root `index.html` has no Open Graph or Twitter Card meta tags. The `seo-prerender` plugin explicitly skips the `/` route (`if (routePath === '/') continue`), so crawlers see no OG metadata for the homepage. Additionally, even sub-route pages rely on the plugin injecting tags only at build time — the base HTML template itself is bare.

## Plan

### 1. Add OG tags directly to `index.html`

Add homepage-specific OG and Twitter meta tags to the `<head>` of `index.html` as static fallbacks:

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ensight-gr.lovable.app" />
<meta property="og:title" content="Ensight | Strategy, Automation & Data" />
<meta property="og:description" content="Ensight helps organisations streamline operations through strategy, automation, and data clarity — so teams work smarter, not harder." />
<meta property="og:image" content="https://ensight-gr.lovable.app/og/home.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ensight | Strategy, Automation & Data" />
<meta name="twitter:description" content="Ensight helps organisations streamline operations through strategy, automation, and data clarity — so teams work smarter, not harder." />
<meta name="twitter:image" content="https://ensight-gr.lovable.app/og/home.jpg" />
<link rel="canonical" href="https://ensight-gr.lovable.app" />
```

### 2. Update `seo-prerender.ts` for the `/` route

Instead of skipping `/`, have the plugin **replace** the existing `index.html` with the correctly-tagged version (same logic as other routes). This ensures the homepage also gets proper tags in the production build.

### 3. Verify React Helmet doesn't duplicate

React Helmet with `react-helmet-async` replaces tags by matching on property/name attributes, so client-side navigation will correctly override the static fallbacks. No changes needed to the SEO component.

### Files changed
- `index.html` — add OG/Twitter meta tags
- `plugins/seo-prerender.ts` — remove the `if (routePath === '/') continue` skip, let it update `index.html` in place

