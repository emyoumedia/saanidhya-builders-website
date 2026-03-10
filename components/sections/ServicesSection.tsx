'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Building2, Palette, LayoutDashboard, Key, Hammer } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    slug: 'residential-construction',
    description: 'Custom homes, villas, and apartments built to your vision with premium materials and expert craftsmanship.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    color: '#7A2EFF',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    slug: 'commercial-construction',
    description: 'Office buildings, retail spaces, and commercial complexes designed for functionality and lasting impressions.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    color: '#FF6A1A',
  },
  {
    icon: Palette,
    title: 'Architectural Design',
    slug: 'architectural-design',
    description: 'Innovative architectural solutions blending aesthetics with practicality for modern living and working spaces.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    color: '#7A2EFF',
  },
  {
    icon: LayoutDashboard,
    title: 'Planning & Layout',
    slug: 'planning-layout',
    description: 'Comprehensive site planning, space optimization, and structural layout for maximum efficiency and beauty.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: '#FF6A1A',
  },
  {
    icon: Key,
    title: 'Turnkey Construction',
    slug: 'turnkey-construction',
    description: 'Complete project delivery from land to keys — we handle everything so you can simply move in.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    color: '#7A2EFF',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    slug: 'renovation-remodeling',
    description: 'Transform your existing space with our expert renovation services, breathing new life into old structures.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    color: '#FF6A1A',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5" style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }} aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 id="services-heading" className="section-title mb-4">
            Our Construction{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From foundation to finishing, we provide comprehensive construction solutions
            tailored for Coimbatore's growing residential and commercial landscape.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group bg-cream rounded-2xl overflow-hidden card-hover border border-navy/5 hover:border-orange/20 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} by Saanidhya Builders Coimbatore`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4" aria-hidden="true">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: service.color }}
                      >
                        <Icon size={22} className="text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-playfair font-bold text-xl text-navy mb-3 group-hover:text-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="font-montserrat text-sm leading-relaxed mb-4 flex-1" style={{ color: 'rgba(11,15,59,0.65)' }}>
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-orange group/link min-h-0 min-w-0 w-fit"
                      aria-label={`Learn more about ${service.title} in Coimbatore`}
                    >
                      Explore {service.title}
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/services" className="btn-primary" aria-label="View all construction services by Saanidhya Builders">
            View All Services
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
