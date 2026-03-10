import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Home, ArrowRight, Star, Phone, MapPin } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

const BASE = 'https://www.saanidhyabuilders.com'

export const metadata: Metadata = {
  title: 'Residential Construction in Coimbatore | Home Builders | Saanidhya',
  description:
    'Top residential construction company in Coimbatore. Custom homes, luxury villas, 2BHK & 3BHK apartments. Vastu-compliant, bank-approved, 5-year warranty. Get a free estimate today!',
  keywords: [
    'residential construction Coimbatore',
    'home builders Coimbatore',
    'house construction Coimbatore',
    'villa construction Coimbatore',
    'custom home builders Coimbatore',
    '2BHK 3BHK construction Coimbatore',
    'residential builders Tamil Nadu',
  ],
  alternates: { canonical: `${BASE}/residential-construction-coimbatore` },
  openGraph: {
    title: 'Residential Construction in Coimbatore | Saanidhya Builders',
    description: 'Build your dream home in Coimbatore. Custom homes, villas, apartments — premium quality, transparent pricing. Free consultation!',
    url: `${BASE}/residential-construction-coimbatore`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Residential construction in Coimbatore' }],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Residential Construction in Coimbatore',
  description: 'Custom residential construction services in Coimbatore including houses, villas, apartments, and luxury homes. RERA registered, Vastu compliant, bank approved.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Saanidhya Builders',
    address: { '@type': 'PostalAddress', addressLocality: 'Coimbatore', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
    telephone: '+91-98765-43210',
  },
  areaServed: { '@type': 'City', name: 'Coimbatore' },
  serviceType: 'Residential Construction',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does residential construction cost in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Residential construction in Coimbatore costs between ₹1,800 to ₹3,500 per sq.ft. Basic specification: ₹1,800–2,000/sq.ft. Standard specification: ₹2,200–2,600/sq.ft. Premium/luxury: ₹3,000–3,500+/sq.ft. Get a detailed free estimate from Saanidhya Builders.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a house in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 1,500–2,000 sq.ft residential home in Coimbatore takes 12–16 months to build. Larger villas may take 18–24 months. Saanidhya Builders provides a detailed construction schedule before starting and sends regular progress updates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build Vastu-compliant homes in Coimbatore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Saanidhya Builders designs all homes as per Vastu Shastra principles by default. Our architects are trained in Vastu-compliant layouts. We can also modify any floor plan to meet specific Vastu requirements.',
      },
    },
  ],
}

const projectTypes = [
  { title: 'Individual Houses', desc: 'Single-storey and multi-storey independent homes built to your exact specifications with premium finishing.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
  { title: 'Luxury Villas', desc: 'Premium villa construction with landscaped gardens, swimming pool, smart home integration, and luxury interiors.', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80' },
  { title: 'Apartments', desc: 'Multi-unit apartment buildings with modern amenities, parking, and RERA-compliant documentation.', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80' },
]

const costTable = [
  { spec: 'Basic',    range: '₹1,800 – ₹2,000', features: 'Standard materials, simple finishes, functional layout' },
  { spec: 'Standard', range: '₹2,200 – ₹2,600', features: 'Good quality materials, vitrified tiles, modular kitchen' },
  { spec: 'Premium',  range: '₹2,800 – ₹3,200', features: 'Premium materials, Italian marble, smart home features' },
  { spec: 'Luxury',   range: '₹3,500+',          features: 'Top-of-the-line materials, fully customised, no compromises' },
]

export default function ResidentialConstructionPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #7A2EFF 0%, transparent 50%)',
        }} />
        <div className="relative container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 text-sm font-montserrat mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">Residential Construction Coimbatore</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30 bg-orange/10 mb-5">
              <Home size={14} className="text-orange" />
              <span className="font-montserrat text-sm text-orange font-medium">Residential Construction Specialists</span>
            </div>
            <h1 className="font-playfair font-bold text-white mb-5"
              style={{ fontSize: 'clamp(1.9rem,4.5vw,3.2rem)', lineHeight: 1.1 }}>
              Residential Construction <br />
              <span className="gradient-text">in Coimbatore</span>
            </h1>
            <p className="font-montserrat text-white/70 text-lg mb-8 leading-relaxed max-w-2xl">
              Build the home you've always dreamed of. Saanidhya Builders crafts beautiful,
              durable, and Vastu-compliant homes across Coimbatore — within your budget, on schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight size={16} /></Link>
              <a href="tel:+919876543210" className="btn-secondary"><Phone size={15} /> Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-navy" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
              Types of Homes We Build
            </h2>
            <p className="font-montserrat text-navy/60 text-sm mt-2">
              Every project is unique — we build to your vision, your lifestyle, your budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map(({ title, desc, img }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-navy/5">
                <div className="relative h-52">
                  <Image src={img} alt={`${title} construction in Coimbatore`} fill className="object-cover" loading="lazy" sizes="(max-width:768px) 100vw, 33vw" />
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

      {/* Cost table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="font-playfair font-bold text-navy" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>
              Construction Cost in Coimbatore 2026
            </h2>
            <p className="font-montserrat text-navy/60 text-sm mt-2">
              Estimated rates per sq.ft based on specification level
            </p>
          </div>
          <div className="max-w-2xl mx-auto overflow-x-auto rounded-2xl shadow-sm border border-navy/10">
            <table className="w-full text-sm font-montserrat">
              <thead className="gradient-bg text-white">
                <tr>
                  {['Specification','Cost per sq.ft','What\'s Included'].map((h) => (
                    <th key={h} className="px-5 py-4 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={row.spec} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    <td className="px-5 py-4 font-semibold text-navy">{row.spec}</td>
                    <td className="px-5 py-4 text-orange font-bold">{row.range}</td>
                    <td className="px-5 py-4 text-navy/65">{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center font-montserrat text-xs text-navy/40 mt-4">
            * Rates are estimates. Final cost depends on site conditions, design complexity, and material choices.
            <Link href="/contact" className="text-orange ml-1 hover:underline">Get an exact quote →</Link>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="font-playfair font-bold text-navy text-center mb-8"
            style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
            Why Choose Saanidhya for Your Home?
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'RERA-registered builder','5-year structural warranty',
              'Vastu-compliant designs','Bank-approved for home loans',
              'In-house architects & engineers','Real-time progress updates',
              'Transparent pricing — no hidden costs','Post-handover support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-navy/5">
                <CheckCircle2 size={15} className="text-orange flex-shrink-0" />
                <span className="font-montserrat text-sm text-navy/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="font-playfair font-bold text-navy text-center mb-8"
            style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)' }}>
            FAQs — Residential Construction Coimbatore
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq) => (
              <details key={faq.name} className="group bg-cream rounded-xl border border-navy/8 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer
                  font-montserrat font-semibold text-navy text-sm list-none hover:text-orange transition-colors">
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

      {/* Links */}
      <section className="py-10 bg-cream border-t border-navy/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href:'/construction-company-coimbatore', label:'Construction Company Coimbatore' },
              { href:'/commercial-construction-coimbatore', label:'Commercial Construction Coimbatore' },
              { href:'/construction-cost/coimbatore', label:'Construction Cost Coimbatore' },
              { href:'/blog/house-construction-cost-coimbatore', label:'House Construction Cost Guide' },
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
