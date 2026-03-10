'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const contactInfo = [
  { icon: MapPin, title: 'Office Address', info: '42, Avinashi Road, Coimbatore, Tamil Nadu 641018', link: null },
  { icon: Phone, title: 'Phone Number', info: '+91 98765 43210', link: 'tel:+919876543210' },
  { icon: Mail, title: 'Email Address', info: 'info@saanidhyabuilders.com', link: 'mailto:info@saanidhyabuilders.com' },
  { icon: Clock, title: 'Working Hours', info: 'Mon–Sat: 9:00 AM – 6:00 PM', link: null },
]

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

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="Contact Saanidhya Builders" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <span className="inline-block font-montserrat text-sm font-semibold text-orange uppercase tracking-widest mb-4">Get In Touch</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="font-montserrat text-white/60 text-lg max-w-2xl mx-auto">
              Ready to start your construction project? Talk to our experts today for a free consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <h2 className="font-playfair text-3xl font-bold text-navy mb-2">Let's Build Together</h2>
                <p className="font-montserrat text-navy/60 mb-8 leading-relaxed">
                  Reach out to our team for a free consultation. We're here to turn your construction dreams into reality.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map(({ icon: Icon, title, info, link }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-montserrat text-xs font-semibold text-navy/50 uppercase tracking-wider mb-1">{title}</div>
                        {link ? (
                          <a href={link} className="font-montserrat text-navy font-medium hover:text-orange transition-colors">{info}</a>
                        ) : (
                          <div className="font-montserrat text-navy font-medium">{info}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-navy/10 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.03452844!2d76.88209715!3d11.01682165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saanidhya Builders Office Location"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-navy/5">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 size={36} className="text-white" />
                        </div>
                        <h3 className="font-playfair text-2xl font-bold text-navy mb-3">Message Sent!</h3>
                        <p className="font-montserrat text-navy/60 mb-6">
                          Thank you for reaching out. Our team will contact you within 24 hours.
                        </p>
                        <button
                          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                          className="btn-primary"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <h2 className="font-playfair text-2xl font-bold text-navy mb-1">Send Us a Message</h2>
                          <p className="font-montserrat text-sm text-navy/50">Get a free consultation within 24 hours</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="font-montserrat text-sm font-medium text-navy mb-2 block">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Your full name"
                              className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30"
                            />
                          </div>
                          <div>
                            <label className="font-montserrat text-sm font-medium text-navy mb-2 block">Phone Number *</label>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">Email Address</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all placeholder:text-navy/30"
                          />
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">Service Required</label>
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all bg-white"
                          >
                            <option value="">Select a service</option>
                            <option>Residential Construction</option>
                            <option>Commercial Construction</option>
                            <option>Architectural Design</option>
                            <option>Planning & Layout</option>
                            <option>Turnkey Construction</option>
                            <option>Renovation & Remodeling</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-montserrat text-sm font-medium text-navy mb-2 block">Your Message *</label>
                          <textarea
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your project — location, size, timeline, budget..."
                            rows={5}
                            className="w-full px-4 py-3 rounded-xl border border-navy/15 font-montserrat text-sm text-navy focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/10 transition-all resize-none placeholder:text-navy/30"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={16} />
                            </>
                          )}
                        </button>

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
