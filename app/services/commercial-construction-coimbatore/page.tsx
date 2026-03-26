import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, PhoneCall, MessageCircle, Building2, ShieldCheck, Clock, Award } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company, localSeoData as localSeo } from '@/data'

export const metadata: Metadata = {
  title: 'Commercial Construction in Coimbatore | Saanidhya Builders',
  description: `Leading commercial construction company in Coimbatore. Offices, warehouses, retail spaces, industrial buildings. On-time delivery, dedicated project manager. Call +91 74488 11611.`,
  keywords: [
    'commercial construction Coimbatore',
    'commercial builders Coimbatore',
    'office construction Coimbatore',
    'warehouse construction Coimbatore',
    'industrial construction Coimbatore',
    'retail construction Coimbatore',
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
    telephone: company.contact.phone,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'Commercial Construction',
}

const trustBadges = [
  { icon: Building2,   value: company.stats.projectsCompleted, label: 'Projects Delivered' },
  { icon: Clock,       value: '100%',                          label: 'On-Time Delivery'   },
  { icon: ShieldCheck, value: company.warranty.structural,     label: 'Structural Warranty' },
  { icon: Award,       value: company.stats.projectsOngoing,   label: 'Ongoing Projects'   },
]

export default function CommercialConstructionPage() {
  const { buildingTypes, features } = localSeo.commercialConstruction

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── STICKY MOBILE CALL BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-white/10 shadow-2xl">
        <div className="grid grid-cols-2">
          {/* btn-primary gradient — same as every other primary CTA on site */}
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
      {/* bg-navy = #0B0F3B */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #FF6A1A 0%, transparent 60%)' }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">

          {/* Badge — text-orange border-orange/30, exact match to screenshot */}
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            Commercial Construction · {company.serviceArea.city}
          </span>

          {/* H1 — text-white, gradient-text on second line */}
          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Commercial Construction <br />
            {/* gradient-text = linear-gradient(135deg, #7A2EFF, #FF6A1A) from globals.css */}
            <span className="gradient-text">in Coimbatore</span>
          </h1>

          {/* Subtext — text-white/60 */}
          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {company.name} builds offices, retail spaces, warehouses, and industrial facilities
            across {company.serviceArea.display} — on time and within budget.
          </p>

          {/* CTAs — btn-primary (purple→orange) + green WhatsApp, exact as original */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Get Free Quote <ArrowRight size={16} />
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

          {/* Trust badges — bg-white/5 border-white/8, text-white, icon text-orange */}
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

      {/* ── BUILDING TYPES ── */}
      {/* bg-cream = #F5F6FA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            {/* Badge label — text-orange */}
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              What We Build
            </span>
            {/* Section heading — text-navy (#0B0F3B) */}
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              Commercial Projects We Deliver
            </h2>
            {/* Sub — text-navy/55 */}
            <p className="font-montserrat text-navy/55 text-sm mt-2 max-w-md mx-auto">
              Every project managed by a dedicated team from foundation to handover.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {buildingTypes.map((bt) => (
              <div
                key={bt.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={bt.img}
                    alt={`${bt.title} in ${company.serviceArea.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  {/* Title overlay on image — text-white */}
                  <span className="absolute bottom-3 left-4 font-playfair font-bold text-white text-base drop-shadow">
                    {bt.title}
                  </span>
                </div>
                <div className="p-5">
                  {/* Card desc — text-navy/60 */}
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{bt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      {/* bg-navy = #0B0F3B */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            {/* Badge label — text-orange */}
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              What&apos;s Included
            </span>
            {/* Section heading — text-white */}
            <h2
              className="font-playfair font-bold text-white mt-2"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
            >
              Every Commercial Project Includes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4 hover:border-orange/25 transition-colors"
              >
                {/* Icon — text-orange (#FF6A1A) */}
                <CheckCircle2 size={17} className="text-orange flex-shrink-0 mt-0.5" />
                {/* Feature text — text-white/80 */}
                <span className="font-montserrat text-white/80 text-sm leading-snug">{f}</span>
              </div>
            ))}
          </div>

          {/* CTA — btn-primary (purple→orange gradient) */}
          <div className="text-center">
            <Link href="/contact" className="btn-primary">
              Discuss Your Commercial Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY SAANIDHYA ── */}
      {/* bg-cream = #F5F6FA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            {/* Badge label — text-orange */}
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              Why Choose Us
            </span>
            {/* Section heading — text-navy */}
            <h2
              className="font-playfair font-bold text-navy mt-2"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
            >
              The {company.name} Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: ShieldCheck,
                title: 'NBC & DTCP Compliant',
                desc: 'All commercial projects comply with National Building Code, BIS standards, and local DTCP regulations.',
              },
              {
                icon: Award,
                title: 'Dedicated Project Manager',
                desc: 'A single point of contact from day one — Sandeep Kumar handles all client communication directly.',
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                desc: 'Milestone-based planning and dedicated execution. 100% on-time delivery on completed projects.',
              },
              {
                icon: Building2,
                title: 'Expert Execution Team',
                desc: 'Sankar heads site operations with hands-on engineering supervision, labor management, and strict quality control.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 bg-white rounded-2xl border border-navy/5 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon box — bg-navy with text-orange icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #7A2EFF 0%, #FF6A1A 100%)' }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  {/* Card title — text-navy */}
                  <h3 className="font-montserrat font-semibold text-navy text-sm mb-1">{title}</h3>
                  {/* Card desc — text-navy/55 */}
                  <p className="font-montserrat text-navy/55 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership callout — bg-navy */}
          <div className="mt-8 rounded-2xl bg-navy p-6 border border-white/8">
            <p className="font-montserrat text-white/50 text-xs uppercase tracking-widest mb-3">Led by</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                {/* Name — text-white */}
                <p className="font-montserrat font-bold text-white text-sm">Sandeep Kumar</p>
                {/* Role — text-orange */}
                <p className="font-montserrat text-orange text-xs mt-0.5">Business Head & Client Relations</p>
                {/* Bio — text-white/45 */}
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

      {/* pb-20 on mobile so sticky bar doesn't cover CTASection */}
      <div className="pb-20 md:pb-0">
        <CTASection />
      </div>
    </>
  )
}