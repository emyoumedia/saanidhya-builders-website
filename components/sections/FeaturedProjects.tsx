'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const projects = [
  {
    title: 'Prestige Lakefront Villa',
    category: 'Residential',
    location: 'Saravanampatti, Coimbatore',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    size: 'large',
  },
  {
    title: 'Crystal Heights Tower',
    category: 'Commercial',
    location: 'Gandhipuram, Coimbatore',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    size: 'small',
  },
  {
    title: 'Green Valley Apartments',
    category: 'Residential',
    location: 'Peelamedu, Coimbatore',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    size: 'small',
  },
  {
    title: 'Meridian Business Park',
    category: 'Commercial',
    location: 'Avinashi Road, Coimbatore',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    size: 'large',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-cream" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Portfolio
            </span>
            <h2 id="projects-heading" className="section-title">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Link href="/projects" className="btn-primary self-start md:self-auto flex-shrink-0" aria-label="View all construction projects by Saanidhya Builders">
            View All Projects
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={i * 0.1}
              className={project.size === 'large' && i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}
            >
              <div className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
                style={{ height: project.size === 'large' && i === 0 ? '420px' : '300px' }}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category} project in ${project.location}`}
                  fill
                  sizes={project.size === 'large' && i === 0
                    ? '(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" aria-hidden="true" />

                <div className="absolute top-4 left-4">
                  <span className="font-montserrat text-xs font-semibold text-white px-3 py-1.5 rounded-full gradient-bg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair font-bold text-xl text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 font-montserrat text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <MapPin size={12} aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5 font-montserrat text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <Calendar size={12} aria-hidden="true" />
                      {project.year}
                    </span>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-0 min-w-0 w-fit"
                    aria-label={`View details of ${project.title}`}
                  >
                    View Project <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
