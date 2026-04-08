const getCookie = (name: string) =>
  document.cookie.split('; ').find(r => r.startsWith(name + '='))?.split('=')[1] || ''

export const trackServerEvent = async (
  eventName: string,
  userData?: { phone?: string; email?: string },
  customData?: { value?: number; currency?: string }
) => {
  const eventId = crypto.randomUUID()

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, customData || {}, { eventID: eventId })
  }

  await fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      userData,
      customData,
      url: typeof window !== 'undefined' ? window.location.href : '',
      fbc: getCookie('_fbc'),
      fbp: getCookie('_fbp'),
    }),
  })
}

export const trackEvent = (eventName: string, data?: Record<string, string | number | boolean>) => {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', eventName, data)
  }

  if (window.fbq) {
    window.fbq('track', eventName, data)
  }
}