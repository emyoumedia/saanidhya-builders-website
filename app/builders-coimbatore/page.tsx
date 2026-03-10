import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, MapPin, ArrowRight, Phone, ShieldCheck, Clock, Award, Users } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

const BASE = 'https://www.saanidhyabuilders.com'

export const metadata: Metadata = {
  title: 'Builders in Coimbatore | Best Building Contractors | Saanidhya',
  description:
    'Top-rated builders in Coimbatore. Saanidhya Builders — RERA registered, 500+ projects, 15+ years experience, 4.9★ rating. Residential & commercial builders in Coimbatore. Get a free consultation!',
  keywords: [
    'builders in Coimbatore',
    'best builders Coimbatore',
    'building contractors Coimbatore',
    'reputed builders Coimbatore',
    'top builders Coimbatore Tamil Nadu',
    'RERA registered builders Coimbatore',
    'trusted builders Coimbatore',
  ],
  alternates: { canonical: `${BASE}/builders-coimbatore` },
  openGraph: {
    title: 'Best Builders in Coimbatore | Saanidhya Builders',
    description: 'Top-rated builders in Coimbatore. 500+ projects, 15+ years, 4.9★ Google rating. RERA registered. Free consultation.',
    url: `${BASE}/builders-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Builders in Coimbatore' }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Saanidhya Builders',
  description: 'Best builders in Coimbatore with 15+ years experience and 500+ completed residential and commercial projects.',
  url: BASE,
  telephone: '+91-98765-43210',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42, Avinashi Road',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641018',
    addressCountry: 'IN',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '214', bestRating: '5' },
}

const highlights = [
  { icon: Clock,      stat: '15+',   label: 'Years Experience',    desc: 'Established in 2009, we have deep roots in Coimbatore's construction landscape.' },
  { icon: ShieldCheck,stat: '500+',  label: 'Projects Delivered',  desc: 'From modest homes to large commercial complexes — every project delivered on time.' },
  { icon: Users,      stat: '1200+', label: 'Happy Clients',       desc: 'Referrals and repeat clients account for over 60% of our new projects.' },
  { icon: Award,      stat: '4.9★',  label: 'Google Rating',       desc: 'Verified 4.9-star rating across 214+ genuine client reviews.' },
]

const testimonials = [
  { name: 'Karthik R.', area: 'Saibaba Colony', text: 'Saanidhya built our dream villa in 14 months. Quality is outstanding — better than what we expected at the price point. Highly recommend!', rating: 5 },
  { name: 'Priya S.',   area: 'Peelamedu',      text: 'Professional team, transparent billing, and zero surprises. Our office building was handed over exactly on the date they promised.', rating: 5 },
  { name: 'Venkat M.',  area: 'RS Puram',        text: 'They handled everything from approvals to interior work. We just had to show up for the keys. Excellent turnkey experience.', rating: 5 },
]

export default function BuildersCoimbatorePage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #7A2EFF 0%, transparent 60%)',
        }} />
        <div className="relative container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 text-sm font-montserrat mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Builders in Coimbatore</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30 bg-orange/10 mb-5">
              <MapPin size={14} className="text-orange" />
              <span className="font-montserrat text-sm text-orange font-medium">RERA Registered Builders · Coimbatore</span>
            </div>
            <h1 className="font-playfair font-bold text-white mb-5"
              style={{ fontSize: 'clamp(1.9rem,4.5vw,3.2rem)', lineHeight: 1.1 }}>
              The Best <span className="gradient-text">Builders</span>
              <br />in Coimbatore
            </h1>
            <p className="font-montserrat text-white/70 text-lg mb-8 leading-relaxed max-w-2xl">
              Saanidhya Builders is Coimbatore's most trusted construction partner — 15 years of
              building homes, offices, and commercial spaces with zero compromise on quality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Free Consultation <ArrowRight size={16} /></Link>
              <a href="tel:+919876543210" className="btn-secondary"><Phone size={15} /> +91 98765 43210</a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair font-bold text-navy text-center mb-12"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
            Why Saanidhya is Coimbatore's Top Builder
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, stat, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 text-center">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <div className="font-playfair font-bold text-navy text-3xl">{stat}</div>
                <div className="font-montserrat font-semibold text-navy text-sm mt-1 mb-3">{label}</div>
                <p className="font-montserrat text-xs text-navy/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair font-bold text-navy text-center mb-12"
            style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
            What Coimbatore Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map(({ name, area, text, rating }) => (
              <div key={name} className="bg-cream rounded-2xl p-6 border border-navy/5">
                <div className="flex gap-1 mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-orange text-orange" />
                  ))}
                </div>
                <p className="font-montserrat text-sm text-navy/70 leading-relaxed mb-4 italic">"{text}"</p>
                <div>
                  <div className="font-montserrat font-semibold text-navy text-sm">{name}</div>
                  <div className="font-montserrat text-xs text-navy/40 flex items-center gap-1 mt-0.5">
                    <MapPin size={10} />{area}, Coimbatore
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-10 bg-cream border-t border-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href:'/construction-company-coimbatore',     label:'Construction Company Coimbatore' },
              { href:'/residential-construction-coimbatore', label:'Residential Construction' },
              { href:'/commercial-construction-coimbatore',  label:'Commercial Construction' },
              { href:'/construction-cost/coimbatore',        label:'Construction Cost Coimbatore' },
              { href:'/projects',                            label:'View Our Projects' },
              { href:'/testimonials',                        label:'All Client Reviews' },
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
