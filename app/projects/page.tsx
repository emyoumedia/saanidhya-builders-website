'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, ArrowRight, CheckCircle2, Hammer, Sparkles } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { projectsData, company } from '@/data'

type Project = {
  id: number
  title: string
  type: string
  category: string
  status: 'completed' | 'ongoing' | 'upcoming'
  location: string
  startedYear: string
  completedYear?: string
  description: string
  tags: string[]
  progressLabel: string
  progressPercent: number
  image: string | null
  imageAlt: string
  imageIsStock: boolean
}

const projects = projectsData as unknown as Project[]

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const progressColor = (pct: number) => {
  if (pct >= 75) return '#22c55e'
  if (pct >= 40) return '#FF6A1A'
  return '#7A2EFF'
}

/* ─── Completed Card ─────────────────────────────────────────── */
function CompletedCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-navy/6 h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-navy/5 flex-shrink-0">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy/5 to-navy/10">
              <span className="text-4xl opacity-30">🏠</span>
              <span className="font-montserrat text-xs text-navy/30 italic">Photo coming soon</span>
            </div>
          )}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-500 text-white font-montserrat text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            <CheckCircle2 size={11} /> Completed
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy font-montserrat text-xs font-semibold px-2.5 py-1 rounded-full">
            {project.type}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-playfair font-bold text-navy text-lg leading-tight mb-2 group-hover:text-orange transition-colors duration-200">
            {project.title}
          </h3>
          <p className="font-montserrat text-xs text-navy/55 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex items-center gap-4 font-montserrat text-xs text-navy/40 pt-3 border-t border-navy/6">
            <span className="flex items-center gap-1">
              <MapPin size={10} className="flex-shrink-0" /> {project.location}
            </span>
            {project.completedYear && (
              <span className="flex items-center gap-1">
                <Clock size={10} className="flex-shrink-0" /> {project.completedYear}
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Ongoing Card ───────────────────────────────────────────── */
function OngoingCard({ project, index }: { project: Project; index: number }) {
  const color = progressColor(project.progressPercent)
  return (
    <AnimatedSection delay={index * 0.07}>
      <div className="group bg-white rounded-2xl overflow-hidden border-2 border-orange/15 shadow-sm hover:shadow-lg hover:border-orange/35 transition-all duration-300 h-full flex flex-col">
        <div className="px-5 pt-5 pb-4 bg-gradient-to-br from-violet-50/60 to-orange-50/60 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 font-montserrat text-xs font-bold text-orange uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              Live Project
            </span>
            <span className="font-montserrat text-sm font-bold text-navy">
              {project.progressPercent}%
            </span>
          </div>
          <div className="h-2.5 bg-navy/8 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000"
              style={{ width: `${project.progressPercent}%`, background: color }}
            />
          </div>
          <p className="font-montserrat text-xs text-navy/45 italic mt-2">
            {project.progressLabel}
          </p>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-playfair font-bold text-navy text-lg leading-tight group-hover:text-orange transition-colors duration-200">
              {project.title}
            </h3>
            <span className="font-montserrat text-xs text-orange border border-orange/25 bg-orange/5 px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
              {project.type}
            </span>
          </div>
          <p className="font-montserrat text-xs text-navy/55 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex items-center gap-4 font-montserrat text-xs text-navy/40 pt-3 border-t border-navy/6">
            <span className="flex items-center gap-1"><MapPin size={10} /> {project.location}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> Since {project.startedYear}</span>
          </div>
          <p className="font-montserrat text-xs text-navy/25 mt-3 italic">
            📷 Photos added on completion
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Upcoming Card ──────────────────────────────────────────── */
function UpcomingCard({ project, index }: { project: Project; index: number }) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <div className="bg-white rounded-2xl border border-dashed border-navy/20 hover:border-navy/35 transition-colors duration-300 h-full flex flex-col overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-3 py-10 border-b border-dashed border-navy/10 bg-navy/[0.02] flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-navy/15 flex items-center justify-center text-3xl">
            🏗️
          </div>
          <span className="font-montserrat text-xs font-bold text-navy/30 uppercase tracking-widest">
            Starting Soon
          </span>
          <p className="font-montserrat text-xs text-navy/35 italic text-center px-8 leading-relaxed">
            {project.progressLabel}
          </p>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-playfair font-bold text-navy text-lg leading-tight">
              {project.title}
            </h3>
            <span className="font-montserrat text-xs text-navy/40 border border-navy/15 px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">
              {project.type}
            </span>
          </div>
          <p className="font-montserrat text-xs text-navy/55 leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex items-center gap-1 font-montserrat text-xs text-navy/40 mt-4 pt-3 border-t border-navy/6">
            <MapPin size={10} /> {project.location}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ─── Section Header ─────────────────────────────────────────── */
function SectionHeader({ dotClass, label, count }: { dotClass: string; label: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${dotClass}`} />
      <h2 className="font-playfair font-bold text-navy text-2xl md:text-3xl">{label}</h2>
      <span className="font-montserrat text-xs font-bold text-navy/30 bg-navy/6 px-2.5 py-1 rounded-full">
        {count}
      </span>
      <div className="flex-1 h-px bg-navy/8 ml-1 hidden sm:block" />
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const completed = projects.filter(p => p.status === 'completed')
  const ongoing   = projects.filter(p => p.status === 'ongoing')
  const upcoming  = projects.filter(p => p.status === 'upcoming')

  const stats = [
    { value: company.stats.projectsCompleted, label: 'Completed' },
    { value: company.stats.projectsOngoing,   label: 'Building Now' },
    { value: company.stats.yearsExperience,   label: 'Yrs Experience' },
    { value: company.stats.happyClients,      label: 'Happy Clients' },
  ]

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: '#7A2EFF' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: '#FF6A1A' }} />

        <div className="relative container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
              <span className="inline-flex items-center gap-2 font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-5 px-4 py-2 rounded-full border border-orange/25 bg-orange/10">
                <Hammer size={12} /> Our Work
              </span>
              <h1 className="font-playfair font-bold text-white mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.6rem)' }}>
                Projects That{' '}
                <span className="gradient-text italic">Speak</span>{' '}
                for Themselves
              </h1>
              <p className="font-montserrat text-white/55 text-base md:text-lg leading-relaxed">
                Every structure we build is a testament to our craft — documented from foundation to finish.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {stats.map((s, i) => (
                <div key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl px-3 py-4 text-center backdrop-blur-sm hover:bg-white/8 transition-colors duration-200">
                  <div className="font-playfair font-bold text-white text-3xl md:text-4xl leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="font-montserrat text-white/40 text-xs uppercase tracking-wider leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-16 md:space-y-20">

          {completed.length > 0 && (
            <AnimatedSection>
              <SectionHeader dotClass="bg-green-400" label="Completed Projects" count={completed.length} />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {completed.map((p, i) => <CompletedCard key={p.id} project={p} index={i} />)}
              </div>
            </AnimatedSection>
          )}

          {ongoing.length > 0 && (
            <AnimatedSection>
              <SectionHeader dotClass="bg-orange animate-pulse" label="Currently Building" count={ongoing.length} />
              <div className="grid sm:grid-cols-2 gap-5">
                {ongoing.map((p, i) => <OngoingCard key={p.id} project={p} index={i} />)}
              </div>
            </AnimatedSection>
          )}

          {upcoming.length > 0 && (
            <AnimatedSection>
              <SectionHeader dotClass="bg-violet-400" label="Starting Soon" count={upcoming.length} />
              <div className="grid sm:grid-cols-2 gap-5">
                {upcoming.map((p, i) => <UpcomingCard key={p.id} project={p} index={i} />)}
              </div>
            </AnimatedSection>
          )}

          {/* CTA */}
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0" style={{ background: GRAD }} />
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.2) 1px,transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative px-6 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-white/70 uppercase tracking-widest mb-3">
                    <Sparkles size={12} /> Your project next
                  </div>
                  <h3 className="font-playfair font-bold text-white text-2xl md:text-3xl leading-tight mb-3">
                    Ready to Build Something <span className="italic">Remarkable?</span>
                  </h3>
                  <p className="font-montserrat text-white/65 text-sm leading-relaxed max-w-md">
                    We document every project — real photos, real progress. Start with a free consultation today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm bg-white text-navy px-6 py-3 rounded-xl hover:bg-white/90 transition-colors duration-200 whitespace-nowrap">
                    Free Consultation <ArrowRight size={14} />
                  </Link>
                  <a href={company.contact.whatsappLink}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm bg-white/15 border border-white/25 text-white px-6 py-3 rounded-xl hover:bg-white/25 transition-colors duration-200 whitespace-nowrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTASection />
    </>
  )
}