'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import company from '@/data/company.json'

/* ── Inline SVG icons — zero lucide bundle cost ── */
const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
)
const MessageCircle = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
)
const StarFilled = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#FBBF24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
)
const ShieldCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const StatBuilding = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h1M14 9h1M9 14h1M14 14h1"/></svg>
)
const StatAward = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="9" r="6"/><path d="M9 17l-2 5 5-2 5 2-2-5"/></svg>
)
const StatUsers = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87"/></svg>
)
const StatStar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
)

/* ── Banner images — construction + residential ── */
const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=75',
    alt: 'Construction site Coimbatore',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=75',
    alt: 'Luxury villa Coimbatore',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=75',
    alt: 'Modern building construction',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=75',
    alt: 'Premium residential project',
  },
]

const stats = [
  { icon: StatBuilding, value: company.stats.projectsCompleted, label: 'Projects' },
  { icon: StatAward,    value: company.stats.yearsExperience,   label: 'Yrs Exp.' },
  { icon: StatUsers,    value: company.stats.happyClients,      label: 'Clients' },
  { icon: StatStar,     value: company.stats.googleRating + '★', label: 'Rating' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.50, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/* Module-level styles — identical SSR + client, no hydration mismatch */
const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'
const OVERLAY: React.CSSProperties = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(115deg,rgba(11,15,59,0.97) 0%,rgba(11,15,59,0.88) 55%,rgba(11,15,59,0.65) 100%)',
}
const GLOW_O: React.CSSProperties = {
  position: 'absolute', bottom: 0, left: 0,
  width: '450px', height: '320px', pointerEvents: 'none',
  background: 'radial-gradient(ellipse at bottom left,rgba(255,106,26,0.12) 0%,transparent 70%)',
}
const GLOW_P: React.CSSProperties = {
  position: 'absolute', top: 0, right: 0,
  width: '520px', height: '400px', pointerEvents: 'none',
  background: 'radial-gradient(ellipse at top right,rgba(122,46,255,0.14) 0%,transparent 65%)',
}
const CARD: React.CSSProperties = {
  background: 'rgba(11,15,59,0.92)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255,255,255,0.10)',
}
const CARD_PURPLE: React.CSSProperties = {
  background: 'rgba(11,15,59,0.92)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(122,46,255,0.28)',
}

export default function HeroSection() {
  const [slide, setSlide] = useState(0)

  /* Auto-advance every 4.5s — starts after mount so SSR = slide 0 always */
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full bg-navy overflow-hidden flex flex-col"
        style={{ minHeight: '100svh' }}
        aria-label={`House construction services in ${company.serviceArea.city}`}
      >

        {/* ── Sliding background banner ── */}
        <div className="absolute inset-0" aria-hidden="true">
          <AnimatePresence mode="sync">
            <m.div
              key={slide}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={SLIDES[slide].src}
                alt={SLIDES[slide].alt}
                fill
                priority={slide === 0}
                sizes="100vw"
                quality={60}
                className="object-cover object-center"
                style={{ opacity: 0.22 }}
              />
            </m.div>
          </AnimatePresence>

          {/* Fixed overlays — never re-render */}
          <div style={OVERLAY} />
          <div style={GLOW_O} />
          <div style={GLOW_P} />
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-1.5" aria-hidden="true">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slide ? '20px' : '6px',
                height: '6px',
                background: i === slide ? '#FF6A1A' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>

        {/* ── Content ── */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center pt-28 pb-24 lg:pt-32 lg:pb-20">

              {/* ══ LEFT ══ */}
              <div>

                <m.div {...fadeUp(0.05)}>
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange/35 bg-orange/10 w-fit">
                    <span className="w-2 h-2 rounded-full bg-orange animate-pulse flex-shrink-0" />
                    <span className="font-montserrat text-orange text-xs font-bold uppercase tracking-[0.16em]">
                      Trusted Builders in {company.serviceArea.city}
                    </span>
                  </div>
                </m.div>

                <m.h1 {...fadeUp(0.10)}
                  className="font-playfair font-bold text-white leading-[1.1] mb-6"
                  style={{ fontSize: 'clamp(2.1rem,4.6vw,3.7rem)' }}
                >
                  Best Construction<br />
                  Company in{' '}
                  <span style={{
                    backgroundImage: GRAD,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {company.serviceArea.city}
                  </span>
                </m.h1>

                <m.p {...fadeUp(0.17)}
                  className="font-montserrat text-white/60 text-sm sm:text-base leading-relaxed mb-7 max-w-md"
                >
                  {company.name} delivers premium house construction, villa building &amp; turnkey
                  solutions with {company.stats.yearsExperience} years of expertise in {company.serviceArea.city}.
                </m.p>

                <m.div {...fadeUp(0.23)} className="flex flex-wrap gap-2 mb-8">
                  {company.certifications.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1.5 font-montserrat text-xs text-white/55 border border-white/12 px-3 py-1.5 rounded-full">
                      <ShieldCheck /> {c}
                    </span>
                  ))}
                </m.div>

                {/* Buttons — mobile: full-width stack, sm+: row */}
                <m.div {...fadeUp(0.29)} className="flex flex-col sm:flex-row gap-3 mb-12">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3.5 rounded-xl transition-transform hover:scale-[1.02] whitespace-nowrap"
                    style={{ background: GRAD, boxShadow: '0 8px 24px rgba(122,46,255,0.22)' }}
                  >
                    Get Free Consultation <ArrowRight />
                  </Link>
                  <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
                    style={{ background: '#25D366' }}
                  >
                    <MessageCircle /> WhatsApp Us
                  </a>
                  <Link href="/projects"
                    className="inline-flex items-center justify-center font-montserrat font-semibold text-sm text-white/65 hover:text-white px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.18)' }}
                  >
                    View Projects
                  </Link>
                </m.div>

                {/* Stats */}
                <m.div {...fadeUp(0.36)}>
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-6 border-t border-white/10">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="flex flex-col items-center text-center gap-1">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5 shadow-lg"
                          style={{ background: GRAD }}>
                          <Icon />
                        </div>
                        <span className="font-playfair font-bold text-white text-sm sm:text-xl leading-none">{value}</span>
                        <span className="font-montserrat text-white/40 text-[9px] sm:text-[11px] leading-tight">{label}</span>
                      </div>
                    ))}
                  </div>
                </m.div>
              </div>

              {/* ══ RIGHT — desktop only, fully contained ══ */}
              <m.div {...fadeUp(0.28)} className="hidden lg:block">
                {/*
                  Self-contained 460×500 box.
                  Photo: inset from left by 72px so left-edge cards don't overlap it.
                  Cards on left strip (0→72px), project label inside photo bottom.
                  Nothing bleeds outside this box.
                */}
                <div className="relative" style={{ width: '100%', height: '500px' }}>

                  {/* Main villa photo */}
                  <div className="absolute rounded-2xl overflow-hidden"
                    style={{
                      top: 0, left: 72, right: 0, bottom: 56,
                      boxShadow: '0 28px 56px rgba(0,0,0,0.50), 0 0 0 1px rgba(255,255,255,0.07)',
                    }}>
                    <Image
                      src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
                      alt="Luxury villa by Saanidhya Builders"
                      fill sizes="40vw" className="object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(to top,rgba(11,15,59,0.85) 0%,transparent 55%)',
                    }} />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-playfair font-bold text-white text-sm">Heritage Residences</p>
                      <p className="font-montserrat text-white/50 text-xs mt-0.5">{company.serviceArea.city} · 2024</p>
                    </div>
                  </div>

                  {/* Warranty card — top-left strip, fully inside wrapper */}
                  <div className="absolute rounded-2xl p-4 shadow-2xl"
                    style={{ top: 16, left: 0, width: 164, ...CARD_PURPLE }}>
                    <p className="font-montserrat text-green-400 text-[11px] font-bold uppercase tracking-wide mb-1.5">✓ Warranty</p>
                    <p className="font-montserrat text-white text-xs font-semibold">{company.warranty.structural} structural</p>
                    <p className="font-montserrat text-white/45 text-[11px] mt-0.5">{company.warranty.waterproofing} waterproofing</p>
                  </div>

                  {/* Rating card — bottom-left, inside wrapper */}
                  <div className="absolute rounded-2xl p-4 shadow-2xl"
                    style={{ bottom: 0, left: 0, width: 164, ...CARD }}>
                    <div className="flex gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => <StarFilled key={i} />)}
                    </div>
                    <p className="font-montserrat font-bold text-white text-sm">{company.stats.googleRating} / 5.0</p>
                    <p className="font-montserrat text-white/45 text-[11px] mt-0.5">{company.stats.reviewCount}+ Google Reviews</p>
                  </div>

                </div>
              </m.div>

            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
          <span className="font-montserrat text-white/25 text-[9px] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-8 overflow-hidden">
            <div className="w-full h-full animate-bounce"
              style={{ background: 'linear-gradient(to bottom,transparent,rgba(255,255,255,0.4),transparent)' }} />
          </div>
        </div>

      </section>
    </LazyMotion>
  )
}