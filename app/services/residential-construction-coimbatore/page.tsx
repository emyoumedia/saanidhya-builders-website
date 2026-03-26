import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, PhoneCall, MessageCircle, Home, ShieldCheck, Clock, Award } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import { company, localSeoData as localSeo } from '@/data'

export const metadata: Metadata = {
  title: 'Residential Construction in Coimbatore | Saanidhya Builders',
  description: `Top residential construction company in Coimbatore. Custom homes, villas, apartments — Vastu-compliant, 5-year structural warranty, bank-approved. Call +91 74488 11611.`,
  keywords: [
    'residential construction Coimbatore',
    'home builders Coimbatore',
    'house construction Coimbatore',
    'villa construction Coimbatore',
    'apartment construction Coimbatore',
    'Vastu compliant homes Coimbatore',
    'residential builders Coimbatore',
  ],
  alternates: { canonical: `${company.website}/residential-construction-coimbatore` },
  openGraph: {
    title: 'Residential Construction in Coimbatore | Saanidhya Builders',
    description: `Custom homes, villas & apartments in ${company.serviceArea.city}. Vastu-compliant, bank-approved, 5-year structural warranty.`,
    url: `${company.website}/residential-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Residential construction Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Construction in Coimbatore',
  description: `Residential construction services in ${company.serviceArea.city} — custom homes, villas, and apartments with Vastu-compliant designs and 5-year structural warranty.`,
  provider: {
    '@type': 'LocalBusiness',
    name: company.name,
    telephone: company.contact.phone,
    areaServed: { '@type': 'City', name: company.serviceArea.city },
  },
  areaServed: { '@type': 'City', name: company.serviceArea.city },
  serviceType: 'Residential Construction',
}

const trustBadges = [
  { icon: Home,        value: company.stats.projectsCompleted, label: 'Projects Delivered'  },
  { icon: Clock,       value: '100%',                          label: 'On-Time Delivery'    },
  { icon: ShieldCheck, value: company.warranty.structural,     label: 'Structural Warranty' },
  { icon: Award,       value: company.stats.projectsOngoing,   label: 'Ongoing Projects'    },
]

const faq = [
  {
    question: 'How much does residential construction cost in Coimbatore?',
    answer: 'Residential construction in Coimbatore costs between ₹1,800 to ₹3,500 per sq.ft. Basic: ₹1,800–2,000/sq.ft. Standard: ₹2,200–2,600/sq.ft. Premium/luxury: ₹3,000–3,500+/sq.ft. Contact us for a free detailed estimate.',
  },
  {
    question: 'How long does it take to build a house in Coimbatore?',
    answer: 'A typical 1,500–2,000 sq.ft home in Coimbatore takes 12–16 months to build. Larger villas may take 18–24 months. We provide a detailed construction schedule before starting and send regular progress updates.',
  },
  {
    question: 'Do you build Vastu-compliant homes in Coimbatore?',
    answer: 'Yes. Saanidhya Builders designs all homes as per Vastu Shastra principles by default. Our architects are trained in Vastu-compliant layouts and can modify any floor plan to meet specific Vastu requirements.',
  },
]

export default function ResidentialConstructionPage() {
  const { projectTypes, features } = localSeo.residentialConstruction

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
            Residential Construction · {company.serviceArea.city}
          </span>

          <h1 className="font-playfair font-bold text-white mb-6" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            Residential Construction <br />
            <span className="gradient-text">in Coimbatore</span>
          </h1>

          <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-8">
            {company.name} builds custom homes, luxury villas, and modern apartments
            across {company.serviceArea.display} — Vastu-compliant, bank-approved, and built to last.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation <ArrowRight size={16} />
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

      {/* ── PROJECT TYPES ── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              What We Build
            </span>
            <h2 className="font-playfair font-bold text-navy mt-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}>
              Residential Projects We Deliver
            </h2>
            <p className="font-montserrat text-navy/55 text-sm mt-2 max-w-md mx-auto">
              From compact independent homes to spacious luxury villas — built to your exact vision.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {projectTypes.map((pt) => (
              <div
                key={pt.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={pt.img}
                    alt={`${pt.title} in ${company.serviceArea.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-playfair font-bold text-white text-base drop-shadow">
                    {pt.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{pt.desc}</p>
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
            <h2
              className="font-playfair font-bold text-white mt-2"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
            >
              Every Residential Project Includes
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
              Start Your Home Project <ArrowRight size={16} />
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
                title: 'Vastu-Compliant Designs',
                desc: 'Every home designed as per Vastu Shastra principles by default. Custom modifications available on request.',
              },
              {
                icon: Award,
                title: 'Bank-Approved Construction',
                desc: 'Our projects are bank-approved and RERA registered, giving you complete peace of mind at every stage.',
              },
              {
                icon: Clock,
                title: 'Fixed-Cost Contracts',
                desc: 'No hidden charges. You get a detailed cost breakdown upfront — what you sign is what you pay.',
              },
              {
                icon: Home,
                title: '5-Year Structural Warranty',
                desc: `Every residential project comes with a ${company.warranty.structural} structural warranty and 1-year plumbing & electrical warranty.`,
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

          {/* Leadership callout */}
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
            <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-widest">
              FAQ
            </span>
            <h2
              className="font-playfair font-bold text-white mt-2"
              style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)' }}
            >
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