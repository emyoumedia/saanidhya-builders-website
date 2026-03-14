import type { Metadata } from 'next'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import testimonialsData from '@/data/testimonials.json'
import company from '@/data/company.json'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/testimonials',
  },
  title: 'Client Testimonials – Saanidhya Builders Coimbatore',
  description:
    'Read what our 1200+ happy clients say about Saanidhya Builders. Client reviews and testimonials for construction services in Coimbatore.',
}



export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #7A2EFF, transparent 60%), radial-gradient(circle at 70% 50%, #FF6A1A, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Client Stories</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Real stories from real clients who trusted Saanidhya Builders with their construction dreams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream border-b border-navy/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
        { value: company.stats.happyClients, label: "Happy Clients" },
        { value: company.stats.googleRating + "/5", label: "Average Rating" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "100%", label: "Recommend Us" },
      ].map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} className="text-center">
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
              <AnimatedSection key={t.name} delay={i * 0.08} className="break-inside-avoid">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hover:border-orange/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={14} className="fill-orange text-orange" />
                      ))}
                    </div>
                    <Quote size={24} className="text-orange/20" />
                  </div>
                  <p className="font-montserrat text-sm text-navy/70 leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="border-t border-navy/5 pt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-playfair font-bold text-navy text-sm">{t.name}</div>
                      <div className="font-montserrat text-xs text-navy/50">{t.role}</div>
                      <div className="font-montserrat text-xs text-orange mt-0.5">{t.project}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
