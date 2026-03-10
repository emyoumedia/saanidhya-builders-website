'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/services',     label: 'Services' },
  { href: '/projects',     label: 'Projects' },
  { href: '/process',      label: 'Process' },
  { href: '/blog',         label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact' },
]

/*
  Pages whose hero is dark navy — navbar starts transparent and blends in.
  All other pages (blog, category, tag, about, services, etc.) — navbar must
  always show a solid navy background so white text is readable over light bg.
*/
const DARK_HERO_ROUTES = ['/', '/projects', '/about', '/services', '/process', '/testimonials', '/contact']

function routeHasDarkHero(pathname: string): boolean {
  // Exact matches
  if (DARK_HERO_ROUTES.includes(pathname)) return true
  // Construction cost pages have dark hero too
  if (pathname.startsWith('/construction-cost/')) return true
  return false
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const hasDarkHero = routeHasDarkHero(pathname)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    // Reset on route change
    setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  /*
    Solid navy when:
    - scrolled on any page
    - mobile menu is open
    - on a page that does NOT have a dark hero (e.g. /blog, /blog/[slug], category, tag pages)
    Transparent only when: at the top of a page that has a dark-navy hero
  */
  const showSolid = isScrolled || isMobileOpen || !hasDarkHero

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 outline-none border-none ${
          showSolid ? 'py-3 shadow-lg' : 'py-4'
        }`}
        style={{
          backgroundColor: showSolid ? 'rgba(11,15,59,0.97)' : 'transparent',
          backdropFilter:   showSolid ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: showSolid ? 'blur(14px)' : 'none',
          borderTop:    'none',
          borderBottom: 'none',
        }}
      >
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0"
            aria-label="Saanidhya Builders home">
            <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo/logo.png"
                alt="Saanidhya Builders logo"
                width={48}
                height={48}
                className="h-11 w-auto object-contain"
                priority
                style={{ height: '44px', width: 'auto' }}
              />
            </div>
            <div>
              <div className="font-playfair font-bold text-xl text-white leading-none">Saanidhya</div>
              <div className="font-montserrat text-xs text-orange tracking-[0.2em] uppercase leading-none mt-0.5">
                Builders
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3.5 py-2 font-montserrat text-sm font-medium
                      transition-all duration-300 rounded-full ${
                      isActive ? 'text-orange' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 gradient-bg rounded-full"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Free Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl
              text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="container mx-auto px-4 py-5">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map((link, i) => {
                    const isActive = link.href === '/'
                      ? pathname === '/'
                      : pathname === link.href || pathname.startsWith(link.href + '/')
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center px-4 py-3 rounded-xl font-montserrat
                            text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'text-orange bg-white/5'
                              : 'text-white/80 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-orange mr-3 flex-shrink-0"
                              aria-hidden="true" />
                          )}
                          {link.label}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
                <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm"
                    onClick={() => setIsMobileOpen(false)}>
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: 'rgba(11,15,59,0.55)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
