import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Clock, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import company from '@/data/company.json'
import nav from '@/data/nav.json'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main grid — 3 columns */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-14 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/logo.png"
                alt={`${company.name} logo`}
                width={600} height={600}
                loading="lazy"
                style={{ height: '40px', width: '40px', objectFit: 'contain' }}
              />
              <div>
                <div className="font-playfair font-bold text-xl text-white">Saanidhya</div>
                <div className="font-montserrat text-xs text-orange tracking-[0.2em] uppercase">Builders</div>
              </div>
            </div>
            <p className="font-montserrat text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              {company.tagline}. Serving {company.serviceArea.city} since {company.founded}.
            </p>

            {/* Contact */}
            <ul className="space-y-2.5 mb-5">
              <li>
                <a href={`tel:${company.contact.phoneRaw}`}
                  className="flex items-center gap-2 font-montserrat text-sm text-white/55 hover:text-orange transition-colors">
                  <Phone size={13} className="text-orange flex-shrink-0" />
                  {company.contact.phone}
                </a>
              </li>
              <li>
                <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-montserrat text-sm text-white/55 hover:text-green-400 transition-colors">
                  <MessageCircle size={13} className="text-green-400 flex-shrink-0" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-2 font-montserrat text-sm text-white/55 hover:text-orange transition-colors">
                  <Mail size={13} className="text-orange flex-shrink-0" />
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={13} className="text-orange flex-shrink-0 mt-0.5" />
                <div className="font-montserrat text-sm text-white/55">
                  <span>{company.hours.weekdays}: {company.hours.time}</span>
                  <span className="block text-xs text-white/35">Sunday: {company.hours.sunday}</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={13} className="text-orange flex-shrink-0" />
                <span className="font-montserrat text-sm text-white/55">{company.serviceArea.display}</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {[
                { icon: Facebook,  href: company.social.facebook,  label: 'Facebook' },
                { icon: Instagram, href: company.social.instagram, label: 'Instagram' },
                { icon: Linkedin,  href: company.social.linkedin,  label: 'LinkedIn' },
                { icon: Youtube,   href: company.social.youtube,   label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center
                    justify-center text-white/50 hover:text-white hover:border-orange/40
                    hover:bg-orange/10 transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {nav.footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-montserrat text-sm text-white/50 hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {nav.footerServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}
                    className="font-montserrat text-sm text-white/50 hover:text-orange transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-xs text-white/30">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {nav.footerLegal.map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-montserrat text-xs text-white/30 hover:text-white/60 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
