'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, BadgeIndianRupee, ArrowRight } from 'lucide-react'
import { company, navData as nav } from '@/data'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
type NavItem = { href: string; label: string }

const GmbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const SOCIALS = [
  { icon: FaFacebook,  key: 'facebook',  label: 'Facebook'  },
  { icon: FaInstagram, key: 'instagram', label: 'Instagram' },
  { icon: FaLinkedin,  key: 'linkedin',  label: 'LinkedIn'  },
  { icon: FaYoutube,   key: 'youtube',   label: 'YouTube'   },
]

function getSocialUrl(key: string): string | null {
  const val = company.social[key as keyof typeof company.social]
  if (typeof val !== 'string') return null
  if (val.trim() === '') return null
  if (val.includes('REPLACE')) return null
  return val
}

const gmbUrl = getSocialUrl('gmbLink')

const socialIconClass =
  'w-8 h-8 rounded-full bg-white/6 border border-white/12 flex items-center justify-center text-white/55 hover:text-white hover:border-orange/50 hover:bg-orange/10 transition-all duration-200'

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleServiceClick = (id: string) => {
  sessionStorage.setItem('openServiceId', id)
  if (pathname === '/services') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openService', { detail: { id } }))
    }, 400) // wait for scroll to finish
  } else {
    router.push('/services')
  }
}

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Partner Program Banner ── */}
        {/* <div className="pt-10 pb-8 border-b border-white/8">
          <div
            className="rounded-2xl px-6 py-5 sm:px-8 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden"
            style={{ background: 'rgba(122,46,255,0.10)', border: '1px solid rgba(122,46,255,0.20)' }}
          > */}
            {/* Blob */}
            {/* <div
              className="absolute right-0 top-0 w-48 h-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at right,rgba(255,106,26,0.12),transparent 70%)' }}
            />

            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: GRAD }}
            >
              <BadgeIndianRupee size={18} className="text-white" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <p className="font-montserrat font-bold text-white text-sm mb-0.5">
                Earn With Saanidhya — Partner Program
              </p>
              <p className="font-montserrat text-white/50 text-xs leading-relaxed">
                Refer construction clients and earn commission. Free to join, no investment.
              </p>
            </div>

            <Link
              href="/partner"
              className="inline-flex items-center gap-1.5 font-montserrat font-bold text-xs text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity flex-shrink-0 relative"
              style={{ background: GRAD }}
            >
              Learn More <ArrowRight size={12} />
            </Link>
          </div>
        </div> */}

        {/* ── Main grid ── */}
        <div className="py-10 border-b border-white/8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* 1 — Brand (spans 2 cols on lg) */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/logo/logo.png"
                  alt={`${company.name} logo`}
                  width={36} height={36}
                  className="rounded-lg"
                />
                <div>
                  <div className="font-playfair font-bold text-base">Saanidhya</div>
                  <div className="text-[10px] text-orange uppercase tracking-wider">Builders</div>
                </div>
              </div>

              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                {company.tagline}. Serving {company.serviceArea.city} since {company.founded}.
              </p>

              {/* Socials */}
              <div className="flex items-center gap-2 mb-4">
                {SOCIALS.map(({ icon: Icon, key, label }) => {
                  const url = getSocialUrl(key)
                  if (!url) return null
                  return (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                      aria-label={label} className={socialIconClass}>
                      <Icon size={14} />
                    </a>
                  )
                })}
                {gmbUrl && (
                  <a href={gmbUrl} target="_blank" rel="noopener noreferrer"
                    aria-label="Google Business Profile" className={socialIconClass}>
                    <GmbIcon />
                  </a>
                )}
              </div>

              <p className="text-[11px] text-white/40">
                Trusted construction company in {company.serviceArea.city}
              </p>
            </div>

            {/* 2 — Services */}
           <div>
            <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
              { id: 'residential',        label: 'Residential Construction' },
              { id: 'commercial',         label: 'Commercial Construction'  },
              { id: 'house-construction', label: 'House Construction'       },
              { id: 'turnkey',            label: 'Turnkey Construction'     },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => handleServiceClick(id)}
                  className="text-xs text-white/60 hover:text-orange hover:translate-x-1 transition-all duration-200 inline-block text-left"
                >
                  {label}
                </button>
              </li>
            ))}
            </ul>
          </div>

            {/* 3 — Locations */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Pages</h3>
              <ul className="space-y-2">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About Us' },
                    { href: '/services', label: 'Services' },
                    { href: '/projects', label: 'Projects' },
                    { href: '/contact', label: 'Contact' },
                  ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href}
                      className="text-xs text-white/60 hover:text-orange hover:translate-x-1 transition-all duration-200 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}

                {/* Partner link */}
                {/* <li className="pt-2 mt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <Link href="/partner"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:opacity-80 transition-opacity"
                    style={{ color: '#FF6A1A' }}>
                    <BadgeIndianRupee size={11} />
                    Partner Program
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* 4 — Contact */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Contact</h3>
              <div className="space-y-3 text-xs">
                <a href={`tel:${company.contact.phoneRaw}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors">
                  <Phone size={12} />
                  {company.contact.phoneDisplay}
                </a>
                <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors">
                  <MessageCircle size={12} />
                  WhatsApp Us
                </a>
                <a href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors">
                  <Mail size={12} />
                  {company.contact.email}
                </a>
                <div className="flex items-start gap-2 text-white/50">
                  <Clock size={12} className="mt-0.5 flex-shrink-0" />
                  <span>
                    {company.hours.weekdays}<br />
                    {company.hours.time}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-[11px] text-white/35">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {(nav.footerLegal as NavItem[]).map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-montserrat text-[11px] text-white/35 hover:text-white/60 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}