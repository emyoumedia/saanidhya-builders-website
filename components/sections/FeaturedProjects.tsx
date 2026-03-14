'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import projectsData from '@/data/projects.json'

export default function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured)

  return (
    <section className="py-24 bg-navy relative overflow-hidden" id="projects">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} />

      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                Our Work
              </span>
              <h2 className="font-playfair font-bold text-white"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}>
                Featured Projects
              </h2>
            </div>
            <Link href="/projects"
              className="flex items-center gap-2 font-montserrat text-sm font-semibold text-white/60
                hover:text-orange transition-colors flex-shrink-0">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ height: i === 0 ? '480px' : '360px' }}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-montserrat text-xs font-semibold text-white bg-white/15
                    backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {project.type}
                  </span>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair font-bold text-white text-xl mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center gap-1 font-montserrat text-xs text-white/60">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1 font-montserrat text-xs text-white/60">
                      <Calendar size={12} /> {project.completedYear}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag}
                        className="font-montserrat text-xs text-orange border border-orange/30
                          px-2.5 py-0.5 rounded-full bg-orange/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
