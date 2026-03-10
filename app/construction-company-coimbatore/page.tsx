import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Star, MapPin, Phone, ArrowRight, Building2, Home, Award, Users, Clock, ShieldCheck } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

const BASE = 'https://www.saanidhyabuilders.com'

export const metadata: Metadata = {
  title: 'Construction Company in Coimbatore | Saanidhya Builders',
  description:
    'Looking for the best construction company in Coimbatore? Saanidhya Builders offers premium residential & commercial construction, architectural design and turnkey projects. 15+ years, 500+ projects. Call now!',
  keywords: [
    'construction company in Coimbatore',
    'best construction company Coimbatore',
    'top builders Coimbatore',
    'construction company Coimbatore Tamil Nadu',
    'Coimbatore construction company',
    'building contractors Coimbatore',
    'construction services Coimbatore',
  ],
  alternates: { canonical: `${BASE}/construction-company-coimbatore` },
  openGraph: {
    title: 'Best Construction Company in Coimbatore | Saanidhya Builders',
    description: 'Premium residential & commercial construction services in Coimbatore. 500+ projects, 15+ years experience. Get a free consultation today.',
    url: `${BASE}/construction-company-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Saanidhya Builders - Construction Company Coimbatore' }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE}/construction-company-coimbatore`,
  name: 'Saanidhya Builders',
  description: 'Best construction company in Coimbatore offering residential construction, commercial construction, architectural design and turnkey construction services across Tamil Nadu.',
  url: BASE,
  telephone: '+91-98765-43210',
  email: 'info@saanidhyabuilders.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42, Avinashi Road',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641018',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 11.0168, longitude: 76.9558 },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '214', bestRating: '5' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '09:00', closes: '18:00',
  }],
  hasMap: 'https://maps.google.com/?q=Coimbatore,Tamil+Nadu',
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'City', name: 'Tirupur' },
    { '@type': 'City', name: 'Erode' },
    { '@type': 'City', name: 'Salem' },
  ],
  serviceType: [
    'Residential Construction',
    'Commercial Construction',
    'Architectural Design',
    'Turnkey Construction',
    'Renovation & Remodeling',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is the best construction company in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saanidhya Builders is consistently rated among the top construction companies in Coimbatore, with 15+ years of experience, 500+ completed projects, and a 4.9-star client rating. We specialize in residential and commercial construction, architectural design, and turnkey projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a house in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'House construction cost in Coimbatore typically ranges from ₹1,800 to ₹3,500 per sq.ft depending on specifications. A basic finish starts at ₹1,800/sq.ft, standard at ₹2,200/sq.ft, and premium at ₹3,000+/sq.ft. Contact Saanidhya Builders for a detailed free estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas in Coimbatore does Saanidhya Builders serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saanidhya Builders serves all areas in Coimbatore including Peelamedu, Saibaba Colony, RS Puram, Gandhipuram, Singanallur, Vadavalli, Thudiyalur, Ganapathy, and surrounding districts like Tirupur, Erode, and Salem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Saanidhya Builders offer turnkey construction in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Saanidhya Builders offers complete turnkey construction services in Coimbatore — from land survey and architectural design to structural construction, interior finishing, and handover. You get a single point of contact for the entire project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does construction take in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 1,500–2,000 sq.ft residential home takes 12–18 months to complete. Commercial projects vary based on scope. Saanidhya Builders provides a detailed project timeline before commencement and provides real-time progress updates throughout.',
      },
    },
  ],
}

const services = [
  { icon: Home,      title: 'Residential Construction', desc: 'Custom homes, villas, apartments built to your vision with premium materials and Vastu-compliant designs.', href: '/services' },
  { icon: Building2, title: 'Commercial Construction',  desc: 'Offices, retail spaces, warehouses — functional, modern structures built on time and within budget.', href: '/services' },
  { icon: Award,     title: 'Architectural Design',     desc: '3D visualizations, floor plans, structural engineering, and regulatory approvals handled by our expert team.', href: '/services' },
  { icon: ShieldCheck,title:'Turnkey Projects',         desc: 'Complete end-to-end project management from concept to keys. One contract, one team, zero headaches.', href: '/services' },
]

const areas = [
  'Peelamedu', 'Saibaba Colony', 'RS Puram', 'Gandhipuram',
  'Singanallur', 'Vadavalli', 'Thudiyalur', 'Ganapathy',
  'Ramanathapuram', 'Kovaipudur', 'Podanur', 'Sulur',
]

const whyUs = [
  { stat: '500+',  label: 'Projects Completed',  icon: Building2 },
  { stat: '15+',   label: 'Years in Coimbatore', icon: Clock },
  { stat: '1200+', label: 'Happy Families',       icon: Users },
  { stat: '4.9★',  label: 'Google Rating',        icon: Star },
]

