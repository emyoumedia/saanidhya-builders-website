import type { Metadata } from 'next'
import { notFound }     from 'next/navigation'
import { getPostsByTag, getAllTags, getAllCategories, getAllPosts, getFeaturedPosts, paginatePosts } from '@/lib/blog'
import BlogGrid    from '@/components/blog/BlogGrid'
import BlogSidebar from '@/components/blog/BlogSidebar'
import Pagination  from '@/components/blog/Pagination'

interface Props {
  params: Promise<{ tag: string }>
  searchParams?: Promise<{ page?: string }>
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  return {
    title: `Posts tagged "${tag}" | Saanidhya Builders Blog`,
    description: `All blog articles tagged with "${tag}" from Saanidhya Builders.`,
    alternates: { canonical: `https://www.saanidhyabuilders.com/blog/tag/${tag}` },
  }
}

export default async function TagPage({ params, searchParams }: Props) {
  const { tag }  = await params
  const sp       = await searchParams
  const page     = Number(sp?.page || 1)

  if (!tag) notFound()

  const tagPosts = getPostsByTag(tag)
  if (!tagPosts.length) notFound()

  const { items, totalPages } = paginatePosts(tagPosts, page, 9)
  const categories   = getAllCategories()
  const tags         = getAllTags()
  const allPosts     = getAllPosts()
  const recentPosts  = allPosts.slice(0, 4)
  const popularPosts = getFeaturedPosts(3)

  const categoryCounts: Record<string, number> = {}
  categories.forEach((cat) => {
    categoryCounts[cat] = allPosts.filter((p) => p.category === cat).length
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
            Tag
          </span>
          <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl mb-3">#{tag}</h1>
          <p className="font-montserrat text-white/60 text-lg">{tagPosts.length} articles</p>
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <main>
            <BlogGrid posts={items} />
            <Pagination currentPage={page} totalPages={totalPages} basePath={`/blog/tag/${tag}`} />
          </main>
          <BlogSidebar
            categories={categories} tags={tags}
            recentPosts={recentPosts} popularPosts={popularPosts}
            activeTag={tag} categoryCounts={categoryCounts}
          />
        </div>
      </section>
    </div>
  )
}