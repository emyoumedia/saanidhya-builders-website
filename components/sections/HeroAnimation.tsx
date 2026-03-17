'use client'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Building2, Award, Users, Star } from 'lucide-react'
import company from '@/data/company.json'

const stats = [
  { icon: Building2, value: company.stats.projectsCompleted, label: 'Projects' },
  { icon: Award, value: company.stats.yearsExperience, label: 'Years' },
  { icon: Users, value: company.stats.happyClients, label: 'Clients' },
  { icon: Star, value: company.stats.googleRating + '★', label: 'Rating' },
]

export default function HeroAnimation() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10"
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="text-center text-white">
              <Icon className="mx-auto mb-2" size={18} />
              <p className="font-bold">{stat.value}</p>
              <p className="text-xs text-white/50">{stat.label}</p>
            </div>
          )
        })}
      </m.div>
    </LazyMotion>
  )
}