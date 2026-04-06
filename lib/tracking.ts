export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', eventName, data)
  }

  if (window.fbq) {
    window.fbq('track', eventName, data)
  }
}