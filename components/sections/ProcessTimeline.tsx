'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare, FileText, Pencil, HardHat, KeyRound } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We start with a deep-dive consultation to understand your vision, needs, and budget. Our experts guide you through possibilities.',
    color: '#7A2EFF',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Planning',
    description: 'Detailed project planning including site surveys, structural engineering, cost estimation, and regulatory compliance.',
    color: '#9A2EE8',
  },
  {
    step: '03',
    icon: Pencil,
    title: 'Design',
    description: 'Our architects create stunning 3D designs and blueprints, refined iteratively until you are 100% satisfied.',
    color: '#BF4ECF',
  },
  {
    step: '04',
    icon: HardHat,
    title: 'Construction',
    description: 'Expert execution with premium materials, certified contractors, and real-time progress updates at every milestone.',
    color: '#E06A1A',
  },
  {
    step: '05',
    icon: KeyRound,
    title: 'Delivery',
    description: 'Final quality inspection, handover walkthrough, and post-completion support. Your dream home, delivered.',
    color: '#FF6A1A',
  },
]

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #7A2EFF 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FF6A1A 0%, transparent 50%)'
      }} />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="section-title mb-4">
            Our Construction{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A transparent, structured approach ensuring your project is delivered on time,
            within budget, and beyond expectations.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2" style={{ background: 'linear-gradient(90deg, #7A2EFF, #FF6A1A)' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={step.title} delay={i * 0.15} className="relative">
                  <div className="flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div className="relative mb-6 z-10">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: step.color }}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-montserrat font-bold text-white shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }}
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3 className="font-playfair font-bold text-lg text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-sm text-navy/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16">
          <p className="font-montserrat text-navy/60 mb-6">Ready to start your construction journey?</p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
