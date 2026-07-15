import type { Metadata } from 'next'
import Link from 'next/link'
import { calculatorsData, CALCULATOR_CATEGORIES, CATEGORY_DESCRIPTIONS } from '@/lib/calculators'

export const metadata: Metadata = {
  title: 'Free SaaS Calculators & Tools | Pressense',
  description:
    'Free SaaS calculators for CAC, LTV, churn, NRR, burn rate, and more. Instant results with operator-grade benchmarks.',
  openGraph: {
    title: 'Free SaaS Calculators & Tools | Pressense',
    description: 'Calculate CAC, LTV, churn, NRR, burn rate, and more with operator-grade benchmarks. Free, instant, no signup.',
    url: '/tools',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Free Calculators' }],
  },
  alternates: { canonical: '/tools' },
}

export default function ToolsPage() {
  const calculatorsByCategory = CALCULATOR_CATEGORIES.map((category) => ({
    category,
    description: CATEGORY_DESCRIPTIONS[category],
    calculators: calculatorsData.filter((c) => c.category === category),
  })).filter((group) => group.calculators.length > 0)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Free SaaS Calculators & Tools',
            description: 'Free, instant SaaS calculators for unit economics, growth modeling, retention, and GTM with operator-grade benchmarks.',
            url: 'https://www.pressense.co/tools',
            provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co/' },
            hasPart: calculatorsData.map((calc) => ({
              '@type': 'WebApplication',
              name: calc.title,
              description: calc.shortDescription,
              url: `https://www.pressense.co/tools/${calc.slug}`,
              applicationCategory: 'BusinessApplication',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="eyebrow-line" />
              <span className="eyebrow">Tools Library</span>
            </div>
            <h1 className="text-hero font-serif font-medium text-foreground text-balance mb-6">
              Free calculators with{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>operator-grade benchmarks</em>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 text-pretty">
              Calculate your unit economics, model growth scenarios, and benchmark against industry standards.
              No signup required — just enter your numbers and get instant insights.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{calculatorsData.length} calculators</span>
              <span className="text-muted-foreground text-sm">across {calculatorsByCategory.length} categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Grid by Category */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-10 pb-24">
        <div className="space-y-16">
          {calculatorsByCategory.map((group) => (
            <div key={group.category}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="eyebrow-line" />
                  <span className="eyebrow">{group.category}</span>
                </div>
                <h2 className="text-section-title font-serif font-medium text-foreground mb-2">
                  {group.category}
                </h2>
                {group.description && (
                  <p className="text-muted-foreground text-base max-w-2xl">{group.description}</p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/tools/${calc.slug}`}
                    className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                  >
                    <h3 className="text-base font-sans font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{calc.shortDescription}</p>
                    <p className="text-xs text-muted-foreground/80 mb-5">
                      <span className="font-medium text-foreground/70">Benchmarks:</span> {calc.benchmarks}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Open calculator
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pb-28">
        <div className="bg-ink rounded-3xl p-10 sm:p-14 lg:p-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="eyebrow-line-dark" />
              <span className="eyebrow-on-dark">Pressense Diagnostic</span>
            </div>
            <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-5">
              Need help interpreting{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>your numbers?</em>
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed mb-10 text-pretty">
              Calculators give you the data, but knowing what to do with it is where the value lives.
              Book a free 30-minute diagnostic and we&apos;ll map where you&apos;re leaking growth.
            </p>
            <Link href="/diagnostic" className="btn-primary">
              Start your diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
