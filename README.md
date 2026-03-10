# Saanidhya Builders — Next.js Website

Premium construction company website for Saanidhya Builders, Coimbatore, Tamil Nadu.
Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and a fully custom blog + programmatic SEO system.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.414 | Icons |
| gray-matter | 4 | MDX frontmatter parsing |
| reading-time | 1.5 | Blog reading time |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start

# 4. Lint
npm run lint
```

---

## Project Structure

```
saanidhya-builders/
│
├── app/                              # Next.js App Router pages
│   ├── layout.tsx                    # Root layout — fonts, metadata, navbar, footer
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles, Tailwind, CSS variables
│   ├── sitemap.ts                    # Auto-generated XML sitemap
│   │
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── process/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   │
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing — search, filter, pagination
│   │   ├── [slug]/page.tsx           # Individual blog post
│   │   ├── category/[category]/      # Category archive
│   │   └── tag/[tag]/                # Tag archive
│   │
│   └── construction-cost/
│       └── [city]/page.tsx           # Programmatic SEO city pages (SSG)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky nav — transparent on dark-hero pages, solid elsewhere
│   │   └── Footer.tsx                # Footer with Quick Links, Resources, contact, map
│   │
│   ├── sections/                     # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTASection.tsx
│   │
│   ├── blog/                         # Blog components
│   │   ├── MdxRenderer.tsx           # Core markdown renderer (no external deps)
│   │   ├── BlogContent.tsx           # Re-exports MdxRenderer
│   │   ├── BlogCard.tsx              # 3 variants: default, horizontal, featured
│   │   ├── BlogGrid.tsx              # Responsive post grid
│   │   ├── BlogHeader.tsx            # Page heading block
│   │   ├── BlogSidebar.tsx           # Search, categories, recent/popular, tags, CTA
│   │   ├── CategoryList.tsx          # Category navigation links
│   │   ├── TagList.tsx               # Tag pill links
│   │   ├── RelatedPosts.tsx          # Related articles section
│   │   ├── Pagination.tsx            # Page navigation
│   │   ├── AuthorBox.tsx             # Post author info bar
│   │   └── ShareButtons.tsx          # Twitter, Facebook, LinkedIn, copy link
│   │
│   └── ui/
│       ├── AnimatedSection.tsx       # IntersectionObserver scroll reveal
│       └── FloatingButtons.tsx       # WhatsApp + back-to-top
│
├── content/
│   └── blog/                         # MDX blog posts — add new posts here
│       ├── house-construction-cost-coimbatore.mdx
│       ├── vastu-tips-home-construction-coimbatore.mdx
│       ├── what-is-turnkey-construction-guide.mdx
│       ├── interior-design-trends-coimbatore-2026.mdx
│       └── building-permits-approvals-coimbatore.mdx
│
├── data/
│   ├── cities.ts                     # City data for programmatic SEO (8 cities)
│   └── types.ts                      # TypeScript interfaces (BlogMeta, BlogPost, CityData)
│
├── lib/
│   ├── blog.ts                       # Blog queries — getAllPosts, getPostBySlug, etc.
│   └── seo.ts                        # Metadata generators, JSON-LD, formatDate, slugify
│
└── public/
    └── robots.txt
```

---

## All Routes

### Main Pages
| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/projects` | Portfolio |
| `/process` | Construction Process |
| `/testimonials` | Client Reviews |
| `/contact` | Contact Form |

### Blog System
| Route | Description |
|---|---|
| `/blog` | Blog listing with search, filter, pagination |
| `/blog/[slug]` | Individual post with MDX content |
| `/blog/category/[category]` | Posts by category |
| `/blog/tag/[tag]` | Posts by tag |

### Programmatic SEO Pages (8 cities)
| Route |
|---|
| `/construction-cost/coimbatore` |
| `/construction-cost/chennai` |
| `/construction-cost/bangalore` |
| `/construction-cost/madurai` |
| `/construction-cost/hyderabad` |
| `/construction-cost/tirupur` |
| `/construction-cost/salem` |
| `/construction-cost/erode` |

---

## Blog System

### Adding a New Blog Post

Create a new `.mdx` file in `content/blog/`:

```
content/blog/your-post-slug.mdx
```

Every post must start with frontmatter:

```mdx
---
title: "Your Post Title Here"
description: "Meta description — keep between 150–160 characters for best SEO."
date: "2026-04-01"
author: "Saanidhya Builders"
category: "Construction"
tags: ["construction", "coimbatore", "your-tag"]
image: "/images/blog/your-image.jpg"
slug: "your-post-slug"
featured: false
---

Your markdown content starts here...
```

Once saved, the post automatically appears in:
- `/blog` listing page
- `/blog/your-post-slug` post page
- `/blog/category/construction` category page
- `/blog/tag/construction` tag page
- Sitemap at `/sitemap.xml`
- Related posts on other articles in the same category

### Available Categories
- `Construction`
- `Design`
- `Interior Design`
- `Legal`

Add new categories simply by using them in the frontmatter — they are generated automatically.

### Supported Markdown in MDX Files

