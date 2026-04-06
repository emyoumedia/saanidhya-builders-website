import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data'
import privacyData from '@/data/privacy.json'

const BASE         = company.website
const LAST_UPDATED = company.legal.lastPolicyUpdate
const COMPANY      = company.name
const EMAIL        = company.contact.email
const PHONE        = company.contact.phone

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY}`,
  description: `Privacy Policy for ${COMPANY}. Learn how we collect, use, and protect your personal information when you use our website or construction services.`,
  alternates: { canonical: `${BASE}/privacy` },
  robots: { index: true, follow: true },
}

type PrivacyBlock   = { subtitle: string; body: string }
type PrivacySection = { id: string; title: string; content: PrivacyBlock[] }

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream min-h-screen">

      {/* Header */}
      <section className="bg-navy pt-32 pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-white/40 font-montserrat text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Privacy Policy</span>
          </nav>
          <h1 className="font-playfair font-bold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Privacy Policy
          </h1>
          <p className="font-montserrat text-white/50 text-sm">Last updated: {LAST_UPDATED}</p>
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
                {(privacyData as PrivacySection[]).map((s) => (
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
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href={BASE} className="text-orange hover:underline">{BASE}</a>{' '}
              or use our construction services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {(privacyData as PrivacySection[]).map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-playfair font-bold text-navy text-xl mb-4 pb-2 border-b border-navy/8">
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.content.map((block, i) => (
                      <div key={i}>
                        {block.subtitle && (
                          <h3 className="font-montserrat font-semibold text-navy text-sm mb-2">
                            {block.subtitle}
                          </h3>
                        )}
                        <p className="font-montserrat text-sm text-navy/65 leading-relaxed whitespace-pre-line">
                          {block.body}
                        </p>
                      </div>
                    ))}

                    {/* Contact details rendered as JSX under the last section only */}
                    {section.id === 'contact' && (
                      <div className="font-montserrat text-sm text-navy/65 leading-relaxed space-y-1 mt-2">
                        <p>{COMPANY}</p>
                        <p>Email: <a href={`mailto:${EMAIL}`} className="text-orange hover:underline">{EMAIL}</a></p>
                        <p>Phone: <a href={`tel:${PHONE}`} className="text-orange hover:underline">{PHONE}</a></p>
                        <p>Service area: {company.serviceArea.display}</p>
                        <p>Office hours: {company.hours.weekdays}, {company.hours.time} IST</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-navy/8">
              <p className="font-montserrat text-xs text-navy/40 leading-relaxed">
                This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of {company.serviceArea.city}, {company.serviceArea.state}.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-navy/8 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-6 font-montserrat text-sm text-navy/50">
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-orange transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-orange transition-colors">Contact Us</Link>
          <a href={`mailto:${EMAIL}`} className="hover:text-orange transition-colors">{EMAIL}</a>
        </div>
      </div>
    </div>
  )
}