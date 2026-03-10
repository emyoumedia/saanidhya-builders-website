import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

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
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="Saanidhya Builders team and architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-transparent" />
              </div>
              {/* Accent box */}
              <div className="absolute -top-6 -right-6 w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                  alt="Construction excellence"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-8 bg-navy rounded-2xl p-5 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-playfair font-bold text-lg">
                  15
                </div>
                <div>
                  <div className="font-playfair font-bold text-white text-sm">Years of</div>
                  <div className="font-montserrat text-xs text-orange">Excellence</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="left">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              About Saanidhya Builders
            </span>
            <h2 className="section-title mb-6">
              Coimbatore's Premier{' '}
              <span className="gradient-text">Construction</span>{' '}
              Partner
            </h2>
            <p className="font-montserrat text-navy/60 leading-relaxed mb-5">
              Founded with a vision to redefine construction standards in Tamil Nadu, Saanidhya
              Builders has grown into one of Coimbatore's most trusted names in residential and
              commercial construction.
            </p>
            <p className="font-montserrat text-navy/60 leading-relaxed mb-8">
              Our team of 200+ professionals — architects, civil engineers, interior designers,
              and skilled craftsmen — work in harmony to deliver projects that stand the test of
              time. We believe every structure tells a story, and we make sure yours is exceptional.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 py-8 border-y border-navy/10">
              {[
                { value: '500+', label: 'Projects' },
                { value: '1200+', label: 'Happy Clients' },
                { value: '200+', label: 'Team Members' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-playfair font-bold text-3xl gradient-text">{value}</div>
                  <div className="font-montserrat text-xs text-navy/50 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
