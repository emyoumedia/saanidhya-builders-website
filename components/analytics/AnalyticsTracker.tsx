'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { trackEvent } from '@/lib/tracking'
import { trackServerEvent } from '@/lib/serverTracking'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const isProd = process.env.NODE_ENV === 'production'

export default function AnalyticsTracker() {
  const pathname = usePathname()

  // Page view
  useEffect(() => {
    if (!isProd) return

    if (window.gtag && GA_ID) {
      window.gtag('config', GA_ID, { page_path: pathname })
    }
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  // Global click tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href') || ''

      if (href.includes('wa.me') || href.includes('whatsapp')) {
        trackEvent('whatsapp_click', {
          event_category: 'engagement',
          event_label: target.innerText?.trim() || 'WhatsApp',
          page: pathname,
        })
        trackServerEvent('Contact')
      }

      if (href.startsWith('tel:')) {
        trackEvent('call_click', {
          event_category: 'engagement',
          event_label: href.replace('tel:', ''),
          page: pathname,
        })
        trackServerEvent('Contact')
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          event_category: 'engagement',
          event_label: href.replace('mailto:', ''),
          page: pathname,
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  // Scroll depth
  useEffect(() => {
    const milestones = [25, 50, 75, 100]
    const fired = new Set<number>()

    const handleScroll = () => {
      const percent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      milestones.forEach(m => {
        if (percent >= m && !fired.has(m)) {
          fired.add(m)
          trackEvent('scroll_depth', { event_label: `${m}%`, page: pathname })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Time on page
  useEffect(() => {
    const start = Date.now()
    return () => {
      const seconds = Math.round((Date.now() - start) / 1000)
      trackEvent('time_on_page', { event_label: pathname, value: seconds })
    }
  }, [pathname])

  return null
}