// app/services/page.tsx  ← server component
import type { Metadata } from 'next'
import ServicesPage from './ServicesPage'
import { company } from '@/data'

export const metadata: Metadata = {
  alternates: { canonical: `${company.website}/services` },
  title: `Construction Services – ${company.name} ${company.serviceArea.city}`,
  description: `Comprehensive construction services in ${company.serviceArea.city}: Residential Construction, Commercial Construction, Architectural Design, Turnkey Projects, Renovation & Interior Design.`,
}

export default function Page() {
  return <ServicesPage />
}