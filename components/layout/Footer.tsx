'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { company, navData as nav, servicesData } from '@/data'

type NavItem = { href: string; label: string }

const SOCIALS = [
  { icon: Facebook,  key: 'facebook',  label: 'Facebook'  },
  { icon: Instagram, key: 'instagram', label: 'Instagram' },
  { icon: Linkedin,  key: 'linkedin',  label: 'LinkedIn'  },
  { icon: Youtube,   key: 'youtube',   label: 'YouTube'   },
]

function getSocialUrl(key: string): string | null {
  const val = company.social[key as keyof typeof company.social]
  if (typeof val !== 'string') return null
  if (val.trim() === '' || val.includes('REPLACE')) return null
  return val
}

/**
 * Clicking a service link:
 * 1. Writes the service id to sessionStorage so ServicesPage reads it on mount.
 * 2. Navigates via a normal <a href> — no useRouter, no hydration mismatch.
 *    The hash in the href is a fallback; sessionStorage is the primary signal.
 */
function ServiceLink({ serviceId, label }: { serviceId: string; label: string }) {
  const href = `/services#service-${serviceId}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Write flag before navigation so ServicesPage sees it on mount
    try { sessionStorage.setItem('openServiceId', serviceId) } catch {}
    // Let the browser follow the <a href> normally (no e.preventDefault)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-xs text-white/60 hover:text-orange hover:translate-x-1 transition-all duration-200 inline-block"
    >
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* MAIN */}
        <div className="py-10 border-b border-white/8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image src="/logo/logo.png" alt="logo" width={36} height={36} />
                <div>
                  <div className="font-playfair font-bold text-base">Saanidhya</div>
                  <div className="text-[10px] text-orange uppercase tracking-wider">Builders</div>
                </div>
              </div>

              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                {company.tagline}. Serving {company.serviceArea.city} since {company.founded}.
              </p>

              {/* SOCIAL */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {SOCIALS.map(({ icon: Icon, key, label }) => {
                  const url = getSocialUrl(key)
                  if (!url) return null
                  return (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/6 border border-white/12 flex items-center justify-center text-white/55 hover:text-white hover:border-orange/50 hover:bg-orange/10 transition-all duration-200"
                    >
                      <Icon size={14} />
                    </a>
                  )
                })}
              </div>

              <p className="text-[11px] text-white/40">
                Trusted construction company in {company.serviceArea.city}
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Services</h3>
              <ul className="space-y-2">
                {(servicesData as any[]).slice(0, 7).map((s) => (
                  <li key={s.id}>
                    <ServiceLink serviceId={s.id} label={s.title} />
                  </li>
                ))}
              </ul>
            </div>

            {/* PAGES */}
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
                    <Link
                      href={href}
                      className="text-xs text-white/60 hover:text-orange hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Contact</h3>
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${company.contact.phoneRaw}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange"
                >
                  <Phone size={12} /> {company.contact.phoneDisplay}
                </a>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-green-400"
                >
                  <MessageCircle size={12} /> WhatsApp Us
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange"
                >
                  <Mail size={12} /> {company.contact.email}
                </a>
                <div className="flex items-start gap-2 text-white/50">
                  <Clock size={12} />
                  <span>{company.hours.time}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {(nav.footerLegal as NavItem[]).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] text-white/35 hover:text-white/60"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}