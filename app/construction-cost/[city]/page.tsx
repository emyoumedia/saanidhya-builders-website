import type { Metadata }  from 'next'
import { notFound }       from 'next/navigation'
import Link               from 'next/link'
import { cities, getCityBySlug } from '@/data/cities'
import company from '@/data/company.json'
import { constructionCostMeta, faqJsonLd, cap, formatDate } from '@/lib/seo'
import { CheckCircle, Phone, ArrowRight, MapPin, TrendingUp, Home, Building2,
         Star, MessageSquare, Clock } from 'lucide-react'

interface Props { params: { city: string } }

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return constructionCostMeta(city.slug, city.state)
}

const YEAR = new Date().getFullYear()

const costBreakdown = [
  { label: 'Foundation & Structure', pct: '25–30%', detail: 'Depends on soil type and floors' },
  { label: 'Masonry & Walls',        pct: '15–20%', detail: 'AAC blocks, red bricks, or fly ash' },
  { label: 'Roofing',                pct: '10–15%', detail: 'RCC slab or sloped tile' },
  { label: 'Plumbing & Electrical',  pct: '10–12%', detail: 'CPVC pipes, copper wiring' },
  { label: 'Finishing & Interiors',  pct: '30–35%', detail: 'Flooring, doors, painting' },
]

const specTable = [
  { spec:'Economy',  range:'₹1,500–₹2,200', features:'Basic tiles, standard fittings, enamel paint' },
  { spec:'Standard', range:'₹2,200–₹2,800', features:'Vitrified tiles, modular kitchen, textured paint' },
  { spec:'Premium',  range:'₹2,800–₹3,800', features:'Marble/granite, premium fittings, designer interiors' },
  { spec:'Luxury',   range:'₹3,800–₹6,000+',features:'Italian marble, smart home, imported fittings' },
]

