import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'

/*
  Font strategy:
  - Playfair Display: only load weights actually used in above-the-fold headings.
    The h1 hero uses font-bold (700) and italic. Load ONLY those two.
    All other weights load async via CSS.
  - Montserrat: body font, display:swap — Georgia/Arial fallback until loaded.
  - Both use display:'swap' so text renders instantly in fallback font,
    then swaps when the real font is ready (no invisible text = no LCP penalty).
*/
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['700'],
  style: ['normal', 'italic'],
  preload: true,
  adjustFontFallback: false, // we handle fallback metrics manually in CSS
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Saanidhya Builders | Premium Construction Company in Coimbatore',
    template: '%s | Saanidhya Builders Coimbatore',
  },
  description:
    'Saanidhya Builders is a leading construction company in Coimbatore offering premium residential construction, commercial construction, architectural design, and turnkey project services across Tamil Nadu.',
  keywords: [
    'construction company in Coimbatore',
    'builders in Coimbatore',
    'residential builders Coimbatore',
    'commercial construction company Coimbatore',
    'turnkey construction services Coimbatore',
    'architectural design Coimbatore',
    'home builders Coimbatore Tamil Nadu',
    'building contractors Coimbatore',
  ],
  authors: [{ name: 'Saanidhya Builders' }],
  creator: 'Saanidhya Builders',
  publisher: 'Saanidhya Builders',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.saanidhyabuilders.com',
    siteName: 'Saanidhya Builders',
    title: 'Saanidhya Builders | Premium Construction Company in Coimbatore',
    description:
      'Building Dreams with Quality and Trust. Premium residential and commercial construction services in Coimbatore, Tamil Nadu.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saanidhya Builders - Construction Company in Coimbatore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saanidhya Builders | Construction Company in Coimbatore',
    description:
      'Premium residential and commercial construction services in Coimbatore, Tamil Nadu.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo/logo-32.png',  sizes: '32x32',   type: 'image/png' },
      { url: '/logo/logo-48.png',  sizes: '48x48',   type: 'image/png' },
      { url: '/logo/logo-64.png',  sizes: '64x64',   type: 'image/png' },
      { url: '/logo/logo-128.png', sizes: '128x128', type: 'image/png' },
    ],
    apple:    [{ url: '/logo/logo-128.png', sizes: '128x128', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.saanidhyabuilders.com',
  name: 'Saanidhya Builders',
  description:
    'Premium construction company in Coimbatore specializing in residential and commercial construction, architectural design, and turnkey projects.',
  url: 'https://www.saanidhyabuilders.com',
  telephone: '+91-98765-43210',
  email: 'info@saanidhyabuilders.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42, Avinashi Road',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641018',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.0168,
    longitude: 76.9558,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/saanidhyabuilders',
    'https://www.instagram.com/saanidhyabuilders',
    'https://www.linkedin.com/company/saanidhyabuilders',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-montserrat">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm focus:font-medium"
          style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }}
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
