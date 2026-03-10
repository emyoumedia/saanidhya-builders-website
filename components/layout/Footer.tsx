import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'

const quickLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About Us' },
  { href: '/services',     label: 'Services' },
  { href: '/projects',     label: 'Projects' },
  { href: '/process',      label: 'Our Process' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog',         label: 'Blog' },
  { href: '/faq',           label: 'FAQ' },
  { href: '/contact',      label: 'Contact' },
]

const services = [
  { label: 'Residential Construction', href: '/services' },
  { label: 'Commercial Construction',  href: '/services' },
  { label: 'Architectural Design',     href: '/services' },
  { label: 'Turnkey Construction',     href: '/services' },
  { label: 'Renovation & Remodeling',  href: '/services' },
  { label: 'Interior Design',          href: '/services' },
]

const resourceLinks = [
  { href: '/construction-company-coimbatore', label: 'Construction Company Coimbatore' },
  { href: '/builders-coimbatore',              label: 'Builders in Coimbatore' },
  { href: '/residential-construction-coimbatore', label: 'Residential Construction' },
  { href: '/blog',                             label: 'Construction Blog' },
  { href: '/blog/category/construction',              label: 'Construction Guides' },
  { href: '/blog/category/interior-design',           label: 'Interior Design Tips' },
  { href: '/blog/category/legal',                     label: 'Permits & Approvals' },
  { href: '/construction-cost/coimbatore',            label: 'Cost in Coimbatore' },
  { href: '/construction-cost/chennai',               label: 'Cost in Chennai' },
  { href: '/construction-cost/bangalore',             label: 'Cost in Bangalore' },
  { href: '/construction-cost/madurai',               label: 'Cost in Madurai' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,#FF6A1A,#7A2EFF)' }} aria-hidden="true" />

      <div className="relative container mx-auto px-4 md:px-6">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="Saanidhya Builders logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  style={{ height: '42px', width: 'auto' }}
                  loading="lazy"
                />
              </div>
              <div>
                <div className="font-playfair font-bold text-2xl text-white">Saanidhya</div>
                <div className="font-montserrat text-xs text-orange tracking-[0.2em] uppercase">Builders</div>
              </div>
            </div>
            <p className="font-montserrat text-sm text-white/55 leading-relaxed mb-6 max-w-xs">
              Building Dreams with Quality and Trust. Premium construction services across
              Coimbatore and Tamil Nadu since 2009.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Facebook,  href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin,  href: '#', label: 'LinkedIn' },
                { icon: Youtube,   href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center
                    justify-center text-white/55 hover:text-white hover:border-orange/50
                    hover:bg-orange/10 transition-all duration-300">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            {/* Contact quick */}
            <div className="space-y-2">
              <a href="tel:+919876543210"
                className="flex items-center gap-2 font-montserrat text-sm text-white/55
                  hover:text-orange transition-colors">
                <Phone size={14} className="text-orange flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="mailto:info@saanidhyabuilders.com"
                className="flex items-center gap-2 font-montserrat text-sm text-white/55
                  hover:text-orange transition-colors">
                <Mail size={14} className="text-orange flex-shrink-0" />
                info@saanidhyabuilders.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-base text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-montserrat text-sm text-white/55 hover:text-orange
                      transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight size={11}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1
                        group-hover:translate-x-0 transition-all duration-200 text-orange flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources / Blog */}
          <div>
            <h3 className="font-playfair font-bold text-base text-white mb-5">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-montserrat text-sm text-white/55 hover:text-orange
                      transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight size={11}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1
                        group-hover:translate-x-0 transition-all duration-200 text-orange flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h3 className="font-playfair font-bold text-base text-white mb-5">Find Us</h3>
            <ul className="space-y-3 mb-5">
              <li className="flex gap-3">
                <MapPin size={16} className="text-orange flex-shrink-0 mt-0.5" />
                <span className="font-montserrat text-sm text-white/55 leading-relaxed">
                  42, Avinashi Road, Coimbatore, Tamil Nadu 641018
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-orange flex-shrink-0" />
                <span className="font-montserrat text-sm text-white/55">Mon–Sat: 9 AM – 6 PM</span>
              </li>
            </ul>
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.03452844!2d76.88209715!3d11.01682165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%" height="130"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saanidhya Builders Location"
              />
            </div>
            {/* Services list small */}
            <div className="mt-5">
              <h4 className="font-playfair font-semibold text-sm text-white/70 mb-3">Our Services</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <Link key={s.label} href={s.href}
                    className="font-montserrat text-xs text-white/45 px-2.5 py-1 rounded-full
                      border border-white/10 hover:border-orange/40 hover:text-orange transition-all">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-montserrat text-xs text-white/35 text-center sm:text-left">
            © {new Date().getFullYear()} Saanidhya Builders. All rights reserved. Coimbatore, Tamil Nadu.
          </p>
          <div className="flex items-center gap-5">
            {[
              { href:'/privacy', label:'Privacy Policy' },
              { href:'/terms',   label:'Terms of Service' },
              { href:'/sitemap.xml', label:'Sitemap' },
            ].map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-montserrat text-xs text-white/35 hover:text-white/65 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
