'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Building2, Award, Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { icon: Building2, value: '500+', label: 'Projects Completed' },
  { icon: Award,     value: '15+',  label: 'Years Experience' },
  { icon: Users,     value: '1200+',label: 'Happy Clients' },
  { icon: Star,      value: '4.9',  label: 'Client Rating' },
]

function FloatingCard({ children, className, delay = 0 }: {
  children: React.ReactNode; className: string; delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    /*
      Use 100dvh height (not min-h) so the section is exactly the viewport height.
      This ensures the scroll arrow at bottom-6 is always visible in the viewport.
    */
    <section
      className="relative w-full bg-navy overflow-hidden flex flex-col"
      style={{ height: '100dvh', minHeight: '600px' }}
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
          alt="" aria-hidden="true"
          fill sizes="100vw"
          className="object-cover opacity-20"
          priority fetchPriority="high" quality={60}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60"
          aria-hidden="true" />
      </div>

      {/* Decorations */}
      <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: '#FF6A1A' }} aria-hidden="true" />
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Main content — flex-1 fills between top and scroll indicator */}
      <div className="relative flex-1 container mx-auto px-4 md:px-6 flex items-center"
        style={{ paddingTop: '80px' }}>
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange/30
                bg-orange/10 mb-6 self-start"
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" aria-hidden="true" />
              <span className="font-montserrat text-sm text-orange font-medium">
                #1 Construction Company in Coimbatore
              </span>
            </motion.div>

            {/* LCP h1 — CSS animation, no initial opacity:0 JS dependency */}
            <h1
              className="font-playfair font-bold text-white leading-[1.1] mb-5 hero-headline"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)' }}
            >
              Building{' '}
              <span className="gradient-text">Dreams</span>
              {' '}with
              <br />
              <span className="text-white">Quality &amp;</span>{' '}
              <span className="gradient-text italic">Trust</span>
            </h1>

            <p
              className="font-montserrat text-base md:text-lg leading-relaxed mb-8 max-w-xl hero-subline"
              style={{ color: 'rgba(255,255,255,0.78)' }}
            >
              Saanidhya Builders delivers premium residential and commercial construction
              services in Coimbatore with expert planning and turnkey execution that brings
              your vision to life.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/contact" className="btn-primary text-sm">
                Get Free Consultation <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/projects" className="btn-secondary text-sm">
                <Play size={14} className="fill-current" aria-hidden="true" />
                View Our Projects
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" role="list" aria-label="Company statistics">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                  role="listitem"
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <Icon size={14} className="text-orange flex-shrink-0" aria-hidden="true" />
                    <span className="font-playfair font-bold text-xl text-white">{value}</span>
                  </div>
                  <p className="font-montserrat text-xs" style={{ color: 'rgba(255,255,255,0.52)' }}>
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: decorative image — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '520px' }}>
              <Image
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
                alt="Luxury residential villa construction by Saanidhya Builders Coimbatore"
                fill sizes="(max-width:1200px) 50vw, 560px"
                className="object-cover"
                loading="lazy" quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"
                aria-hidden="true" />
            </div>

            <FloatingCard delay={0.5}
              className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Building2 size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-playfair font-bold text-navy text-lg">500+</div>
                  <div className="font-montserrat text-xs" style={{ color: 'rgba(11,15,59,.6)' }}>
                    Projects Done
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.65}
              className="absolute -right-6 bottom-1/4 bg-navy border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div aria-hidden="true">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-orange text-orange" />
                  ))}
                </div>
                <div className="font-montserrat text-xs" style={{ color: 'rgba(255,255,255,.72)' }}>
                  Trusted by 1200+ clients
                </div>
                <div className="font-playfair font-bold text-white text-sm mt-1">across Coimbatore</div>
              </div>
            </FloatingCard>

            <div className="absolute -inset-0.5 rounded-2xl gradient-bg opacity-20 -z-10 blur-sm"
              aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      {/* 
        Scroll indicator — sits at the very bottom of the section (not inside flex-1).
        Because the section is exactly 100dvh, this will always be visible in the viewport.
      */}
      <div className="relative z-10 flex flex-col items-center gap-2 pb-6 pt-2 pointer-events-none"
        aria-hidden="true">
        <span className="font-montserrat text-xs uppercase tracking-widest"
          style={{ color: 'rgba(255,255,255,.35)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-7 gradient-bg rounded-full"
        />
      </div>
    </section>
  )
}
