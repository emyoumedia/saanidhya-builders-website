import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import company from '@/data/company.json'
import aboutData from '@/data/about.json'

export default function AboutPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ height: '520px' }}>
                <Image
                  src={aboutData.previewImages.main}
                  alt={aboutData.previewImages.mainAlt}
                  fill sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-transparent" />
              </div>
              {/* Accent box */}
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={aboutData.previewImages.accent}
                  alt={aboutData.previewImages.accentAlt}
                  fill sizes="200px"
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-8 bg-navy rounded-2xl p-5 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-playfair font-bold text-lg">
                  {parseInt(company.stats.yearsExperience)}
                </div>
                <div>
                  <div className="font-playfair font-bold text-white text-sm">Years of</div>
                  <div className="font-montserrat text-orange text-xs uppercase tracking-wider">Excellence</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="left">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              About Us
            </span>
            <h2 className="section-title mb-6">{aboutData.story.heading}</h2>
            {aboutData.story.paragraphs.map((p, i) => (
              <p key={i} className="font-montserrat text-navy/60 leading-relaxed mb-4">{p}</p>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-navy/8 mb-8">
              {[
                { value: company.stats.projectsCompleted, label: 'Projects' },
                { value: company.stats.happyClients,      label: 'Clients' },
                { value: company.stats.googleRating + '★', label: 'Rating' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-playfair font-bold text-navy text-2xl">{s.value}</div>
                  <div className="font-montserrat text-navy/50 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
