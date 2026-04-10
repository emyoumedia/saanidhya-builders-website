import { servicesData } from '@/data'

const MAX_SLIDES = 3
const featuredServices = servicesData.filter((s: any) => s.featured)
const baseServices = featuredServices.length ? featuredServices : servicesData
const sorted = [...baseServices].sort((a: any, b: any) => (a.priority ?? 999) - (b.priority ?? 999))

export const SLIDES = sorted.slice(0, MAX_SLIDES).map((s: any) => ({
  bg: s.image,
  bgAlt: s.imageAlt,
  image: s.image,
  service: s.title,
  tagline: s.tagline,
  slug: `/services`,
  serviceId: s.id,
}))