import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { testimonialsData, company } from '@/data'

export const metadata: Metadata = {
  alternates: {
    canonical: `${company.website}/testimonials`,
  },
  title: 'Client Testimonials – Saanidhya Builders Coimbatore',
  description:
    `Read what clients say about ${company.name}. Testimonials for construction services in ${company.serviceArea.city}.`,
}

const hasReviews = testimonialsData.length > 0

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 30% 50%, #7A2EFF, transparent 60%), radial-gradient(circle at 70% 50%, #FF6A1A, transparent 60%)' }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Client Stories
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Real stories from real clients who trusted {company.name} with their construction dreams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {hasReviews ? (
        <>
          {/* Stats — only shown when we have real review data */}
          <section className="py-16 bg-cream border-b border-navy/10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: company.stats.projectsCompleted, label: 'Projects Completed' },
                  { value: company.stats.googleRating ? `${company.stats.googleRating}/5` : null, label: 'Google Rating' },
                  { value: '100%', label: 'On-Time Delivery' },
                  { value: company.stats.yearsExperience, label: 'Years in Business' },
                ]
                  .filter((s) => s.value !== null)
                  .map(({ value, label }) => (
                    <AnimatedSection key={label} className="text-center">
                      <div className="font-playfair font-bold text-4xl gradient-text mb-2">{value}</div>
                      <div className="font-montserrat text-sm text-navy/50">{label}</div>
                    </AnimatedSection>
                  ))}
              </div>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-24 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {testimonialsData.map((t, i) => (
                  <AnimatedSection key={t.id} delay={i * 0.08} className="break-inside-avoid">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hover:border-orange/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                          {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} size={14} className="fill-orange text-orange" />
                          ))}
                        </div>
                        <Quote size={24} className="text-orange/20" aria-hidden="true" />
                      </div>
                      <blockquote className="font-montserrat text-sm text-navy/70 leading-relaxed mb-5 italic">
                        "{t.text}"
                      </blockquote>
                      <div className="border-t border-navy/5 pt-4 flex items-center gap-3">
                        {/* Avatar — initials fallback if no image */}
                        {t.image ? (
                          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={t.image}
                              alt={t.imageAlt ?? t.name}
                              width={48} height={48}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-montserrat font-bold text-white text-sm"
                            style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }}
                            aria-hidden="true"
                          >
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <div className="font-playfair font-bold text-navy text-sm">{t.name}</div>
                          <div className="font-montserrat text-xs text-navy/50">{t.projectType}</div>
                          {t.area && (
                            <div className="font-montserrat text-xs text-orange mt-0.5">
                              {t.area}, {t.city}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* No reviews yet — honest trust-builder instead */
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-10 border border-navy/8 shadow-sm">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }}
                >
                  <Star size={28} className="text-white" />
                </div>
                <h2 className="font-playfair font-bold text-navy text-2xl mb-3">
                  We're just getting started online
                </h2>
                <p className="font-montserrat text-navy/55 text-sm leading-relaxed mb-2">
                  {company.name} has completed <strong>{company.stats.projectsCompleted} projects</strong> across {company.serviceArea.city}.
                  Our reputation has been built entirely on word-of-mouth and referrals.
                </p>
                <p className="font-montserrat text-navy/55 text-sm leading-relaxed mb-8">
                  We're now building our online presence. If you've worked with us,
                  your review would mean the world to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={company.contact.googleReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }}
                  >
                    Leave Us a Google Review
                  </a>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-navy/60 hover:text-orange px-6 py-3 rounded-xl border border-navy/15 hover:border-orange/30 transition-all"
                  >
                    See Our Work Instead →
                  </Link>
                </div>
              </div>

              {/* Honest stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: company.stats.projectsCompleted, label: 'Projects Completed' },
                  { value: company.stats.yearsExperience,   label: 'Years in Business'  },
                  { value: company.warranty.structural,      label: 'Structural Warranty' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-navy/8 text-center">
                    <div className="font-playfair font-bold text-2xl gradient-text mb-1">{value}</div>
                    <div className="font-montserrat text-xs text-navy/50">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}