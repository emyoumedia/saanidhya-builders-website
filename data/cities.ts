import type { CityData } from './types'

export const cities: CityData[] = [
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    costPerSqft: { min: 1800, max: 3500 },
    avgProjectCost: '₹35–70 Lakhs',
    popularAreas: ['Saravanampatti', 'Peelamedu', 'Gandhipuram', 'RS Puram', 'Vadavalli'],
    climate: 'Moderate',
    description: 'Coimbatore, the Manchester of South India, is a thriving industrial city with a booming real estate market and strong demand for quality residential construction.',
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    costPerSqft: { min: 2200, max: 5000 },
    avgProjectCost: '₹55–120 Lakhs',
    popularAreas: ['Velachery', 'OMR', 'Anna Nagar', 'Adyar', 'Porur'],
    climate: 'Hot and Humid',
    description: 'Chennai, the capital of Tamil Nadu, is a major metropolitan city with one of the fastest-growing real estate markets in India.',
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    costPerSqft: { min: 2500, max: 6000 },
    avgProjectCost: '₹60–150 Lakhs',
    popularAreas: ['Whitefield', 'Electronic City', 'Jayanagar', 'Indiranagar', 'HSR Layout'],
    climate: 'Pleasant',
    description: 'Bangalore, the Silicon Valley of India, is a cosmopolitan city with premium residential and commercial construction demand.',
  },
  {
    slug: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    costPerSqft: { min: 1600, max: 2800 },
    avgProjectCost: '₹28–60 Lakhs',
    popularAreas: ['Anna Nagar', 'KK Nagar', 'Bypass Road', 'Thirunagar', 'Iyer Bungalow'],
    climate: 'Hot and Dry',
    description: 'Madurai, the Temple City of Tamil Nadu, is a culturally rich city with growing residential construction activity.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    costPerSqft: { min: 2000, max: 4500 },
    avgProjectCost: '₹50–110 Lakhs',
    popularAreas: ['Gachibowli', 'Kondapur', 'Banjara Hills', 'Jubilee Hills', 'Madhapur'],
    climate: 'Semi-Arid',
    description: 'Hyderabad, the City of Pearls, is a major IT hub with rapidly expanding residential and commercial construction.',
  },
  {
    slug: 'tirupur',
    name: 'Tirupur',
    state: 'Tamil Nadu',
    costPerSqft: { min: 1600, max: 2800 },
    avgProjectCost: '₹28–56 Lakhs',
    popularAreas: ['Palladam Road', 'Avinashi Road', 'Kangeyam Road', 'Kumaran Nagar'],
    climate: 'Moderate',
    description: 'Tirupur, the knitwear capital of India, is a rapidly growing industrial city with strong residential construction demand.',
  },
  {
    slug: 'salem',
    name: 'Salem',
    state: 'Tamil Nadu',
    costPerSqft: { min: 1500, max: 2600 },
    avgProjectCost: '₹25–50 Lakhs',
    popularAreas: ['Fairlands', 'Five Roads', 'Shevapet', 'Suramangalam', 'Alagapuram'],
    climate: 'Hot and Semi-Arid',
    description: 'Salem, the Steel City of Tamil Nadu, is an emerging real estate market with affordable construction options.',
  },
  {
    slug: 'erode',
    name: 'Erode',
    state: 'Tamil Nadu',
    costPerSqft: { min: 1500, max: 2500 },
    avgProjectCost: '₹25–48 Lakhs',
    popularAreas: ['Perundurai', 'Bhavani', 'Sathy Road', 'Chithode', 'Surampatti'],
    climate: 'Hot and Dry',
    description: 'Erode, the Turmeric City of Tamil Nadu, is an agricultural and textile hub with growing residential construction activity.',
  },
]

export const cityNames = cities.map((c) => c.slug)

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug)
}
