

## Plan: Add sitemap.xml and update robots.txt

### Changes

**1. `public/sitemap.xml`** — Create with all routes using `https://ensight-gr.lovable.app` as the base URL:

| Route | Priority | Change Freq |
|-------|----------|-------------|
| `/` | 1.0 | weekly |
| `/services` | 0.8 | monthly |
| `/about` | 0.8 | monthly |
| `/case-studies` | 0.8 | weekly |
| `/data-clarity` | 0.7 | monthly |
| `/data-clarity-assessment` | 0.6 | monthly |
| `/operational-transformation` | 0.7 | monthly |
| `/assessment` | 0.6 | monthly |

Individual case study detail pages (`/case-studies/:id`) will be excluded since they are dynamic.

**2. `public/robots.txt`** — Add a `Sitemap:` directive pointing to the sitemap URL.

### Files changed
- `public/sitemap.xml` (new)
- `public/robots.txt` (updated)