| Syntax | Renders as |
|---|---|
| `# Heading` | H1–H4 headings |
| `**bold**` | Bold text |
| `*italic*` | Italic text |
| `` `code` `` | Inline code |
| `[text](url)` | Link |
| `- item` | Unordered list |
| `1. item` | Ordered list |
| `> quote` | Blockquote |
| ` ``` ` | Fenced code block |
| `\| col \|` | Table |
| `---` | Horizontal rule |

---

## Programmatic SEO System

### How It Works

Each city page at `/construction-cost/[city]` is statically generated at build time from `data/cities.ts`. Each page includes:

- Unique SEO title: `Construction Cost in {City} 2026 | Saanidhya Builders`
- City-specific meta description with local keywords
- Open Graph + Twitter Card tags
- FAQ JSON-LD schema (4 questions per city)
- Canonical URL
- Cost per sq.ft table, specification breakdown
- Popular areas in that city
- Internal links to all other city pages

### Adding a New City

Open `data/cities.ts` and add an entry to the `cities` array:

```ts
{
  slug: 'trichy',
  name: 'Trichy',
  state: 'Tamil Nadu',
  costPerSqft: { min: 1600, max: 2900 },
  avgProjectCost: '₹30–60 Lakhs',
  popularAreas: ['Thillai Nagar', 'Woraiyur', 'KK Nagar', 'Ariyamangalam'],
  climate: 'Hot and Dry',
  description: 'Trichy, the Rock Fort City of Tamil Nadu, is a rapidly growing real estate market.',
},
```

That's it. The page at `/construction-cost/trichy` is generated automatically with full SEO content on the next build.

---

## SEO Features

### Blog Posts — auto-generated per post
- `<title>` and `<meta description>`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type: article`)
- Twitter Card (`summary_large_image`)
- Article JSON-LD schema with `datePublished`, `author`, `publisher`
- Canonical URL
- Reading time in UI

### City Pages — auto-generated per city
- Unique title targeting `construction cost in {city}` keyword
- Local keywords in meta description
- FAQ JSON-LD schema with 4 city-specific Q&As
- Canonical URL

### Sitemap
Auto-generated at `/sitemap.xml` via `app/sitemap.ts`. Includes all static pages, blog posts, category pages, tag pages, and city pages with correct `lastModified`, `changeFrequency`, and `priority` values.

---

## Brand Guidelines

### Colors
| Name | Hex | Usage |
|---|---|---|
| Navy | `#0B0F3B` | Primary — headers, dark backgrounds |
| Cream | `#F5F6FA` | Secondary — page backgrounds, cards |
| Orange | `#FF6A1A` | Accent — CTAs, links, highlights |
| Purple | `#7A2EFF` | Support — gradients |
| Gradient | `linear-gradient(135deg, #7A2EFF, #FF6A1A)` | Buttons, badges, accents |

### Typography
| Font | Usage | Class |
|---|---|---|
| Playfair Display | Headings, titles | `font-playfair` |
| Montserrat | Body text, UI | `font-montserrat` |

### Utility Classes (globals.css)
```css
.gradient-text   /* orange-to-purple gradient text */
.gradient-bg     /* orange-to-purple gradient background */
.btn-primary     /* gradient pill button */
.btn-secondary   /* outlined pill button */
.font-playfair   /* Playfair Display font */
.font-montserrat /* Montserrat font */
```

---

## Navbar Behaviour

The navbar is transparent only on pages with a **dark navy hero section**:

```
/ · /about · /services · /projects · /process · /testimonials · /contact
/construction-cost/*
```

On all other pages (`/blog`, `/blog/[slug]`, category, tag pages) the navbar is always solid navy so white text stays readable over light backgrounds.

---

## Performance Optimisations Applied

- **LCP fix** — Hero `<h1>` uses CSS `@keyframes` animation instead of Framer Motion `opacity:0` initial state, so the browser can paint it immediately
- **Font loading** — Only `weight: 700` of Playfair Display is preloaded (the weight used in the hero `<h1>`)
- **Code splitting** — All below-fold home page sections use `next/dynamic` lazy loading
- **Image optimisation** — AVIF + WebP formats, `fetchPriority="high"` on hero image, `loading="lazy"` on below-fold images
- **Zero external MDX deps** — `MdxRenderer.tsx` is a self-contained parser, no `next-mdx-remote` or related packages
- **Security headers** — HSTS, CSP, X-Frame-Options, X-Content-Type-Options in `next.config.js`

---

## Customisation Checklist

Before going live, update these placeholders:

- [ ] Phone number: `+91 98765 43210` → your real number
- [ ] Email: `info@saanidhyabuilders.com` → your real email
- [ ] Address: `42, Avinashi Road, Coimbatore 641018` → your real address
- [ ] Google Maps embed URL in `Footer.tsx` → your actual coordinates
- [ ] WhatsApp number in `components/ui/FloatingButtons.tsx`
- [ ] Domain `saanidhyabuilders.com` in `app/layout.tsx` and `app/sitemap.ts`
- [ ] OG image at `public/images/og-image.jpg` (1200×630px)
- [ ] Replace Unsplash placeholder images with real project photos
- [ ] Real team photos in `app/about/page.tsx`
- [ ] Social media links in `Footer.tsx`

---

## Future CMS Integration

The blog system is designed for easy migration to a headless CMS. All data fetching is isolated in `lib/blog.ts`. Replace those functions with API calls and everything else stays the same:

```ts
// Current — reads MDX files from filesystem
export function getAllPosts(): BlogMeta[] {
  return fs.readdirSync(BLOG_DIR).map(...)
}

// Future — Sanity example
export async function getAllPosts(): Promise<BlogMeta[]> {
  return client.fetch(`*[_type == "post"] | order(date desc)`)
}

// Future — Strapi example
export async function getAllPosts(): Promise<BlogMeta[]> {
  const res = await fetch(`${process.env.STRAPI_URL}/api/posts?sort=date:desc`)
  return res.json()
}
```

Compatible with: **Sanity, Strapi, Contentful, Headless WordPress**