export default function ConstructionCompanyCoimbatorePage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #7A2EFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF6A1A 0%, transparent 50%)',
        }} />
        <div className="relative container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 font-montserrat text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Construction Company in Coimbatore</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30 bg-orange/10 mb-6">
              <MapPin size={14} className="text-orange" />
              <span className="font-montserrat text-sm text-orange font-medium">Serving Coimbatore since 2009</span>
            </div>
            <h1 className="font-playfair font-bold text-white mb-5"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
              Best <span className="gradient-text">Construction Company</span>
              <br />in Coimbatore
            </h1>
            <p className="font-montserrat text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
              Saanidhya Builders has been Coimbatore's most trusted construction partner for over 15 years.
              We've built 500+ homes, offices, and commercial spaces across the city with quality
              materials, transparent pricing, and on-time delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+919876543210" className="btn-secondary">
                <Phone size={15} /> Call +91 98765 43210
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {whyUs.map(({ stat, label, icon: Icon }) => (
              <div key={label} className="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
                <Icon size={24} className="text-orange mx-auto mb-2" aria-hidden="true" />
                <div className="font-playfair font-bold text-white text-2xl">{stat}</div>
                <div className="font-montserrat text-xs text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="font-montserrat text-sm font-semibold text-orange tracking-widest uppercase">What We Build</span>
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
              Construction Services in Coimbatore
            </h2>
            <p className="font-montserrat text-navy/60 mt-3 max-w-xl mx-auto">
              From individual homes to large commercial complexes — we do it all, with the same level of care and quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} href={href}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-navy/5
                  hover:shadow-lg hover:border-orange/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4
                  group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-playfair font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="font-montserrat text-sm text-navy/60 leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-orange text-sm font-montserrat font-medium
                  group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-montserrat text-sm font-semibold text-orange tracking-widest uppercase">Why Saanidhya</span>
              <h2 className="font-playfair font-bold text-navy mt-2 mb-5"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.4rem)' }}>
                Why We're Coimbatore's <br />
                <span className="gradient-text">Most Trusted Builders</span>
              </h2>
              <p className="font-montserrat text-navy/60 mb-8 leading-relaxed">
                Building a home is the biggest investment of your life. Saanidhya Builders combines
                technical expertise, premium materials, and transparent processes so you can trust
                every rupee you spend.
              </p>
              <ul className="space-y-4">
                {[
                  'ISO-certified construction processes',
                  'Licensed structural engineers & architects on staff',
                  'Vastu Shastra compliant designs available',
                  'RERA-registered builder',
                  'Bank-approved for home loans',
                  'Post-handover 5-year structural warranty',
                  'Real-time WhatsApp project updates',
                  'In-house material procurement — no middlemen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-montserrat text-sm text-navy/75">
                    <CheckCircle2 size={16} className="text-orange flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                About Saanidhya Builders <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '480px' }}>
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
                alt="Premium house construction in Coimbatore by Saanidhya Builders"
                fill sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_,i) => (
                    <Star key={i} size={12} className="fill-orange text-orange" />
                  ))}
                </div>
                <p className="font-montserrat text-xs font-semibold text-navy">4.9/5 from 214 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas Served ── */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair font-bold text-navy" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)' }}>
              Areas We Serve in Coimbatore
            </h2>
            <p className="font-montserrat text-navy/60 mt-2 text-sm max-w-lg mx-auto">
              Saanidhya Builders operates across all major localities in Coimbatore city and the
              greater Coimbatore district.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area}
                className="font-montserrat text-sm px-4 py-2 rounded-full bg-white border border-navy/10
                  text-navy/70 hover:border-orange/40 hover:text-orange transition-all cursor-default">
                <MapPin size={11} className="inline mr-1 opacity-60" />{area}
              </span>
            ))}
          </div>
          <p className="text-center font-montserrat text-sm text-navy/50 mt-6">
            Also serving: Tirupur, Erode, Salem, Namakkal, Pollachi, and surrounding districts.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-navy" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
              Frequently Asked Questions
            </h2>
            <p className="font-montserrat text-navy/60 mt-2 text-sm">
              Common questions about construction companies in Coimbatore
            </p>
          </div>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <details key={faq.name}
                className="group bg-cream rounded-xl border border-navy/8 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer
                  font-montserrat font-semibold text-navy text-sm list-none select-none
                  hover:text-orange transition-colors">
                  {faq.name}
                  <span className="text-orange text-lg flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-5 pb-5 font-montserrat text-sm text-navy/65 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links to other local SEO pages ── */}
      <section className="py-12 bg-cream border-t border-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <p className="font-montserrat text-sm text-navy/50 text-center mb-5">More pages you may find helpful</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href:'/residential-construction-coimbatore', label:'Residential Construction Coimbatore' },
              { href:'/commercial-construction-coimbatore',  label:'Commercial Construction Coimbatore' },
              { href:'/builders-coimbatore',                 label:'Builders in Coimbatore' },
              { href:'/construction-cost/coimbatore',        label:'Construction Cost Coimbatore' },
              { href:'/blog',                                label:'Construction Blog' },
              { href:'/contact',                             label:'Get a Free Quote' },
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
