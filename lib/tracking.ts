export const trackEvent = (eventName: string, data?: Record<string, string | number | boolean>) => {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', eventName, data)
  }

  if (window.fbq) {
    window.fbq('track', eventName, data)
  }
}