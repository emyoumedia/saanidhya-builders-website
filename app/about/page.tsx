import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Users, Award } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import company from '@/data/company.json'
import teamData from '@/data/team.json'
import aboutData from '@/data/about.json'

export const metadata: Metadata = {
  title: 'About Us | Saanidhya Builders – Construction Company Coimbatore',
  description: `Learn about ${company.name} – ${company.stats.yearsExperience} years of excellence in construction in ${company.serviceArea.city}. Our mission, vision, values, and expert team.`,
  alternates: { canonical: `${company.website}/about` },
}

const iconMap: Record<string, React.ElementType> = { Award, Heart, Target, Users }

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt={`About ${company.name}`} fill className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Building {company.serviceArea.city}&apos;s{' '}
              <span className="gradient-text">Future</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              {company.stats.yearsExperience} years of transforming dreams into landmark structures across Tamil Nadu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                  alt={`${company.name} story`} fill className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="section-title mb-6">{aboutData.story.heading}</h2>
              {aboutData.story.paragraphs.map((para, i) => (
                <p key={i} className="font-montserrat text-navy/60 leading-relaxed mb-4">{para}</p>
              ))}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'Founded',       value: company.founded },
                  { label: 'Service Area',  value: company.serviceArea.city },
                  { label: 'Team Size',     value: company.stats.teamSize },
                  { label: 'Projects Done', value: company.stats.projectsCompleted },
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

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream rounded-2xl p-8 border border-navy/8">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Target size={18} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-navy text-xl mb-3">Our Mission</h3>
              <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{aboutData.mission}</p>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-navy/8">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <ArrowRight size={18} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-navy text-xl mb-3">Our Vision</h3>
              <p className="font-montserrat text-navy/60 text-sm leading-relaxed">{aboutData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="font-playfair text-4xl font-bold text-white">What Drives Us</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value: { icon: string; title: string; desc: string }) => {
              const Icon = iconMap[value.icon] || Award
              return (
                <AnimatedSection key={value.title}>
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-6 hover:border-orange/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-white text-base mb-2">{value.title}</h3>
                    <p className="font-montserrat text-white/55 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="section-title">The Experts Behind Every Project</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <AnimatedSection key={member.name}>
                <div className="bg-white rounded-2xl overflow-hidden border border-navy/8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={member.image} alt={member.imageAlt} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair font-bold text-navy text-base">{member.name}</h3>
                    <p className="font-montserrat text-orange text-xs font-semibold uppercase tracking-wider mt-1 mb-2">
                      {member.role}
                    </p>
                    <p className="font-montserrat text-navy/50 text-xs">{member.experience} experience</p>
                    <p className="font-montserrat text-navy/40 text-xs leading-relaxed mt-2">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Projects Completed', value: company.stats.projectsCompleted },
              { label: 'Happy Clients',       value: company.stats.happyClients },
              { label: 'Years Experience',    value: company.stats.yearsExperience },
              { label: 'Google Rating',       value: company.stats.googleRating + '★' },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="font-playfair font-bold text-4xl gradient-text mb-2">{value}</div>
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