'use client'

import Image from 'next/image'
import { CheckCircle2, Award, Clock, ShieldCheck, Wrench, HeartHandshake } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const features = [
  {
    icon: Award,
    title: '15+ Years of Excellence',
    description: 'Decades of experience building trust in Coimbatore\'s construction industry.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We honor our commitments — your project delivered on schedule, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'Premium materials, certified engineers, and rigorous quality control at every step.',
  },
  {
    icon: Wrench,
    title: 'Expert Team',
    description: '200+ skilled professionals including architects, engineers, and craftsmen.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-First Approach',
    description: 'Your vision drives every decision. We are your trusted construction partners.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear, upfront pricing with detailed project breakdowns.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: '#FF6A1A' }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <AnimatedSection>
              <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                Why Choose Us
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Coimbatore's Most{' '}
                <span className="gradient-text">Trusted</span>{' '}
                Builders
              </h2>
              <p className="font-montserrat text-white/60 leading-relaxed mb-10">
                For over 15 years, Saanidhya Builders has been transforming visions into reality
                across Coimbatore and Tamil Nadu. Our commitment to quality, integrity, and
                innovation sets us apart from the rest.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <AnimatedSection key={feature.title} delay={i * 0.1}>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange/40 group-hover:bg-orange/10 transition-all duration-300">
                        <Icon size={20} className="text-orange" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-white mb-1 text-sm">
                          {feature.title}
                        </h3>
                        <p className="font-montserrat text-xs text-white/50 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>

          {/* Right - Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80"
                      alt="Luxury home construction in Coimbatore"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80"
                      alt="Construction team at work"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80"
                      alt="Commercial building construction"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: '280px' }}>
                    <Image
                      src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&q=80"
                      alt="Premium villa construction Coimbatore"
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl">
                <div className="font-playfair font-bold text-3xl text-navy">₹500Cr+</div>
                <div className="font-montserrat text-sm text-navy/60 mt-1">Projects Delivered</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
