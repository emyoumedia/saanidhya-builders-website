import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageSquare, FileText, Pencil, HardHat, KeyRound, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/process',
  },
  title: 'Our Construction Process – Saanidhya Builders Coimbatore',
  description:
    'Learn about Saanidhya Builders\' 5-step construction process: Consultation, Planning, Design, Construction, and Delivery in Coimbatore.',
}

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1–3 Days',
    color: '#7A2EFF',
    description: 'Your journey begins with a comprehensive consultation with our expert team. We listen to your vision, assess your requirements, understand your budget, and discuss timelines. This meeting sets the foundation for everything that follows.',
    activities: ['Understanding your vision & goals', 'Budget assessment and planning', 'Site visit and evaluation', 'Preliminary feasibility study', 'Q&A with our senior experts'],
  },
  {
    step: '02',
    icon: FileText,
    title: 'Detailed Planning',
    duration: '1–2 Weeks',
    color: '#9A2EE8',
    description: 'Our planning team develops a comprehensive project blueprint including structural engineering, material specifications, regulatory approvals, and a detailed timeline with milestones.',
    activities: ['Site survey and soil testing', 'Structural engineering report', 'Material specification & cost estimation', 'DTCP/Municipal approvals', 'Project schedule with milestones'],
  },
  {
    step: '03',
    icon: Pencil,
    title: 'Design & Visualization',
    duration: '1–3 Weeks',
    color: '#BF4ECF',
    description: 'Our architects create stunning architectural drawings and photorealistic 3D visualizations. You can walk through your future home or office virtually before a single brick is laid.',
    activities: ['2D floor plan development', 'Photorealistic 3D renderings', 'Interior design concepts', 'Design review & client approvals', 'Final construction drawings'],
  },
  {
    step: '04',
    icon: HardHat,
    title: 'Construction',
    duration: 'Project Duration',
    color: '#E06A1A',
    description: 'Expert execution by our skilled team using premium certified materials. You receive weekly progress updates, site visit access, and a dedicated project manager throughout the build.',
    activities: ['Foundation & structural work', 'Plumbing & electrical systems', 'Masonry & finishing', 'Weekly progress reports', 'Quality inspections at each phase'],
  },
  {
    step: '05',
    icon: KeyRound,
    title: 'Handover & Support',
    duration: '1 Week',
    color: '#FF6A1A',
    description: 'Final quality inspection, snag list resolution, and a detailed handover walkthrough. We provide complete documentation, warranties, and post-completion support for peace of mind.',
    activities: ['Final quality inspection', 'Snag list & punch list clearance', 'Handover documentation package', 'Warranty certificates', 'Post-completion support (1 year)'],
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Construction process" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">How We Build</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              A transparent, proven 5-step process ensuring quality delivery on every project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <AnimatedSection key={step.title} className="relative">
                  <div className="flex gap-0 mb-16 last:mb-0">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center mr-8 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl text-white font-playfair font-bold text-xl relative z-10"
                        style={{ background: step.color }}
                      >
                        {step.step}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 mt-4" style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[i + 1].color})`, minHeight: '60px' }} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-navy/5 hover:border-orange/20 transition-all duration-300 hover:shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: step.color + '15' }}>
                            <Icon size={22} style={{ color: step.color }} />
                          </div>
                          <h2 className="font-playfair font-bold text-2xl text-navy">{step.title}</h2>
                        </div>
                        <span className="font-montserrat text-xs font-semibold text-white px-4 py-2 rounded-full flex-shrink-0" style={{ background: step.color }}>
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-montserrat text-navy/60 leading-relaxed mb-6">{step.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.activities.map((activity) => (
                          <div key={activity} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-orange flex-shrink-0" />
                            <span className="font-montserrat text-sm text-navy/70">{activity}</span>
                          </div>
                        ))}
                      </div>
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
