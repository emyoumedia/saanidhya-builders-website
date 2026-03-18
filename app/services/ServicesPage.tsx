'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Home, Building2, Palette, LayoutDashboard, Key,
  Hammer, CheckCircle2, ArrowRight, HousePlus, Castle,
  Sofa, PaintBucket, ChevronDown
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { servicesData, company } from '@/data'

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Key, HousePlus, Castle, Hammer,
  Palette, LayoutDashboard, Sofa, PaintBucket,
}

type Service = {
  id: string; icon: string; title: string; slug: string
  tagline: string; description: string; shortDesc: string
  benefits: string[]; image: string; imageAlt: string; color: string
}

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function ServicesPage() {
  const services = servicesData as unknown as Service[]
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => setOpen(prev => prev === id ? null : id)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt={`Construction services in ${company.serviceArea.city}`}
            fill className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              What We Offer
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Construction <span className="gradient-text">Services</span>
            </h1>
            <p className="font-montserrat text-white/55 text-sm max-w-md mx-auto">
              {services.length} services · {company.serviceArea.city}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* MOBILE: Accordion */}
          <div className="lg:hidden space-y-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Home
              const isOpen = open === service.id
              return (
                <div key={service.id}
                  className="bg-white rounded-2xl border border-navy/8 overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggle(service.id)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: service.color }}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-montserrat font-semibold text-navy text-sm leading-tight">
                        {service.title}
                      </p>
                      {!isOpen && (
                        <p className="font-montserrat text-navy/40 text-xs mt-0.5 truncate">
                          {service.tagline}
                        </p>
                      )}
                    </div>
                    <ChevronDown size={16} className="text-navy/35 flex-shrink-0 transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 border-t border-navy/6">
                      <p className="font-montserrat text-navy/60 text-sm leading-relaxed mt-4 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {service.benefits.map(b => (
                          <li key={b} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-orange flex-shrink-0" />
                            <span className="font-montserrat text-xs text-navy/65">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/contact?service=${service.slug}`}
                        className="inline-flex items-center gap-2 font-montserrat font-bold text-xs text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                        style={{ background: GRAD }}>
                        Get a Quote <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* DESKTOP: Alternating layout */}
          <div className="hidden lg:block space-y-16">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={service.id}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '360px' }}>
                        <Image src={service.image} alt={service.imageAlt}
                          fill className="object-cover" sizes="50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                      </div>
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md"
                        style={{ background: service.color }}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <p className="font-montserrat text-xs font-bold uppercase tracking-[0.16em] mb-1.5"
                        style={{ color: service.color }}>
                        {service.tagline}
                      </p>
                      <h2 className="font-playfair font-bold text-navy leading-tight mb-3"
                        style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
                        {service.title}
                      </h2>
                      <p className="font-montserrat text-navy/60 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.benefits.map(b => (
                          <li key={b} className="flex items-center gap-2.5">
                            <CheckCircle2 size={13} className="text-orange flex-shrink-0" />
                            <span className="font-montserrat text-sm text-navy/65">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/contact?service=${service.slug}`}
                        className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                        style={{ background: GRAD }}>
                        Get a Quote <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                  {i < services.length - 1 && <div className="mt-16 border-t border-navy/6" />}
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