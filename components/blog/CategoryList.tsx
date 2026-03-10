import Link from 'next/link'
import { FolderOpen } from 'lucide-react'
import { slugify } from '@/lib/seo'

interface Props {
  categories:       string[]
  activeCategory?:  string
  showCount?:       boolean
  counts?:          Record<string,number>
}

export default function CategoryList({ categories, activeCategory, counts }: Props) {
  return (
    <div>
      <h3 className="font-playfair font-bold text-navy text-lg mb-4 flex items-center gap-2">
        <FolderOpen size={18} className="text-orange" /> Categories
      </h3>
      <ul className="space-y-2">
        <li>
          <Link href="/blog"
            className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl font-montserrat
              text-sm font-medium transition-all duration-200 ${
              !activeCategory
                ? 'gradient-bg text-white shadow-md'
                : 'text-navy/70 hover:bg-cream hover:text-navy'
            }`}>
            <span>All Posts</span>
            {counts && <span className="text-xs opacity-60">{Object.values(counts).reduce((a,b)=>a+b,0)}</span>}
          </Link>
        </li>
        {categories.map((cat) => {
          const s = slugify(cat)
          const active = activeCategory?.toLowerCase() === cat.toLowerCase()
          return (
            <li key={cat}>
              <Link href={`/blog/category/${s}`}
                className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl
                  font-montserrat text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'gradient-bg text-white shadow-md'
                    : 'text-navy/70 hover:bg-cream hover:text-navy'
                }`}>
                <span>{cat}</span>
                {counts?.[cat] && <span className="text-xs opacity-60">{counts[cat]}</span>}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
