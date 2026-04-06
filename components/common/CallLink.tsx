'use client'
import { trackEvent } from '@/lib/tracking'

export default function CallLink({ href, label, children, ...props }) {
  return (
    <a
      href={href}
      onClick={() =>
        trackEvent('call_click', {
          event_category: 'engagement',
          event_label: label,
          page: window.location.pathname,
        })
      }
      {...props}
    >
      {children}
    </a>
  )
}