import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import company from '@/data/company.json'
import localSeo from '@/data/localSeo.json'

export const metadata: Metadata = {
  title: 'Residential Construction in Coimbatore | Home Builders | Saanidhya',
  description: `Top residential construction company in Coimbatore. Custom homes, luxury villas, 2BHK & 3BHK apartments. Vastu-compliant, bank-approved, ${company.warranty.structural} structural warranty.`,
  keywords: [
    'residential construction Coimbatore', 'home builders Coimbatore',
    'house construction Coimbatore', 'villa construction Coimbatore',
    'custom home builders Coimbatore', '2BHK 3BHK construction Coimbatore',
    'residential builders Tamil Nadu',
  ],
  alternates: { canonical: `${company.website}/residential-construction-coimbatore` },
  openGraph: {
    title: 'Residential Construction in Coimbatore | Saanidhya Builders',
    description: `Build your dream home in ${company.serviceArea.city}. Custom homes, villas, apartments — premium quality, transparent pricing. Free consultation!`,
    url: `${company.website}/residential-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Residential construction in Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Construction in Coimbatore',
  description: `Custom residential construction services in ${company.serviceArea.city} including houses, villas, apartments, and luxury homes. RERA registered, Vastu compliant, bank approved.`,
  provider: {
    '@type': 'LocalBusiness',
    name: company.name,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
    telephone: company.contact.phone,
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'Residential Construction',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localSeo.residentialConstruction.faq.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
}

export default function ResidentialConstructionPage() {
  const { projectTypes, features, faq } = localSeo.residentialConstruction
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #7A2EFF 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            Residential Construction · {company.serviceArea.city}
          </span>
          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Residential Construction <br /><span className="gradient-text">in Coimbatore</span>
          </h1>
          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Build your dream home in {company.serviceArea.city} with {company.name} — {company.stats.yearsExperience} of experience,
            {company.stats.projectsCompleted} homes delivered, {company.stats.googleRating}★ rated.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Free Estimate <ArrowRight size={16} /></Link>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair font-bold text-navy text-3xl text-center mb-12">
            What We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((pt) => (
              <div key={pt.title} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image src={pt.img} alt={`${pt.title} in ${company.serviceArea.city}`}
                    fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-navy text-lg mb-2">{pt.title}</h3>
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-playfair font-bold text-white text-3xl text-center mb-4">
            Every Home Comes With
          </h2>
          <p className="font-montserrat text-white/50 text-center mb-12">
            Structural warranty: {company.warranty.structural} · Plumbing & electrical: {company.warranty.plumbingElectrical} · Waterproofing: {company.warranty.waterproofing}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4">
                <CheckCircle2 size={18} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-white/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">Start Your Home Project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-playfair font-bold text-navy text-3xl text-center mb-12">
            Frequently Asked Questions
          </h2>
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
