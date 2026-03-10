import type { Metadata } from 'next'
import type { BlogMeta } from '@/data/types'

const BASE = 'https://www.saanidhyabuilders.com'
const SITE = 'Saanidhya Builders'

export function cap(s: string) { return s.charAt(0).toUpperCase() + s.slice(1) }
export function slugify(s: string) { return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }
export function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' })
}

export function blogPostMeta(post: BlogMeta): Metadata {
  const url = `${BASE}/blog/${post.slug}`
  const img = post.image?.startsWith('http') ? post.image : `${BASE}${post.image}`
  return {
    title: `${post.title} | ${SITE}`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: { type:'article', url, title: post.title, description: post.description,
      publishedTime: post.date, authors: [post.author], siteName: SITE,
      images: [{ url: img, width:1200, height:630, alt: post.title }] },
    twitter: { card:'summary_large_image', title: post.title, description: post.description, images:[img] },
    alternates: { canonical: url },
  }
}

export function constructionCostMeta(city: string, state: string): Metadata {
  const cn = cap(city)
  const url = `${BASE}/construction-cost/${city}`
  const title = `Construction Cost in ${cn} 2026 | ${SITE}`
  const description = `Find the latest house construction cost in ${cn}, ${state} — cost per sq.ft, material prices, labour charges, and expert planning tips from ${SITE}.`
  return {
    title, description,
    keywords: [`construction cost in ${cn}`,`house construction cost ${cn}`,`best builders in ${cn}`,`residential builders ${cn}`,`turnkey construction ${cn}`],
    openGraph: { type:'website', url, title, description, siteName: SITE,
      images:[{ url:`${BASE}/images/og-construction-cost.jpg`, width:1200, height:630, alt:title }] },
    twitter: { card:'summary_large_image', title, description },
    alternates: { canonical: url },
  }
}

export function articleJsonLd(post: BlogMeta) {
  return {
    '@context':'https://schema.org','@type':'Article',
    headline: post.title, description: post.description,
    image: `${BASE}${post.image}`,
    datePublished: post.date, dateModified: post.date,
    author: { '@type':'Organization', name: post.author, url: BASE },
    publisher: { '@type':'Organization', name: SITE,
      logo: { '@type':'ImageObject', url:`${BASE}/images/logo.png` } },
    mainEntityOfPage: { '@type':'WebPage', '@id':`${BASE}/blog/${post.slug}` },
  }
}

export function faqJsonLd(city: string, state: string, min: number, max: number) {
  const cn = cap(city)
  return {
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:[
      { '@type':'Question', name:`What is the construction cost per sq.ft in ${cn}?`,
        acceptedAnswer:{ '@type':'Answer',
          text:`House construction in ${cn} costs ₹${min}–₹${max} per sq.ft depending on spec level and location within ${state}.` } },
      { '@type':'Question', name:`Which are the best builders in ${cn}?`,
        acceptedAnswer:{ '@type':'Answer',
          text:`Saanidhya Builders is a trusted construction company with 15+ years experience serving ${cn} and surrounding areas with residential and commercial projects.` } },
      { '@type':'Question', name:`How long does house construction take in ${cn}?`,
        acceptedAnswer:{ '@type':'Answer',
          text:`A typical 1,200–1,800 sq.ft home in ${cn} takes 12–18 months from foundation to handover, depending on size and specifications.` } },
    ],
  }
}
