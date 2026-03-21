import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import ConditionalChrome, { ConditionalFooter } from '@/components/ui/ConditionalChrome'
import company from '@/data/company.json'


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
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: company.website,
    siteName: company.name,
    title: company.seo.metaTitle,
    description: company.seo.metaDescription,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${company.name} - Construction Company in Coimbatore` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: company.seo.metaTitle,
    description: company.seo.metaDescription,
    images: ['/images/og-image.jpg'],
  },
  alternates: { canonical: company.website },
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
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': company.website,
  name: company.name,
  description: company.description,
  url: company.website,
  telephone: company.contact.phone,
  email: company.contact.email,
  areaServed: {
    '@type': 'City',
    name: company.serviceArea.city,
    containedInPlace: { '@type': 'State', name: company.serviceArea.state },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Services',
    itemListElement: [
      'Residential Construction', 'Commercial Construction', 'Turnkey Construction',
      'House Construction', 'Villa Construction', 'Building Renovation',
      'Architectural Planning', 'Building Design', 'Interior Design', 'Interior Renovation',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: company.hours.opens,
      closes: company.hours.closes,
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: company.contact.phone,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
  sameAs: [company.social.facebook, company.social.instagram, company.social.linkedin, company.social.youtube],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
        <body className="font-montserrat">
          <Suspense fallback={null}>
            <ConditionalChrome />
          </Suspense>
          <main id="main-content">{children}</main>
          <Suspense fallback={null}>
            <ConditionalFooter />
          </Suspense>
        </body>
    </html>
  )
}