import type { Metadata } from 'next'
import { notFound }     from 'next/navigation'
import { getPostsByCategory, getAllCategories, getAllTags, getAllPosts, getFeaturedPosts, paginatePosts } from '@/lib/blog'
import BlogGrid    from '@/components/blog/BlogGrid'
import BlogHeader  from '@/components/blog/BlogHeader'
import BlogSidebar from '@/components/blog/BlogSidebar'
import Pagination  from '@/components/blog/Pagination'

function buildMetadata(category: string): Metadata {
  const cap = category.charAt(0).toUpperCase() + category.slice(1)
  return {
    title: `${cap} Articles | Saanidhya Builders Blog`,
    description: `Browse all ${cap} articles from Saanidhya Builders — expert advice for homebuilders in Coimbatore and Tamil Nadu.`,
    alternates: { canonical: `https://saanidhyabuilders.com/blog/category/${category}` },
  }
}

interface Props {
  params: Promise<{ category: string }>
  searchParams?: Promise<{ page?: string }>
}

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ category: cat.toLowerCase().replace(/\s+/g, '-') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  return buildMetadata(category)
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category: cat } = await params
  const sp   = await searchParams
  const page = Number(sp?.page || 1)

  if (!cat) notFound()

  const allCatPosts = getPostsByCategory(cat)
  if (!allCatPosts.length) notFound()

  const { items, totalPages } = paginatePosts(allCatPosts, page, 9)
  const categories   = getAllCategories()
  const tags         = getAllTags()
  const allPosts     = getAllPosts()
  const recentPosts  = allPosts.slice(0, 4)
  const popularPosts = getFeaturedPosts(3)
  const capCat       = cat.charAt(0).toUpperCase() + cat.slice(1)

  const categoryCounts: Record<string, number> = {}
  categories.forEach((c) => {
    categoryCounts[c] = allPosts.filter((p) => p.category === c).length
  })

  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full border border-orange/20 bg-orange/10">
            Category
          </span>
          <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl mb-3">{capCat}</h1>
          <p className="font-montserrat text-white/60 text-lg">{allCatPosts.length} articles</p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <main>
            <BlogGrid posts={items} />
            <Pagination currentPage={page} totalPages={totalPages} basePath={`/blog/category/${cat}`} />
          </main>
          <BlogSidebar
            categories={categories} tags={tags}
            recentPosts={recentPosts} popularPosts={popularPosts}
            activeCategory={capCat} categoryCounts={categoryCounts}
          />
        </div>
      </section>
    </div>
  )
}