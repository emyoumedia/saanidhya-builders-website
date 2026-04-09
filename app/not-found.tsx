import Link from 'next/link'
import { ArrowRight, MapPin, Home, Phone } from 'lucide-react'
import { company } from '@/data'

const QUICK_LINKS = [
  { label: 'View Our Projects', href: '/projects', icon: Home },
  { label: 'Our Services',      href: '/services', icon: MapPin },
  { label: 'Contact Us',        href: '/contact',  icon: Phone },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col overflow-hidden">

      {/* ── Top navy bar (matches hero sections across site) ── */}
      <section className="bg-navy relative overflow-hidden flex-1 flex items-center justify-center py-24 md:py-32">

        {/* Grid texture — same as ProjectsPage hero */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient blobs */}
        <div
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: '#7A2EFF' }}
        />
        <div
          className="absolute -bottom-20 -right-10 w-[360px] h-[360px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: '#FF6A1A' }}
        />

        <div className="relative container mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-2xl">

          {/* Big 404 */}
          <div className="relative mb-6 select-none leading-none">
            <span
              className="font-playfair font-bold text-white/[0.04] pointer-events-none"
              style={{ fontSize: 'clamp(9rem, 28vw, 18rem)', lineHeight: 1 }}
              aria-hidden="true"
            >
              404
            </span>
            {/* Centred overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              {/* Tape / label badge */}
              <span className="inline-flex items-center gap-2 font-montserrat text-xs font-bold text-orange uppercase tracking-widest px-4 py-2 rounded-full border border-orange/30 bg-orange/10">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                Page Not Found
              </span>
              <h1
                className="font-playfair font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)' }}
              >
                This page is still{' '}
                <span className="gradient-text italic">under construction</span>
              </h1>
            </div>
          </div>

          <p className="font-montserrat text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Even the best blueprints have gaps. This page hasn't been built yet —
            but our homes always are, on time and to the finest finish.
          </p>

          {/* Primary CTA row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
            <Link href="/" className="btn-primary">
              <Home size={15} />
              Back to Home
              <ArrowRight size={15} />
            </Link>
            <a
              href={company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/10 mb-8" />

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-center gap-2 font-montserrat text-sm font-semibold text-white/55
                  bg-white/5 border border-white/10 rounded-xl px-4 py-3
                  hover:bg-white/10 hover:text-white hover:border-white/20
                  transition-all duration-200"
              >
                <Icon size={13} className="flex-shrink-0 text-orange group-hover:scale-110 transition-transform duration-200" />
                {label}
                <ArrowRight size={11} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── Bottom cream strip — error code + brand ── */}
      <div className="bg-cream border-t border-navy/6 py-5 px-4">
        <div className="container mx-auto max-w-2xl flex items-center justify-between gap-4 flex-wrap">
          <p className="font-montserrat text-xs text-navy/35">
            Error 404 · {company.name ?? 'Saanidhya Builders'}
          </p>
          <p className="font-montserrat text-xs text-navy/35">
            Need help?{' '}
            <a
              href={`tel:${company.contact.phone}`}
              className="text-orange hover:underline font-semibold"
            >
              {company.contact.phone}
            </a>
          </p>
        </div>
      </div>

    </main>
  )
}