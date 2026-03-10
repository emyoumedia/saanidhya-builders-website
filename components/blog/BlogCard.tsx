import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { BlogMeta } from '@/data/types'
import { formatDate } from '@/lib/seo'

interface Props {
  post:     BlogMeta
  variant?: 'default' | 'horizontal' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: Props) {
  const img = post.image || '/images/blog/placeholder.jpg'

  /* ── Horizontal (sidebar / related) ── */
  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${post.slug}`}
        className="group flex gap-3 p-3 rounded-xl bg-white border border-navy/5 hover:border-orange/20 hover:shadow-md transition-all duration-300">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
          <Image src={img} alt={post.title} fill sizes="80px"
            className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="min-w-0">
          <p className="font-montserrat text-[10px] font-semibold text-orange uppercase tracking-wider mb-0.5">
            {post.category}
          </p>
          <h3 className="font-playfair font-bold text-navy text-sm leading-snug line-clamp-2
            group-hover:text-orange transition-colors">
            {post.title}
          </h3>
          <p className="font-montserrat text-[11px] mt-1" style={{ color:'rgba(11,15,59,.45)' }}>
            {formatDate(post.date)}
          </p>
        </div>
      </Link>
    )
  }

  /* ── Featured (hero card) ── */
  if (variant === 'featured') {
    return (
      <Link href={`/blog/${post.slug}`}
        className="group relative rounded-3xl overflow-hidden block" style={{ height:'440px' }}>
        <Image src={img} alt={post.title} fill sizes="(max-width:768px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-montserrat text-xs font-semibold text-white px-3 py-1 rounded-full gradient-bg">
              {post.category}
            </span>
            <span className="font-montserrat text-xs text-white/60 flex items-center gap-1">
              <Clock size={10} /> {post.readingTime}
            </span>
          </div>
          <h2 className="font-playfair font-bold text-white text-2xl md:text-3xl leading-tight mb-2
            group-hover:text-orange transition-colors">
            {post.title}
          </h2>
          <p className="font-montserrat text-sm text-white/70 line-clamp-2 mb-4">{post.description}</p>
          <span className="flex items-center gap-2 font-montserrat text-sm font-semibold text-orange">
            Read Article <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    )
  }

  /* ── Default card ── */
  return (
    <Link href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-navy/5
        hover:border-orange/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="relative h-48 overflow-hidden">
        <Image src={img} alt={post.title} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="font-montserrat text-[11px] font-semibold text-white px-3 py-1 rounded-full gradient-bg shadow">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-montserrat text-[11px] flex items-center gap-1" style={{ color:'rgba(11,15,59,.45)' }}>
            <Calendar size={10} /> {formatDate(post.date)}
          </span>
          <span className="font-montserrat text-[11px] flex items-center gap-1" style={{ color:'rgba(11,15,59,.45)' }}>
            <Clock size={10} /> {post.readingTime}
          </span>
        </div>
        <h2 className="font-playfair font-bold text-navy text-lg leading-snug mb-2 flex-1
          group-hover:text-orange transition-colors line-clamp-3">
          {post.title}
        </h2>
        <p className="font-montserrat text-sm leading-relaxed mb-3 line-clamp-2"
          style={{ color:'rgba(11,15,59,.6)' }}>
          {post.description}
        </p>
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag}
                className="font-montserrat text-[11px] px-2 py-0.5 rounded-full bg-cream border border-navy/10"
                style={{ color:'rgba(11,15,59,.5)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}
        <span className="flex items-center gap-1.5 font-montserrat text-sm font-semibold text-orange mt-auto">
          Read Article <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
