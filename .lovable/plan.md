

## Plan: Add 3-Level BreadcrumbList JSON-LD to Case Study Detail Pages

### What changes

**`src/pages/CaseStudyDetail.tsx`** — Add a `<Helmet>` block with a `BreadcrumbList` JSON-LD script using the case study's title and id:

```
Home → Case Studies → {cs.title}
```

Three `ListItem` entries:
1. Home — `https://ensight-gr.lovable.app/`
2. Case Studies — `https://ensight-gr.lovable.app/case-studies`
3. `{cs.title}` — `https://ensight-gr.lovable.app/case-studies/{cs.id}`

Also add `<SEO>` component for consistent meta tags (title, description, OG image).

### Files changed
- `src/pages/CaseStudyDetail.tsx` — import `Helmet` and `SEO`, add JSON-LD breadcrumb and SEO meta tags

