import type { Metadata } from 'next'
import Link from 'next/link'
import company from '@/data/company.json'

const BASE         = company.website
const LAST_UPDATED = company.legal.lastPolicyUpdate
const COMPANY      = company.name
const EMAIL        = company.contact.email
const PHONE        = company.contact.phone
const ADDRESS      = ''

export const metadata: Metadata = {
  title: 'Terms of Service | Saanidhya Builders',
  description:
    'Terms of Service for Saanidhya Builders. Read our terms and conditions governing the use of our website and construction services in Coimbatore, Tamil Nadu.',
  alternates: { canonical: `${BASE}/terms` },
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: `By accessing or using the Saanidhya Builders website (www.saanidhyabuilders.com) or engaging our construction services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.

These Terms apply to all visitors, clients, and others who access or use our website. We reserve the right to update these Terms at any time. Continued use of our website following the posting of changes constitutes your acceptance of the revised Terms.`,
  },
  {
    id: 'services',
    title: '2. Our Services',
    body: `Saanidhya Builders provides residential construction, commercial construction, architectural design, turnkey project management, renovation and remodeling services in Coimbatore and surrounding areas of Tamil Nadu.

Information on our website about services, pricing, timelines, and specifications is provided for general guidance only. Actual project scope, cost, and timelines are determined through formal consultation, site assessment, and written agreements signed between both parties.

We reserve the right to refuse service to anyone for any reason at our sole discretion.`,
  },
  {
    id: 'quotations',
    title: '3. Quotations & Estimates',
    body: `Any cost estimates, quotations, or project timelines provided through our website, via email, or during consultation are indicative only and do not constitute a binding contract.

A binding construction agreement is only formed when:
• A formal written contract is prepared and signed by both parties
• The agreed deposit or advance payment is received by Saanidhya Builders
• We issue a written confirmation of project commencement

All quotations are valid for 30 days from the date of issue unless otherwise stated in writing. Prices are subject to change based on material costs, site conditions, and scope modifications.`,
  },
  {
    id: 'payment',
    title: '4. Payment Terms',
    body: `Payment schedules are defined in the individual construction contract signed for each project. General payment terms include:

• An advance/booking amount as specified in the contract
• Stage-based progress payments linked to construction milestones
• Final payment upon project completion and handover

All payments are to be made by bank transfer, cheque, or other methods specified in the contract. GST (Goods and Services Tax) at applicable rates will be charged in addition to quoted amounts unless explicitly stated otherwise.

Late payments may attract interest at the rate of 18% per annum on the outstanding amount from the due date, as specified in the project contract.`,
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    body: `All content on this website — including but not limited to text, graphics, logos, images, architectural drawings, design concepts, and software — is the property of Saanidhya Builders or its content suppliers and is protected under Indian copyright law and applicable international treaties.

You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from this website without our prior written consent.

Architectural designs and drawings prepared by our team for your project remain the intellectual property of Saanidhya Builders until full and final payment is received for the relevant design services.`,
  },
  {
    id: 'website-use',
    title: '6. Acceptable Use of Website',
    body: `When using our website, you agree not to:

• Use the site for any unlawful purpose or in violation of any applicable laws
• Attempt to gain unauthorised access to any part of the website or our systems
• Transmit any harmful, offensive, defamatory, or spam content through our contact forms
• Scrape, crawl, or systematically extract data from our website without permission
• Impersonate any person or entity or misrepresent your affiliation with any person or entity
• Interfere with or disrupt the integrity or performance of the website

We reserve the right to terminate access for any user who violates these terms.`,
  },
  {
    id: 'warranties',
    title: '7. Warranties & Construction Guarantee',
    body: `Saanidhya Builders provides the following warranties on completed construction work:

• Structural warranty: 5 years from the date of handover covering defects in foundation, columns, beams, slabs, and load-bearing walls
• Plumbing and electrical: 1 year from handover for workmanship defects
• Waterproofing: 3 years from handover for terrace and bathroom waterproofing

These warranties cover defects arising from materials or workmanship under normal use conditions. They do not cover:
• Damage caused by misuse, negligence, or modifications made without our written approval
• Damage resulting from natural disasters, acts of God, or force majeure events
• Normal wear and tear

Warranty claims must be submitted in writing to ${EMAIL} within the warranty period.`,
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by applicable Indian law, Saanidhya Builders shall not be liable for:

• Any indirect, incidental, consequential, or punitive damages arising from your use of our website
• Errors or inaccuracies in website content (construction timelines, costs, or specifications shown on the website are illustrative and subject to formal agreement)
• Delays in construction caused by factors beyond our reasonable control, including regulatory delays, extreme weather, material supply disruptions, or labour disputes
• Loss of data or business interruption arising from website downtime

Our total liability under any construction contract shall not exceed the total value of the contract unless otherwise required by law.`,
  },
  {
    id: 'force-majeure',
    title: '9. Force Majeure',
    body: `Neither party shall be liable for delays or failure to perform obligations under a construction contract caused by events beyond reasonable control, including but not limited to:

• Natural disasters (floods, earthquakes, cyclones)
• Government-declared emergencies or lockdowns
• Strikes or labour disputes not involving our workforce
• Material shortages due to national or global supply chain disruption
• Acts of war, terrorism, or civil unrest

In such circumstances, we will notify you as soon as reasonably practicable and work together to reschedule affected milestones.`,
  },
  {
    id: 'dispute',
    title: '10. Dispute Resolution',
    body: `In the event of any dispute arising from our services or these Terms, both parties agree to first attempt resolution through good-faith negotiation within 30 days of the dispute arising.

If negotiation fails, disputes shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India). The arbitration shall be conducted in Coimbatore, Tamil Nadu, in the English language. The arbitrator's decision shall be final and binding.

