'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import company from '@/data/company.json'
import servicesData from '@/data/services.json'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      value: company.contact.phone,
      sub: 'Mon–Sat, 9 AM – 6 PM',
      href: `tel:${company.contact.phoneRaw}`,
      color: '#7A2EFF',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      sub: 'Quick project discussions',
      href: company.contact.whatsappLink,
      color: '#25D366',
    },
    {
      icon: Mail,
      title: 'Email',
      value: company.contact.email,
      sub: 'We reply within 24 hours',
      href: `mailto:${company.contact.email}`,
      color: '#FF6A1A',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: `${company.hours.weekdays}: ${company.hours.time}`,
      sub: `Sunday: ${company.hours.sunday}`,
      href: null,
      color: '#7A2EFF',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      value: company.serviceArea.city,
      sub: company.serviceArea.state + ', ' + company.serviceArea.country,
      href: null,
      color: '#FF6A1A',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Contact Saanidhya Builders Coimbatore"
            fill className="object-cover opacity-10" priority
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto mb-4">
              Ready to start your construction project in Coimbatore? Talk to our experts for a free consultation.
            </p>
            <p className="font-montserrat text-white/40 text-sm">
              Serving: {company.serviceArea.display}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-navy border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon
              const inner = (
                <div className="bg-white/5 border border-white/8 rounded-2xl p-5 h-full
                  hover:border-orange/30 hover:bg-white/8 transition-all duration-300 text-center">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${card.color}22` }}>
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <p className="font-montserrat text-xs text-white/40 uppercase tracking-wider mb-1">
                    {card.title}
                  </p>
                  <p className="font-montserrat text-sm font-semibold text-white leading-snug mb-1">
                    {card.value}
                  </p>
                  <p className="font-montserrat text-xs text-white/40">{card.sub}</p>
                </div>
              )
              return card.href ? (
                <a key={card.title} href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block hover:scale-[1.02] transition-transform duration-300">
                  {inner}
                </a>
              ) : (
                <div key={card.title}>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="py-8 bg-green-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <p className="font-montserrat font-bold text-white text-base">Prefer WhatsApp?</p>
                <p className="font-montserrat text-white/80 text-sm">
                  Send us your project details directly — we respond fast.
                </p>
              </div>
            </div>
            <a
              href={company.contact.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-green-700 font-montserrat font-bold text-sm
                px-6 py-3 rounded-xl hover:bg-green-50 transition-colors duration-200 shadow-lg"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <h2 className="font-playfair text-3xl font-bold text-navy mb-2">
                  Let's Build Together
                </h2>
                <p className="font-montserrat text-navy/60 mb-8 leading-relaxed">
                  Reach out to our team for a free consultation. We serve clients across{' '}
                  <strong className="text-navy">{company.serviceArea.display}</strong>.
                </p>

                {/* Business info card */}
                <div className="bg-white rounded-2xl p-6 border border-navy/8 shadow-sm mb-6">
                  <h3 className="font-playfair font-bold text-navy text-base mb-4">
                    {company.name}
                  </h3>
                  <ul className="space-y-3 font-montserrat text-sm">
                    <li className="flex items-start gap-3">
                      <Phone size={15} className="text-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy/40 text-xs block mb-0.5">Phone</span>
                        <a href={`tel:${company.contact.phoneRaw}`}
                          className="text-navy font-medium hover:text-orange transition-colors">
                          {company.contact.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy/40 text-xs block mb-0.5">WhatsApp</span>
                        <a href={company.contact.whatsappLink}
                          target="_blank" rel="noopener noreferrer"
                          className="text-navy font-medium hover:text-green-600 transition-colors">
                          Chat with us
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail size={15} className="text-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy/40 text-xs block mb-0.5">Email</span>
                        <a href={`mailto:${company.contact.email}`}
                          className="text-navy font-medium hover:text-orange transition-colors">
                          {company.contact.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={15} className="text-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy/40 text-xs block mb-0.5">Working Hours</span>
                        <span className="text-navy font-medium">{company.hours.weekdays}: {company.hours.time}</span>
                        <span className="text-navy/50 text-xs block">Sunday: {company.hours.sunday}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={15} className="text-orange flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-navy/40 text-xs block mb-0.5">Service Area</span>
                        <span className="text-navy font-medium">{company.serviceArea.display}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Response time note */}
                <div className="bg-orange/8 border border-orange/20 rounded-xl p-4">
                  <p className="font-montserrat text-sm text-navy/70 leading-relaxed">
                    <span className="font-semibold text-orange">Fast response:</span>{' '}
                    {company.hours.note}
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-navy/5">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12">
                        <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 size={36} className="text-white" />
                        </div>
                        <h3 className="font-playfair text-2xl font-bold text-navy mb-3">Message Sent!</h3>
                        <p className="font-montserrat text-navy/60 mb-6">
                          Thank you for reaching out. Our team will contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                          className="btn-primary">
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <h2 className="font-playfair text-2xl font-bold text-navy mb-1">
                            Send Us a Message
                          </h2>
                          <p className="font-montserrat text-sm text-navy/50">
                            Free consultation — no obligation
                          </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="font-montserrat text-sm font-medium text-navy mb-2 block">
                              Full Name *
                            </label>
                            <input type="text" required value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your full name"
                              className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30" />
                          </div>
                          <div>
                            <label className="font-montserrat text-sm font-medium text-navy mb-2 block">
                              Phone Number *
                            </label>
                            <input type="tel" required value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30" />
                          </div>
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">
                            Email Address
                          </label>
                          <input type="email" value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30" />
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">
                            Service Required
                          </label>
                          <select value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all bg-white">
                            <option value="">Select a service</option>
                            {servicesData.map((s) => <option key={s.id}>{s.title}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">
                            Your Message *
                          </label>
                          <textarea required value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your project — location, size, timeline, budget..."
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all resize-none placeholder:text-navy/30" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button type="submit" disabled={loading}
                            className="btn-primary flex-1 justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                            {loading ? (
                              <>
                                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending...
                              </>
                            ) : (
                              <><Send size={16} /> Send Message</>
                            )}
                          </button>
                          <a href={company.contact.whatsappLink}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-500 text-white font-montserrat font-semibold text-sm px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp
                          </a>
                        </div>

                        <p className="font-montserrat text-xs text-navy/40 text-center">
                          We typically respond within 24 hours. Your information is kept confidential.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
