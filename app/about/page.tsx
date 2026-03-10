import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Users, Award, Briefcase } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.saanidhyabuilders.com/about',
  },
  title: 'About Us – Saanidhya Builders | Construction Company Coimbatore',
  description:
    'Learn about Saanidhya Builders – 15 years of excellence in construction in Coimbatore, Tamil Nadu. Our mission, vision, values, and expert team.',
}

const values = [
  { icon: Award, title: 'Quality First', desc: 'Uncompromising quality at every stage of construction.' },
  { icon: Heart, title: 'Client Focus', desc: 'Your satisfaction drives every decision we make.' },
  { icon: Target, title: 'Precision', desc: 'Meticulous attention to detail in design and execution.' },
  { icon: Users, title: 'Team Spirit', desc: 'A united team of experts working toward your vision.' },
]

const team = [
  { name: 'Rajendra Babu', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', exp: '25 years' },
  { name: 'Kavitha Raj', role: 'Chief Architect', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', exp: '18 years' },
  { name: 'Suresh Kumar', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', exp: '20 years' },
  { name: 'Divya Menon', role: 'Interior Design Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', exp: '12 years' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80" alt="About Saanidhya Builders" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #7A2EFF, #FF6A1A)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">About Us</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Building Coimbatore's{' '}
              <span className="gradient-text">Future</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              15 years of transforming dreams into landmark structures across Tamil Nadu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>
                <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" alt="Saanidhya Builders story" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Our Story</span>
              <h2 className="section-title mb-6">From Vision to Landmark</h2>
              <p className="font-montserrat text-navy/60 leading-relaxed mb-4">
                Founded in 2009 by Rajendra Babu with a small team of five passionate builders,
                Saanidhya Builders started with a single apartment project in Gandhipuram, Coimbatore.
              </p>
              <p className="font-montserrat text-navy/60 leading-relaxed mb-4">
                Today, we have grown into a 200-member strong organization delivering over 500 projects
                spanning luxury villas, commercial complexes, industrial buildings, and landmark
                residential communities across Tamil Nadu.
              </p>
              <p className="font-montserrat text-navy/60 leading-relaxed mb-8">
                Our growth is built on a simple foundation: doing what is right for the client,
                every single time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Founded', value: '2009' },
                  { label: 'Headquarters', value: 'Coimbatore' },
                  { label: 'Team Size', value: '200+' },
                  { label: 'Projects', value: '500+' },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-navy/10 rounded-xl p-4">
                    <div className="font-playfair font-bold text-2xl gradient-text">{value}</div>
                    <div className="font-montserrat text-xs text-navy/50 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Our <span className="gradient-text">Principles</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Target, title: 'Our Mission', color: '#7A2EFF', text: 'To deliver superior construction services that exceed client expectations through innovative design, premium materials, and expert execution — making quality construction accessible across Coimbatore and Tamil Nadu.' },
              { icon: Eye, title: 'Our Vision', color: '#FF6A1A', text: 'To be Tamil Nadu\'s most trusted construction brand, recognized for building not just structures, but communities — transforming the skyline of Coimbatore with sustainable, beautiful, and enduring architecture.' },
              { icon: Heart, title: 'Our Values', color: '#9A2EE8', text: 'Integrity in every deal. Quality in every brick. Respect for every client. Innovation in every design. These are not just words — they are the pillars upon which Saanidhya Builders was built and continues to grow.' },
            ].map(({ icon: Icon, title, color, text }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: color + '20', border: `1px solid ${color}40` }}>
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-white mb-4">{title}</h3>
                  <p className="font-montserrat text-sm text-white/60 leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-montserrat font-semibold text-white mb-2">{title}</h4>
                  <p className="font-montserrat text-xs text-white/50">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Our People</span>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-orange/50 transition-all duration-300">
                    <Image src={member.image} alt={member.name} fill
                  sizes="192px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-navy">{member.name}</h3>
                  <p className="font-montserrat text-sm text-orange mb-1">{member.role}</p>
                  <p className="font-montserrat text-xs text-navy/40">{member.exp} Experience</p>
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
