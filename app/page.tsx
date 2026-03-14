import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import company from '@/data/company.json'

// Below-fold sections: lazy load to keep initial JS bundle tiny
const AboutPreview    = dynamic(() => import('@/components/sections/AboutPreview'))
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'))
const FeaturedProjects = dynamic(() => import('@/components/sections/FeaturedProjects'))
const WhyChooseUs     = dynamic(() => import('@/components/sections/WhyChooseUs'))
const ProcessTimeline = dynamic(() => import('@/components/sections/ProcessTimeline'))
const Testimonials    = dynamic(() => import('@/components/sections/Testimonials'))
const CTASection      = dynamic(() => import('@/components/sections/CTASection'))

export const metadata: Metadata = {
  title: company.seo.metaTitle,
  description: company.seo.metaDescription,
  keywords: company.seo.keywords,
  alternates: { canonical: company.website },
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
