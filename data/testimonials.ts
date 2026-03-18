export type Testimonial = {
  id: string
  name: string
  rating: number
  text: string
  projectType: string
  area?: string
  city?: string
  image?: string
  imageAlt?: string
}

import raw from './testimonials.json'
export default raw as Testimonial[]