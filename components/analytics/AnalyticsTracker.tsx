'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const isProd = process.env.NODE_ENV === 'production'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!isProd) return

    if (window.gtag && GA_ID) {
      window.gtag('config', GA_ID, {
        page_path: pathname,
      })
    }

    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}