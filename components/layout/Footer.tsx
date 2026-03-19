import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { company, navData as nav } from '@/data'

// ── Types ──────────────────────────────────────────────
type NavItem = { href: string; label: string }

// ── Google Business Icon ───────────────────────────────
const GmbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

// ── Social config ──────────────────────────────────────
const SOCIALS = [
  { icon: Facebook,  key: 'facebook',  label: 'Facebook'  },
  { icon: Instagram, key: 'instagram', label: 'Instagram' },
  { icon: Linkedin,  key: 'linkedin',  label: 'LinkedIn'  },
  { icon: Youtube,   key: 'youtube',   label: 'YouTube'   },
]

// Safe URL resolver — filters out placeholder values
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

// ── Footer ─────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Main grid ── */}
        <div className="py-10 border-b border-white/8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* 1 — Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/logo/logo.png"
                  alt={`${company.name} logo`}
                  width={36}
                  height={36}
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
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={socialIconClass}
                    >
                      <Icon size={14} />
                    </a>
                  )
                })}

                {gmbUrl && (
                  <a
                    href={gmbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Business Profile"
                    className={socialIconClass}
                  >
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
                  { href: '/residential-construction-coimbatore', label: 'Residential Construction' },
                  { href: '/commercial-construction-coimbatore',  label: 'Commercial Construction'  },
                  { href: '/construction-company-coimbatore',     label: 'House Construction'       },
                  { href: '/builders-coimbatore',                 label: 'Turnkey Construction'     },
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

            {/* 3 — Locations */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Locations</h3>
              <ul className="space-y-2">
                {[
                  { href: '/construction-company-coimbatore', label: 'Builders in Coimbatore'      },
                  { href: '/construction-cost/coimbatore',    label: 'Construction Cost Coimbatore' },
                  { href: '/construction-cost/chennai',       label: 'Construction Cost Chennai'    },
                  { href: '/construction-cost/bangalore',     label: 'Construction Cost Bangalore'  },
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

            {/* 4 — Contact */}
            <div>
              <h3 className="text-xs uppercase text-white/60 mb-4 tracking-wider">Contact</h3>
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${company.contact.phoneRaw}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors"
                >
                  <Phone size={12} />
                  {company.contact.phoneDisplay}
                </a>
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={12} />
                  WhatsApp Us
                </a>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors"
                >
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
              <Link
                key={href}
                href={href}
                className="font-montserrat text-[11px] text-white/35 hover:text-white/60 transition-colors"
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