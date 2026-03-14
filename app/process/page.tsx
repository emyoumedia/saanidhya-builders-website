import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageSquare, FileText, Pencil, HardHat, KeyRound } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import company from '@/data/company.json'
import processData from '@/data/process.json'

export const metadata: Metadata = {
  title: `Our Construction Process | ${company.name} ${company.serviceArea.city}`,
  description: `Learn about ${company.name}'s ${processData.length}-step construction process from consultation to handover in ${company.serviceArea.city}.`,
  alternates: { canonical: `${company.website}/process` },
}

// Map icon string names to components
const iconMap: Record<string, React.ElementType> = {
  MessageSquare, FileText, Pencil, HardHat, Key: KeyRound,
}

const stepColors = ['#7A2EFF','#9A2EE8','#BF4ECF','#E06A1A','#FF6A1A']

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt={`${company.name} construction process`} fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">How We Work</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              A transparent {processData.length}-step journey from your first call to moving into your dream space in {company.serviceArea.city}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-12">
            {processData.map((step, idx) => {
              const Icon = iconMap[step.icon] ?? MessageSquare
              const color = stepColors[idx] ?? '#7A2EFF'
              const isEven = idx % 2 === 1
              return (
                <AnimatedSection key={step.step} direction={isEven ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Step number + icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-2"
                        style={{ background: `${color}22`, border: `1.5px solid ${color}44` }}>
                        <Icon size={26} style={{ color }} />
                      </div>
                      <span className="font-playfair font-bold text-3xl"
                        style={{ color: `${color}55` }}>
                        {step.step}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-7 border border-navy/8 shadow-sm">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="font-playfair font-bold text-navy text-xl">{step.title}</h2>
                        <span className="font-montserrat text-xs text-white/90 px-3 py-1 rounded-full flex-shrink-0"
                          style={{ background: color }}>
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-montserrat text-navy/60 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 font-montserrat text-xs text-navy/65">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
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
      </section>

      {/* Warranty strip */}
      <section className="py-14 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-playfair font-bold text-white text-3xl mb-2">Our Warranty Promise</h2>
            <p className="font-montserrat text-white/50 text-sm">Every project comes with a comprehensive warranty package</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Structural Warranty', value: company.warranty.structural },
              { label: 'Plumbing & Electrical', value: company.warranty.plumbingElectrical },
              { label: 'Waterproofing', value: company.warranty.waterproofing },
            ].map(({ label, value }) => (
              <div key={label} className="text-center bg-white/5 border border-white/8 rounded-2xl p-6">
                <div className="font-playfair font-bold text-3xl gradient-text mb-2">{value}</div>
                <div className="font-montserrat text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
