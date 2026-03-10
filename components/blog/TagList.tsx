import Link from 'next/link'
import { Tag } from 'lucide-react'
import { slugify } from '@/lib/seo'

interface Props {
  tags:       string[]
  activeTag?: string
  variant?:   'sidebar' | 'inline'
}

export default function TagList({ tags, activeTag, variant = 'sidebar' }: Props) {
  return (
    <div>
      {variant === 'sidebar' && (
        <h3 className="font-playfair font-bold text-navy text-lg mb-4 flex items-center gap-2">
          <Tag size={18} className="text-orange" /> Tags
        </h3>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const s = slugify(tag)
          const active = activeTag?.toLowerCase() === tag.toLowerCase()
          return (
            <Link key={tag} href={`/blog/tag/${s}`}
              className={`font-montserrat text-xs font-medium px-3 py-1.5 rounded-full border
                transition-all duration-200 ${
                active
                  ? 'gradient-bg text-white border-transparent shadow'
                  : 'border-navy/10 text-navy/60 hover:border-orange/40 hover:text-orange bg-white'
              }`}>
              #{tag}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
