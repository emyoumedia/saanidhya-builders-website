import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { company as companyRaw, aboutData as aboutRaw } from '@/data'

type AboutData = {
  story: { heading: string }
  previewImages: { main: string; mainAlt: string }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const company = companyRaw as any
const aboutData = aboutRaw as unknown as AboutData

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function AboutPreview() {
  const { about } = company.copy

  return (
    <section className="py-20 bg-cream" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image + years badge */}
          <AnimatedSection direction="right">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px' }}>
              <Image
                src={aboutData.previewImages.main}
                alt={aboutData.previewImages.mainAlt}
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-navy rounded-xl px-5 py-3 flex items-center gap-3">
                <span
                  className="font-playfair font-bold text-2xl leading-none"
                  style={{ backgroundImage: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {company.stats.yearsExperience}
                </span>
                <span className="font-montserrat text-white/65 text-xs uppercase tracking-wider leading-snug">
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content — real tagline + 1 sentence */}
          <AnimatedSection direction="left">
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {about.badge}
            </span>
            <h2
              id="about-heading"
              className="font-playfair font-bold text-navy leading-[1.2] mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}
            >
              {aboutData.story.heading}
            </h2>
            {/* Real company description — short version */}
            <p className="font-montserrat text-navy/60 leading-relaxed mb-4 text-sm sm:text-base">
              {company.shortDescription}
            </p>
            {/* Leadership names — key trust signal */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {[
                { name: company.leadership.business.name, role: company.leadership.business.title },
                { name: company.leadership.execution.name, role: company.leadership.execution.title },
              ].map(({ name, role }) => (
                <div key={name} className="flex items-center gap-3 bg-navy/4 border border-navy/8 rounded-xl px-4 py-3 flex-1">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-playfair font-bold text-white text-sm"
                    style={{ background: GRAD }}
                  >
                    {name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-navy text-xs">{name}</p>
                    <p className="font-montserrat text-navy/45 text-[10px] leading-snug">{role.split('&')[0].trim()}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: GRAD }}
            >
              {about.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}