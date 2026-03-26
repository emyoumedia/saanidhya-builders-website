'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Home, Building2, Palette, LayoutDashboard, Key,
  Hammer, CheckCircle2, ArrowRight, HousePlus, Castle,
  Sofa, PaintBucket, ChevronDown, Wrench
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

/* ─── Smooth scroll helper ──────────────────────────────────────── */
function smoothScrollTo(el: HTMLElement, offset = 72) {
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/* ─── Mobile Accordion Card ─────────────────────────────────────── */
function AccordionCard({
  service,
  isOpen,
  onToggle,
}: {
  service: Service
  isOpen: boolean
  onToggle: () => void
}) {
  const Icon = iconMap[service.icon] || Home

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-orange/30 shadow-md bg-white'
          : 'border-navy/8 bg-white shadow-sm'
      }`}
    >
      {/* Header button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50"
        aria-expanded={isOpen}
      >
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300"
          style={{ background: isOpen ? GRAD : service.color }}
        >
          <Icon size={19} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-montserrat font-bold text-navy text-sm leading-snug">
            {service.title}
          </p>
          <p
            className={`font-montserrat text-xs mt-0.5 transition-colors duration-200 ${
              isOpen ? 'text-orange' : 'text-navy/40 truncate'
            }`}
          >
            {service.tagline}
          </p>
        </div>

        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-orange text-white' : 'bg-navy/6 text-navy/40'
          }`}
        >
          <ChevronDown
            size={14}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
              display: 'block',
            }}
          />
        </div>
      </button>

      {/*
        Pure CSS accordion using grid-template-rows: 0fr <-> 1fr.
        No JS, no height measurement, no rAF — React re-renders are safe.
        The inner div needs min-height:0 so it can collapse to 0fr.
      */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.65s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div style={{ overflow: 'hidden', minHeight: 0 }}>
        <div className="px-5 pb-6 border-t border-navy/6">
          {service.image && (
            <div className="relative w-full h-44 rounded-xl overflow-hidden mt-4 mb-4">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          )}

          <p className="font-montserrat text-navy/60 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          <ul className="space-y-2.5 mb-5">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 size={13} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-xs text-navy/65 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 font-montserrat font-bold text-xs
                       text-white px-5 py-2.5 rounded-xl hover:opacity-90 active:scale-95
                       transition-all duration-150"
            style={{ background: GRAD }}
          >
            Get a Quote <ArrowRight size={13} />
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Desktop Alternating Card ───────────────────────────────────── */
function DesktopCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || Home
  const isEven = index % 2 === 0

  return (
    <AnimatedSection>
      <div className="group grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* Image side */}
        <div className={!isEven ? 'lg:order-2' : ''}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: '380px' }}>
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

            {/* Floating tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: service.color }}
              >
                <Icon size={14} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-navy text-xs">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className={!isEven ? 'lg:order-1' : ''}>
          <span
            className="font-playfair font-bold text-navy/8 text-8xl leading-none select-none block mb-2"
            style={{ lineHeight: 1 }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <p
            className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] mb-2"
            style={{ color: service.color }}
          >
            {service.tagline}
          </p>

          <h2
            className="font-playfair font-bold text-navy leading-tight mb-4"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)' }}
          >
            {service.title}
          </h2>

          <p className="font-montserrat text-navy/58 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          <ul className="space-y-2.5 mb-7">
            {service.benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 py-2 px-3 rounded-xl bg-navy/[0.03] hover:bg-navy/[0.06] transition-colors duration-150"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: service.color + '22' }}
                >
                  <CheckCircle2 size={12} style={{ color: service.color }} />
                </div>
                <span className="font-montserrat text-sm text-navy/65">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            href={`/contact?service=${service.slug}`}
            className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white
                       px-6 py-3 rounded-xl hover:opacity-90 hover:gap-3 transition-all duration-200 shadow-md"
            style={{ background: GRAD }}
          >
            Get a Free Quote <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Divider */}
      {index < (servicesData as Service[]).length - 1 && (
        <div className="mt-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-navy/6" />
          <div className="w-1.5 h-1.5 rounded-full bg-navy/15" />
          <div className="flex-1 h-px bg-navy/6" />
        </div>
      )}
    </AnimatedSection>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */
/* --- Page --- */
export default function ServicesPage() {
  const services = servicesData as unknown as Service[]
  const [open, setOpen] = useState<string | null>(null)

  /**
   * Scroll to a service element with an rAF retry loop.
   * Desktop elements are always in the DOM so this resolves on the first frame.
   * Mobile may need a tick after accordion state updates.
   */
  const scrollToService = useCallback((id: string) => {
    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById(`service-${id}`)
      if (el) {
        smoothScrollTo(el, 80)
        return
      }
      if (++attempts < 20) requestAnimationFrame(tryScroll)
    }
    requestAnimationFrame(tryScroll)
  }, [])

  /**
   * Desktop: cards always visible, scroll immediately.
   * Mobile:  open accordion, wait for animation to finish (420ms), then scroll.
   */
  const openAndScroll = useCallback((id: string) => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches

    if (isDesktop) {
      scrollToService(id)
    } else {
      setOpen(id)
      // Wait for animation to finish before scrolling
      setTimeout(() => scrollToService(id), 680)
    }
  }, [scrollToService])

  const toggle = useCallback((id: string) => {
    setOpen((prev) => {
      if (prev === id) return null
      // Wait for any previously-open section to finish collapsing (650ms),
      // THEN scroll — so the layout has settled before we measure position.
      setTimeout(() => scrollToService(id), 680)
      return id
    })
  }, [scrollToService])

  // Handle hash / sessionStorage on mount + hash change
  useEffect(() => {
    const handleHash = () => {
      const storedId = sessionStorage.getItem('openServiceId')
      if (storedId) {
        sessionStorage.removeItem('openServiceId')
        openAndScroll(storedId)
        return
      }
      const hash = window.location.hash
      if (!hash) return
      const raw = hash.replace('#', '')
      const id = raw.startsWith('service-') ? raw.replace('service-', '') : raw
      openAndScroll(id)
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [openAndScroll])

  // Accordions only open on tap or navigation — no auto-open on scroll

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=75"
            alt={`Construction services in ${company.serviceArea.city}`}
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px)`,
            backgroundSize: '44px 44px',
          }}
        />

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-orange uppercase tracking-widest mb-5 px-4 py-2 rounded-full border border-orange/25 bg-orange/10">
              <Wrench size={12} /> What We Offer
            </span>
            <h1
              className="font-playfair font-bold text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.6rem)' }}
            >
              Construction{' '}
              <span className="gradient-text italic">Services</span>
            </h1>
            <p className="font-montserrat text-white/50 text-sm md:text-base max-w-md mx-auto mb-8">
              {services.length} expert services · {company.serviceArea.city}, Tamil Nadu
            </p>    
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* MOBILE: Accordion */}
          <div className="lg:hidden space-y-2.5">
            {services.map((service) => (
              <div key={service.id} id={`service-${service.id}`}>
                <AccordionCard
                  service={service}
                  isOpen={open === service.id}
                  onToggle={() => toggle(service.id)}
                />
              </div>
            ))}
          </div>

          {/* DESKTOP: Alternating */}
          <div className="hidden lg:block space-y-0">
            {services.map((service, i) => (
              <div key={service.id} id={`service-${service.id}`}>
                <DesktopCard service={service} index={i} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </>
  )
}