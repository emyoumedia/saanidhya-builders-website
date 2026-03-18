import type { Metadata } from 'next'
import ComingSoonPage from '@/components/ComingSoonPage'

export const metadata: Metadata = {
  title: 'Coming Soon | Saanidhya Builders – Coimbatore',
  description:
    'Saanidhya Builders – trusted construction company in Coimbatore. Our website is launching soon. Contact us on WhatsApp in the meantime.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ComingSoonPage />
}