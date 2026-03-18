// /data/index.ts
// ─────────────────────────────────────────────────────────
// Single import point for all site data.
// Usage in any component:
//   import { company, servicesData, projectsData } from '@/data'
// ─────────────────────────────────────────────────────────

export { default as company }          from './company.json'
export { default as aboutData }        from './about.json'
export { default as servicesData }     from './services.json'
export { default as projectsData }     from './projects.json'
export { default as processData }      from './process.json'
export { default as whyData }          from './whyChooseUs.json'
export { default as teamData }         from './team.json'
export { default as navData }          from './nav.json'
export { default as faqData }          from './faq.json'
export { default as localSeoData }     from './localSeo.json'
export { default as testimonialsData } from './testimonials'  // ← .ts not .json