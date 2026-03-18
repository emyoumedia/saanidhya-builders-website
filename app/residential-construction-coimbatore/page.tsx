import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company, localSeoData as localSeo } from '@/data'

export const metadata: Metadata = {
  title: 'Commercial Construction in Coimbatore | Saanidhya Builders',
  description: `Leading commercial construction company in Coimbatore. Offices, warehouses, retail spaces, industrial buildings. On-time delivery, LEED options, dedicated project manager.`,
  keywords: [
    'commercial construction Coimbatore', 'commercial builders Coimbatore',
    'office construction Coimbatore', 'warehouse construction Coimbatore',
    'industrial construction Coimbatore', 'retail construction Coimbatore',
    'commercial building contractors Coimbatore',
  ],
  alternates: { canonical: `${company.website}/commercial-construction-coimbatore` },
  openGraph: {
    title: 'Commercial Construction in Coimbatore | Saanidhya Builders',
    description: `Expert commercial construction in ${company.serviceArea.city}. Offices, retail, warehouses — built on time, within budget.`,
    url: `${company.website}/commercial-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Commercial construction Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Construction in Coimbatore',
  description: `Commercial construction services in ${company.serviceArea.city} for offices, retail spaces, warehouses, industrial buildings and mixed-use developments.`,
  provider: {
    '@type': 'LocalBusiness',
    name: company.name,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
    telephone: company.contact.phone,
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'Commercial Construction',
}

export default function CommercialConstructionPage() {
  const { buildingTypes, features } = localSeo.commercialConstruction
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #FF6A1A 0%, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            Commercial Construction · {company.serviceArea.city}
          </span>
          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Commercial Construction <br /><span className="gradient-text">in Coimbatore</span>
          </h1>
          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {company.name} builds offices, retail spaces, warehouses, and industrial facilities
            across {company.serviceArea.display} — on time and within budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Quote <ArrowRight size={16} /></Link>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair font-bold text-navy text-3xl text-center mb-12">
            Commercial Projects We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {buildingTypes.map((bt) => (
              <div key={bt.title} className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={bt.img}
                    alt={`${bt.title} in ${company.serviceArea.city}`}
                    fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-navy text-lg mb-2">{bt.title}</h3>
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{bt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-playfair font-bold text-white text-3xl text-center mb-12">
            What&apos;s Included in Every Commercial Project
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4">
                <CheckCircle2 size={18} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-white/80 text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              Discuss Your Commercial Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-10 bg-cream border-t border-navy/8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-montserrat font-semibold text-navy text-sm">{company.name}</p>
            <p className="font-montserrat text-navy/50 text-xs">
              {company.serviceArea.display} · {company.hours.weekdays}: {company.hours.time}
            </p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${company.contact.phoneRaw}`}
              className="font-montserrat text-sm font-semibold text-navy border border-navy/20 px-4 py-2 rounded-xl hover:border-orange/50 hover:text-orange transition-colors">
              {company.contact.phone}
            </a>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="font-montserrat text-sm font-semibold text-white bg-green-500 px-4 py-2 rounded-xl hover:bg-green-600 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}