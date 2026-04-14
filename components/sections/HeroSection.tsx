'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { company, servicesData } from '@/data'

// ─── Icons ───────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)
const MessageCircle = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
  </svg>
)

// ─── Slide setup (no shuffle — eliminates client re-render on load) ───────────
const MAX_SLIDES = 3

const featuredServices = servicesData.filter((s: any) => s.featured)
const baseServices = featuredServices.length ? featuredServices : servicesData
const sorted = [...baseServices].sort((a: any, b: any) => (a.priority ?? 999) - (b.priority ?? 999))

export const SLIDES = sorted.slice(0, MAX_SLIDES).map((s: any) => ({
  bg: s.image,          // ✅ use image as-is, no forced w=1920
  bgAlt: s.imageAlt,
  image: s.image,
  service: s.title,
  tagline: s.tagline,
  slug: `/services`,
  serviceId: s.id,
}))


export const HERO_LCP_IMAGE: string = SLIDES[0]?.bg ?? ''

// ─── Stats ────────────────────────────────────────────────────────────────────
const co = company as any

const STATS = [
  { value: company.stats.projectsCompleted, label: 'Projects' },
  { value: `${company.stats.leadExperience}`, label: 'Years Expertise' },
  { value: company.warranty.structural, label: 'Warranty' },
  ...(company.stats.googleRating
    ? [{ value: `${company.stats.googleRating}★`, label: 'Rating' }]
    : []),
]

