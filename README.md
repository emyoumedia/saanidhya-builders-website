# Saanidhya Builders — Complete Next.js Website

## Tech Stack
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** + @tailwindcss/typography
- **MDX** via next-mdx-remote (gray-matter, reading-time, remark-gfm, rehype-slug)
- **Framer Motion**, Lucide React

---

## Project Structure

```
/
├── app/
│   ├── blog/
│   │   ├── page.tsx                 ← Blog listing with search, filter, pagination
│   │   ├── [slug]/page.tsx          ← Dynamic blog post (MDX rendered)
│   │   ├── category/[category]/     ← Category archive pages
│   │   └── tag/[tag]/               ← Tag archive pages
│   ├── construction-cost/
│   │   └── [city]/page.tsx          ← Programmatic SEO city pages (SSG)
│   ├── layout.tsx
│   ├── page.tsx                     ← Home page
│   └── sitemap.ts                   ← Auto-generated XML sitemap
│
├── components/blog/
│   ├── BlogCard.tsx                 ← 3 variants: default, horizontal, featured
│   ├── BlogGrid.tsx                 ← Responsive grid
│   ├── BlogHeader.tsx               ← Page headers
│   ├── BlogContent.tsx              ← MDX renderer with custom components
│   ├── BlogSidebar.tsx              ← Search, categories, recent/popular, tags, CTA
│   ├── CategoryList.tsx             ← Category navigation
│   ├── TagList.tsx                  ← Tag pills
│   ├── RelatedPosts.tsx             ← Related articles section
│   ├── Pagination.tsx               ← Page navigation
│   ├── AuthorBox.tsx                ← Post author info
│   └── ShareButtons.tsx             ← Twitter/Facebook/LinkedIn/copy link
│
├── content/blog/                    ← MDX blog posts (add new ones here)
│   ├── house-construction-cost-coimbatore.mdx
│   ├── vastu-tips-home-construction-coimbatore.mdx
│   ├── what-is-turnkey-construction-guide.mdx
│   ├── interior-design-trends-coimbatore-2026.mdx
│   └── building-permits-approvals-coimbatore.mdx
│
├── data/
│   ├── cities.ts                    ← City data for programmatic SEO
│   └── types.ts                     ← TypeScript interfaces
│
└── lib/
    ├── blog.ts                      ← MDX parser, all blog queries
    └── seo.ts                       ← Metadata generators, JSON-LD, utils
```

---

## Blog System

### Adding a New Blog Post
Create `/content/blog/your-slug.mdx` with frontmatter:

```mdx
---
title: "Your Post Title"
description: "Meta description (150-160 chars)"
date: "2026-03-15"
author: "Saanidhya Builders"
category: "Construction"
tags: ["construction", "coimbatore"]
image: "/images/blog/your-image.jpg"
slug: "your-slug"
featured: false
---

Your MDX content here...
```

The post will automatically appear in:
- Blog listing at `/blog`
- Category page `/blog/category/construction`
- Tag pages `/blog/tag/construction` etc.
- Sitemap
- Related posts section

### Available Categories
Construction · Design · Interior Design · Legal

---

## Programmatic SEO

### Current Cities (8 pages auto-generated)
- `/construction-cost/coimbatore`
- `/construction-cost/chennai`
- `/construction-cost/bangalore`
- `/construction-cost/madurai`
- `/construction-cost/hyderabad`
- `/construction-cost/tirupur`
- `/construction-cost/salem`
- `/construction-cost/erode`

### Adding a New City
Add to `/data/cities.ts`:

```ts
{
  slug: 'trichy',
  name: 'Trichy',
  state: 'Tamil Nadu',
  costPerSqft: { min: 1600, max: 2900 },
  avgProjectCost: '₹30–60 Lakhs',
  popularAreas: ['Thillai Nagar', 'Woraiyur', 'KK Nagar'],
  climate: 'Hot and Dry',
  description: '...',
}
```

The page at `/construction-cost/trichy` is generated automatically with:
- SEO title, meta description, canonical URL
- Open Graph + Twitter Card
- FAQ JSON-LD schema
- Full city-specific content

---

## SEO Features

Each blog post generates:
- `<title>` and `<meta description>`
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Article JSON-LD schema markup
- Canonical URL
- Reading time

Each city page generates:
- Unique title: `Construction Cost in {City} 2026 | Saanidhya Builders`
- City-specific meta description with keywords
- FAQ schema with 4 city-specific Q&As
- Canonical URL
- Internal links to all other city pages

---

## Setup

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # Production build (SSG)
npm run start
```

---

## Future CMS Integration

The blog system is designed for easy CMS migration.
Replace `lib/blog.ts` functions with API calls to Sanity/Strapi/Contentful.
All component interfaces stay the same.

```ts
// Current: reads MDX files
export function getAllPosts(): BlogMeta[] { /* fs.readFileSync */ }

// Future Sanity example:
export async function getAllPosts(): Promise<BlogMeta[]> {
  return client.fetch(`*[_type == "post"] | order(date desc)`)
}
```

---

## Brand Colors
- Navy:  `#0B0F3B` — primary, headers, backgrounds
- Cream: `#F5F6FA` — secondary, page backgrounds
- Orange:`#FF6A1A` — accent, CTAs, links
- Purple:`#7A2EFF` — support, gradients
- Gradient: `linear-gradient(135deg, #7A2EFF, #FF6A1A)`
