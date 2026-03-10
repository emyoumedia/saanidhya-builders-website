import type { Metadata } from 'next'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/testimonials',
  },
  title: 'Client Testimonials – Saanidhya Builders Coimbatore',
  description:
    'Read what our 1200+ happy clients say about Saanidhya Builders. Client reviews and testimonials for construction services in Coimbatore.',
}

const testimonials = [
  { name: 'Rajesh Kumar', role: 'Villa Owner, Saravanampatti', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', project: 'Luxury Villa', text: 'Saanidhya Builders transformed my dream into reality. The team was professional, punctual, and the quality of construction is outstanding. Our villa was delivered ahead of schedule with zero compromises on quality. Highly recommend to anyone looking for quality builders in Coimbatore.' },
  { name: 'Priya Subramaniam', role: 'Business Owner, Coimbatore', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', project: 'Commercial Complex', text: 'We hired Saanidhya Builders for our commercial office complex and the results exceeded our expectations. Their architectural design team created a stunning workspace that perfectly reflects our brand. The project management was excellent throughout.' },
  { name: 'Arjun Nair', role: 'Real Estate Investor, Peelamedu', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', project: 'Residential Complex', text: 'I have worked with multiple builders in Coimbatore but Saanidhya stands apart. Their transparency in pricing, quality of materials, and attention to detail is unmatched. I have now entrusted them with three projects and each one has been exceptional.' },
  { name: 'Meena Krishnamurthy', role: 'Homeowner, Gandhipuram', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', project: 'Home Renovation', text: 'The renovation of our ancestral home was handled with incredible care and craftsmanship. The team respected our vision while bringing in modern design elements. The result is breathtaking — exactly what we imagined and more.' },
  { name: 'Venkat Raman', role: 'IT Professional, RS Puram', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', project: '3BHK Apartment', text: 'From first consultation to handover, the process was smooth and transparent. I was kept updated at every stage. The 3D visualization was incredibly accurate — my apartment looks exactly like what was shown. Excellent service!' },
  { name: 'Lakshmi Patel', role: 'Doctor, Coimbatore', rating: 5, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', project: 'Clinic Construction', text: 'Saanidhya Builders constructed my medical clinic from scratch. They understood the specific requirements of a healthcare facility and delivered a functional, beautiful space. Their team was knowledgeable, professional, and always on time.' },
  { name: 'Suresh Babu', role: 'Retired Government Officer', rating: 4, image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', project: 'Independent House', text: 'Very professional team. They listened to all my requirements and built exactly what I wanted. Minor delays due to rains but they made up for lost time. Quality of work is top-notch. Would definitely recommend.' },
  { name: 'Anitha Chandrasekaran', role: 'Entrepreneur, Tidel Park', rating: 5, image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80', project: 'Office Interior', text: 'The interior design team at Saanidhya completely transformed our office space. The new design has improved employee morale and made a great impression on clients. Worth every rupee invested. 10/10 would recommend!' },
]

const stats = [
  { value: '1200+', label: 'Happy Clients' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: '100%', label: 'Recommend Us' },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 30% 50%, #7A2EFF, transparent 60%), radial-gradient(circle at 70% 50%, #FF6A1A, transparent 60%)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Client Stories</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              What Clients <span className="gradient-text">Say</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Real stories from real clients who trusted Saanidhya Builders with their construction dreams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream border-b border-navy/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.1} className="text-center">
                <div className="font-playfair font-bold text-4xl gradient-text mb-2">{value}</div>
                <div className="font-montserrat text-sm text-navy/50">{label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08} className="break-inside-avoid">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-navy/5 hover:border-orange/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={14} className="fill-orange text-orange" />
                      ))}
                    </div>
                    <Quote size={24} className="text-orange/20" />
                  </div>
                  <p className="font-montserrat text-sm text-navy/70 leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="border-t border-navy/5 pt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-playfair font-bold text-navy text-sm">{t.name}</div>
                      <div className="font-montserrat text-xs text-navy/50">{t.role}</div>
                      <div className="font-montserrat text-xs text-orange mt-0.5">{t.project}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
