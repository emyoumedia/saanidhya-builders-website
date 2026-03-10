import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  currentPage:  number
  totalPages:   number
  basePath:     string
}

export default function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null

  function href(p: number) {
    return p === 1 ? basePath : `${basePath}?page=${p}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
    .filter((p) => Math.abs(p - currentPage) <= 2)

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
      {currentPage > 1 && (
        <Link href={href(currentPage - 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-xl font-montserrat text-sm font-medium
            text-navy/60 border border-navy/10 hover:border-orange/30 hover:text-orange transition-all">
          <ChevronLeft size={16} /> Prev
        </Link>
      )}
      {pages.map((p) => (
        <Link key={p} href={href(p)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl font-montserrat text-sm
            font-medium transition-all ${
            p === currentPage
              ? 'gradient-bg text-white shadow-md'
              : 'border border-navy/10 text-navy/60 hover:border-orange/30 hover:text-orange'
          }`}>
          {p}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link href={href(currentPage + 1)}
          className="flex items-center gap-1 px-4 py-2 rounded-xl font-montserrat text-sm font-medium
            text-navy/60 border border-navy/10 hover:border-orange/30 hover:text-orange transition-all">
          Next <ChevronRight size={16} />
        </Link>
      )}
    </nav>
  )
}
