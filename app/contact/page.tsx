'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { company, servicesData } from '@/data'
import { trackEvent } from '@/lib/tracking'
import { trackServerEvent } from '@/lib/serverTracking'

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

const INPUT_CLS = [
  'w-full px-4 py-3 rounded-xl border border-navy/12',
  'font-montserrat text-sm text-navy bg-white',
  'focus:outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/8',
  'transition-all placeholder:text-navy/25',
].join(' ')

// WhatsApp SVG — reused in two places
const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// ── Quick strip items ──────────────────────────────────────────────────────────
// 5 items: 2 phones, whatsapp, email, hours
// Grid: 1-col on xs, 2-col on sm, 5-col on lg — no item ever truncates
const stripItems = (c: typeof company) => [
  {
    key: 'phone1',
    icon: Phone,
    label: 'Call Us',
    value: c.contact.phoneDisplay,
    href: `tel:${c.contact.phoneRaw}`,
    color: '#7A2EFF',
  },
  {
    key: 'phone2',
    icon: Phone,
    label: 'Call Us',
    value: c.contact.phoneDisplay2,
    href: `tel:${c.contact.phoneRaw2}`,
    color: '#7A2EFF',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: c.contact.whatsappLink,
    color: '#25D366',
  },
  {
    key: 'email',
    icon: Mail,
    label: 'Email',
    value: c.contact.email,
    href: `mailto:${c.contact.email}`,
    color: '#FF6A1A',
  },
  {
    key: 'hours',
    icon: Clock,
    label: 'Hours',
    value: `${c.hours.weekdays}`,
    sub: c.hours.time,
    href: null,
    color: '#7A2EFF',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        trackEvent('form_error', {
          event_category: 'error',
          event_label: 'Contact Form Failed',
          message: data.error || 'Server error',
        })
        throw new Error(data.error || 'Server error')
      }

      trackEvent('form_submit', {
        event_category: 'lead',
        event_label: 'Contact Form',
        page: window.location.pathname,
      })

      await trackServerEvent(
        'Lead',
        { phone: form.phone, email: form.email },
        { value: 0, currency: 'INR' }
      )

      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      trackEvent('form_error', {
        event_category: 'error',
        event_label: 'Contact Form Exception',
      })
      alert('Something went wrong. Please try WhatsApp or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const items = stripItems(company)

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-16 bg-navy relative overflow-hidden"
        aria-labelledby="contact-hero-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            {/* SEO: visible label as <p> not a heading, breadcrumb-style */}
            <p className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em] mb-4">
              Get In Touch
            </p>
            <h1
              id="contact-hero-heading"
              className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Let&apos;s Build Your{' '}
              <span className="gradient-text">Dream Project</span>
            </h1>
            <p className="font-montserrat text-white/55 text-base max-w-md mx-auto">
              Free consultation. No commitment. We serve {company.serviceArea.display}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Quick contact strip ── */}
      {/* FIX: 5 items → grid-cols-1 xs | grid-cols-2 sm | grid-cols-5 lg */}
      {/* FIX: removed truncate — text wraps instead of showing "..." */}
      <section className="bg-navy border-t border-white/6 py-6" aria-label="Quick contact options">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-3 list-none m-0 p-0">
            {items.map(({ key, icon: Icon, label, value, sub, href, color }) => {
              const inner = (
                <div className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-4 h-full hover:border-white/15 transition-colors">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}22` }}
                    aria-hidden="true"
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-montserrat text-[10px] text-white/70 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    {/* FIX: break-words instead of truncate */}
                    <p className="font-montserrat text-xs text-white/70 leading-snug break-words">
                      {value}
                    </p>
                    {sub && (
                      <p className="font-montserrat text-[10px] text-white/40 mt-0.5">{sub}</p>
                    )}
                  </div>
                </div>
              )

              return (
                <li key={key}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:scale-[1.01] transition-transform h-full"
                      aria-label={`${label}: ${value}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── Main: Info + Form ── */}
      <section className="py-16 bg-cream" aria-labelledby="contact-form-heading">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── Left: Info panel ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <AnimatedSection direction="right">

                <div className="mb-1">
                  <h2 className="font-playfair font-bold text-navy text-2xl mb-2">
                    Let&apos;s Build Together
                  </h2>
                  <p className="font-montserrat text-navy/55 text-sm leading-relaxed">
                    Tell us about your project and we&apos;ll get back to you within 2 hours during business hours.
                  </p>
                </div>

                {/* Info card */}
                <address className="bg-white rounded-2xl border border-navy/8 shadow-sm overflow-hidden not-italic">
                  <div className="px-5 py-4 border-b border-navy/6">
                    <p className="font-playfair font-bold text-navy text-sm">{company.name}</p>
                    <p className="font-montserrat text-navy/40 text-xs mt-0.5">{company.serviceArea.display}</p>
                  </div>
                  <ul className="divide-y divide-navy/5">
                    {[
                      {
                        key: 'p1',
                        icon: Phone, color: '#7A2EFF', label: 'Phone',
                        text: company.contact.phone,
                        href: `tel:${company.contact.phoneRaw}`,
                      },
                      {
                        key: 'p2',
                        icon: Phone, color: '#7A2EFF', label: 'Phone',
                        text: company.contact.phone2,
                        href: `tel:${company.contact.phoneRaw2}`,
                      },
                      {
                        key: 'wa',
                        icon: MessageCircle, color: '#25D366', label: 'WhatsApp',
                        text: 'Chat with us',
                        href: company.contact.whatsappLink,
                        external: true,
                      },
                      {
                        key: 'em',
                        icon: Mail, color: '#FF6A1A', label: 'Email',
                        text: company.contact.email,
                        href: `mailto:${company.contact.email}`,
                      },
                      {
                        key: 'hr',
                        icon: Clock, color: '#7A2EFF', label: 'Hours',
                        text: `${company.hours.weekdays}: ${company.hours.time}`,
                        sub: `Sunday: ${company.hours.sunday}`,
                        href: null,
                      },
                      {
                        key: 'sa',
                        icon: MapPin, color: '#FF6A1A', label: 'Service Area',
                        text: company.serviceArea.display,
                        href: null,
                      },
                    ].map(({ key, icon: Icon, color, label, text, sub, href, external }) => (
                      <li key={key} className="px-5 py-3">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${color}15` }}
                            aria-hidden="true"
                          >
                            <Icon size={13} style={{ color }} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-montserrat text-[10px] text-navy/35 uppercase tracking-wider mb-0.5">
                              {label}
                            </p>
                            {href ? (
                              <a
                                href={href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className="font-montserrat text-xs text-navy font-medium hover:text-orange transition-colors break-all"
                              >
                                {text}
                              </a>
                            ) : (
                              <p className="font-montserrat text-xs text-navy font-medium leading-snug break-words">
                                {text}
                              </p>
                            )}
                            {sub && (
                              <p className="font-montserrat text-[10px] text-navy/35 mt-0.5">{sub}</p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </address>

                {/* Response time */}
                <div className="flex items-start gap-3 bg-orange/6 border border-orange/15 rounded-xl px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <p className="font-montserrat text-xs text-navy/65 leading-relaxed">
                    <span className="font-semibold text-orange">Fast response — </span>
                    {company.hours.note}
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={company.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white py-3 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: '#25D366' }}
                  aria-label="Chat with us on WhatsApp"
                >
                  <WaIcon size={16} />
                  Prefer WhatsApp? Chat Now
                </a>

              </AnimatedSection>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-2xl shadow-sm border border-navy/6 p-6 sm:p-9">
                  <AnimatePresence mode="wait">

                    {/* Success state */}
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                        role="status"
                        aria-live="polite"
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg"
                          style={{ background: GRAD }}
                          aria-hidden="true"
                        >
                          <CheckCircle2 size={28} className="text-white" />
                        </div>
                        <h3 className="font-playfair text-xl font-bold text-navy mb-2">
                          Message Sent!
                        </h3>
                        <p className="font-montserrat text-navy/55 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                          Thank you for reaching out. Our team will contact you within 24 hours.
                        </p>
                        <button onClick={reset} className="btn-primary">
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (

                      /* Form state */
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                        noValidate
                        aria-label="Contact form"
                      >
                        <div className="mb-1">
                          <h2
                            id="contact-form-heading"
                            className="font-playfair font-bold text-navy text-xl mb-1"
                          >
                            Send Us a Message
                          </h2>
                          <p className="font-montserrat text-navy/45 text-xs">
                            Free consultation — no obligation
                          </p>
                        </div>

                        {/* Name + Phone */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="contact-name"
                              className="font-montserrat text-xs font-semibold text-navy/60 mb-1.5 block uppercase tracking-wide"
                            >
                              Full Name <span aria-hidden="true">*</span>
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              autoComplete="name"
                              value={form.name}
                              onChange={e => setForm({ ...form, name: e.target.value })}
                              placeholder="Your full name"
                              className={INPUT_CLS}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="contact-phone"
                              className="font-montserrat text-xs font-semibold text-navy/60 mb-1.5 block uppercase tracking-wide"
                            >
                              Phone Number <span aria-hidden="true">*</span>
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              required
                              autoComplete="tel"
                              inputMode="tel"
                              value={form.phone}
                              onChange={e => setForm({ ...form, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                              className={INPUT_CLS}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="font-montserrat text-xs font-semibold text-navy/60 mb-1.5 block uppercase tracking-wide"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            inputMode="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className={INPUT_CLS}
                          />
                        </div>

                        {/* Service */}
                        <div>
                          <label
                            htmlFor="contact-service"
                            className="font-montserrat text-xs font-semibold text-navy/60 mb-1.5 block uppercase tracking-wide"
                          >
                            Service Required
                          </label>
                          <select
                            id="contact-service"
                            value={form.service}
                            onChange={e => setForm({ ...form, service: e.target.value })}
                            className={INPUT_CLS}
                          >
                            <option value="">Select a service</option>
                            {(servicesData as { id: string; title: string }[]).map(s => (
                              <option key={s.id} value={s.title}>{s.title}</option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="contact-message"
                            className="font-montserrat text-xs font-semibold text-navy/60 mb-1.5 block uppercase tracking-wide"
                          >
                            Your Message <span aria-hidden="true">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            required
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            placeholder="Tell us about your project — location, size, timeline, budget..."
                            rows={4}
                            className={`${INPUT_CLS} resize-none`}
                          />
                        </div>

                        {/* Submit buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1">
                          <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary flex-1 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {loading ? (
                              <>
                                <svg
                                  className="animate-spin h-4 w-4 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Sending…
                              </>
                            ) : (
                              <><Send size={15} aria-hidden="true" /> Send Message</>
                            )}
                          </button>
                          <a
                            href={company.contact.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                            style={{ background: '#25D366' }}
                            aria-label="Send message via WhatsApp"
                          >
                            <WaIcon size={15} /> WhatsApp
                          </a>
                        </div>

                        <p className="font-montserrat text-[11px] text-navy/30 text-center">
                          We respond within 24 hours. Your information is kept confidential.
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