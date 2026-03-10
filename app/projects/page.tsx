'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'

const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Renovation']

const projects = [
  { title: 'Prestige Lakefront Villa', category: 'Residential', location: 'Saravanampatti', year: '2024', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', desc: '4500 sq.ft luxury villa with modern amenities and landscaped garden.' },
  { title: 'Crystal Heights Tower', category: 'Commercial', location: 'Gandhipuram', year: '2023', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', desc: '12-storey commercial complex with retail and office spaces.' },
  { title: 'Green Valley Apartments', category: 'Residential', location: 'Peelamedu', year: '2024', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', desc: '120-unit premium residential complex with clubhouse.' },
  { title: 'The Executive Suite', category: 'Interior Design', location: 'RS Puram', year: '2024', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80', desc: 'Luxury interior design for a 3500 sq.ft penthouse apartment.' },
  { title: 'Meridian Business Park', category: 'Commercial', location: 'Avinashi Road', year: '2023', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', desc: 'Premium IT park with 200,000 sq.ft of flexible workspace.' },
  { title: 'Heritage Home Revival', category: 'Renovation', location: 'Ramnagar', year: '2023', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', desc: 'Complete restoration of a 1970s bungalow with modern upgrades.' },
  { title: 'Skyline Residences', category: 'Residential', location: 'Vadavalli', year: '2022', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', desc: 'Gated community with 80 independent villas.' },
  { title: 'Retail Excellence Mall', category: 'Commercial', location: 'Hopes College', year: '2022', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', desc: 'Modern retail complex with 50 shops and food court.' },
  { title: 'Modern Farmhouse', category: 'Residential', location: 'Coimbatore Rural', year: '2024', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', desc: 'Contemporary farmhouse with sustainable design features.' },
  { title: 'Office Transformation', category: 'Interior Design', location: 'Tidel Park', year: '2023', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80', desc: 'Complete interior redesign of a 10,000 sq.ft corporate office.' },
  { title: 'Classic Home Upgrade', category: 'Renovation', location: 'Singanallur', year: '2023', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', desc: 'Kitchen and bathroom renovation with contemporary fixtures.' },
  { title: 'Lakeview Towers', category: 'Residential', location: 'Sulur', year: '2022', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', desc: 'High-rise residential tower with panoramic lake views.' },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80" alt="Projects portfolio" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Portfolio</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              500+ completed projects across Coimbatore and Tamil Nadu. Each one a testament to quality and craftsmanship.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-montserrat text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'gradient-bg text-white shadow-lg scale-105'
                    : 'bg-white text-navy/60 hover:text-navy border border-navy/10 hover:border-orange/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <div className="group bg-white rounded-2xl overflow-hidden card-hover shadow-sm border border-navy/5">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="font-montserrat text-xs font-semibold text-white px-3 py-1.5 rounded-full gradient-bg">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair font-bold text-navy text-lg mb-2 group-hover:text-orange transition-colors">{project.title}</h3>
                      <p className="font-montserrat text-xs text-navy/50 mb-3 leading-relaxed">{project.desc}</p>
                      <div className="flex items-center justify-between text-xs text-navy/40">
                        <span className="flex items-center gap-1"><MapPin size={10} />{project.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={10} />{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
