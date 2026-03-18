import { Award, Clock, ShieldCheck, HeartHandshake, CheckCircle2, Wrench } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import whyData from '@/data/whyChooseUs.json'
import company from '@/data/company.json'

const iconMap: Record<string, React.ElementType> = {
  Award, Clock, ShieldCheck, HeartHandshake, CheckCircle2, Wrench,
}

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function WhyChooseUs() {
  const display = whyData.slice(0, 4)
  const { whyUs } = company.copy

  return (
    <section className="py-20 bg-navy" aria-labelledby="why-heading">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {whyUs.badge}
            </span>
            <h2 id="why-heading"
              className="font-playfair font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              {whyUs.headingPrefix}{company.name}{whyUs.headingSuffix}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {display.map((feature: { icon: string; title: string }, i: number) => {
            const Icon = iconMap[feature.icon] || CheckCircle2
            return (
              <div key={feature.title} className="flex flex-col">
                <AnimatedSection delay={i * 0.07} className="flex flex-col flex-1">
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl border border-white/8 bg-white/4 flex-1 min-h-[140px]">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{ background: GRAD }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-white text-sm leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                </AnimatedSection>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}