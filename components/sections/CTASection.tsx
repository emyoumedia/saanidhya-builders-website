import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import company from '@/data/company.json'

export default function CTASection() {
  const { cta } = company.copy

  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)' }}
      aria-labelledby="cta-heading">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)' }}
        aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block font-montserrat text-xs font-bold text-white/60 uppercase tracking-[0.18em] mb-5">
            {cta.badge}
          </span>
          <h2 id="cta-heading"
            className="font-playfair font-bold text-white leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)' }}>
            {cta.heading}<br />
            <span className="italic">{cta.headingItalic}</span>
          </h2>
          <p className="font-montserrat text-white/70 text-base mb-10 max-w-md mx-auto">
            {cta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-montserrat font-bold text-sm hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center">
              {cta.ctaPrimary}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/50 text-white font-montserrat font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>
              {cta.ctaSecondary}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}