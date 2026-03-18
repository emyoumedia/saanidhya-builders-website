import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { company, navData as nav } from '@/data'

const GmbIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const SOCIALS = [
  { icon: Facebook,  key: 'facebook',  label: 'Facebook'  },
  { icon: Instagram, key: 'instagram', label: 'Instagram' },
  { icon: Linkedin,  key: 'linkedin',  label: 'LinkedIn'  },
  { icon: Youtube,   key: 'youtube',   label: 'YouTube'   },
].filter(({ key }) => {
  const val = company.social[key as keyof typeof company.social]
  return !!val && val !== null
})

const hasGmb = !!(company.social as Record<string, unknown>).gmbLink

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Main grid: 2 cols mobile, 4 cols desktop ── */}
        <div className="py-8 border-b border-white/8">

          {/* Row 1: Brand full width on mobile */}
          <div className="mb-7">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Image
                src="/logo/logo.png"
                alt={`${company.name} logo`}
                width={32} height={32}
                loading="lazy"
                className="object-contain rounded-md"
              />
              <div>
                <div className="font-playfair font-bold text-base text-white leading-tight">Saanidhya</div>
                <div className="font-montserrat text-[10px] text-orange tracking-[0.18em] uppercase">Builders</div>
              </div>
            </div>
            <p className="font-montserrat text-[11px] text-white/40 leading-relaxed mb-3 max-w-xs">
              {company.tagline}. Serving {company.serviceArea.city} since {company.founded}.
            </p>
            {/* Socials */}
            {SOCIALS.length > 0 && (
              <div className="flex items-center gap-1.5 mb-2.5">
                {SOCIALS.map(({ icon: Icon, key, label }) => (
                  <a key={label}
                    href={company.social[key as keyof typeof company.social] as string}
                    target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange/40 hover:bg-orange/10 transition-all duration-200">
                    <Icon size={13} />
                  </a>
                ))}
                {hasGmb && (
                  <a href={(company.social as Record<string, unknown>).gmbLink as string}
                    target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile"
                    className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange/40 hover:bg-orange/10 transition-all duration-200">
                    <GmbIcon />
                  </a>
                )}
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <MapPin size={10} className="text-orange flex-shrink-0" />
              <p className="font-montserrat text-[10px] text-white/30">
                Service Area Business — {company.serviceArea.display}
              </p>
            </div>
          </div>

          {/* Row 2: 3 equal columns — Contact, Pages, Services */}
          <div className="grid grid-cols-3 gap-4">

            {/* Contact */}
            <div>
              <h3 className="font-montserrat font-bold text-[10px] text-white/35 uppercase tracking-[0.15em] mb-3">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href={`tel:${company.contact.phoneRaw}`}
                    className="flex items-center gap-1.5 font-montserrat text-[11px] text-white/50 hover:text-orange transition-colors">
                    <Phone size={10} className="text-orange flex-shrink-0" />
                    {company.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-montserrat text-[11px] text-white/50 hover:text-green-400 transition-colors">
                    <MessageCircle size={10} className="text-green-400 flex-shrink-0" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.contact.email}`}
                    className="flex items-center gap-1.5 font-montserrat text-[11px] text-white/50 hover:text-orange transition-colors break-all">
                    <Mail size={10} className="text-orange flex-shrink-0" />
                    <span className="break-all">{company.contact.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-1.5">
                  <Clock size={10} className="text-orange flex-shrink-0 mt-0.5" />
                  <span className="font-montserrat text-[11px] text-white/40 leading-snug">
                    {company.hours.weekdays}<br />{company.hours.time}
                  </span>
                </li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-montserrat font-bold text-[10px] text-white/35 uppercase tracking-[0.15em] mb-3">
                Pages
              </h3>
              <ul className="space-y-2">
                {nav.footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="font-montserrat text-[11px] text-white/50 hover:text-orange transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-montserrat font-bold text-[10px] text-white/35 uppercase tracking-[0.15em] mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                {nav.footerServices.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href}
                      className="font-montserrat text-[11px] text-white/50 hover:text-orange transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-montserrat text-[10px] text-white/20">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {nav.footerLegal.map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-montserrat text-[10px] text-white/20 hover:text-white/45 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}