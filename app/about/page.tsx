import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { company as companyRaw, aboutData as aboutRaw, teamData } from '@/data'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const company = companyRaw as any

export const metadata: Metadata = {
  title: `About Us | ${company.name} – Construction Company ${company.serviceArea.city}`,
  description: `${company.shortDescription} Learn about our team, mission, and values.`,
  alternates: { canonical: `${company.website}/about` },
}

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck, Award, Clock, HeartHandshake,
}

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

// Initials from name
const initials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

type TeamMember = {
  name: string
  role: string
  shortRole: string
  bio: string
  responsibilities: string[]
  image: string | null
  imageAlt: string
  linkedin: string | null
  experience: string
}

type AboutValue = {
  icon: string
  title: string
  desc: string
}

type AboutData = {
  story: { heading: string; paragraphs: string[]; image: string; imageAlt: string }
  values: AboutValue[]
  mission: string
  vision: string
  heroImage: string
  previewImages: { main: string; mainAlt: string }
}

const aboutData = aboutRaw as unknown as AboutData

export default function AboutPage() {
  const team = teamData as unknown as TeamMember[]
  const values = aboutData.values

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={aboutData.heroImage}
            alt={`About ${company.name}`}
            fill className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: GRAD }} />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              About Us
            </span>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Building {company.serviceArea.city}&apos;s{' '}
              <span className="gradient-text">Future</span>
            </h1>
            <p className="font-montserrat text-white/55 text-base max-w-xl mx-auto leading-relaxed">
              {company.shortDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '460px' }}>
                <Image
                  src={aboutData.previewImages.main}
                  alt={aboutData.previewImages.mainAlt}
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Years badge */}
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

            <AnimatedSection direction="left">
              <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
                Our Story
              </span>
              <h2 className="font-playfair font-bold text-navy leading-[1.2] mb-5"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                {aboutData.story.heading}
              </h2>
              {aboutData.story.paragraphs.map((para, i) => (
                <p key={i} className="font-montserrat text-navy/60 leading-relaxed mb-4 text-sm sm:text-base">
                  {para}
                </p>
              ))}

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-navy/8">
                {[
                  { value: company.stats.projectsCompleted, label: 'Projects Done' },
                  { value: company.stats.projectsOngoing,   label: 'In Progress'  },
                  { value: company.warranty.structural,     label: 'Warranty'     },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-playfair font-bold text-navy text-2xl"
                      style={{ backgroundImage: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {value}
                    </div>
                    <div className="font-montserrat text-navy/45 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
                Our Leadership
              </span>
              <h2 className="font-playfair font-bold text-white leading-[1.2]"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                Two Heads. One Vision.
              </h2>
              <p className="font-montserrat text-white/45 text-sm mt-3 max-w-lg mx-auto">
                Our strength lies in a well-balanced leadership structure combining strategic management
                with hands-on execution expertise.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-orange/25 transition-colors duration-300 h-full">

                  {/* Avatar + name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-playfair font-bold text-white text-lg shadow-lg"
                      style={{ background: GRAD }}
                    >
                      {initials(member.name)}
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-white text-lg leading-tight">
                        {member.name}
                      </h3>
                      <p className="font-montserrat text-orange text-xs font-semibold mt-0.5">
                        {member.shortRole}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="font-montserrat text-white/55 text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <p className="font-montserrat text-white/30 text-[10px] uppercase tracking-widest mb-3">
                      Responsibilities
                    </p>
                    <ul className="space-y-1.5">
                      {member.responsibilities.map(r => (
                        <li key={r} className="flex items-center gap-2 font-montserrat text-xs text-white/60">
                          <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Together line */}
          <AnimatedSection>
            <div className="mt-8 text-center bg-white/4 border border-white/8 rounded-2xl px-8 py-6">
              <p className="font-montserrat text-white/60 text-sm leading-relaxed">
                Together, we ensure every project is handled with{' '}
                <span className="text-orange font-semibold">clear planning</span>,{' '}
                <span className="text-orange font-semibold">strong execution</span>, and{' '}
                <span className="text-orange font-semibold">complete accountability</span>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-cream rounded-2xl p-7 border border-navy/8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{ background: GRAD }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-playfair font-bold text-navy text-lg mb-3">Our Mission</h3>
              <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{aboutData.mission}</p>
            </div>
            <div className="bg-cream rounded-2xl p-7 border border-navy/8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{ background: GRAD }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-playfair font-bold text-navy text-lg mb-3">Our Vision</h3>
              <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{aboutData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
                Our Values
              </span>
              <h2 className="font-playfair font-bold text-white leading-[1.2]"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
                What Drives Us
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => {
              const Icon = iconMap[value.icon] || Award
              return (
                <AnimatedSection key={value.title} delay={i * 0.07}>
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-orange/25 transition-colors h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                      style={{ background: GRAD }}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-white text-base mb-2">{value.title}</h3>
                    <p className="font-montserrat text-white/50 text-xs leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-cream border-t border-navy/6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
            {[
              { label: 'Projects Completed', value: company.stats.projectsCompleted },
              { label: 'Currently Building',  value: company.stats.projectsOngoing   },
              { label: 'Years in Business',   value: company.stats.yearsExperience   },
              { label: 'Structural Warranty', value: company.warranty.structural     },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-5 border border-navy/8 shadow-sm">
                <div className="font-playfair font-bold text-3xl mb-1"
                  style={{ backgroundImage: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {value}
                </div>
                <div className="font-montserrat text-navy/50 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}