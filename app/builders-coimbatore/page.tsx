import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight, Clock, ShieldCheck, Award, Users } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company, localSeoData as localSeo } from '@/data'

const iconMap: Record<string, React.ElementType> = { Clock, ShieldCheck, Award, Users }

// ── Types ──────────────────────────────────────────────────────────────────
type Testimonial = {
  name: string
  rating: number
  text: string
  area: string
}

type Highlight = {
  icon: string
  stat: string
  label: string
  desc: string
}

// Null-safe stat resolver — never renders "null★"
const statValueMap = (key: string): string | null => {
  const map: Record<string, string | null> = {
    yearsExperience:   company.stats.yearsExperience,
    projectsCompleted: company.stats.projectsCompleted,
    happyClients:      company.stats.happyClients,
    googleRating:      company.stats.googleRating ? `${company.stats.googleRating}★` : null,
    warranty:          company.warranty.structural,
  }
  return map[key] ?? key
}

export const metadata: Metadata = {
  title: 'Builders in Coimbatore | Best Building Contractors | Saanidhya',
  description: `Top-rated builders in Coimbatore. ${company.name} — RERA registered, ${company.stats.projectsCompleted} projects, ${company.stats.yearsExperience} years experience. Residential & commercial builders in Coimbatore.`,
  keywords: [
    'builders in Coimbatore', 'best builders Coimbatore', 'building contractors Coimbatore',
    'reputed builders Coimbatore', 'top builders Coimbatore Tamil Nadu',
    'RERA registered builders Coimbatore', 'trusted builders Coimbatore',
  ],
  alternates: { canonical: `${company.website}/builders-coimbatore` },
  openGraph: {
    title: `Best Builders in Coimbatore | ${company.name}`,
    description: `Top-rated builders in Coimbatore. ${company.stats.projectsCompleted} projects, ${company.stats.yearsExperience} years experience. RERA registered. Free consultation.`,
    url: `${company.website}/builders-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Builders in Coimbatore' }],
  },
}

// Only include aggregateRating in schema when we have real data
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  description: `Builders in Coimbatore with ${company.stats.yearsExperience} years experience and ${company.stats.projectsCompleted} completed residential and commercial projects.`,
  url: company.website,
  telephone: company.contact.phone,
  ...(company.stats.googleRating && company.stats.reviewCount
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: company.stats.googleRating,
          reviewCount: company.stats.reviewCount,
          bestRating: '5',
        },
      }
    : {}),
}

// Filter highlights that have null stat values
const validHighlights = (localSeo.buildersCoimbatore.highlights as Highlight[]).filter(
  (h) => statValueMap(h.stat) !== null
)

const testimonials = localSeo.buildersCoimbatore.testimonials as Testimonial[]
const hasTestimonials = testimonials.length > 0

export default function BuildersCoimbatorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #7A2EFF 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            {company.serviceArea.city}, {company.serviceArea.state}
          </span>
          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Best Builders in <span className="gradient-text">Coimbatore</span>
          </h1>
          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {company.name} — {company.stats.yearsExperience} years of trust,{' '}
            {company.stats.projectsCompleted} projects delivered in {company.serviceArea.city}.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Free Consultation <ArrowRight size={16} />
            </Link>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {validHighlights.map((h) => {
              const Icon = iconMap[h.icon] || Award
              const value = statValueMap(h.stat)
              return (
                <div key={h.label} className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="font-playfair font-bold text-navy text-2xl mb-1">{value}</div>
                  <div className="font-montserrat font-semibold text-navy text-sm mb-2">{h.label}</div>
                  <p className="font-montserrat text-navy/50 text-xs leading-relaxed">{h.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-playfair font-bold text-navy text-3xl md:text-4xl mb-6">
            Why {company.name} is {company.serviceArea.city}&apos;s Most Trusted Builder
          </h2>
          <p className="font-montserrat text-navy/60 leading-relaxed mb-4">
            Since {company.founded}, {company.name} has been delivering homes, offices, and landmark buildings
            across {company.serviceArea.display}. Every project is backed by our full team of architects,
            structural engineers, and site managers.
          </p>
          <p className="font-montserrat text-navy/60 leading-relaxed mb-8">
            We are {company.certifications.join(', ')} — giving you complete assurance that your investment
            is safe with us.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {company.certifications.map((c) => (
              <span key={c} className="font-montserrat text-sm font-semibold text-orange border border-orange/30 px-4 py-2 rounded-xl bg-orange/5">
                ✓ {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {hasTestimonials ? (
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-playfair font-bold text-white text-center text-3xl mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white/8 border border-white/10 rounded-2xl p-6">
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-montserrat text-white/70 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="font-montserrat font-semibold text-white text-sm">{t.name}</p>
                    <p className="font-montserrat text-white/40 text-xs">{t.area}, {company.serviceArea.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-navy">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-playfair font-bold text-white text-2xl mb-3">See Our Work</h2>
            <p className="font-montserrat text-white/50 text-sm mb-6 max-w-md mx-auto">
              We&apos;re building our online presence. Browse our completed projects to see our quality firsthand.
            </p>
            <Link href="/projects" className="btn-primary">
              View Projects <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}