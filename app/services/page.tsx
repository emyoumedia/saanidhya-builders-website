import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Building2, Palette, LayoutDashboard, Key, Hammer, CheckCircle2, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/services',
  },
  title: 'Construction Services – Saanidhya Builders Coimbatore',
  description:
    'Comprehensive construction services in Coimbatore: Residential Construction, Commercial Construction, Architectural Design, Turnkey Projects, Renovation & Remodeling.',
}

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'We build dream homes that reflect your personality and lifestyle. From cozy 2BHK apartments to sprawling luxury villas, our residential construction services in Coimbatore are tailored to your vision and budget.',
    benefits: ['Custom floor plans', 'Premium material sourcing', 'Vastu-compliant designs', '5-year structural warranty', 'Landscaping included'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    color: '#7A2EFF',
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'From IT parks to retail malls, our commercial construction expertise ensures functional, modern, and impressive structures that meet business demands and inspire productivity.',
    benefits: ['LEED-certified options', 'Smart building integration', 'Compliance management', 'Scalable designs', 'Dedicated project manager'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    color: '#FF6A1A',
  },
  {
    icon: Palette,
    title: 'Architectural Design',
    description: 'Our award-winning architects blend form and function to create spaces that are as beautiful as they are practical. We use cutting-edge 3D visualization to bring your ideas to life before construction begins.',
    benefits: ['3D architectural renderings', 'Interior design integration', 'Structural engineering', 'Sustainable design options', 'Regulatory approvals'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    color: '#7A2EFF',
  },
  {
    icon: LayoutDashboard,
    title: 'Planning & Layout',
    description: 'Our planning experts handle every aspect from site analysis to detailed layout drawings, ensuring optimal space utilization, structural integrity, and compliance with all local regulations.',
    benefits: ['Site feasibility analysis', 'DTCP/CMDA approvals', 'Space optimization', 'Utility planning', 'Environmental assessment'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#FF6A1A',
  },
  {
    icon: Key,
    title: 'Turnkey Construction',
    description: 'Our most comprehensive service — you hand us the concept, we deliver you the keys. Saanidhya Builders manages every aspect of your project from procurement to handover.',
    benefits: ['End-to-end project management', 'Single point of contact', 'Cost-effective procurement', 'Quality control at every stage', 'Move-in ready delivery'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    color: '#7A2EFF',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into your existing property. Our renovation experts can modernize, expand, or completely transform your home or office with minimal disruption.',
    benefits: ['Structural assessment', 'Modern upgrades', 'Minimal downtime', 'Budget-friendly options', 'Post-renovation warranty'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    color: '#FF6A1A',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Construction services" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">What We Offer</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Construction <span className="gradient-text">Services</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive building solutions for residential and commercial projects across Coimbatore.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, i) => {
              const Icon = service.icon
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={service.title}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={!isEven ? 'lg:order-2' : ''}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '420px' }}>
                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      </div>
                    </div>
                    <div className={!isEven ? 'lg:order-1' : ''}>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg" style={{ background: service.color }}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">{service.title}</h2>
                      <p className="font-montserrat text-navy/60 leading-relaxed mb-6">{service.description}</p>
                      <div className="space-y-3 mb-8">
                        <h3 className="font-montserrat font-semibold text-navy text-sm uppercase tracking-wider">Key Benefits</h3>
                        {service.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-orange flex-shrink-0" />
                            <span className="font-montserrat text-sm text-navy/70">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary">
                        Get a Quote <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
