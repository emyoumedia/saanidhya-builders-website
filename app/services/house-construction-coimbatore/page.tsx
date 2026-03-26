import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, PhoneCall, MessageCircle, HousePlus, ShieldCheck, Clock, Award } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company } from '@/data'

export const metadata: Metadata = {
  title: 'House Construction in Coimbatore | Saanidhya Builders',
  description: `Expert house construction in Coimbatore. Independent homes, row houses, duplex units — Vastu-friendly, transparent pricing, all permits handled. Call +91 74488 11611.`,
  keywords: [
    'house construction Coimbatore',
    'home construction Coimbatore',
    'independent house construction Coimbatore',
    'duplex house construction Coimbatore',
    'row house construction Coimbatore',
    'new house construction Coimbatore',
    'house builders Coimbatore',
  ],
  alternates: { canonical: `${company.website}/house-construction-coimbatore` },
  openGraph: {
    title: 'House Construction in Coimbatore | Saanidhya Builders',
    description: `Independent homes, row houses & duplex units in ${company.serviceArea.city}. Transparent pricing, all permits handled, on-time delivery.`,
    url: `${company.website}/house-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'House construction Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'House Construction in Coimbatore',
  description: `House construction services in ${company.serviceArea.city} — independent homes, row houses, and duplex units with Vastu-friendly layouts and transparent pricing.`,
  provider: {
    '@type': 'LocalBusiness',
    name: company.name,
    telephone: company.contact.phone,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'House Construction',
}

const trustBadges = [
  { icon: HousePlus,   value: company.stats.projectsCompleted, label: 'Projects Delivered'  },
  { icon: Clock,       value: '100%',                          label: 'On-Time Delivery'    },
  { icon: ShieldCheck, value: company.warranty.structural,     label: 'Structural Warranty' },
  { icon: Award,       value: company.stats.projectsOngoing,   label: 'Ongoing Projects'    },
]

const houseTypes = [
  {
    title: 'Independent Houses',
    desc: 'Single and multi-storey independent homes with custom layouts, premium materials, and Vastu-compliant designs tailored to your plot.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  },
  {
    title: 'Row Houses',
    desc: 'Efficiently designed row houses that maximise space and privacy, suitable for gated community developments.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    title: 'Duplex Units',
    desc: 'Two-storey duplex homes with independent entrances — ideal for joint families or rental income opportunities.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
  },
]

const features = [
  'Foundation to finishing — full project scope',
  'Vastu-friendly floor plan designs',
  'All DTCP permits and approvals handled',
  'Transparent pricing — no hidden costs',
  'Fixed-cost contracts available',
  'Regular photographic progress updates',
  'Bank-approved construction',
  `${company.warranty.structural} structural warranty`,
]

const faq = [
  {
    question: 'How much does it cost to build a house in Coimbatore?',
    answer: 'House construction costs in Coimbatore range from ₹1,800 to ₹3,500 per sq.ft depending on specification. Basic: ₹1,800–2,000/sq.ft. Standard: ₹2,200–2,600/sq.ft. Premium: ₹3,000–3,500+/sq.ft. Contact us for a detailed free estimate.',
  },
  {
    question: 'How long does house construction take in Coimbatore?',
    answer: 'A typical 1,500–2,000 sq.ft independent house takes 12–16 months to build. Duplex or larger homes may take 16–24 months. We provide a detailed construction timeline before starting.',
  },
  {
    question: 'Do you handle all permits and approvals for house construction?',
    answer: 'Yes. Saanidhya Builders handles all DTCP/CMDA approvals, plan sanction, and regulatory permits on your behalf. You just need to sign — we manage the rest.',
  },
]

export default function HouseConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── STICKY MOBILE CALL BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-white/10 shadow-2xl">
        <div className="grid grid-cols-2">
          <a
            href={`tel:${company.contact.phoneRaw}`}
            aria-label="Call Saanidhya Builders"
            className="flex items-center justify-center gap-2 py-4 font-montserrat font-semibold text-sm text-white active:opacity-80 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #7A2EFF 0%, #FF6A1A 100%)' }}
          >
            <PhoneCall size={16} />
            Call Us Now
          </a>
          <a
            href={company.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Saanidhya Builders"
            className="flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-montserrat font-semibold text-sm hover:bg-green-600 active:opacity-80 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #FF6A1A 0%, transparent 60%)' }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">

          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            House Construction · {company.serviceArea.city}
          </span>

          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            House Construction <br />
            <span className="gradient-text">in Coimbatore</span>
          </h1>

          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {company.name} builds independent homes, row houses, and duplex units
            across {company.serviceArea.display} — from foundation to finishing, with all permits handled.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate <ArrowRight size={16} />
            </Link>
            <a
              href={company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-full hover:bg-green-600 transition-colors min-h-[44px]"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {trustBadges.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 bg-white/5 border border-white/8 rounded-2xl py-4 px-2"
              >
                <Icon size={18} className="text-orange mb-1" />
                <span className="font-montserrat font-bold text-white text-lg leading-none">{value}</span>
                <span className="font-montserrat text-white/45 text-xs text-center leading-tight">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HOUSE TYPES ── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              Types We Build
            </span>
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              House Types We Specialise In
            </h2>
            <p className="font-montserrat text-navy/55 text-sm mt-2 max-w-md mx-auto">
              Every home built to your specifications — on your plot, your timeline, your budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {houseTypes.map((ht) => (
              <div
                key={ht.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={ht.img}
                    alt={`${ht.title} in ${company.serviceArea.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-playfair font-bold text-white text-base drop-shadow">
                    {ht.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{ht.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              What&apos;s Included
            </span>
            <h2 className="font-playfair font-bold text-white mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              Every House Project Includes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4 hover:border-orange/25 transition-colors"
              >
                <CheckCircle2 size={17} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-white/80 text-sm leading-snug">{f}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Build Your Dream Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SAANIDHYA ── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              The {company.name} Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: 'All Permits Handled',
                desc: 'DTCP/CMDA approvals, plan sanction, and all regulatory paperwork managed end-to-end by our team.',
              },
              {
                icon: Award,
                title: 'Transparent Pricing',
                desc: 'Detailed cost estimate upfront. Fixed-cost contracts available — no surprises, no hidden charges.',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                desc: 'Milestone-based construction schedule shared before project start. 100% on-time track record.',
              },
              {
                icon: HousePlus,
                title: 'Vastu-Friendly Designs',
                desc: 'Every home designed as per Vastu Shastra by default. Custom modifications available at no extra cost.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 bg-white rounded-2xl border border-navy/5 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #7A2EFF 0%, #FF6A1A 100%)' }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-navy text-sm mb-1">{title}</h3>
                  <p className="font-montserrat text-navy/55 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-navy p-6 border border-white/8">
            <p className="font-montserrat text-white/50 text-xs uppercase tracking-widest mb-3">Led by</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-montserrat font-bold text-white text-sm">Sandeep Kumar</p>
                <p className="font-montserrat text-orange text-xs mt-0.5">Business Head & Client Relations</p>
                <p className="font-montserrat text-white/45 text-xs mt-1 leading-relaxed">
                  Handles client requirements, quotations, legal documentation & project coordination.
                </p>
              </div>
              <div>
                <p className="font-montserrat font-bold text-white text-sm">Sankar</p>
                <p className="font-montserrat text-orange text-xs mt-0.5">Execution Head & Site Operations</p>
                <p className="font-montserrat text-white/45 text-xs mt-1 leading-relaxed">
                  Manages engineering, labor teams, materials, quality control & on-time execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">FAQ</span>
            <h2 className="font-playfair font-bold text-white mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faq.map((item) => (
              <div key={item.question} className="bg-white/5 border border-white/8 rounded-xl p-5">
                <h3 className="font-montserrat font-semibold text-white text-sm mb-2">{item.question}</h3>
                <p className="font-montserrat text-white/60 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20 md:pb-0">
        <CTASection />
      </div>
    </>
  )
}