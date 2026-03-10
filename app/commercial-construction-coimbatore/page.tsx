import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Building2, ArrowRight, Phone } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

const BASE = 'https://www.saanidhyabuilders.com'

export const metadata: Metadata = {
  title: 'Commercial Construction in Coimbatore | Saanidhya Builders',
  description:
    'Leading commercial construction company in Coimbatore. Offices, warehouses, retail spaces, industrial buildings. On-time delivery, LEED options, dedicated project manager. Call now!',
  keywords: [
    'commercial construction Coimbatore',
    'commercial builders Coimbatore',
    'office construction Coimbatore',
    'warehouse construction Coimbatore',
    'industrial construction Coimbatore',
    'retail construction Coimbatore',
    'commercial building contractors Coimbatore',
  ],
  alternates: { canonical: `${BASE}/commercial-construction-coimbatore` },
  openGraph: {
    title: 'Commercial Construction in Coimbatore | Saanidhya Builders',
    description: 'Expert commercial construction in Coimbatore. Offices, retail, warehouses — built on time, within budget. Get a free quote.',
    url: `${BASE}/commercial-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Commercial construction Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Construction in Coimbatore',
  description: 'Commercial construction services in Coimbatore for offices, retail spaces, warehouses, industrial buildings and mixed-use developments.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Saanidhya Builders',
    address: { '@type': 'PostalAddress', addressLocality: 'Coimbatore', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    telephone: '+91-98765-43210',
  },
  areaServed: { '@type': 'City', name: 'Coimbatore' },
  serviceType: 'Commercial Construction',
}

const buildingTypes = [
  { title: 'Office Buildings', desc: 'Modern office complexes with open floor plans, IT infrastructure, energy-efficient systems, and LEED certification options.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' },
  { title: 'Retail & Showrooms', desc: 'High-impact retail spaces designed to attract footfall, with optimal product display, lighting, and customer flow.', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80' },
  { title: 'Warehouses & Industrial', desc: 'Functional, structurally robust warehouses and manufacturing facilities built to industrial specifications.', img: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=600&q=80' },
]

const features = [
  'Dedicated project manager from day one',
  'Compliant with NBC, BIS, and local DTCP regulations',
  'LEED-certified construction options available',
  'Smart building systems integration',
  'Fire safety and electrical compliance',
  'Transparent progress reporting',
  'On-time delivery guarantee',
  'Post-completion maintenance support',
]

export default function CommercialConstructionPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 60%, #FF6A1A 0%, transparent 50%)',
        }} />
        <div className="relative container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 text-sm font-montserrat mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">Commercial Construction Coimbatore</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30 bg-orange/10 mb-5">
              <Building2 size={14} className="text-orange" />
              <span className="font-montserrat text-sm text-orange font-medium">Commercial Construction Experts</span>
            </div>
            <h1 className="font-playfair font-bold text-white mb-5"
              style={{ fontSize: 'clamp(1.9rem,4.5vw,3.2rem)', lineHeight: 1.1 }}>
              Commercial Construction <br />
              <span className="gradient-text">in Coimbatore</span>
            </h1>
            <p className="font-montserrat text-white/70 text-lg mb-8 leading-relaxed max-w-2xl">
              From IT parks to industrial warehouses, Saanidhya Builders delivers world-class commercial
              structures in Coimbatore that are functional, compliant, and built to last.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get Free Quote <ArrowRight size={16} /></Link>
              <a href="tel:+919876543210" className="btn-secondary"><Phone size={15} /> Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-navy" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
              Commercial Projects We Build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {buildingTypes.map(({ title, desc, img }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5">
                <div className="relative h-52">
                  <Image src={img} alt={`${title} in Coimbatore`} fill className="object-cover" loading="lazy" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair font-bold text-navy text-lg mb-2">{title}</h3>
                  <p className="font-montserrat text-sm text-navy/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="font-playfair font-bold text-navy text-center mb-8"
            style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
            What's Included in Every Commercial Project
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-cream p-4 rounded-xl border border-navy/5">
                <CheckCircle2 size={15} className="text-orange flex-shrink-0" />
                <span className="font-montserrat text-sm text-navy/75">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-cream border-t border-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href:'/construction-company-coimbatore',     label:'Construction Company Coimbatore' },
              { href:'/residential-construction-coimbatore', label:'Residential Construction' },
              { href:'/construction-cost/coimbatore',        label:'Construction Cost Coimbatore' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-montserrat text-sm px-4 py-2 rounded-full border border-navy/15
                  text-navy/60 hover:border-orange/50 hover:text-orange transition-all">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
