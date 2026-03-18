import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { projectsData as projectsRaw, company as companyRaw } from '@/data'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const company = companyRaw as any

type Project = {
  id: number
  title: string
  type: string
  category: string
  status: 'ongoing' | 'upcoming' | 'completed'
  location: string
  startedYear?: string
  image: string | null
  description: string
  progressLabel?: string
  progressPercent?: number
}

const projects = projectsRaw as unknown as Project[]
const ongoing = projects.filter(p => p.status === 'ongoing' || p.status === 'upcoming')

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const progressColor = (pct: number) => {
  if (pct >= 75) return '#22c55e'
  if (pct >= 40) return '#FF6A1A'
  return '#7A2EFF'
}

export default function FeaturedProjects() {
  const { projects } = company.copy

  // If no ongoing projects and no completed — show stat-only teaser
  if (ongoing.length === 0) {
    return (
      <section className="py-20 bg-cream" id="projects" aria-labelledby="projects-heading">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {projects.badge}
            </span>
            <h2 id="projects-heading"
              className="font-playfair font-bold text-navy leading-[1.2] mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              {company.stats.projectsCompleted} Projects Completed
            </h2>
            <p className="font-montserrat text-navy/55 text-sm mb-6 max-w-sm mx-auto">
              We're documenting our work as we go. Real project photos coming soon.
            </p>
            <Link href="/projects"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              style={{ background: GRAD }}>
              {projects.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-cream" id="projects" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <AnimatedSection>
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-3">
                {projects.badge}
              </span>
              <h2 id="projects-heading"
                className="font-playfair font-bold text-navy leading-[1.2]"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                Currently Building
              </h2>
            </div>
            {/* Stat pill */}
            <div className="flex-shrink-0 text-right">
              <div className="font-playfair font-bold text-navy text-2xl leading-none">{company.stats.projectsCompleted}</div>
              <div className="font-montserrat text-navy/40 text-xs mt-0.5">projects done</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Ongoing project cards — max 2 on homepage */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {ongoing.slice(0, 2).map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <div className={`bg-white rounded-2xl overflow-hidden border-2 shadow-sm h-full ${
                project.status === 'upcoming'
                  ? 'border-dashed border-navy/15'
                  : 'border-orange/20'
              }`}>
                {/* Progress visual */}
                <div className="px-6 pt-6 pb-4"
                  style={{ background: project.status === 'upcoming'
                    ? 'rgba(11,15,59,0.02)'
                    : 'linear-gradient(135deg,rgba(122,46,255,0.04),rgba(255,106,26,0.06))' }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {project.status === 'ongoing' && (
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      )}
                      <span className="font-montserrat text-xs font-bold uppercase tracking-wider"
                        style={{ color: project.status === 'upcoming' ? 'rgba(11,15,59,0.35)' : '#FF6A1A' }}>
                        {project.status === 'upcoming' ? 'Starting Soon' : 'In Progress'}
                      </span>
                    </div>
                    {project.progressPercent !== undefined && project.status === 'ongoing' && (
                      <span className="font-montserrat text-xs font-bold text-navy/50">
                        {project.progressPercent}%
                      </span>
                    )}
                  </div>
                  {/* Progress bar — ongoing only */}
                  {project.status === 'ongoing' && project.progressPercent !== undefined && (
                    <div className="h-1.5 bg-navy/8 rounded-full overflow-hidden mb-2">
                      <div className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${project.progressPercent}%`, background: progressColor(project.progressPercent) }} />
                    </div>
                  )}
                  <p className="font-montserrat text-xs text-navy/40 italic mt-1">
                    {project.progressLabel}
                  </p>
                </div>

                {/* Info */}
                <div className="px-6 pb-5 pt-4">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-playfair font-bold text-navy text-base">{project.title}</h3>
                    <span className="font-montserrat text-[10px] text-orange border border-orange/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      {project.type}
                    </span>
                  </div>
                  <p className="font-montserrat text-xs text-navy/50 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View all link */}
        <AnimatedSection>
          <div className="text-center">
            <Link href="/projects"
              className="inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-navy/50 hover:text-orange transition-colors duration-200">
              {projects.ctaLabel}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}