'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner, Saravanampatti',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Saanidhya Builders transformed my dream into reality. The team was professional, punctual, and the quality of construction is outstanding. Our villa was delivered ahead of schedule with zero compromises on quality.',
  },
  {
    name: 'Priya Subramaniam',
    role: 'Business Owner, Coimbatore',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'We hired Saanidhya Builders for our commercial office complex and the results exceeded our expectations. Their architectural design team created a stunning workspace that perfectly reflects our brand identity.',
  },
  {
    name: 'Arjun Nair',
    role: 'Investor, Peelamedu',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: 'I have worked with multiple builders in Coimbatore but Saanidhya stands apart. Their transparency in pricing, quality of materials, and attention to detail is unmatched. Highly recommend for any construction project.',
  },
  {
    name: 'Meena Krishnamurthy',
    role: 'Homeowner, Gandhipuram',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    text: 'The renovation of our ancestral home was handled with incredible care and craftsmanship. The team respected our vision while bringing in modern design elements. The result is breathtaking.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: '#7A2EFF' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: '#FF6A1A' }} />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="font-montserrat text-white/60 max-w-2xl mx-auto">
            Over 1,200 happy clients across Coimbatore trust Saanidhya Builders for their
            construction dreams.
          </p>
        </AnimatedSection>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-20">
                <Quote size={60} className="text-orange" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-orange text-orange" />
                ))}
              </div>

              {/* Text */}
              <p className="font-montserrat text-lg text-white/80 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange/30">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-playfair font-bold text-white">{testimonials[current].name}</div>
                  <div className="font-montserrat text-sm text-white/50">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-orange/50 hover:text-orange transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-3 gradient-bg' : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-orange/50 hover:text-orange transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
