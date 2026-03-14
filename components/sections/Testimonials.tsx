'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import testimonialsData from '@/data/testimonials.json'
import company from '@/data/company.json'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonialsData.length) % testimonialsData.length)
  const next = () => setCurrent((c) => (c + 1) % testimonialsData.length)

  const t = testimonialsData[current]

  return (
    <section className="py-24 bg-cream relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: '#7A2EFF' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ background: '#FF6A1A' }} />

      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="section-title mb-2">What Our Clients Say</h2>
            <p className="font-montserrat text-navy/55">
              {company.stats.googleRating}★ on Google · {company.stats.reviewCount} verified reviews
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-navy/5 relative"
            >
              <Quote size={48} className="text-orange/15 absolute top-6 right-8" aria-hidden="true" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="font-montserrat text-navy/75 text-base md:text-lg leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange/30">
                    <Image src={t.image} alt={t.imageAlt} width={56} height={56}
                      className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-navy">{t.name}</p>
                    <p className="font-montserrat text-sm text-navy/50">
                      {t.projectType} · {t.area}, {t.city}
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="font-montserrat text-xs text-navy/40">Project Value</p>
                  <p className="font-montserrat font-semibold text-orange text-sm">{t.projectValue}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} aria-label="Previous testimonial"
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-navy/20 flex items-center justify-center text-navy/70 hover:border-orange/50 hover:text-orange transition-all duration-300">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-orange' : 'w-2 h-2 bg-navy/20 hover:bg-navy/40'
                  }`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial"
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-navy/20 flex items-center justify-center text-navy/70 hover:border-orange/50 hover:text-orange transition-all duration-300">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
