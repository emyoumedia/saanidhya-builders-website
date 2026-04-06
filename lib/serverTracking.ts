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
      url: window.location.href,
    }),
  })
}