'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Building2, Key, HousePlus, Castle, Hammer, Palette, LayoutDashboard, Sofa, PaintBucket } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import servicesData from '@/data/services.json'

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Key, HousePlus, Castle, Hammer, Palette, LayoutDashboard, Sofa, PaintBucket,
}

export default function ServicesSection() {
  // Show first 6 on homepage
  const display = servicesData.slice(0, 6)

  return (
    <section className="py-24 bg-cream" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h2 className="section-title mb-4">Complete Construction Solutions</h2>
            <p className="font-montserrat text-navy/55 max-w-2xl mx-auto leading-relaxed">
              From architectural planning to interior finishing — every service you need
              for your construction project in Coimbatore, under one roof.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-navy/5
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl gradient-bg
                      flex items-center justify-center shadow-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-navy text-lg mb-2">{service.title}</h3>
                    <p className="font-montserrat text-navy/55 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-1 mb-5">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 font-montserrat text-xs text-navy/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact"
                      className="flex items-center gap-2 font-montserrat text-sm font-semibold text-orange hover:gap-3 transition-all duration-200">
                      Get Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
