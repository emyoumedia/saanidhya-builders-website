'use client'

import { MessageSquare, FileText, Pencil, HardHat, Key } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import processData from '@/data/process.json'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, FileText, Pencil, HardHat, Key,
}
const stepColors = ['#7A2EFF','#9A2EE8','#BF4ECF','#E06A1A','#FF6A1A']

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-cream" id="process">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              How We Work
            </span>
            <h2 className="section-title mb-4">Our Construction Process</h2>
            <p className="font-montserrat text-navy/55 max-w-2xl mx-auto leading-relaxed">
              A transparent, milestone-based process — so you always know exactly where
              your project stands.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple/30 via-orange/50 to-orange/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processData.map((step, i) => {
              const Icon = iconMap[step.icon] || Key
              const color = stepColors[i] || '#FF6A1A'
              return (
                <AnimatedSection key={step.step} delay={i * 0.08}>
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5 z-10
                      border-2 border-white shadow-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: color }}>
                      <Icon size={28} className="text-white" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2
                        flex items-center justify-center font-montserrat font-bold text-xs"
                        style={{ color, borderColor: color }}>
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-playfair font-bold text-navy text-lg mb-2">{step.title}</h3>
                    <p className="font-montserrat text-navy/55 text-sm leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <span className="font-montserrat text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ color, background: `${color}18` }}>
                      {step.duration}
                    </span>

                    {/* Deliverables tooltip on hover */}
                    <div className="mt-3 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ul className="space-y-1">
                        {step.deliverables.map((d) => (
                          <li key={d} className="font-montserrat text-xs text-navy/50 flex items-center gap-1.5 justify-center">
                            <span className="w-1 h-1 rounded-full bg-orange flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
