import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/ui/FloatingButtons'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'
import company from '@/data/company.json'
import { headers } from 'next/headers'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import MetaPixel from '@/components/analytics/MetaPixel'
import AnalyticsTracker from '@/components/analytics/AnalyticsTracker'
import { Analytics } from "@vercel/analytics/next"
import { SLIDES } from '@/components/sections/HeroSection'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['700'],
  style: ['normal', 'italic'],
  preload: true,
  adjustFontFallback: false,
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
  metadataBase: new URL(company.website),
  title: {
    default: company.seo.metaTitle,
    template: `%s | Saanidhya Builders Coimbatore`,
  },
  description: company.seo.metaDescription,
  keywords: company.seo.keywords,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
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
    url: company.website,
    siteName: company.name,
    title: company.seo.metaTitle,
    description: company.seo.metaDescription,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${company.name} - Construction Company in Coimbatore`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: company.seo.metaTitle,
    description: company.seo.metaDescription,
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: company.website,
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

// LocalBusiness schema — Service Area Business (no physical address)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': company.website,
  name: company.name,
  description: company.description,
  url: company.website,
  telephone: company.contact.phone,
  email: company.contact.email,
  // Service Area Business — serves customers at their location
  areaServed: {
    '@type': 'City',
    name: company.serviceArea.city,
    containedInPlace: {
      '@type': 'State',
      name: company.serviceArea.state,
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Services',
    itemListElement: [
      'Residential Construction',
      'Commercial Construction',
      'Turnkey Construction',
      'House Construction',
      'Villa Construction',
      'Building Renovation',
      'Architectural Planning',
      'Building Design',
      'Interior Design',
      'Interior Renovation',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: company.contact.phone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [
    company.social.facebook,
    company.social.instagram,
    company.social.linkedin,
    company.social.youtube,
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname')

  const isComingSoon = pathname === '/coming-soon'

  return (
    <html lang="en">
            <head>
            `{/* ✅ Preload LCP hero image so browser fetches it immediately */}
            <link
              rel="preload"
              as="image"
              href={SLIDES[0].bg}
              fetchPriority="high"
            />
          </head>`
           <body>
          <ProgressBar />
          <ScrollToTop />
          <GoogleAnalytics />
          <MetaPixel />
          <AnalyticsTracker />
          {process.env.VERCEL_ENV && <Analytics />}

          {!isComingSoon && <Navbar />}
          
          <main>{children}</main>
          
          {!isComingSoon && <Footer />}
          {!isComingSoon && <FloatingButtons />}
        </body>
    </html>
  )
}