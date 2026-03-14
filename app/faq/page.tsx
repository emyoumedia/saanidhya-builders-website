import type { Metadata } from 'next'
import Link from 'next/link'
import faqData from '@/data/faq.json'
import company from '@/data/company.json'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

const BASE = company.website

export const metadata: Metadata = {
  title: 'Construction FAQs Coimbatore | Saanidhya Builders',
  description:
    'Answers to common questions about construction in Coimbatore — costs, timelines, permits, Vastu, material quality. Saanidhya Builders FAQ.',
  alternates: { canonical: `${BASE}/faq` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 text-sm font-montserrat mb-6"
            aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">FAQ</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-playfair font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', lineHeight: 1.1 }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="font-montserrat text-white/60 text-base leading-relaxed">
              Everything you need to know about construction in {company.serviceArea.city} — answered by the {company.name} team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-10">
            {faqData.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-playfair font-bold text-navy text-xl mb-4 pb-2
                  border-b border-navy/10">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <details key={item.question}
                      className="group bg-white rounded-xl border border-navy/8 overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 p-5
                        cursor-pointer font-montserrat font-semibold text-navy text-sm
                        list-none hover:text-orange transition-colors">
                        {item.question}
                        <span className="text-orange text-xl flex-shrink-0
                          group-open:rotate-45 transition-transform duration-200 leading-none">+</span>
                      </summary>
                      <p className="px-5 pb-5 font-montserrat text-sm text-navy/65 leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions — contact only, no external links */}
          <div className="mt-12 p-7 bg-navy rounded-2xl text-center">
            <h3 className="font-playfair font-bold text-white text-xl mb-2">
              Still have questions?
            </h3>
            <p className="font-montserrat text-white/55 text-sm mb-6">
              Talk to our team directly — we&apos;re happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={`tel:${company.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 btn-primary text-sm">
                <Phone size={14} /> Call Us
              </a>
              <a href={company.contact.whatsappLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white
                  font-montserrat font-semibold text-sm px-5 py-2.5 rounded-xl
                  hover:bg-green-600 transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
