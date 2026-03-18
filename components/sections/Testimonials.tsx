import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import company from '@/data/company.json'

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function TrustSection() {
  const { trust } = company.copy

  const TRUST_ITEMS = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
      value: company.stats.projectsCompleted,
      label: 'Projects Completed',
      sub: `${trust.locationSub} ${company.serviceArea.city}`,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      value: company.stats.yearsExperience,
      label: 'Years in Business',
      sub: `${company.stats.projectsOngoing} ${trust.ongoingLabel}`,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      value: company.warranty.structural,
      label: 'Structural Warranty',
      sub: `${company.warranty.waterproofing} waterproofing`,
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
      value: trust.deliveryValue,
      label: trust.deliveryLabel,
      sub: trust.deliverySub,
    },
  ]

  return (
    <section className="py-20 bg-cream" id="trust" aria-labelledby="trust-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {trust.badge}
            </span>
            <h2 id="trust-heading"
              className="font-playfair font-bold text-navy leading-[1.2] mb-3"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              {trust.heading}
            </h2>
            <p className="font-montserrat text-navy/50 text-sm max-w-md mx-auto leading-relaxed">
              {trust.subheading}
            </p>
          </div>
        </AnimatedSection>

        {/* 4 stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 items-stretch">
          {TRUST_ITEMS.map((item, i) => (
            <div key={item.label} className="flex flex-col">
              <AnimatedSection delay={i * 0.07} className="flex flex-col flex-1">
                <div className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl border border-navy/8 bg-white shadow-sm flex-1 min-h-[150px]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: GRAD }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-playfair font-bold text-navy text-2xl leading-none mb-1">{item.value}</div>
                    <div className="font-montserrat font-semibold text-navy text-xs mb-0.5">{item.label}</div>
                    <div className="font-montserrat text-navy/40 text-xs">{item.sub}</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Honest message + Google review CTA */}
        <AnimatedSection>
          <div className="rounded-2xl border border-navy/8 bg-white p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="font-playfair font-bold text-navy text-lg mb-1">
                {trust.ctaCard.heading}
              </p>
              <p className="font-montserrat text-navy/50 text-sm leading-relaxed max-w-sm">
                {trust.ctaCard.body}
              </p>
            </div>
            <a href={company.contact.googleReviewLink}
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ background: GRAD }}>
              <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {trust.ctaCard.btnLabel}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-center font-montserrat text-navy/40 text-sm mt-8">
            {trust.projectsRedirect}{' '}
            <Link href="/projects" className="text-orange font-semibold hover:underline">
              {trust.projectsLink}
            </Link>
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}