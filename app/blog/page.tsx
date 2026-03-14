import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAllCategories, getAllTags, paginatePosts, getFeaturedPosts } from '@/lib/blog'
import company from '@/data/company.json'
import BlogGrid    from '@/components/blog/BlogGrid'
import BlogHeader  from '@/components/blog/BlogHeader'
import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogCard    from '@/components/blog/BlogCard'
import Pagination  from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: `Construction Blog | Tips, Guides & Insights | ${company.name}`,
  description: `Expert construction tips, cost guides, design ideas, and real estate insights for homebuilders in ${company.serviceArea.city} and Tamil Nadu. Updated regularly by ${company.name}.`,
  alternates: { canonical: `${company.website}/blog` },
}

interface Props {
  searchParams?: { page?: string; q?: string; category?: string }
}

export default function BlogPage({ searchParams }: Props) {
  const page     = Number(searchParams?.page || 1)
  const query    = searchParams?.q?.toLowerCase() || ''
  const catFilter= searchParams?.category || ''

  let posts = getAllPosts()

  // Filter by search query
  if (query) {
    posts = posts.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query))
    )
  }

  // Filter by category
  if (catFilter) {
    posts = posts.filter((p) => p.category.toLowerCase() === catFilter.toLowerCase())
  }

  const { items, totalPages } = paginatePosts(posts, page, 9)
  const featured    = getFeaturedPosts(2)
  const categories  = getAllCategories()
  const tags        = getAllTags()
  const allPosts    = getAllPosts()
  const recentPosts = allPosts.slice(0, 4)
  const popularPosts= allPosts.filter((p) => p.featured).slice(0, 3)

  // Category counts
  const categoryCounts: Record<string,number> = {}
  categories.forEach((cat) => {
    categoryCounts[cat] = allPosts.filter((p) => p.category === cat).length
  })

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background:'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} />
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase
            tracking-widest mb-4 px-4 py-1.5 rounded-full border border-orange/20 bg-orange/10">
            Our Blog
          </span>
          <h1 className="font-playfair font-bold text-white mb-4"
            style={{ fontSize:'clamp(2rem,5vw,3.25rem)' }}>
            Construction Insights &amp; Expert Guides
          </h1>
          <p className="font-montserrat text-lg max-w-2xl mx-auto" style={{ color:'rgba(255,255,255,.7)' }}>
            Tips, cost guides, design inspiration, and expert advice for homebuilders across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* ── Featured posts ── */}
      {!query && !catFilter && page === 1 && featured.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 gradient-bg rounded-full" />
            <h2 className="font-playfair font-bold text-navy text-xl">Featured Articles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p) => <BlogCard key={p.slug} post={p} variant="featured" />)}
          </div>
        </section>
      )}

      {/* ── Main content + sidebar ── */}
      <section className="container mx-auto px-4 md:px-6 pb-20">
        {(query || catFilter) && (
          <div className="mb-8">
            <BlogHeader
              title={query ? `Search: "${query}"` : `Category: ${catFilter}`}
              count={posts.length}
            />
          </div>
        )}
        {!query && !catFilter && (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 gradient-bg rounded-full" />
            <h2 className="font-playfair font-bold text-navy text-xl">All Articles</h2>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <main>
            <BlogGrid posts={items} />
            <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />
          </main>
          <BlogSidebar
            categories={categories}
            tags={tags}
            recentPosts={recentPosts}
            popularPosts={popularPosts}
            activeCategory={catFilter}
            categoryCounts={categoryCounts}
          />
        </div>
      </section>
    </div>
  )
}
