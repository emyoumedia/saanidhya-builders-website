import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Star, ArrowRight, Building2, Home, Key, Palette, Hammer, Sofa } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import company from '@/data/company.json'
import localSeo from '@/data/localSeo.json'

const iconMap: Record<string, React.ElementType> = { Home, Building2, Key, Palette, Hammer, Sofa }

export const metadata: Metadata = {
  title: 'Construction Company in Coimbatore | Saanidhya Builders',
  description: `Looking for the best construction company in Coimbatore? ${company.name} offers premium residential & commercial construction, architectural design and turnkey projects. ${company.stats.yearsExperience} years, ${company.stats.projectsCompleted} projects.`,
  keywords: [
    'construction company in Coimbatore', 'best construction company Coimbatore',
    'top builders Coimbatore', 'construction company Coimbatore Tamil Nadu',
    'Coimbatore construction company', 'building contractors Coimbatore',
    'construction services Coimbatore',
  ],
  alternates: { canonical: `${company.website}/construction-company-coimbatore` },
  openGraph: {
    title: `Best Construction Company in Coimbatore | ${company.name}`,
    description: `Premium residential & commercial construction services in ${company.serviceArea.city}. ${company.stats.projectsCompleted} projects, ${company.stats.yearsExperience} years experience.`,
    url: `${company.website}/construction-company-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: `${company.name} - Construction Company Coimbatore` }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${company.website}/construction-company-coimbatore`,
  name: company.name,
  description: company.description,
  url: company.website,
  telephone: company.contact.phone,
  email: company.contact.email,
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: company.stats.googleRating,
    reviewCount: company.stats.reviewCount,
    bestRating: '5',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: company.hours.opens,
    closes: company.hours.closes,
  }],
  areaServed: { '@type': 'City', name: company.serviceArea.city },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localSeo.constructionCompany.faq.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
}

export default function ConstructionCompanyCoimbatorePage() {
  const { services, areas, faq } = localSeo.constructionCompany
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #7A2EFF 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            {company.serviceArea.city}, {company.serviceArea.state}
          </span>
          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            #1 Construction Company <br /><span className="gradient-text">in Coimbatore</span>
          </h1>
          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-6">
            {company.description}
          </p>
          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { v: company.stats.projectsCompleted, l: 'Projects' },
              { v: company.stats.yearsExperience,   l: 'Years' },
              { v: company.stats.happyClients,       l: 'Clients' },
              { v: company.stats.googleRating + '★', l: 'Rating' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-playfair font-bold text-white text-3xl">{s.v}</div>
                <div className="font-montserrat text-white/40 text-xs uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Free Consultation <ArrowRight size={16} /></Link>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair font-bold text-navy text-3xl text-center mb-4">Our Services in Coimbatore</h2>
          <p className="font-montserrat text-navy/55 text-center mb-12 max-w-xl mx-auto">
            Complete construction solutions — from design to delivery — across {company.serviceArea.display}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Home
              return (
                <Link key={s.title} href={s.slug}
                  className="group flex items-center gap-4 bg-white rounded-2xl p-5 border border-navy/5 shadow-sm hover:shadow-md hover:border-orange/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="font-montserrat font-semibold text-navy text-sm group-hover:text-orange transition-colors">{s.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair font-bold text-white text-2xl mb-3">Areas We Serve in {company.serviceArea.city}</h2>
          <p className="font-montserrat text-white/50 text-sm mb-8">We build across all major areas of Coimbatore</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((a) => (
              <span key={a} className="font-montserrat text-sm text-white/70 border border-white/15 px-4 py-2 rounded-xl bg-white/5">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-cream border-b border-navy/8">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-6">
          {company.certifications.map((c) => (
            <div key={c} className="flex items-center gap-2 font-montserrat text-sm font-semibold text-navy">
              <CheckCircle2 size={16} className="text-orange" />
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-playfair font-bold text-navy text-3xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faq.map((q) => (
              <div key={q.question} className="bg-cream rounded-2xl p-6 border border-navy/5">
                <h3 className="font-montserrat font-bold text-navy text-sm mb-2">{q.question}</h3>
                <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
