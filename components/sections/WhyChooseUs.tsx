'use client'

import Image from 'next/image'
import { CheckCircle2, Award, Clock, ShieldCheck, Wrench, HeartHandshake } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import whyData from '@/data/whyChooseUs.json'
import company from '@/data/company.json'

const iconMap: Record<string, React.ElementType> = {
  Award, Clock, ShieldCheck, Wrench, HeartHandshake, CheckCircle2,
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: '#FF6A1A' }} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimatedSection>
              <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                Why Choose Us
              </span>
              <h2 className="font-playfair font-bold text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}>
                The {company.name} Difference
              </h2>
              <p className="font-montserrat text-white/55 leading-relaxed mb-10">
                We don't just build structures — we build relationships. Every project is a
                commitment to excellence, delivered with honesty and craftsmanship.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {whyData.map((feature) => {
                  const Icon = iconMap[feature.icon] || CheckCircle2
                  return (
                    <div key={feature.title}
                      className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-orange/20 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-white text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="font-montserrat text-white/50 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — image */}
          <AnimatedSection direction="left">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: '520px' }}>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt={`${company.name} construction quality Coimbatore`}
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="font-playfair font-bold text-white text-2xl">
                        {company.stats.projectsCompleted}
                      </div>
                      <div className="font-montserrat text-white/60 text-xs">Projects</div>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="text-center">
                      <div className="font-playfair font-bold text-white text-2xl">
                        {company.stats.happyClients}
                      </div>
                      <div className="font-montserrat text-white/60 text-xs">Clients</div>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="text-center">
                      <div className="font-playfair font-bold text-white text-2xl">
                        {company.stats.googleRating}★
                      </div>
                      <div className="font-montserrat text-white/60 text-xs">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
