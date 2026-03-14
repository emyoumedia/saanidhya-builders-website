'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, Award, Users, Star, MessageCircle, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import company from '@/data/company.json'

const iconMap = { Building2, Award, Users, Star }

const stats = [
  { icon: 'Building2', value: company.stats.projectsCompleted,       label: 'Projects' },
  { icon: 'Award',     value: company.stats.yearsExperience,         label: 'Years' },
  { icon: 'Users',     value: company.stats.happyClients,            label: 'Clients' },
  { icon: 'Star',      value: company.stats.googleRating + '\u2605',  label: 'Rating' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-navy overflow-hidden flex flex-col"
      style={{ minHeight: '100vh' }}
      aria-label="Hero section"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="" fill sizes="100vw" priority quality={65}
          className="object-cover"
          style={{ opacity: 0.28 }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(135deg,rgba(11,15,59,0.96) 0%,rgba(11,15,59,0.80) 50%,rgba(11,15,59,0.94) 100%)',
        }}
      />

      {/* Blobs */}
      <div aria-hidden="true" className="absolute hidden md:block" style={{
        top: '20%', right: '1rem', width: '20rem', height: '20rem',
        borderRadius: '50%', filter: 'blur(90px)', opacity: 0.22,
        background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)', zIndex: 1, pointerEvents: 'none',
      }} />
      <div aria-hidden="true" className="absolute hidden md:block" style={{
        bottom: '25%', left: '-2rem', width: '14rem', height: '14rem',
        borderRadius: '50%', filter: 'blur(70px)', opacity: 0.18,
        background: '#7A2EFF', zIndex: 1, pointerEvents: 'none',
      }} />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center" style={{ zIndex: 2 }}>
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* 
            KEY FIX: use grid-cols-[55%_45%] so left takes more space and gap is controlled.
            gap-8 on lg instead of gap-16 — removes the dead centre gap.
          */}
          <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-10 items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">

            {/* ── LEFT ── */}
            <div className="flex flex-col min-w-0">

              {/* Badge */}
              <motion.div {...fadeUp(0.05)}>
                <span className="inline-flex items-center gap-2 font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-5 px-4 py-2 rounded-full border border-orange/30 bg-orange/10 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse flex-shrink-0" />
                  {company.serviceArea.city}&apos;s Trusted Builders
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...fadeUp(0.12)}
                className="font-playfair font-bold text-white leading-[1.1] mb-5 break-words"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
              >
                Build Your{' '}
                <span style={{
                  backgroundImage: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Dream</span>
                {' '}with{' '}
                <span className="whitespace-nowrap">{company.name}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                {...fadeUp(0.2)}
                className="font-montserrat text-white/60 text-sm sm:text-base leading-relaxed mb-7 max-w-xl"
              >
                {company.description}
              </motion.p>

              {/* CTA buttons — KEY FIX: "Our Work" now has a proper ghost border style */}
              <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary justify-center text-sm whitespace-nowrap">
                  Get Free Consultation <ArrowRight size={15} />
                </Link>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-montserrat font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white border border-white/20 hover:border-orange/50 hover:text-orange px-5 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap"
                >
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Play size={11} className="ml-0.5" />
                  </span>
                  Our Work
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div {...fadeUp(0.36)}>
                <div className="grid grid-cols-4 gap-3 pt-6 border-t border-white/10">
                  {stats.map((stat) => {
                    const Icon = iconMap[stat.icon as keyof typeof iconMap]
                    return (
                      <div key={stat.label} className="flex flex-col items-center text-center gap-1.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon size={15} className="text-white" aria-hidden="true" />
                        </div>
                        <span className="font-playfair font-bold text-white text-sm sm:text-xl leading-none">
                          {stat.value}
                        </span>
                        <span className="font-montserrat text-white/40 text-[9px] sm:text-xs leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div {...fadeUp(0.44)} className="flex flex-wrap gap-2 mt-5">
                {company.certifications.map((cert) => (
                  <span key={cert} className="font-montserrat text-[10px] sm:text-xs font-medium text-white/45 border border-white/10 px-2.5 py-1 rounded-full">
                    ✓ {cert}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — floating cards, desktop only ──
                KEY FIX: use w-full h-full relative container so cards position
                relative to the column, not the whole grid.
            */}
            <div className="hidden lg:block relative" style={{ height: '440px' }}>

              {/* Central project photo — centred in column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '260px', height: '320px',
                  borderRadius: '1.5rem', overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Saanidhya Builders residential project Coimbatore"
                  fill sizes="260px" className="object-cover"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top,rgba(11,15,59,0.88) 0%,transparent 55%)',
                }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <p className="font-playfair font-bold text-white text-sm">Heritage Residences</p>
                  <p className="font-montserrat text-white/50 text-xs">{company.serviceArea.city} · 2024</p>
                </div>
              </motion.div>

              {/* Rating card — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute top-0 right-0 rounded-2xl p-4 shadow-xl"
                style={{ width: '180px', background: 'rgba(11,15,59,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="font-montserrat font-semibold text-white text-xs">{company.stats.googleRating} Google Rating</p>
                <p className="font-montserrat text-white/40 text-[10px] mt-0.5">{company.stats.reviewCount}+ verified reviews</p>
              </motion.div>

              {/* Warranty card — middle left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute rounded-2xl p-4 shadow-xl"
                style={{ top: '50%', left: 0, transform: 'translateY(-50%)', width: '160px', background: 'rgba(11,15,59,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <p className="font-montserrat text-green-400 text-[10px] font-semibold mb-1">✓ WARRANTY</p>
                <p className="font-montserrat text-white text-xs font-semibold">{company.warranty.structural} structural</p>
                <p className="font-montserrat text-white/40 text-[10px] mt-0.5">{company.warranty.waterproofing} waterproofing</p>
              </motion.div>

              {/* Service area card — bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="absolute bottom-0 right-0 rounded-2xl p-4 shadow-xl"
                style={{ width: '180px', background: 'rgba(11,15,59,0.88)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <p className="font-montserrat text-orange text-[10px] font-semibold uppercase tracking-wider mb-1">Service Area</p>
                <p className="font-montserrat text-white text-xs font-semibold">{company.serviceArea.city}, {company.serviceArea.state}</p>
                <p className="font-montserrat text-white/40 text-[10px] mt-0.5">{company.stats.projectsCompleted} projects delivered</p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-5 sm:pb-7" style={{ zIndex: 2 }}>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-white/25"
        >
          <span className="font-montserrat text-[9px] tracking-[0.2em] uppercase">Scroll</span>
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
            <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}