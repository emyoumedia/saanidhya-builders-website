import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'

const BASE = 'https://www.saanidhyabuilders.com'

export const metadata: Metadata = {
  title: 'Construction FAQs Coimbatore | Saanidhya Builders',
  description:
    'Answers to common questions about construction in Coimbatore — costs, timelines, permits, Vastu, material quality, and more. Saanidhya Builders FAQ.',
  alternates: { canonical: `${BASE}/faq` },
  openGraph: {
    title: 'Construction FAQs Coimbatore | Saanidhya Builders',
    description: 'Everything you need to know about building a home or commercial space in Coimbatore.',
    url: `${BASE}/faq`,
  },
}

const faqs = [
  {
    category: 'Cost & Pricing',
    items: [
      {
        q: 'How much does it cost to build a house in Coimbatore in 2026?',
        a: 'Construction cost in Coimbatore ranges from ₹1,800 to ₹3,500 per sq.ft depending on specification. Basic spec: ₹1,800–2,000, Standard: ₹2,200–2,600, Premium: ₹2,800–3,200, Luxury: ₹3,500+. A 1,500 sq.ft standard-spec home costs approximately ₹33–39 lakhs. Contact us for a free detailed estimate based on your specific requirements.',
      },
      {
        q: 'Are there any hidden costs in construction?',
        a: 'With Saanidhya Builders, there are no hidden costs. We provide a detailed BOQ (Bill of Quantities) before starting work, and any changes are formally communicated via a change order with cost impact before execution. Our pricing is fully transparent.',
      },
      {
        q: 'Can I get a home loan for construction in Coimbatore?',
        a: 'Yes. Saanidhya Builders is bank-approved, meaning all major banks — SBI, HDFC, ICICI, Axis — will sanction construction loans for our projects. We assist with all documentation required for loan processing at no additional charge.',
      },
    ],
  },
  {
    category: 'Timeline & Process',
    items: [
      {
        q: 'How long does it take to build a house in Coimbatore?',
        a: 'A standard 1,500–2,000 sq.ft residential home takes 12–16 months from foundation to handover. Larger homes or villas may take 18–24 months. We provide a detailed milestone-based project schedule before commencement and send weekly WhatsApp updates so you\'re always informed.',
      },
      {
        q: 'What is the construction process at Saanidhya Builders?',
        a: 'Our 5-step process: (1) Free consultation & site visit, (2) Architectural design and approvals, (3) Foundation and structural work, (4) Finishing — plumbing, electrical, tiling, painting, (5) Quality inspection and handover. We assign a dedicated project manager from step 1.',
      },
      {
        q: 'Do you handle DTCP and building plan approvals in Coimbatore?',
        a: 'Yes. We manage all regulatory approvals including DTCP approvals, building plan sanctions, setback compliance, and occupancy certificates. Our in-house team has long-standing relationships with local planning authorities and typically gets approvals within the standard timeline.',
      },
    ],
  },
  {
    category: 'Design & Materials',
    items: [
      {
        q: 'Do you design Vastu-compliant homes?',
        a: 'All our residential designs are Vastu-compliant by default. We follow Vastu Shastra principles for main door orientation, kitchen placement, pooja room positioning, and bedroom layouts. We can also tailor designs to specific Vastu consultants\' recommendations.',
      },
      {
        q: 'Can I choose my own materials and finishes?',
        a: 'Yes. We provide a curated catalogue of materials from trusted suppliers, and you can select your preferences for tiles, sanitary ware, paints, kitchen fittings, and more. You\'re also welcome to supply specific branded materials you prefer — we\'ll incorporate them into the project.',
      },
      {
        q: 'Do you offer 3D design visualization before construction?',
        a: 'Yes. Our architectural team creates full 3D exterior and interior renderings so you can see exactly how your home will look before a single brick is laid. We iterate on the design until you\'re completely satisfied before starting construction.',
      },
    ],
  },
  {
    category: 'Quality & Warranty',
    items: [
      {
        q: 'What warranty do you provide on construction?',
        a: 'Saanidhya Builders offers a 5-year structural warranty on all residential construction. This covers any structural defects in the foundation, columns, beams, and slabs. We also provide a 1-year warranty on plumbing and electrical work.',
      },
      {
        q: 'What quality standards do you follow?',
        a: 'We follow IS (Indian Standard) codes for all structural work, use M20+ grade concrete for structural elements, TMT Fe-500 steel, and ISI-marked electrical fittings. Our site engineers conduct daily quality checks and maintain a physical Quality Inspection Register throughout the project.',
      },
    ],
  },
  {
    category: 'Services & Scope',
    items: [
      {
        q: 'Do you offer interior design along with construction?',
        a: 'Yes. We offer complete interior design and execution services including modular kitchens, wardrobes, false ceilings, lighting design, and furniture. This can be included in a single turnkey contract, saving you the hassle of coordinating multiple vendors.',
      },
      {
        q: 'Do you take renovation and remodeling projects?',
        a: 'Yes. We handle renovation, extension, and remodeling of existing homes and commercial spaces in Coimbatore. Our team assesses the existing structure and provides a detailed scope and cost before beginning any work.',
      },
      {
        q: 'Which areas in Coimbatore do you serve?',
        a: 'We serve all areas in Coimbatore including Peelamedu, Saibaba Colony, RS Puram, Gandhipuram, Singanallur, Vadavalli, Thudiyalur, Ganapathy, Ramanathapuram, Kovaipudur, Podanur, and Sulur. We also work in Tirupur, Erode, Salem, and surrounding districts.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-navy pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 text-sm font-montserrat mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">FAQ</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', lineHeight: 1.1 }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="font-montserrat text-white/65 text-lg leading-relaxed">
              Everything you need to know about construction in Coimbatore — answered
              by the Saanidhya Builders team.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12">
            {faqs.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-playfair font-bold text-navy text-xl mb-4 pb-2
                  border-b border-navy/10">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <details key={item.q}
                      className="group bg-white rounded-xl border border-navy/8 overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer
                        font-montserrat font-semibold text-navy text-sm list-none
                        hover:text-orange transition-colors">
                        {item.q}
                        <span className="text-orange text-lg flex-shrink-0 group-open:rotate-45
                          transition-transform duration-200">+</span>
                      </summary>
                      <p className="px-5 pb-5 font-montserrat text-sm text-navy/65 leading-relaxed">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-navy rounded-2xl text-center">
            <h3 className="font-playfair font-bold text-white text-xl mb-2">
              Still have questions?
            </h3>
            <p className="font-montserrat text-white/60 text-sm mb-5">
              Talk to our team directly — we're happy to walk you through anything.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">
                Contact Us <ArrowRight size={14} />
              </Link>
              <a href="tel:+919876543210" className="btn-secondary text-sm">
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
