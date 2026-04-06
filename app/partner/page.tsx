'use client'

import Link from 'next/link'
import {
  UserPlus, Send, HardHat, BadgeIndianRupee,
  Users, Home, Building2, Wrench, CheckCircle2,
  ArrowRight, ShieldCheck, BarChart3, Wallet,
  Clock, BadgeCheck, XCircle, Smartphone,
  Star, Zap, Lock
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import CTASection from '@/components/sections/CTASection'
import { company } from '@/data'

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'
const GRAD_SOFT = 'linear-gradient(135deg,rgba(122,46,255,0.08) 0%,rgba(255,106,26,0.10) 100%)'

/* ─── HOW IT WORKS ────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Register for Free',
    desc: 'Create your partner account in minutes. No fees, no investment — completely free.',
    color: '#7A2EFF',
  },
  {
    num: '02',
    icon: Send,
    title: 'Submit Client Leads',
    desc: 'Know someone planning to build or renovate? Submit their details through your dashboard.',
    color: '#FF6A1A',
  },
  {
    num: '03',
    icon: HardHat,
    title: 'We Handle the Project',
    desc: 'Our team follows up, closes the deal, and delivers the construction work professionally.',
    color: '#7A2EFF',
  },
  {
    num: '04',
    icon: BadgeIndianRupee,
    title: 'Earn Your Commission',
    desc: 'Get paid after successful deal completion. Track every lead and payout in your dashboard.',
    color: '#FF6A1A',
  },
]

/* ─── WHO CAN JOIN ────────────────────────────────────────────────── */
const whoCanJoin = [
  { icon: Users,     label: 'Friends & Family',    desc: 'Refer people you know planning construction' },
  { icon: Building2, label: 'Real Estate Agents',  desc: 'Your clients need builders — earn from referrals' },
  { icon: Wrench,    label: 'Contractors',          desc: 'Expand your network and earn extra income' },
  { icon: Home,      label: 'Anyone',               desc: 'If you know someone who needs construction, you qualify' },
]

/* ─── COMMISSION BENEFITS ─────────────────────────────────────────── */
const commissionPoints = [
  { icon: BadgeIndianRupee, title: 'Fixed or % Commission',    desc: 'Earn a fixed amount or percentage per project value. Higher value projects = higher earnings.' },
  { icon: Clock,            title: 'Paid After Deal Closes',   desc: 'Commission is released after successful project confirmation. Fair, clear, no surprises.' },
  { icon: BarChart3,        title: 'Dashboard Tracking',       desc: 'See every lead you submitted, its status, and your expected/confirmed earnings in real time.' },
  { icon: Wallet,           title: 'Transparent Payouts',      desc: 'No hidden deductions. What\'s shown in your dashboard is exactly what you get paid.' },
]

/* ─── RULES ───────────────────────────────────────────────────────── */
const rules = [
  { icon: ShieldCheck, ok: true,  text: 'Only genuine leads with real contact details are accepted' },
  { icon: XCircle,     ok: false, text: 'Duplicate or already-known leads will be rejected automatically' },
  { icon: Smartphone,  ok: true,  text: 'Client OTP verification required to confirm lead authenticity' },
  { icon: BadgeCheck,  ok: true,  text: 'Commission is paid only after a successful project conversion' },
  { icon: Lock,        ok: true,  text: 'Your lead data is private and handled with full confidentiality' },
]

/* ─── WHY JOIN ────────────────────────────────────────────────────── */
const whyJoin = [
  { icon: Zap,            title: 'Free to Join',         desc: 'Zero registration fees or deposits required' },
  { icon: BadgeIndianRupee, title: 'No Investment',      desc: 'Refer clients from your existing network' },
  { icon: Star,           title: 'Extra Income',         desc: 'Earn passively alongside your main work' },
  { icon: BarChart3,      title: 'Simple Dashboard',     desc: 'Track leads, statuses, and commissions easily' },
]

/* ═══════════════════════════════════════════════════════════════════ */
export default function PartnerPage() {
  return (
    <>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle,#7A2EFF,transparent 70%)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle,#FF6A1A,transparent 70%)', filter: 'blur(60px)' }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <AnimatedSection>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 mb-6">
              <BadgeIndianRupee size={13} className="text-orange" />
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.16em]">
                Partner Program
              </span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Earn by Referring{' '}
              <span className="gradient-text">Construction Clients</span>
            </h1>

            <p className="font-montserrat text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join Saanidhya Builder as a partner and earn commission for every
              successful project — no investment, no risk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/auth?mode=register"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm text-white px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: GRAD }}
              >
                Become a Partner <ArrowRight size={15} />
              </Link>
              <Link
                href="/auth?mode=login"
                className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
              >
                Login to Dashboard
              </Link>
            </div>

            {/* Trust micro-strip */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {['Free Registration', 'No Investment', 'Transparent Payouts'].map(t => (
                <span key={t} className="flex items-center gap-1.5 font-montserrat text-xs text-white/40">
                  <CheckCircle2 size={11} className="text-orange" /> {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em]">
                Simple Process
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mt-2">
                How It Works
              </h2>
              <p className="font-montserrat text-navy/50 text-sm mt-3 max-w-md mx-auto">
                Four steps from registration to earning — nothing complicated.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-6 border border-navy/8 shadow-sm h-full relative overflow-hidden group hover:shadow-md transition-shadow">
                    {/* Step number watermark */}
                    <div className="absolute top-3 right-4 font-playfair font-bold text-5xl leading-none select-none"
                      style={{ color: step.color, opacity: 0.07 }}>
                      {step.num}
                    </div>

                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                      style={{ background: step.color }}>
                      <Icon size={20} className="text-white" />
                    </div>

                    <div className="font-montserrat text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: step.color }}>
                      Step {step.num}
                    </div>
                    <h3 className="font-playfair font-bold text-navy text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="font-montserrat text-xs text-navy/55 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Connector arrow (not on last) */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full items-center justify-center bg-cream border border-navy/10">
                        <ArrowRight size={10} className="text-navy/40" />
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHO CAN JOIN ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-center">

            <AnimatedSection>
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em]">
                Open to All
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
                Who Can Join?
              </h2>
              <p className="font-montserrat text-navy/55 text-sm leading-relaxed mb-8">
                You don't need to be in construction to be a partner. If you know
                someone who needs building or renovation work, you can earn from it.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {whoCanJoin.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl border border-navy/8 bg-cream hover:border-orange/30 transition-colors">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: GRAD_SOFT }}>
                        <Icon size={18} className="text-purple" />
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-navy text-sm">{item.label}</p>
                        <p className="font-montserrat text-navy/45 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AnimatedSection>

            {/* Visual callout */}
            <AnimatedSection delay={0.12}>
              <div className="mt-10 lg:mt-0 rounded-2xl p-8 text-center relative overflow-hidden"
                style={{ background: GRAD }}>
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 80%,white,transparent 50%),radial-gradient(circle at 80% 20%,white,transparent 50%)'
                  }} />
                <div className="relative">
                  <div className="font-playfair text-6xl font-bold text-white mb-2">
                    ₹0
                  </div>
                  <p className="font-montserrat font-bold text-white/90 text-lg mb-1">
                    Investment Required
                  </p>
                  <p className="font-montserrat text-white/60 text-sm mb-8 leading-relaxed">
                    Register, refer, and earn — completely free of cost. No deposits,
                    no monthly fees, no hidden charges.
                  </p>
                  <Link
                    href="/auth?mode=register"
                    className="inline-flex items-center gap-2 font-montserrat font-bold text-sm bg-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    style={{ color: '#7A2EFF' }}
                  >
                    Join Free <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── COMMISSION ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em]">
                Earn More
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mt-2">
                How Commission Works
              </h2>
              <p className="font-montserrat text-navy/50 text-sm mt-3 max-w-md mx-auto">
                Clear, transparent, and fair — you always know what you'll earn before the deal closes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {commissionPoints.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={item.title} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-6 border border-navy/8 shadow-sm flex gap-4 h-full hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: i % 2 === 0 ? '#7A2EFF' : '#FF6A1A' }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-navy text-sm mb-1.5">
                        {item.title}
                      </h3>
                      <p className="font-montserrat text-navy/55 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── RULES & VALIDATION ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 10% 90%,#7A2EFF,transparent 50%),radial-gradient(circle at 90% 10%,#FF6A1A,transparent 50%)'
          }} />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em]">
                Transparency First
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mt-2">
                Rules & Validation
              </h2>
              <p className="font-montserrat text-white/45 text-sm mt-3 max-w-md mx-auto">
                We keep the program fair for every partner. These rules protect you and ensure
                only genuine leads are rewarded.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-3">
            {rules.map((rule, i) => {
              const Icon = rule.icon
              return (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${rule.ok ? 'bg-orange/20' : 'bg-red-500/20'}`}>
                      <Icon size={16} className={rule.ok ? 'text-orange' : 'text-red-400'} />
                    </div>
                    <p className="font-montserrat text-sm text-white/80 leading-relaxed">
                      {rule.text}
                    </p>
                    <div className="ml-auto flex-shrink-0">
                      {rule.ok
                        ? <CheckCircle2 size={15} className="text-green-400" />
                        : <XCircle size={15} className="text-red-400" />
                      }
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.18em]">
                Benefits
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-navy mt-2">
                Why Join Saanidhya?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyJoin.map((item, i) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="text-center p-6 rounded-2xl border border-navy/8 bg-cream hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-105 transition-transform"
                      style={{ background: GRAD }}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-montserrat font-bold text-navy text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-navy/50 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden relative"
              style={{ background: GRAD }}>
              {/* Decorative blobs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/8" />
              </div>

              <div className="relative px-8 py-14 sm:px-14 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 mb-6">
                  <BadgeIndianRupee size={13} className="text-white" />
                  <span className="font-montserrat text-xs font-bold text-white uppercase tracking-widest">
                    Start Earning Today
                  </span>
                </div>

                <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                  Ready to Earn With Us?
                </h2>
                <p className="font-montserrat text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed">
                  Register in minutes, submit your first lead, and start earning
                  commission from every successful construction project.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/auth?mode=register"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-bold text-sm bg-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                    style={{ color: '#7A2EFF' }}
                  >
                    Become a Partner <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/auth?mode=login"
                    className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-sm text-white px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    Already a partner? Login
                  </Link>
                </div>

                <p className="font-montserrat text-white/40 text-xs mt-6">
                  Free forever · No credit card required · {company.serviceArea.city}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  )
}