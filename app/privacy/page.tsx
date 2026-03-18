import type { Metadata } from 'next'
import Link from 'next/link'
import { company } from '@/data'

const BASE         = company.website
const LAST_UPDATED = company.legal.lastPolicyUpdate
const COMPANY      = company.name
const EMAIL        = company.contact.email
const PHONE        = company.contact.phone

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY}`,
  description:
    `Privacy Policy for ${COMPANY}. Learn how we collect, use, and protect your personal information when you use our website or construction services.`,
  alternates: { canonical: `${BASE}/privacy` },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information you provide directly',
        body: `When you contact us through our website, request a consultation, or submit an inquiry, we may collect: your full name, phone number, email address, postal address or project location, details about your construction project, and any other information you choose to share in messages or forms.`,
      },
      {
        subtitle: 'Information collected automatically',
        body: `When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, pages visited and time spent, referring website, and device type (desktop, mobile, tablet). This is collected via cookies and standard server logs.`,
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: '',
        body: `We use the information we collect to:\n• Respond to your enquiries and provide consultation services\n• Prepare and send project estimates or quotations\n• Communicate project updates, schedules, and progress reports\n• Send service-related information you have requested\n• Improve our website content and user experience\n• Comply with legal obligations under applicable Indian law\n• Prevent fraud and ensure the security of our services\n\nWe do not use your personal information for automated decision-making or profiling.`,
      },
    ],
  },
  {
    id: 'sharing',
    title: '3. Sharing of Information',
    content: [
      {
        subtitle: '',
        body: `We do not sell, rent, or trade your personal information to third parties.\n\nWe may share your information only in the following limited circumstances:\n• With trusted service providers who assist us in operating our website or conducting our business (e.g. hosting providers, email services) — these parties are contractually obligated to keep your information confidential\n• With government or regulatory authorities when required by law, court order, or legal process\n• In the event of a business merger, acquisition, or sale of assets, in which case we will notify you before your information is transferred\n\nAll third parties we engage are required to maintain the security and confidentiality of your data.`,
      },
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies',
    content: [
      {
        subtitle: '',
        body: `Our website uses cookies — small text files stored on your device — to improve your browsing experience. We use:\n\n• Essential cookies: Required for the website to function correctly\n• Analytics cookies: Help us understand how visitors use our site (e.g. Google Analytics)\n• Preference cookies: Remember your settings and choices\n\nYou can control cookies through your browser settings. Disabling cookies may affect some functionality of the website. By continuing to use our website, you consent to our use of cookies as described above.`,
      },
    ],
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: [
      {
        subtitle: '',
        body: `We take the security of your personal information seriously. We implement appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction.\n\nOur website uses HTTPS encryption for all data transmitted between your browser and our servers. Access to personal data within our organisation is restricted to personnel who need it to perform their duties.\n\nHowever, no method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.`,
      },
    ],
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: [
      {
        subtitle: '',
        body: `We retain your personal information for as long as necessary to:\n• Fulfil the purposes for which it was collected\n• Comply with legal, accounting, or reporting obligations under Indian law\n• Resolve disputes and enforce our agreements\n\nFor general enquiries with no resulting contract, we typically retain contact information for up to 2 years. For clients with active or completed construction contracts, records are retained for a minimum of 7 years as required under applicable Indian business and tax law.\n\nAfter the retention period, your data is securely deleted or anonymised.`,
      },
    ],
  },
  {
    id: 'your-rights',
    title: '7. Your Rights',
    content: [
      {
        subtitle: '',
        body: `Under applicable Indian data protection law, you have the right to:\n\n• Access: Request a copy of the personal information we hold about you\n• Correction: Request correction of inaccurate or incomplete information\n• Deletion: Request deletion of your personal information, subject to legal retention requirements\n• Objection: Object to the processing of your information for marketing purposes\n• Withdrawal of consent: Where processing is based on consent, withdraw it at any time\n\nTo exercise any of these rights, please contact us at ${EMAIL}. We will respond to your request within 30 days. We may ask you to verify your identity before fulfilling your request.`,
      },
    ],
  },
  {
    id: 'third-party',
    title: '8. Third-Party Links',
    content: [
      {
        subtitle: '',
        body: `Our website may contain links to third-party websites, including social media platforms (Facebook, Instagram, LinkedIn, YouTube) and mapping services (Google Maps). This Privacy Policy applies only to our website.\n\nWe are not responsible for the privacy practices or content of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.`,
      },
    ],
  },
  {
    id: 'children',
    title: "9. Children's Privacy",
    content: [
      {
        subtitle: '',
        body: `Our website and services are not directed at children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will take steps to delete it.`,
      },
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: [
      {
        subtitle: '',
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make material changes, we will update the "Last Updated" date at the top of this page.\n\nWe encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
      },
    ],
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      {
        subtitle: '',
        // ADDRESS removed — service area business with no public office
        body: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nCompany: ${COMPANY}\nEmail: ${EMAIL}\nPhone: ${PHONE}\nService Area: ${company.serviceArea.display}\nOffice hours: ${company.hours.weekdays}, ${company.hours.time} IST\n\nWe are committed to resolving any privacy concerns promptly and transparently.`,
      },
    ],
  },
]

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
                {sections.map((s) => (
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
            <p className="font-montserrat text-sm text-navy/65 leading-relaxed mb-10 pb-10 border-b border-navy/8">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href={BASE} className="text-orange hover:underline">www.saanidhyabuilders.com</a>{' '}
              or use our construction services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
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
                  </div>
                </section>
              ))}
            </div>

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