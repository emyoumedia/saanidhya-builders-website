import fs   from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { BlogMeta, BlogPost } from '@/data/types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function readAll(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...(data as Omit<BlogMeta, 'readingTime'>),
        slug:        data.slug || filename.replace(/\.mdx?$/, ''),
        readingTime: readingTime(content).text,
      } as BlogMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPosts(): BlogMeta[]                  { return readAll() }
export function getFeaturedPosts(limit = 3): BlogMeta[]   {
  const all = readAll()
  const f = all.filter((p) => p.featured)
  return (f.length >= limit ? f : all).slice(0, limit)
}

export function getPostBySlug(slug: string): BlogPost | null {
  const candidates = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ]
  const fp = candidates.find(fs.existsSync)
  if (!fp) return null
  const raw = fs.readFileSync(fp, 'utf8')
  const { data, content } = matter(raw)
  return {
    ...(data as Omit<BlogPost, 'readingTime' | 'content'>),
    slug:        data.slug || slug,
    content,
    readingTime: readingTime(content).text,
  } as BlogPost
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getPostsByCategory(cat: string): BlogMeta[] {
  return readAll().filter((p) => p.category.toLowerCase() === cat.toLowerCase())
}
export function getPostsByTag(tag: string): BlogMeta[] {
  return readAll().filter((p) => p.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
}
export function getAllCategories(): string[] {
  return [...new Set(readAll().map((p) => p.category))].sort()
}
export function getAllTags(): string[] {
  return [...new Set(readAll().flatMap((p) => p.tags))].sort()
}
export function getRelatedPosts(slug: string, category: string, limit = 3): BlogMeta[] {
  return readAll().filter((p) => p.slug !== slug && p.category === category).slice(0, limit)
}
export function paginatePosts(posts: BlogMeta[], page: number, perPage = 9) {
  const total      = posts.length
  const totalPages = Math.ceil(total / perPage)
  const start      = (page - 1) * perPage
  return { items: posts.slice(start, start + perPage), total, totalPages, currentPage: page }
}
