import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, PhoneCall, MessageCircle, Key, ShieldCheck, Clock, Award, Layers } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company } from '@/data'

export const metadata: Metadata = {
  title: 'Turnkey Construction in Coimbatore | Saanidhya Builders',
  description: `Complete turnkey construction in Coimbatore. One contract, one team — from approvals & design to construction & interior finishing. Call +91 74488 11611.`,
  keywords: [
    'turnkey construction Coimbatore',
    'turnkey builders Coimbatore',
    'end to end construction Coimbatore',
    'turnkey home construction Coimbatore',
    'turnkey project management Coimbatore',
    'complete construction Coimbatore',
    'turnkey contractor Coimbatore',
  ],
  alternates: { canonical: `${company.website}/turnkey-construction-coimbatore` },
  openGraph: {
    title: 'Turnkey Construction in Coimbatore | Saanidhya Builders',
    description: `End-to-end turnkey construction in ${company.serviceArea.city}. You share your vision — we handle everything from approvals to handover.`,
    url: `${company.website}/turnkey-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Turnkey construction Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Turnkey Construction in Coimbatore',
  description: `Turnkey construction services in ${company.serviceArea.city} — complete end-to-end project management from approvals and design to construction and interior finishing.`,
  provider: {
    '@type': 'LocalBusiness',
    name: company.name,
    telephone: company.contact.phone,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'Turnkey Construction',
}

const trustBadges = [
  { icon: Key,         value: company.stats.projectsCompleted, label: 'Projects Delivered'  },
  { icon: Clock,       value: '100%',                          label: 'On-Time Delivery'    },
  { icon: ShieldCheck, value: company.warranty.structural,     label: 'Structural Warranty' },
  { icon: Award,       value: company.stats.projectsOngoing,   label: 'Ongoing Projects'    },
]

const turnkeyPhases = [
  {
    step: '01',
    title: 'Consultation & Planning',
    desc: 'We understand your vision, budget, and timeline. Sandeep Kumar personally handles your initial consultation and project scope.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
  {
    step: '02',
    title: 'Design & Approvals',
    desc: 'Our architects create detailed floor plans, 3D renders, and structural drawings. We manage all DTCP/CMDA approvals on your behalf.',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  },
  {
    step: '03',
    title: 'Construction & Finishing',
    desc: 'Sankar leads full site execution — from foundation and structure to electrical, plumbing, tiling, painting, and interior finishing.',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
  },
]

const features = [
  'Single point of contact — zero coordination hassle',
  'End-to-end project management',
  'All DTCP/CMDA approvals handled',
  'Architectural design & 3D visualisation',
  'Structural engineering & drawings',
  'Quality material procurement',
  'Interior design & finishing included',
  'Move-in ready handover',
  'Fixed-cost contract — no surprises',
  `${company.warranty.structural} structural warranty`,
]

const faq = [
  {
    question: 'What is a turnkey construction project?',
    answer: 'A turnkey project means we handle everything — from approvals, architectural design, and construction to interior finishing and final handover. You share your vision and budget; we deliver a move-in ready building. One contract, one team, zero coordination stress.',
  },
  {
    question: 'Is turnkey construction more expensive than managing separately?',
    answer: 'Not necessarily. Our turnkey model uses coordinated procurement and eliminates the delays and cost overruns that come from managing multiple contractors. You get a fixed-cost contract upfront with no hidden charges.',
  },
  {
    question: 'What types of projects do you handle as turnkey in Coimbatore?',
    answer: 'We handle residential turnkey projects (independent homes, villas, duplex units) and commercial turnkey projects (offices, retail spaces, mixed-use buildings) across Coimbatore and Tamil Nadu.',
  },
]

export default function TurnkeyConstructionPage() {
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
            Turnkey Construction · {company.serviceArea.city}
          </span>

          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Turnkey Construction <br />
            <span className="gradient-text">in Coimbatore</span>
          </h1>

          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            You hand us a concept. We hand you the keys. {company.name} manages everything —
            approvals, design, construction, and finishing — under one contract.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              From Concept to Keys — 3 Phases
            </h2>
            <p className="font-montserrat text-navy/55 text-sm mt-2 max-w-md mx-auto">
              One team, one contract, zero coordination headaches.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {turnkeyPhases.map((phase) => (
              <div
                key={phase.step}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={phase.img}
                    alt={`${phase.title} — Turnkey construction ${company.serviceArea.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-playfair font-bold text-white text-base drop-shadow">
                    {phase.step} — {phase.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{phase.desc}</p>
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
              Everything in One Turnkey Contract
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
              Get Your Turnkey Quote <ArrowRight size={16} />
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
                icon: Key,
                title: 'Single Point of Contact',
                desc: 'Sandeep Kumar personally manages your project from first call to final handover. No middlemen, no confusion.',
              },
              {
                icon: Layers,
                title: 'End-to-End Execution',
                desc: 'From DTCP approvals and architectural drawings to construction and interior finishing — all under one roof.',
              },
              {
                icon: ShieldCheck,
                title: 'Fixed-Cost Contract',
                desc: 'You get a detailed cost breakdown before signing. What you agree to is what you pay — no surprises.',
              },
              {
                icon: Clock,
                title: 'On-Time Handover',
                desc: 'Milestone-based delivery with regular photographic updates. 100% on-time record on completed projects.',
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