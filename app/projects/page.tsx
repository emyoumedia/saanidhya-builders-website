'use client'

import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { projectsData, company } from '@/data'

type Project = {
  id: number
  title: string
  type: string
  category: string
  status: 'ongoing' | 'upcoming'
  location: string
  startedYear: string
  description: string
  tags: string[]
  progressLabel: string
  progressPercent: number
}

const projects = projectsData as unknown as Project[]

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const progressColor = (pct: number) => {
  if (pct >= 75) return '#22c55e'
  if (pct >= 40) return '#FF6A1A'
  return '#7A2EFF'
}

export default function ProjectsPage() {
  const ongoing  = projects.filter(p => p.status === 'ongoing')
  const upcoming = projects.filter(p => p.status === 'upcoming')

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 30% 50%, #7A2EFF, transparent 60%), radial-gradient(circle at 70% 50%, #FF6A1A, transparent 60%)' }} />

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-xl mx-auto mb-10">
              We let our work speak for itself. Real projects, real progress — documented as we build.
            </p>

            {/* Honest stat strip — just the number */}
            <div className="inline-flex flex-wrap justify-center gap-10 bg-white/5 border border-white/10 rounded-2xl px-10 py-6">
              <div className="text-center">
                <div className="font-playfair font-bold text-white text-4xl mb-1">
                  {company.stats.projectsCompleted}
                </div>
                <div className="font-montserrat text-white/45 text-xs uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="text-center">
                <div className="font-playfair font-bold text-white text-4xl mb-1">
                  {company.stats.projectsOngoing}
                </div>
                <div className="font-montserrat text-white/45 text-xs uppercase tracking-wider">
                  Currently Building
                </div>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="text-center">
                <div className="font-playfair font-bold text-white text-4xl mb-1">
                  {company.stats.yearsExperience}
                </div>
                <div className="font-montserrat text-white/45 text-xs uppercase tracking-wider">
                  Years in Business
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {/* Currently Building */}
          {ongoing.length > 0 && (
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <h2 className="font-playfair font-bold text-navy text-2xl">Currently Building</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-16">
                {ongoing.map((project, i) => (
                  <AnimatedSection key={project.id} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl overflow-hidden border-2 border-orange/20 shadow-sm h-full">
                      {/* Progress visual */}
                      <div className="px-6 pt-6 pb-4"
                        style={{ background: 'linear-gradient(135deg,rgba(122,46,255,0.04),rgba(255,106,26,0.06))' }}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-wider">
                            In Progress
                          </span>
                          <span className="font-montserrat text-xs font-bold text-navy/60">
                            {project.progressPercent}%
                          </span>
                        </div>
                        {/* Progress bar */}
                        <div className="h-2 bg-navy/8 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${project.progressPercent}%`,
                              background: progressColor(project.progressPercent),
                            }}
                          />
                        </div>
                        <p className="font-montserrat text-xs text-navy/45 italic mt-2">
                          {project.progressLabel}
                        </p>
                      </div>

                      {/* Card content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-playfair font-bold text-navy text-base">{project.title}</h3>
                          <span className="font-montserrat text-xs text-orange border border-orange/25 px-2 py-0.5 rounded-full flex-shrink-0">
                            {project.type}
                          </span>
                        </div>
                        <p className="font-montserrat text-xs text-navy/55 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4 font-montserrat text-xs text-navy/40">
                          <span className="flex items-center gap-1">
                            <MapPin size={10} /> {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={10} /> Started {project.startedYear}
                          </span>
                        </div>
                        <p className="font-montserrat text-xs text-navy/30 mt-4 pt-3 border-t border-navy/6 italic">
                          📷 Real photos added on completion
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Starting Soon */}
          {upcoming.length > 0 && (
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 flex-shrink-0" />
                <h2 className="font-playfair font-bold text-navy text-2xl">Starting Soon</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-16">
                {upcoming.map((project, i) => (
                  <AnimatedSection key={project.id} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl border border-dashed border-navy/20 shadow-sm h-full">
                      {/* Icon area */}
                      <div className="flex flex-col items-center justify-center gap-2 py-8 border-b border-dashed border-navy/10"
                        style={{ background: 'rgba(11,15,59,0.02)' }}>
                        <div className="w-14 h-14 rounded-full border-2 border-dashed border-navy/15 flex items-center justify-center text-3xl">
                          🏗️
                        </div>
                        <span className="font-montserrat text-xs font-bold text-navy/35 uppercase tracking-wider">
                          Starting Soon
                        </span>
                        <p className="font-montserrat text-xs text-navy/30 italic text-center px-6">
                          {project.progressLabel}
                        </p>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-playfair font-bold text-navy text-base">{project.title}</h3>
                          <span className="font-montserrat text-xs text-navy/40 border border-navy/15 px-2 py-0.5 rounded-full flex-shrink-0">
                            {project.type}
                          </span>
                        </div>
                        <p className="font-montserrat text-xs text-navy/55 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-1 font-montserrat text-xs text-navy/40">
                          <MapPin size={10} /> {project.location}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Future projects CTA */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 text-center"
              style={{ background: 'linear-gradient(135deg,rgba(122,46,255,0.06),rgba(255,106,26,0.08))', border: '1px solid rgba(122,46,255,0.12)' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ background: GRAD }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 className="font-playfair font-bold text-navy text-xl mb-2">
                Your Project Could Be Next
              </h3>
              <p className="font-montserrat text-navy/55 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                We document every project we build going forward — real photos, real progress.
                Start your project with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: GRAD }}>
                  Start Your Project <ArrowRight size={14} />
                </Link>
                <a href={company.contact.whatsappLink}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: '#25D366' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTASection />
    </>
  )
}