For website-related disputes, the courts of Coimbatore, Tamil Nadu shall have exclusive jurisdiction.`,
  },
  {
    id: 'governing-law',
    title: '11. Governing Law',
    body: `These Terms of Service are governed by and construed in accordance with the laws of India, including the Indian Contract Act, 1872, the Consumer Protection Act, 2019, and other applicable legislation. The Real Estate (Regulation and Development) Act, 2016 (RERA) applies to applicable real estate projects.

Any legal action or proceeding arising from these Terms shall be brought exclusively in the courts of Coimbatore, Tamil Nadu, India.`,
  },
  {
    id: 'privacy',
    title: '12. Privacy',
    body: `Your use of our website and services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at www.saanidhyabuilders.com/privacy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    id: 'contact',
    title: '13. Contact Information',
    body: `For questions about these Terms of Service or our services, please contact us:

Company: ${COMPANY}
Address: ${ADDRESS}
Email: ${EMAIL}
Phone: ${PHONE}
Office hours: Monday – Saturday, 9:00 AM – 6:00 PM IST`,
  },
]

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
              <p className="font-montserrat text-xs font-semibold text-navy/40 uppercase
                tracking-widest mb-4">
                Contents
              </p>
              <nav className="space-y-1" aria-label="Table of contents">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="block font-montserrat text-sm text-navy/55 hover:text-orange
                      transition-colors py-1 leading-snug">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-navy/5">

            {/* Intro */}
            <p className="font-montserrat text-sm text-navy/65 leading-relaxed mb-10
              pb-10 border-b border-navy/8">
              These Terms of Service ("Terms") govern your use of the{' '}
              <a href={BASE} className="text-orange hover:underline">
                Saanidhya Builders website
              </a>{' '}
              and the construction services we provide. By using our website or engaging
              our services, you confirm that you have read, understood, and agree to be
              bound by these Terms and our{' '}
              <Link href="/privacy" className="text-orange hover:underline">
                Privacy Policy
              </Link>.
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-playfair font-bold text-navy text-xl mb-4 pb-2
                    border-b border-navy/8">
                    {section.title}
                  </h2>
                  <p className="font-montserrat text-sm text-navy/65 leading-relaxed
                    whitespace-pre-line">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-navy/8">
              <p className="font-montserrat text-xs text-navy/40 leading-relaxed">
                These Terms of Service were last updated on {LAST_UPDATED}. If you have
                any questions about these Terms, please contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="text-orange hover:underline">
                  {EMAIL}
                </a>.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom links */}
      <div className="border-t border-navy/8 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-6
          font-montserrat text-sm text-navy/50">
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-orange transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-orange transition-colors">Contact Us</Link>
          <a href={`mailto:${EMAIL}`} className="hover:text-orange transition-colors">{EMAIL}</a>
        </div>
      </div>
    </div>
  )
}
