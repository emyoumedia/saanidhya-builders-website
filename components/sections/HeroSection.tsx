'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import company from '@/data/company.json'

const SLIDES = [
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=75', alt: `Construction site ${company.serviceArea.city}` },
  { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=75', alt: `Luxury villa ${company.serviceArea.city}` },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=75', alt: `Modern building ${company.serviceArea.city}` },
]

const STATS = [
  { value: company.stats.projectsCompleted, label: 'Projects' },
  { value: company.stats.yearsExperience,   label: 'Yrs Exp.' },
  { value: company.stats.projectsOngoing,   label: 'Ongoing'  },
  { value: company.warranty.structural,     label: 'Warranty' },
]

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function HeroSection() {
  const [slide, setSlide] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval>>()

  const startTimer = () => {
    timer.current = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4500)
  }

  useEffect(() => {
    startTimer()
    const onVisibility = () => {
      if (document.hidden) clearInterval(timer.current)
      else startTimer()
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      clearInterval(timer.current)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const { hero } = company.copy

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full overflow-hidden flex flex-col"
        style={{ minHeight: '100svh', background: '#0B0F3B' }}
        aria-label={`${company.businessType} in ${company.serviceArea.city}`}
      >
        {/* Background slides */}
        <div className="absolute inset-0" aria-hidden="true">
          {SLIDES.map((s, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}>
              <Image src={s.src} alt={s.alt} fill priority={i === 0}
                sizes="100vw" quality={60}
                className="object-cover object-center"
                style={{ opacity: 0.18 }} />
            </div>
          ))}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(115deg,rgba(11,15,59,0.97) 0%,rgba(11,15,59,0.82) 60%,rgba(11,15,59,0.60) 100%)'
          }} />
        </div>

        {/* Content */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-24">

            {/* Badge */}
            <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse flex-shrink-0" />
                <span className="font-montserrat text-orange text-xs font-bold uppercase tracking-[0.16em]">
                  {hero.badge} · {company.serviceArea.city}
                </span>
              </div>
            </m.div>

            {/* H1 */}
            <m.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22,1,0.36,1] }}
              className="font-playfair font-bold text-white leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)' }}>
              {hero.headline}{' '}
              <span style={{ backgroundImage: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {company.serviceArea.city}
              </span>
            </m.h1>

            {/* Subheadline */}
            <m.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22,1,0.36,1] }}
              className="font-montserrat text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {company.stats.yearsExperience} years · {company.stats.projectsCompleted} projects · {company.description.split('.')[0].split('specialising')[1] ?? 'premium construction & turnkey solutions'}.
            </m.p>

            {/* CTA buttons */}
            <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22,1,0.36,1] }}
              className="flex flex-col sm:flex-row gap-3 mb-14">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-7 py-3.5 rounded-xl transition-transform hover:scale-[1.02] whitespace-nowrap"
                style={{ background: GRAD, boxShadow: '0 8px 24px rgba(122,46,255,0.22)' }}>
                {hero.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
              <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ background: '#25D366' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
                {hero.ctaSecondary}
              </a>
            </m.div>

            {/* Stats strip */}
            <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.30, ease: [0.22,1,0.36,1] }}
              className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-sm sm:max-w-md">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-playfair font-bold text-white text-lg sm:text-2xl leading-none">{value}</div>
                  <div className="font-montserrat text-white/40 text-[10px] sm:text-xs mt-1 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </m.div>

          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5" aria-label="Slideshow navigation">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === slide ? 'true' : undefined}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slide ? '20px' : '6px', height: '6px',
                background: i === slide ? '#FF6A1A' : 'rgba(255,255,255,0.25)',
              }} />
          ))}
        </div>
      </section>
    </LazyMotion>
  )
}