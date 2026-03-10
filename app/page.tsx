import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'

// Below-fold sections: lazy load to keep initial JS bundle tiny
const AboutPreview    = dynamic(() => import('@/components/sections/AboutPreview'))
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'))
const FeaturedProjects = dynamic(() => import('@/components/sections/FeaturedProjects'))
const WhyChooseUs     = dynamic(() => import('@/components/sections/WhyChooseUs'))
const ProcessTimeline = dynamic(() => import('@/components/sections/ProcessTimeline'))
const Testimonials    = dynamic(() => import('@/components/sections/Testimonials'))
const CTASection      = dynamic(() => import('@/components/sections/CTASection'))

export const metadata: Metadata = {
  title: 'Saanidhya Builders | Premium Construction Company in Coimbatore',
  description:
    'Saanidhya Builders – Building Dreams with Quality and Trust. Leading construction company in Coimbatore offering residential construction, commercial construction, architectural design and turnkey projects in Tamil Nadu.',
  alternates: { canonical: 'https://www.saanidhyabuilders.com' },
}

export default function HomePage() {
  return (
    <>
      {/* Hero is above the fold — import directly (no dynamic) */}
      <HeroSection />

      {/* All below-fold sections lazy-loaded */}
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <CTASection />
    </>
  )
}
