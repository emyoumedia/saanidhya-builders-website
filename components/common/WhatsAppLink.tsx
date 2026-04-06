'use client'

import { trackEvent } from '@/lib/tracking'

export default function WhatsAppLink({
  href,
  label,
  children,
  ...props
}: {
  href: string
  label: string
  children: React.ReactNode
  [key: string]: any
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('whatsapp_click', {
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