import Link from 'next/link'
import { Home, Building2, Key, HousePlus, Castle, Hammer } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { company , servicesData }from '@/data'

const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Key, HousePlus, Castle, Hammer,
}

type Service = {
  id: string; icon: string; title: string;
  tagline: string; description: string; shortDesc: string
  benefits: string[]; image: string; imageAlt: string; color: string,
  slug: `/services`,
  serviceId: String,
}

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function ServicesSection() {
  const display = (servicesData as unknown as Service[]).slice(0, 3)
  const { services } = company.copy

  return (
    <section className="py-20 bg-navy relative overflow-hidden" id="services" aria-labelledby="services-heading">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: GRAD }} aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">

        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              {services.badge}
            </span>
            <h2 id="services-heading"
              className="font-playfair font-bold text-white leading-[1.2]"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)' }}>
              {services.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {display.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            return (
              <AnimatedSection key={service.id} delay={i * 0.07}>
                <Link href={`/services`}
                  className="group flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/8 hover:border-orange/30 bg-white/4 hover:bg-white/7 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: GRAD }}>
                    <Icon size={19} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-white text-base mb-1.5 group-hover:text-orange transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="font-montserrat text-white/45 text-sm leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Link href="/services"
              className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm text-white/60 hover:text-orange transition-colors duration-200">
              {services.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}