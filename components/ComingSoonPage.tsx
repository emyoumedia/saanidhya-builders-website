'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const LAUNCH_DATE = new Date('2026-04-15T00:00:00+05:30')



const WHATSAPP_LINK =
  'https://wa.me/917448811611?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Saanidhya%20Builders'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }


function getTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

export default function ComingSoonPage() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft())
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(t)
  }, [])

 

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const res = await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (data.ok) {
      setSubmitted(true)
    } else {
      console.error('Notify failed:', data.error)
    }

  } catch (err) {
    console.error('Network error:', err)
  }
}

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#080C2E' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Construction site image — very subtle */}
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60"
          alt=""
          fill className="object-cover"
          style={{ opacity: 0.06 }}
          priority
        />
        {/* Gradient overlays */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 20% 50%, rgba(122,46,255,0.18) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 80% 50%, rgba(255,106,26,0.12) 0%, transparent 55%)',
        }} />
        {/* Animated particles */}
        <div className="coming-soon-particles" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Image
            src="/logo/logo.png"
            alt="Saanidhya Builders"
            width={48} height={48}
            className="object-contain rounded-xl"
          />
          <div className="text-left">
            <div className="font-playfair font-bold text-white text-xl leading-tight">Saanidhya</div>
            <div className="font-montserrat text-[11px] text-orange tracking-[0.22em] uppercase">Builders</div>
          </div>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 mb-8"
          style={{ animation: 'fadeUp 0.6s ease both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <span className="font-montserrat text-orange text-xs font-bold uppercase tracking-[0.16em]">
            Website Launching Soon
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-playfair font-bold text-white leading-[1.1] mb-5"
          style={{ fontSize: 'clamp(2.4rem,6vw,4rem)', animation: 'fadeUp 0.6s 0.1s ease both', opacity: 0 }}
        >
          We&apos;re Building<br />
          <span style={{
            backgroundImage: 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Something Great
          </span>
        </h1>

        <p
          className="font-montserrat text-white/50 text-base leading-relaxed mb-12 max-w-md mx-auto"
          style={{ animation: 'fadeUp 0.6s 0.2s ease both', opacity: 0 }}
        >
          Saanidhya Builders — trusted construction company in Coimbatore.
          Our full website is almost ready.
        </p>

        {/* Countdown */}
        {/* <div
          className="grid grid-cols-4 gap-3 mb-12 max-w-sm mx-auto"
          style={{ animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0 }}
        >
          {[
            { value: pad(time.days),    label: 'Days'    },
            { value: pad(time.hours),   label: 'Hours'   },
            { value: pad(time.minutes), label: 'Minutes' },
            { value: pad(time.seconds), label: 'Seconds' },
          ].map(({ value, label }) => (
            <div key={label}
              className="flex flex-col items-center py-4 px-2 rounded-2xl border border-white/8"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <span className="font-playfair font-bold text-white text-3xl sm:text-4xl leading-none tabular-nums">
                {value}
              </span>
              <span className="font-montserrat text-white/30 text-[10px] uppercase tracking-wider mt-1.5">
                {label}
              </span>
            </div>
          ))}
        </div> */}

        {/* Notify form */}
        <div
          className="mb-10"
          style={{ animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0 }}
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2 font-montserrat text-sm text-green-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              We&apos;ll notify you when we launch!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email for launch update"
                className="flex-1 px-4 py-3 rounded-xl font-montserrat text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-orange/30 placeholder:text-navy/35"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-montserrat font-bold text-sm text-white whitespace-nowrap hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }}
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8" style={{ animation: 'fadeUp 0.6s 0.45s ease both', opacity: 0 }}>
          <div className="flex-1 border-t border-white/8" />
          <span className="font-montserrat text-white/25 text-xs">or reach us directly</span>
          <div className="flex-1 border-t border-white/8" />
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          style={{ animation: 'fadeUp 0.6s 0.5s ease both', opacity: 0 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
            style={{ background: '#25D366' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="tel:917448811611"
            className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm text-white px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.99a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 74488 11611
          </a>
        </div>

        {/* Trust strip */}
        {/* <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          style={{ animation: 'fadeUp 0.6s 0.6s ease both', opacity: 0 }}
        >
          {['RERA Registered', 'ISO Certified', 'Bank Approved', '9+ Projects Done'].map(tag => (
            <div key={tag} className="flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF6A1A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="font-montserrat text-white/70 text-xs">{tag}</span>
            </div>
          ))}
        </div> */}

      </div>

      {/* Footer */}
      <div className="relative z-10 w-full text-center pb-6">
        <p className="font-montserrat text-white/15 text-[10px]">
          © {new Date().getFullYear()} Saanidhya Builders · Coimbatore, Tamil Nadu
        </p>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .coming-soon-particles {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 15%, rgba(255,255,255,0.1) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 65%, rgba(255,255,255,0.12) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.08) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.1) 0%, transparent 100%),
            radial-gradient(2px 2px at 10% 60%, rgba(122,46,255,0.3) 0%, transparent 100%),
            radial-gradient(2px 2px at 90% 10%, rgba(255,106,26,0.25) 0%, transparent 100%),
            radial-gradient(2px 2px at 60% 90%, rgba(122,46,255,0.2) 0%, transparent 100%);
        }
      `}</style>
    </main>
  )
}