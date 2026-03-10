import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-95" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)'
      }} />

      <div className="relative container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection>
          <span className="inline-block font-montserrat text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
            Get Started Today
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Build Your
            <br />
            <span className="italic">Dream Project?</span>
          </h2>
          <p className="font-montserrat text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Talk to our experts today for a free consultation. Let us bring your vision to life
            with Coimbatore's most trusted builders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-montserrat font-bold text-sm hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-montserrat font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              <Phone size={16} />
              +91 98765 43210
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
