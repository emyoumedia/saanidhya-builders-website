import Link from 'next/link'
import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog'
import { cityNames } from '@/data/cities'

// ── Types ──────────────────────────────────────────────
type SectionProps = {
  title: string
  count?: number
  children: React.ReactNode
}

type ItemProps = {
  href: string
  label?: string
}

// ── Components ─────────────────────────────────────────
function Section({ title, count, children }: SectionProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="font-playfair font-bold text-navy text-xl">{title}</h2>
        {count !== undefined && (
          <span className="font-montserrat text-xs font-semibold text-orange border border-orange/30 bg-orange/8 px-2.5 py-0.5 rounded-full">
            {count}
          </span>
        )}
        <div className="flex-1 border-t border-navy/10" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {children}
      </div>
    </div>
  )
}

function Item({ href, label }: ItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-3 rounded-xl border border-navy/8 bg-white hover:border-orange/30 hover:bg-orange/5 hover:text-orange font-montserrat text-sm text-navy/60 transition-all duration-200 group"
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-navy/20 group-hover:bg-orange flex-shrink-0 transition-colors"
        aria-hidden="true"
      />
      {label ?? href}
    </Link>
  )
}

// ── Page ───────────────────────────────────────────────
export default function SitemapPage() {
  const posts      = getAllPosts()
  const categories = getAllCategories()
  const tags       = getAllTags()

  return (
    <main className="bg-cream min-h-screen">

      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #7A2EFF 0%, transparent 60%), radial-gradient(circle at 70% 50%, #FF6A1A 0%, transparent 60%)' }}
        />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <span className="inline-block font-montserrat text-xs font-semibold text-orange uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-orange/30">
            Site Structure
          </span>
          <h1 className="font-playfair font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)' }}>
            Site<span className="gradient-text">map</span>
          </h1>
          <p className="font-montserrat text-white/50 text-sm max-w-md mx-auto">
            Every page on Saanidhya Builders — browse or share with search engines.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 max-w-5xl">

        {/* Main Pages */}
        <Section title="Main Pages" count={9}>
          {([
            { href: '/',              label: 'Home'          },
            { href: '/about',         label: 'About Us'      },
            { href: '/services',      label: 'Services'      },
            { href: '/projects',      label: 'Projects'      },
            { href: '/process',       label: 'Our Process'   },
            { href: '/testimonials',  label: 'Testimonials'  },
            { href: '/contact',       label: 'Contact'       },
            { href: '/blog',          label: 'Blog'          },
            { href: '/faq',           label: 'FAQ'           },
          ] as ItemProps[]).map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </Section>

        {/* Local SEO */}
        <Section title="Construction Services" count={4}>
          {([
            { href: '/construction-company-coimbatore',     label: 'Construction Company — Coimbatore'     },
            { href: '/builders-coimbatore',                 label: 'Builders in Coimbatore'                },
            { href: '/residential-construction-coimbatore', label: 'Residential Construction — Coimbatore' },
            { href: '/commercial-construction-coimbatore',  label: 'Commercial Construction — Coimbatore'  },
          ] as ItemProps[]).map((item) => (
            <Item key={item.href} {...item} />
          ))}
        </Section>

        {/* Blog Posts */}
        {posts.length > 0 && (
          <Section title="Blog Posts" count={posts.length}>
            {posts.map((post) => (
              <Item
                key={post.slug}
                href={`/blog/${post.slug}`}
                label={post.title ?? post.slug}
              />
            ))}
          </Section>
        )}

        {/* Categories */}
        {categories.length > 0 && (
          <Section title="Blog Categories" count={categories.length}>
            {categories.map((cat) => (
              <Item
                key={cat}
                href={`/blog/category/${cat.toLowerCase()}`}
                label={cat}
              />
            ))}
          </Section>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <Section title="Blog Tags" count={tags.length}>
            {tags.map((tag) => (
              <Item
                key={tag}
                href={`/blog/tag/${tag.toLowerCase()}`}
                label={tag}
              />
            ))}
          </Section>
        )}

        {/* Cities */}
        {cityNames.length > 0 && (
          <Section title="Construction Cost by City" count={cityNames.length}>
            {cityNames.map((city) => (
              <Item
                key={city}
                href={`/construction-cost/${city}`}
                label={`Construction Cost in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
              />
            ))}
          </Section>
        )}

      </div>
    </main>
  )
}