// ─── Design tokens ────────────────────────────────────────────────────────────
const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
})

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [slide, setSlide] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval>>()

  // ✅ No shuffleArray — avoids client re-render / layout recalc on mount
  const startTimer = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4500)
  }

  useEffect(() => {
    startTimer()
    const onVis = () => {
      if (document.hidden) clearInterval(timer.current)
      else startTimer()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      clearInterval(timer.current)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  const current = SLIDES[slide]

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full bg-navy overflow-hidden flex flex-col"
        style={{ minHeight: '100svh' }}
        aria-label={`Construction company in ${company.serviceArea.city}`}
      >
        {/* ── Background ──────────────────────────────────────────────────── */}
        <div className="absolute inset-0" aria-hidden="true">

       {/* ✅ Slide 0: plain div, no animation, no opacity:0 — LCP sees it immediately */}
            {slide === 0 && (
              <div className="absolute inset-0" style={{ opacity: 0.10 }}>
                <Image
                  src={SLIDES[0].bg}
                  alt={SLIDES[0].bgAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                  quality={45}
                  className="object-cover object-center"
                />
              </div>
            )}

            {/* Animated transitions for slides 1, 2, ... */}
            <AnimatePresence mode="sync">
              {slide > 0 && (
                <m.div
                  key={slide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.10 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.bg}
                    alt={current.bgAlt}
                    fill
                    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                    quality={45}
                    className="object-cover object-center"
                  />
                </m.div>
              )}
            </AnimatePresence>

          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(11,15,59,0.92) 0%,rgba(11,15,59,0.75) 50%,rgba(11,15,59,0.55) 100%)' }} />
          {/* Accent glows — kept but won't affect LCP */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '450px', height: '320px', pointerEvents: 'none', background: 'radial-gradient(ellipse at bottom left,rgba(255,106,26,0.12) 0%,transparent 70%)' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: '520px', height: '400px', pointerEvents: 'none', background: 'radial-gradient(ellipse at top right,rgba(122,46,255,0.14) 0%,transparent 65%)' }} />
        </div>

        {/* ── Slide dots ──────────────────────────────────────────────────── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5" aria-label="Slideshow navigation">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setSlide(i); startTimer() }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === slide ? 'true' : undefined}
              className="rounded-full transition-all duration-300"
              style={{ width: i === slide ? '20px' : '6px', height: '6px', background: i === slide ? '#FF6A1A' : 'rgba(255,255,255,0.25)' }}
            />
          ))}
        </div>

        {/* ── Content ─────────────────────────────────────────────────────── */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-28 pb-20 lg:pt-32 lg:pb-16">

              {/* LEFT ──────────────────────────────────────────────────────── */}
              <div>
                {/* Badge */}
                <m.div {...fadeUp(0.05)}>
                  <div
                    className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full w-fit"
                    style={{ border: '1px solid rgba(255,106,26,0.3)', background: 'rgba(255,106,26,0.10)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: '#FF6A1A' }} />
                    <span className="font-montserrat text-xs font-bold uppercase tracking-[0.16em]" style={{ color: '#FF6A1A' }}>
                      {co.copy?.hero?.badge ?? 'Trusted Builders'} · {company.serviceArea.city}
                    </span>
                  </div>
                </m.div>

                {/* Heading */}
                <m.h1
                  {...fadeUp(0.10)}
                  className="font-playfair font-bold text-white leading-[1.1] mb-5"
                  style={{ fontSize: 'clamp(2.1rem,4.6vw,3.7rem)' }}
                >
                  Build Your Dream Home<br />in{' '}
                  <span style={{ backgroundImage: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {company.serviceArea.city}
                  </span>
                </m.h1>

                {/* Subtext */}
                <m.p
                  {...fadeUp(0.17)}
                  className="font-montserrat text-sm sm:text-base leading-relaxed mb-8 max-w-md"
                  style={{ color: 'rgba(255,255,255,0.60)' }}
                >
                  Homes designed with care, built to last.
                </m.p>

                {/* CTA Buttons */}
                <m.div {...fadeUp(0.23)} className="flex flex-col sm:flex-row gap-3 mb-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02] whitespace-nowrap"
                    style={{ background: GRAD, boxShadow: '0 8px 24px rgba(122,46,255,0.22)' }}
                  >
                    Get Free Consultation <ArrowRight />
                  </Link>
                  <a
                    href={company.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-6 py-3.5 rounded-xl transition-opacity hover:opacity-90 whitespace-nowrap"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle /> WhatsApp Us
                  </a>
                </m.div>

                {/* Stats */}
                <m.div {...fadeUp(0.30)}>
                  <div
                    className="grid gap-3 pt-6"
                    style={{
                      gridTemplateColumns: `repeat(${STATS.length}, minmax(0, 1fr))`,
                      borderTop: '1px solid rgba(255,255,255,0.10)',
                    }}
                  >
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <div className="font-playfair font-bold text-white text-sm sm:text-xl leading-none mb-0.5">
                          {value}
                        </div>
                        <div
                          className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-wide"
                          style={{ color: 'rgba(255,255,255,0.40)' }}
                        >
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </m.div>
              </div>

              {/* RIGHT — Service image card ─────────────────────────────── */}
              <m.div {...fadeUp(0.28)}>
                <AnimatePresence mode="wait">
                  <m.div
                    key={slide}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={current.slug}
                      className="group block"
                      onClick={() => sessionStorage.setItem('openServiceId', current.serviceId)}
                    >
                      {/* Main image */}
                      <div
                        className="relative rounded-2xl overflow-hidden mb-3 shadow-2xl"
                        style={{ height: 'clamp(220px,35vw,340px)' }}
                      >
                        {/*
                          ✅ FIX 4 — service card image: NOT priority (only bg gets it),
                          proper responsive sizes, quality 55 (visible image, so slightly
                          higher than bg).
                        */}
                        <Image
                          src={current.image}
                          alt={current.service}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          quality={55}
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(11,15,59,0.88) 0%,rgba(11,15,59,0.15) 55%,transparent 100%)' }} />

                        {/* Service label */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <p className="font-montserrat text-[10px] font-bold uppercase tracking-[0.14em] mb-1" style={{ color: '#FF6A1A' }}>
                                Our Service
                              </p>
                              <p className="font-playfair font-bold text-white text-xl leading-tight mb-1">
                                {current.service}
                              </p>
                              <p className="font-montserrat text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                {current.tagline}
                              </p>
                            </div>
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                              style={{ background: GRAD }}
                            >
                              <ArrowRight />
                            </div>
                          </div>
                        </div>

                        {/* Tap to explore */}
                        <div className="absolute top-4 right-4">
                          <span
                            className="font-montserrat text-[10px] bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full"
                            style={{ color: 'rgba(255,255,255,0.60)', border: '1px solid rgba(255,255,255,0.10)' }}
                          >
                            Tap to explore
                          </span>
                        </div>
                      </div>

                      {/* Slide thumbnails — lazy, low quality: not LCP-critical */}
                      <div className="flex gap-2">
                        {SLIDES.map((s, i) => (
                          <button
                            key={i}
                            onClick={e => { e.preventDefault(); setSlide(i); startTimer() }}
                            className="flex-1 rounded-xl overflow-hidden relative transition-all duration-300"
                            style={{ height: i === slide ? '52px' : '44px', opacity: i === slide ? 1 : 0.45 }}
                            aria-label={s.service}
                          >
                            <Image
                              src={s.image}
                              alt={s.service}
                              fill
                              sizes="25vw"
                              loading="lazy"
                              quality={35}       // ✅ thumbnails: tiny, nobody cares
                              className="object-cover"
                            />
                            <div style={{ position: 'absolute', inset: 0, background: i === slide ? 'rgba(11,15,59,0.35)' : 'rgba(11,15,59,0.55)' }} />
                            {i === slide && (
                              <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: GRAD }} />
                            )}
                          </button>
                        ))}
                      </div>
                    </Link>
                  </m.div>
                </AnimatePresence>
              </m.div>

            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}