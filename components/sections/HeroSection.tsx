'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import company from '@/data/company.json'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
)
const MessageCircle = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
)

// Each slide = one service with its real image
const SLIDES = [
  {
    bg:      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=75',
    bgAlt:   'Residential construction Coimbatore',
    image:   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    service: 'Residential Construction',
    tagline: 'Custom homes built to your vision',
    slug:    '/services/residential-construction',
  },
  {
    bg:      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=75',
    bgAlt:   'Villa construction Coimbatore',
    image:   'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80',
    service: 'Villa Construction',
    tagline: 'Luxury living, crafted to the finest detail',
    slug:    '/services/villa-construction',
  },
  {
    bg:      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=75',
    bgAlt:   'Turnkey construction Coimbatore',
    image:   'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80',
    service: 'Turnkey Construction',
    tagline: 'One contract. Zero hassle. Move-in ready.',
    slug:    '/services/turnkey-construction',
  },
  {
    bg:      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=75',
    bgAlt:   'Building renovation Coimbatore',
    image:   'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
    service: 'Building Renovation',
    tagline: 'Breathe new life into existing spaces',
    slug:    '/services/building-renovation',
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const co = company as any

const STATS = [
  { value: company.stats.projectsCompleted, label: 'Projects'  },
  { value: company.stats.yearsExperience,   label: 'Yrs Exp.'  },
  { value: company.warranty.structural,     label: 'Warranty'  },
  ...(company.stats.googleRating
    ? [{ value: `${company.stats.googleRating}★`, label: 'Rating' }]
    : [{ value: 'RERA', label: 'Registered' }]
  ),
]

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function HeroSection() {
  const [slide, setSlide] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval>>()

  const startTimer = () => {
    timer.current = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4500)
  }

  useEffect(() => {
    startTimer()
    const onVis = () => { if (document.hidden) clearInterval(timer.current); else startTimer() }
    document.addEventListener('visibilitychange', onVis)
    return () => { clearInterval(timer.current); document.removeEventListener('visibilitychange', onVis) }
  }, [])

  const current = SLIDES[slide]

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full bg-navy overflow-hidden flex flex-col"
        style={{ minHeight: '100svh' }}
        aria-label={`Construction company in ${company.serviceArea.city}`}
      >
        {/* Background — synced with slide */}
        <div className="absolute inset-0" aria-hidden="true">
          <AnimatePresence mode="sync">
            <m.div key={slide}
              initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0">
              <Image src={current.bg} alt={current.bgAlt}
                fill priority={slide === 0} sizes="100vw" quality={60}
                className="object-cover object-center" style={{ opacity: 0.18 }} />
            </m.div>
          </AnimatePresence>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(115deg,rgba(11,15,59,0.97) 0%,rgba(11,15,59,0.85) 50%,rgba(11,15,59,0.55) 100%)' }} />
          <div style={{ position:'absolute', bottom:0, left:0, width:'450px', height:'320px', pointerEvents:'none', background:'radial-gradient(ellipse at bottom left,rgba(255,106,26,0.12) 0%,transparent 70%)' }} />
          <div style={{ position:'absolute', top:0, right:0, width:'520px', height:'400px', pointerEvents:'none', background:'radial-gradient(ellipse at top right,rgba(122,46,255,0.14) 0%,transparent 65%)' }} />
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5" aria-label="Slideshow navigation">
          {SLIDES.map((_, i) => (
            <button key={i}
              onClick={() => { setSlide(i); clearInterval(timer.current); startTimer() }}
              aria-label={`Go to slide ${i + 1}`} aria-current={i === slide ? 'true' : undefined}
              className="rounded-full transition-all duration-300"
              style={{ width: i === slide ? '20px' : '6px', height: '6px', background: i === slide ? '#FF6A1A' : 'rgba(255,255,255,0.25)' }} />
          ))}
        </div>

        {/* Content */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-28 pb-20 lg:pt-32 lg:pb-16">

              {/* LEFT */}
              <div>
                <m.div {...fadeUp(0.05)}>
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse flex-shrink-0" />
                    <span className="font-montserrat text-orange text-xs font-bold uppercase tracking-[0.16em]">
                      {co.copy?.hero?.badge ?? 'Trusted Builders'} · {company.serviceArea.city}
                    </span>
                  </div>
                </m.div>

                <m.h1 {...fadeUp(0.10)}
                  className="font-playfair font-bold text-white leading-[1.1] mb-5"
                  style={{ fontSize: 'clamp(2.1rem,4.6vw,3.7rem)' }}>
                  Build Your Dream Home<br />in{' '}
                  <span style={{ backgroundImage: GRAD, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                    {company.serviceArea.city}
                  </span>
                </m.h1>

                <m.p {...fadeUp(0.17)} className="font-montserrat text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  {company.stats.yearsExperience} years · {company.stats.projectsCompleted} projects ·
                  premium house construction &amp; turnkey solutions.
                </m.p>

                <m.div {...fadeUp(0.23)} className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02] whitespace-nowrap"
                    style={{ background: GRAD, boxShadow: '0 8px 24px rgba(122,46,255,0.22)' }}>
                    Get Free Consultation <ArrowRight />
                  </Link>
                  <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-6 py-3.5 rounded-xl transition-opacity hover:opacity-90 whitespace-nowrap"
                    style={{ background: '#25D366' }}>
                    <MessageCircle /> WhatsApp Us
                  </a>
                </m.div>

                <m.div {...fadeUp(0.30)}>
                  <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
                    {STATS.map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <div className="font-playfair font-bold text-white text-sm sm:text-xl leading-none mb-0.5">{value}</div>
                        <div className="font-montserrat text-white/40 text-[9px] sm:text-[11px] uppercase tracking-wide">{label}</div>
                      </div>
                    ))}
                  </div>
                </m.div>
              </div>

              {/* RIGHT: Service image card — synced with slide */}
              <m.div {...fadeUp(0.28)}>
                <AnimatePresence mode="wait">
                  <m.div key={slide}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={current.slug} className="group block">

                      {/* Main service image */}
                      <div className="relative rounded-2xl overflow-hidden mb-3 shadow-2xl"
                        style={{ height: 'clamp(220px,35vw,340px)' }}>
                        <Image
                          src={current.image}
                          alt={current.service}
                          fill sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient overlay */}
                        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(11,15,59,0.88) 0%,rgba(11,15,59,0.15) 55%,transparent 100%)' }} />

                        {/* Service label bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <p className="font-montserrat text-orange text-[10px] font-bold uppercase tracking-[0.14em] mb-1">
                                Our Service
                              </p>
                              <p className="font-playfair font-bold text-white text-xl leading-tight mb-1">
                                {current.service}
                              </p>
                              <p className="font-montserrat text-white/55 text-xs">
                                {current.tagline}
                              </p>
                            </div>
                            {/* Arrow */}
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                              style={{ background: GRAD }}>
                              <ArrowRight />
                            </div>
                          </div>
                        </div>

                        {/* "Tap to explore" on mobile */}
                        <div className="absolute top-4 right-4">
                          <span className="font-montserrat text-[10px] text-white/60 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                            Tap to explore
                          </span>
                        </div>
                      </div>

                      {/* Slide indicator pills */}
                      <div className="flex gap-2">
                        {SLIDES.map((s, i) => (
                          <button
                            key={i}
                            onClick={e => { e.preventDefault(); setSlide(i); clearInterval(timer.current); startTimer() }}
                            className="flex-1 rounded-xl overflow-hidden relative transition-all duration-300"
                            style={{ height: i === slide ? '52px' : '44px', opacity: i === slide ? 1 : 0.45 }}
                            aria-label={s.service}
                          >
                            <Image src={s.image} alt={s.service}
                              fill className="object-cover" sizes="25vw" />
                            <div style={{ position:'absolute', inset:0, background: i === slide ? 'rgba(11,15,59,0.35)' : 'rgba(11,15,59,0.55)' }} />
                            {/* Active indicator line */}
                            {i === slide && (
                              <div className="absolute bottom-0 left-0 right-0 h-0.5"
                                style={{ background: GRAD }} />
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