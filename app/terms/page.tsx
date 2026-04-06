import type { Metadata } from 'next'
import Link from 'next/link'
import company from '@/data/company.json'
import termsData from '@/data/terms.json'

const BASE         = company.website
const LAST_UPDATED = company.legal.lastPolicyUpdate
const COMPANY      = company.name
const EMAIL        = company.contact.email
const PHONE        = company.contact.phone

export const metadata: Metadata = {
  title: 'Terms of Service | Saanidhya Builders',
  description:
    'Terms of Service for Saanidhya Builders. Read our terms and conditions governing the use of our website and construction services in Coimbatore, Tamil Nadu.',
  alternates: { canonical: `${BASE}/terms` },
  robots: { index: true, follow: true },
}

type TermsSection = { id: string; title: string; body: string }

export default function TermsOfServicePage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Header */}
      <section className="bg-navy pt-32 pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 font-montserrat text-sm mb-6"
            aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Terms of Service</span>
          </nav>
          <h1 className="font-playfair font-bold text-white mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Terms of Service
          </h1>
          <p className="font-montserrat text-white/50 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 max-w-5xl mx-auto">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="font-montserrat text-xs font-semibold text-navy/40 uppercase tracking-widest mb-4">
                Contents
              </p>
              <nav className="space-y-1" aria-label="Table of contents">
                {(termsData as TermsSection[]).map((s) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="block font-montserrat text-sm text-navy/55 hover:text-orange transition-colors py-1 leading-snug">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-navy/5">

            {/* Intro */}
            <p className="font-montserrat text-sm text-navy/65 leading-relaxed mb-10 pb-10 border-b border-navy/8">
              These Terms of Service ("Terms") govern your use of the{' '}
              <a href={BASE} className="text-orange hover:underline">Saanidhya Builders website</a>{' '}
              and the construction services we provide. By using our website or engaging our services,
              you confirm that you have read, understood, and agree to be bound by these Terms and our{' '}
              <Link href="/privacy" className="text-orange hover:underline">Privacy Policy</Link>.
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {(termsData as TermsSection[]).map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-playfair font-bold text-navy text-xl mb-4 pb-2 border-b border-navy/8">
                    {section.title}
                  </h2>
                  <p className="font-montserrat text-sm text-navy/65 leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* Contact details rendered separately under the last section */}
            <div className="mt-4 font-montserrat text-sm text-navy/65 leading-relaxed space-y-1">
              <p>{COMPANY}</p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-orange hover:underline">{EMAIL}</a></p>
              <p>Phone: <a href={`tel:${PHONE}`} className="text-orange hover:underline">{PHONE}</a></p>
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-navy/8">
              <p className="font-montserrat text-xs text-navy/40 leading-relaxed">
                These Terms of Service were last updated on {LAST_UPDATED}. If you have any questions,
                please contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="text-orange hover:underline">{EMAIL}</a>.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-navy/8 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-6 font-montserrat text-sm text-navy/50">
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-orange transition-colors">Contact Us</Link>
          <a href={`mailto:${EMAIL}`} className="hover:text-orange transition-colors">{EMAIL}</a>
        </div>
      </div>
    </div>
  )
}