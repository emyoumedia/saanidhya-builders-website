import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Building2, Palette, LayoutDashboard, Key, Hammer, CheckCircle2, ArrowRight  , HousePlus, Castle,  Sofa, PaintBucket } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import servicesData from '@/data/services.json'
import {   } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Key, HousePlus, Castle, Hammer, Palette, LayoutDashboard, Sofa, PaintBucket,
}
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/services',
  },
  title: 'Construction Services – Saanidhya Builders Coimbatore',
  description:
    'Comprehensive construction services in Coimbatore: Residential Construction, Commercial Construction, Architectural Design, Turnkey Projects, Renovation & Remodeling.',
}


export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Construction services" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">What We Offer</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Construction <span className="gradient-text">Services</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive building solutions for residential and commercial projects across Coimbatore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.icon] || Home
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={service.title}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      </div>
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg" style={{ background: service.color }}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">{service.title}</h2>
                      <p className="font-montserrat text-navy/60 leading-relaxed mb-6">{service.description}</p>
                      <div className="space-y-3 mb-8">
                        <h3 className="font-montserrat font-semibold text-navy text-sm uppercase tracking-wider">Key Benefits</h3>
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-orange flex-shrink-0" />
                            <span className="font-montserrat text-sm text-navy/70">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary">
                        Get a Quote <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
