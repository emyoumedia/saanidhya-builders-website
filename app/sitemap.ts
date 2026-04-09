import type { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog'
import { cityNames } from '@/data/cities'

const BASE = 'https://www.saanidhyabuilders.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/projects`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/process`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/testimonials`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog`,         lastModified: now, changeFrequency: 'weekly',   priority: 0.9 },
    // { url: `${BASE}/faq`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/privacy`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const localSeoRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/construction-company-coimbatore`,     lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/builders-coimbatore`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/residential-construction-coimbatore`, lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${BASE}/commercial-construction-coimbatore`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url:             `${BASE}/blog/${post.slug}`,
    lastModified:    new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((cat) => ({
    url:             `${BASE}/blog/category/${cat.toLowerCase()}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.7,
  }))

  const tagRoutes: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url:             `${BASE}/blog/tag/${tag.toLowerCase()}`,
    lastModified:    now,
    changeFrequency: 'weekly' as const,
    priority:        0.6,
  }))

  const cityRoutes: MetadataRoute.Sitemap = cityNames.map((city) => ({
    url:             `${BASE}/construction-cost/${city}`,
    lastModified:    now,
    changeFrequency: 'monthly' as const,
    priority:        0.85,
  }))

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes, ...tagRoutes]
}
