'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import projectsData from '@/data/projects.json'
import company from '@/data/company.json'

const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))]

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"
            alt="Saanidhya Builders project portfolio" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Portfolio</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              {company.stats.projectsCompleted} completed projects across {company.serviceArea.city} and Tamil Nadu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`font-montserrat text-sm px-5 py-2 rounded-full border transition-all duration-200
                  ${active === cat
                    ? 'gradient-bg text-white border-transparent shadow-lg'
                    : 'bg-white text-navy/60 border-navy/15 hover:border-orange/40 hover:text-orange'
                  }`}>
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Cards */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div key={project.id} layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl overflow-hidden border border-navy/8 shadow-sm
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={project.image} alt={project.imageAlt}
                      fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="font-montserrat text-xs font-semibold text-white
                        gradient-bg px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-navy text-lg mb-1">{project.title}</h3>
                    <p className="font-montserrat text-sm text-navy/55 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between font-montserrat text-xs text-navy/40">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {project.completedYear}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-navy/6">
                      <span className="font-montserrat text-xs text-navy/40">{project.area}</span>
                      <span className="font-montserrat text-xs font-semibold text-orange">{project.value}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
