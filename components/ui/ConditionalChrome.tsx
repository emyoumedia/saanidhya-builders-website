'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

export default function ConditionalChrome() {
  const pathname = usePathname()
  const isComingSoon = pathname === '/coming-soon'

  if (isComingSoon) return null

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm focus:font-medium"
        style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }}
      >
        Skip to main content
      </a>
      <Navbar />
    </>
  )
}

export function ConditionalFooter() {
  const pathname = usePathname()
  if (pathname === '/coming-soon') return null
  return (
    <>
      <Footer />
      <FloatingButtons />
    </>
  )
}