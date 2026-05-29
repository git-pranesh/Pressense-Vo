import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages | Pressense',
  description: 'Fixed-scope consulting packages for AI automation, strategy, and systems. Clear deliverables, transparent pricing.',
  openGraph: {
    title: 'Packages | Pressense',
    description: 'Fixed-scope consulting packages for AI automation, strategy, and systems. Clear deliverables, transparent pricing.',
    url: '/packages',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Packages' }],
  },
  alternates: {
    canonical: '/packages',
  },
}

const packages = [
  {
    slug: 'ai-automation-consulting',
    title: 'AI Automation Consulting',
    price: '$5,000',
    priceNote: 'onwards',
    description: 'End-to-end AI workflow design and implementation. We diagnose your broken processes, build AI-powered solutions, and deploy within 1-2 weeks.',
    highlights: ['Workflow audit & mapping', 'AI solution architecture', 'Implementation & deployment', 'Team training & handoff'],
    ideal: 'Businesses with manual, repetitive workflows ready to automate',
  },
  {
    slug: 'fractional-cmo',
    title: 'Fractional CMO',
    price: '$2,000',
    priceNote: '/month onwards',
    description: 'Strategic marketing leadership without the full-time cost. GTM strategy, positioning, demand generation, and team direction on a flexible retainer.',
    highlights: ['GTM strategy & execution', 'Positioning & messaging', 'Demand generation oversight', 'Marketing team direction'],
    ideal: 'Growing businesses that need marketing leadership but not a full-time hire',
  },
  {
    slug: 'business-diagnostic',
    title: 'Business Diagnostic',
    price: '$2,500',
    priceNote: 'onwards',
    description: 'A structured audit of your operations, GTM, and systems. We identify the root causes holding back growth and deliver a prioritized action plan.',
    highlights: ['Operations assessment', 'GTM & revenue analysis', 'Systems audit', 'Prioritized roadmap'],
    ideal: 'Founders who know something is broken but cannot pinpoint what',
  },
  {
    slug: 'internal-tools',
    title: 'Internal Tool Build',
    price: '$5,000',
    priceNote: 'onwards',
    description: 'Custom internal tools to replace spreadsheets and manual workflows. Built fast, designed for your team, owned by you.',
    highlights: ['Requirements discovery', 'Custom tool design', 'Development & testing', 'Deployment & training'],
    ideal: 'Teams drowning in spreadsheets or outgrowing off-the-shelf SaaS',
  },
  {
    slug: 'strategy-sprint',
    title: 'Strategy Sprint',
    price: '$8,000',
    priceNote: '2-week engagement',
    description: 'Intensive 2-week engagement to solve a specific strategic challenge. Positioning, GTM, pricing, or market entry - we go deep and deliver clarity.',
    highlights: ['Problem definition', 'Research & analysis', 'Strategy development', 'Implementation roadmap'],
    ideal: 'Founders facing a major decision or pivot who need expert input fast',
  },
]

export default function PackagesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pressense Consulting Packages',
    description: 'Fixed-scope consulting packages for AI automation, strategy, and systems.',
    itemListElement: packages.map((pkg, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: pkg.title,
        description: pkg.description,
        url: `https://pressense.co/packages/${pkg.slug}`,
        offers: {
          '@type': 'Offer',
          price: pkg.price.replace('$', '').replace(',', ''),
          priceCurrency: 'USD',
        },
      },
    })),
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Clear Packages. Fixed Scope. Real Results.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              No hourly billing, no scope creep. Choose a package, get a defined outcome, move forward with clarity.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="pb-20 sm:pb-28 px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Link
                  key={pkg.slug}
                  href={`/packages/${pkg.slug}`}
                  className="group flex flex-col p-6 rounded-2xl border border-border/60 bg-background/40 hover:border-primary/40 hover:bg-background/60 transition-all"
                >
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h2>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground">{pkg.priceNote}</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {pkg.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">-</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground/80">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Not sure which package fits?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a diagnostic. We will identify what is broken and recommend the right path forward.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start Your Diagnostic
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
