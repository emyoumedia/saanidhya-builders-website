import { MessageSquare, FileText, Pencil, HardHat, Key } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { company , processData }from '@/data'

const iconMap: Record<string, React.ElementType> = {
  MessageSquare, FileText, Pencil, HardHat, Key,
}

const STEP_COLORS = ['#7A2EFF', '#9A2EE8', '#BF4ECF', '#E06A1A', '#FF6A1A']

type ProcessStep = {
  step: string; title: string; icon: string
  description: string; deliverables: string[]
}

export default function ProcessTimeline() {
  const { process } = company.copy

  return (
    <section className="py-20 bg-cream" id="process" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {process.badge}
            </span>
            <h2 id="process-heading"
              className="font-playfair font-bold text-navy leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              {process.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{ background: 'linear-gradient(to right, rgba(122,46,255,0.25), rgba(255,106,26,0.5), rgba(255,106,26,0.25))' }}
            aria-hidden="true" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {(processData as unknown as ProcessStep[]).map((step, i) => {
              const Icon = iconMap[step.icon] || Key
              const color = STEP_COLORS[i] ?? '#FF6A1A'
              return (
                <AnimatedSection key={step.step} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-4 z-10 border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                      style={{ background: color }}>
                      <Icon size={26} className="text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center font-montserrat font-bold text-xs"
                        style={{ color, borderColor: color }}>
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-montserrat font-semibold text-navy text-sm mb-1.5 leading-snug">
                      {step.title}
                    </h3>
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