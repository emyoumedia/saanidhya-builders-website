import BlogCard from './BlogCard'
import type { BlogMeta } from '@/data/types'

interface Props { posts: BlogMeta[] }

export default function RelatedPosts({ posts }: Props) {
  if (!posts.length) return null
  return (
    <section className="mt-16 pt-12 border-t border-navy/10">
      <h2 className="font-playfair font-bold text-navy text-2xl mb-8">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </section>
  )
}
