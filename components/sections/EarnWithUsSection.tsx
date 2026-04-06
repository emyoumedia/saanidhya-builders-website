'use client'

import Link from 'next/link'
import { BadgeIndianRupee, ArrowRight, UserPlus, Send, CheckCircle2 } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  { icon: UserPlus,           label: 'Register Free'       },
  { icon: Send,               label: 'Submit a Lead'       },
  { icon: BadgeIndianRupee,   label: 'Earn Commission'     },
]

const GRAD = 'linear-gradient(135deg,#7A2EFF 0%,#FF6A1A 100%)'

export default function EarnWithUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: '#0B0F3B',
              boxShadow: '0 20px 60px rgba(11,15,59,0.18)',
            }}
          >
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute -top-24 -left-24 w-80 h-80 rounded-full"
                style={{ background: 'radial-gradient(circle,rgba(122,46,255,0.35),transparent 70%)' }}
              />
              <div
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(circle,rgba(255,106,26,0.25),transparent 70%)' }}
              />
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
            </div>

            <div className="relative px-8 py-12 sm:px-12 lg:px-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

                {/* ── Left copy ─────────────────────────────── */}
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange/30 bg-orange/10 mb-5">
                    <BadgeIndianRupee size={12} className="text-orange" />
                    <span className="font-montserrat text-xs font-bold text-orange uppercase tracking-[0.16em]">
                      Partner Program
                    </span>
                  </div>

                  <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                    Earn With{' '}
                    <span className="gradient-text">Saanidhya</span>
                  </h2>

                  <p className="font-montserrat text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
                    Refer construction clients from your network and earn commission
                    on every successful project. Free to join, zero investment.
                  </p>

                  {/* 3-step mini flow */}
                  <div className="flex items-center gap-1 mb-8">
                    {steps.map((step, i) => {
                      const Icon = step.icon
                      return (
                        <div key={step.label} className="flex items-center gap-1">
                          <div className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-xl px-3.5 py-2.5">
                            <div
                              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: GRAD }}
                            >
                              <Icon size={12} className="text-white" />
                            </div>
                            <span className="font-montserrat text-xs font-semibold text-white/70 whitespace-nowrap">
                              {step.label}
                            </span>
                          </div>
                          {i < steps.length - 1 && (
                            <ArrowRight size={12} className="text-white/20 flex-shrink-0" />
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Trust points */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                    {['Free Registration', 'No Investment', 'Transparent Payouts'].map(t => (
                      <span key={t} className="flex items-center gap-1.5 font-montserrat text-xs text-white/40">
                        <CheckCircle2 size={11} className="text-orange" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/auth?mode=register"
                      className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                      style={{ background: GRAD }}
                    >
                      Become a Partner <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/partner"
                      className="inline-flex items-center gap-2 font-montserrat font-semibold text-sm text-white/70 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/8 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* ── Right stat cards ───────────────────────── */}
                <div className="hidden lg:grid grid-cols-2 gap-3 mt-0">

                  {/* Card 1 */}
                  <div className="bg-white/6 border border-white/10 rounded-2xl p-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                      style={{ background: '#7A2EFF' }}
                    >
                      <UserPlus size={18} className="text-white" />
                    </div>
                    <p className="font-playfair font-bold text-white text-2xl mb-0.5">₹0</p>
                    <p className="font-montserrat text-white/45 text-xs">To get started</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/6 border border-white/10 rounded-2xl p-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                      style={{ background: '#FF6A1A' }}
                    >
                      <BadgeIndianRupee size={18} className="text-white" />
                    </div>
                    <p className="font-playfair font-bold text-white text-2xl mb-0.5">Per Lead</p>
                    <p className="font-montserrat text-white/45 text-xs">Fixed commission</p>
                  </div>

                  {/* Card 3 — full width */}
                  <div
                    className="col-span-2 rounded-2xl p-5 relative overflow-hidden"
                    style={{ background: GRAD }}
                  >
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-15">
                      <BadgeIndianRupee size={64} className="text-white" />
                    </div>
                    <p className="font-montserrat text-xs font-bold text-white/70 uppercase tracking-wider mb-1">
                      Your next step
                    </p>
                    <p className="font-playfair font-bold text-white text-lg leading-snug mb-3">
                      Register &amp; start<br />referring today
                    </p>
                    <Link
                      href="/auth?mode=register"
                      className="inline-flex items-center gap-1.5 font-montserrat font-bold text-xs bg-white/20 hover:bg-white/30 transition-colors text-white px-4 py-2 rounded-lg"
                    >
                      Join Free <ArrowRight size={11} />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}