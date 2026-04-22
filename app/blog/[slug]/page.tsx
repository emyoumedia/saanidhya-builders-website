import { notFound }     from 'next/navigation'
import type { Metadata } from 'next'
import Image  from 'next/image'
import Link   from 'next/link'
import {
  getPostBySlug, getAllSlugs, getRelatedPosts,
  getAllCategories, getAllTags, getAllPosts, getFeaturedPosts,
} from '@/lib/blog'
import { blogPostMeta, articleJsonLd, formatDate } from '@/lib/seo'
import BlogSidebar  from '@/components/blog/BlogSidebar'
import RelatedPosts from '@/components/blog/RelatedPosts'
import AuthorBox    from '@/components/blog/AuthorBox'
import ShareButtons from '@/components/blog/ShareButtons'
import TagList      from '@/components/blog/TagList'
import MdxRenderer  from '@/components/blog/MdxRenderer'
import { Calendar, Clock, ArrowLeft, ChevronRight } from 'lucide-react'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return blogPostMeta(post)
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related      = getRelatedPosts(post.slug, post.category, 3)
  const categories   = getAllCategories()
  const tags         = getAllTags()
  const allPosts     = getAllPosts()
  const recentPosts  = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4)
  const popularPosts = getFeaturedPosts(3).filter((p) => p.slug !== post.slug)
  const url          = `https://saanidhyabuilders.com/blog/${post.slug}`

  const categoryCounts: Record<string, number> = {}
  categories.forEach((cat) => {
    categoryCounts[cat] = allPosts.filter((p) => p.category === cat).length
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />

      <div className="bg-cream min-h-screen">

        {/* Hero image */}
        <div className="relative bg-navy" style={{ height: '460px', paddingTop: '72px' }}>
          <Image
            src={post.image || '/images/blog/placeholder.jpg'}
            alt={post.title}
            fill sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-10">
            <nav className="flex items-center gap-2 font-montserrat text-sm text-white/50 mb-4 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight size={14} />
              <Link href={`/blog/category/${(post.category ?? 'general').toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                {post.category}
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/80 line-clamp-1">{post.title}</span>
            </nav>

            <div className="mb-3">
              <span className="font-montserrat text-xs font-semibold text-white px-3 py-1.5 rounded-full gradient-bg">
                {post.category}
              </span>
            </div>

            <h1
              className="font-playfair font-bold text-white leading-tight mb-4 max-w-3xl"
              style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)' }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 font-montserrat text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readingTime}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            <article>
              <Link href="/blog" className="inline-flex items-center gap-2 font-montserrat text-sm text-navy/50 hover:text-orange transition-colors mb-8">
                <ArrowLeft size={15} /> Back to Blog
              </Link>

              <div className="mb-8">
                <AuthorBox author={post.author} date={formatDate(post.date)} readingTime={post.readingTime} />
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-navy/5 mb-8">
                <MdxRenderer source={post.content} />
              </div>

              {post.tags?.length > 0 && (
                <div className="mb-6">
                  <TagList tags={post.tags} variant="inline" />
                </div>
              )}

              <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm mb-8">
                <ShareButtons title={post.title} url={url} />
              </div>

              <RelatedPosts posts={related} />
            </article>

            <BlogSidebar
              categories={categories} tags={tags}
              recentPosts={recentPosts} popularPosts={popularPosts}
              activeCategory={post.category} categoryCounts={categoryCounts}
            />
          </div>
        </div>
      </div>
    </>
  )
}
