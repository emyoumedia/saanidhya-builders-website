'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import BlogCard     from './BlogCard'
import CategoryList from './CategoryList'
import TagList      from './TagList'
import type { BlogMeta } from '@/data/types'

interface Props {
  categories:      string[]
  tags:            string[]
  recentPosts:     BlogMeta[]
  popularPosts:    BlogMeta[]
  activeCategory?: string
  activeTag?:      string
  categoryCounts?: Record<string,number>
}

export default function BlogSidebar({
  categories, tags, recentPosts, popularPosts,
  activeCategory, activeTag, categoryCounts,
}: Props) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) router.push(`/blog?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <aside className="space-y-8">

      {/* ── Search ── */}
      <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm">
        <h3 className="font-playfair font-bold text-navy text-lg mb-4 flex items-center gap-2">
          <Search size={18} className="text-orange" /> Search Articles
        </h3>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog..."
            className="flex-1 font-montserrat text-sm px-4 py-2.5 rounded-xl border border-navy/10
              focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/40 bg-cream"
            aria-label="Search blog posts"
          />
          <button type="submit"
            className="gradient-bg text-white px-4 py-2.5 rounded-xl hover:opacity-90
              transition-opacity font-montserrat text-sm font-medium"
            aria-label="Submit search">
            Go
          </button>
        </form>
      </div>

      {/* ── Categories ── */}
      <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm">
        <CategoryList categories={categories} activeCategory={activeCategory} counts={categoryCounts} />
      </div>

      {/* ── Popular Posts ── */}
      {popularPosts.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm">
          <h3 className="font-playfair font-bold text-navy text-lg mb-4">🔥 Popular Posts</h3>
          <div className="space-y-3">
            {popularPosts.map((p) => <BlogCard key={p.slug} post={p} variant="horizontal" />)}
          </div>
        </div>
      )}

      {/* ── Recent Posts ── */}
      {recentPosts.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm">
          <h3 className="font-playfair font-bold text-navy text-lg mb-4">🕐 Recent Posts</h3>
          <div className="space-y-3">
            {recentPosts.map((p) => <BlogCard key={p.slug} post={p} variant="horizontal" />)}
          </div>
        </div>
      )}

      {/* ── Tags ── */}
      {tags.length > 0 && (
        <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm">
          <TagList tags={tags} activeTag={activeTag} />
        </div>
      )}

      {/* ── CTA Banner ── */}
      <div className="rounded-2xl p-6 text-white gradient-bg">
        <h3 className="font-playfair font-bold text-xl mb-2">Build Your Dream Home</h3>
        <p className="font-montserrat text-sm text-white/80 mb-4 leading-relaxed">
          Get a free consultation and cost estimate for your construction project in Coimbatore.
        </p>
        <a href="/contact"
          className="block text-center bg-white text-navy font-montserrat font-semibold text-sm
            py-3 rounded-xl hover:bg-cream transition-colors">
          Get Free Quote
        </a>
      </div>
    </aside>
  )
}