export default function ConstructionCostPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const { min, max } = city.costPerSqft
  const faq = faqJsonLd(city.slug, city.state, min, max)
  const dateStr = new Date().toLocaleDateString('en-IN', { month:'long', year:'numeric' })

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <div className="bg-cream min-h-screen">

        {/* ── Hero ── */}
        <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background:'linear-gradient(135deg,#7A2EFF,#FF6A1A)' }} />

          <div className="container mx-auto px-4 md:px-6 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-montserrat text-xs text-white/40 mb-6"
              aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/construction-cost" className="hover:text-white/70 transition-colors">Construction Cost</Link>
              <span>/</span>
              <span className="text-white/70">{cap(city.slug)}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-montserrat text-xs font-semibold text-orange uppercase
                    tracking-widest px-3 py-1.5 rounded-full border border-orange/20 bg-orange/10">
                    Updated {dateStr}
                  </span>
                </div>
                <h1 className="font-playfair font-bold text-white leading-tight mb-4"
                  style={{ fontSize:'clamp(2rem,4vw,3rem)' }}>
                  House Construction Cost in{' '}
                  <span className="gradient-text">{city.name}</span>{' '}
                  {YEAR}
                </h1>
                <p className="font-montserrat text-lg text-white/70 mb-6 leading-relaxed">
                  {city.description} Get accurate construction cost estimates, material pricing, and
                  expert builder consultation.
                </p>
                <div className="flex items-center gap-2 text-white/50 font-montserrat text-sm mb-8">
                  <MapPin size={14} className="text-orange" />
                  {city.name}, {city.state}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Get Free Estimate <ArrowRight size={15} />
                  </Link>
                  <a href={`tel:${company.contact.phoneRaw}`} className="btn-secondary text-sm">
                    <Phone size={15} /> Call Now
                  </a>
                </div>
              </div>

              {/* Cost card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <p className="font-montserrat text-sm text-white/50 uppercase tracking-wider mb-2">
                  Average Cost Per Sq.Ft in {city.name}
                </p>
                <div className="font-playfair font-bold text-white mb-1"
                  style={{ fontSize:'3rem' }}>
                  ₹{min.toLocaleString()}
                </div>
                <div className="font-montserrat text-lg text-white/50 mb-6">
                  to ₹{max.toLocaleString()} per sq.ft
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { label:'Avg. Project Cost',  val: city.avgProjectCost },
                    { label:'Project Timeline',   val: '12–18 months' },
                    { label:'Climate',             val: city.climate },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center
                      border-b border-white/8 pb-3">
                      <span className="font-montserrat text-sm text-white/50">{row.label}</span>
                      <span className="font-montserrat text-sm font-semibold text-white">{row.val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_,i) => <Star key={i} size={14} className="fill-orange text-orange" />)}
                  <span className="font-montserrat text-xs text-white/50 ml-1">
                    Trusted by 1,200+ homeowners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Spec table ── */}
        <section className="container mx-auto px-4 md:px-6 py-16">
          <div className="text-center mb-10">
            <span className="font-montserrat text-xs font-semibold text-orange uppercase
              tracking-widest mb-3 block">Cost Breakdown</span>
            <h2 className="font-playfair font-bold text-navy text-3xl md:text-4xl mb-3">
              Construction Cost by Specification
            </h2>
            <p className="font-montserrat text-lg max-w-xl mx-auto" style={{ color:'rgba(11,15,59,.6)' }}>
              Costs in {city.name} vary based on specification level and finish quality.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-navy/10 shadow-sm mb-12">
            <table className="w-full text-sm font-montserrat">
              <thead className="gradient-bg text-white">
                <tr>
                  {['Specification','Cost Per Sq.Ft','What You Get'].map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-semibold text-white">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {specTable.map((row, i) => (
                  <tr key={row.spec} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
                    <td className="px-6 py-4 font-semibold text-navy">{row.spec}</td>
                    <td className="px-6 py-4 font-bold text-orange">{row.range}</td>
                    <td className="px-6 py-4" style={{ color:'rgba(11,15,59,.65)' }}>{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost breakdown grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {costBreakdown.map(({ label, pct, detail }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-navy/5 shadow-sm text-center">
                <div className="font-playfair font-bold text-orange text-xl mb-1">{pct}</div>
                <div className="font-montserrat font-semibold text-navy text-sm mb-1">{label}</div>
                <div className="font-montserrat text-xs" style={{ color:'rgba(11,15,59,.5)' }}>{detail}</div>
              </div>
            ))}
          </div>

          {/* Popular areas */}
          <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-sm mb-16">
            <h3 className="font-playfair font-bold text-navy text-2xl mb-6 flex items-center gap-2">
              <MapPin className="text-orange" size={20} />
              Popular Areas in {city.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {city.popularAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream
                  border border-navy/5">
                  <CheckCircle size={15} className="text-orange flex-shrink-0" />
                  <span className="font-montserrat text-sm text-navy">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose us */}
          <div className="bg-navy rounded-3xl p-10 text-white mb-16">
            <h3 className="font-playfair font-bold text-white text-2xl md:text-3xl mb-2">
              Why Choose Saanidhya Builders in {city.name}?
            </h3>
            <p className="font-montserrat text-white/60 mb-8">
              With 15+ years experience and 500+ projects, we deliver quality construction on time.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title:'Transparent Pricing', desc:'Fixed-price contracts with no hidden charges or surprises' },
                { icon: Clock,       title:'On-Time Delivery',    desc:'Average 20% faster than industry norm with milestone tracking' },
                { icon: Star,        title:'5-Year Warranty',     desc:'Structural warranty on all projects, workmanship guarantee' },
                { icon: Home,        title:'Vastu Compliant',     desc:'All designs reviewed for Vastu Shastra compliance on request' },
                { icon: Building2,   title:'Premium Materials',   desc:'ISI-certified steel, OPC cement, branded fixtures throughout' },
                { icon: MessageSquare, title:'Dedicated Manager', desc:'Single point of contact and weekly progress photo updates' },
              ].map(({ icon:Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white text-sm mb-1">{title}</div>
                    <div className="font-montserrat text-xs text-white/55 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h3 className="font-playfair font-bold text-navy text-2xl md:text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q:`What is the construction cost per sq.ft in ${city.name}?`,
                  a:`In ${city.name}, house construction costs range from ₹${min.toLocaleString()} to ₹${max.toLocaleString()} per sq.ft depending on specification level. Economy homes cost less; luxury villas with premium materials can go above ₹5,000/sq.ft.`,
                },
                {
                  q:`How long does house construction take in ${city.name}?`,
                  a:`A standard 1,200–1,800 sq.ft home in ${city.name} typically takes 12–18 months from foundation to handover. With Saanidhya Builders' turnkey model and dedicated project management, we average 20% faster than industry norms.`,
                },
                {
                  q:`Do you provide turnkey construction services in ${city.name}?`,
                  a:`Yes. Our turnkey package covers everything from architectural design and approvals to construction, interior finishing, and move-in ready handover — all under one contract at a fixed price.`,
                },
                {
                  q:`What is included in your free cost estimate?`,
                  a:`Our free estimate includes itemised costs for structure, masonry, roofing, plumbing, electrical, and finishing based on your plot size and specifications. We also provide a 3D floor plan preview.`,
                },
              ].map(({ q, a }, i) => (
                <details key={i} className="bg-white rounded-2xl border border-navy/5 shadow-sm group">
                  <summary className="flex justify-between items-center px-6 py-5 cursor-pointer
                    font-montserrat font-semibold text-navy text-sm list-none">
                    {q}
                    <span className="text-orange ml-4 text-xl leading-none group-open:rotate-45
                      transition-transform inline-block flex-shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-5 font-montserrat text-sm leading-relaxed"
                    style={{ color:'rgba(11,15,59,.68)' }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Other cities */}
          <div>
            <h3 className="font-playfair font-bold text-navy text-2xl mb-6 text-center">
              Construction Cost in Other Cities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {cities
                .filter((c) => c.slug !== city.slug)
                .slice(0, 8)
                .map((c) => (
                  <Link key={c.slug} href={`/construction-cost/${c.slug}`}
                    className="flex items-center justify-between bg-white rounded-xl px-5 py-4
                      border border-navy/5 hover:border-orange/30 hover:shadow-md
                      transition-all duration-200 group">
                    <div>
                      <div className="font-montserrat font-semibold text-navy text-sm group-hover:text-orange
                        transition-colors">
                        {c.name}
                      </div>
                      <div className="font-montserrat text-xs" style={{ color:'rgba(11,15,59,.45)' }}>
                        ₹{c.costPerSqft.min.toLocaleString()}–₹{c.costPerSqft.max.toLocaleString()}/sqft
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-navy/30 group-hover:text-orange transition-colors" />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="gradient-bg py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-playfair font-bold text-white text-3xl md:text-4xl mb-4">
              Ready to Build in {city.name}?
            </h2>
            <p className="font-montserrat text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Get a free site visit, consultation, and detailed cost estimate from our expert team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="bg-white text-navy font-montserrat font-semibold text-sm px-8 py-4
                  rounded-full hover:bg-cream transition-colors inline-flex items-center gap-2">
                Get Free Consultation <ArrowRight size={15} />
              </Link>
              <a href={`tel:${company.contact.phoneRaw}`}
                className="border-2 border-white text-white font-montserrat font-semibold text-sm
                  px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <Phone size={15} /> {company.contact.phone}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
