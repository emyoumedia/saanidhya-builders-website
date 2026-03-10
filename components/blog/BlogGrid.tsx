import BlogCard from './BlogCard'
import type { BlogMeta } from '@/data/types'

interface Props {
  posts:    BlogMeta[]
  columns?: 2 | 3
}

export default function BlogGrid({ posts, columns = 3 }: Props) {
  if (!posts.length) {
    return (
      <div className="text-center py-20">
        <p className="font-montserrat text-lg" style={{ color:'rgba(11,15,59,.5)' }}>No posts found.</p>
      </div>
    )
  }
  const grid = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <div className={`grid gap-6 ${grid}`}>
      {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
    </div>
  )
}
