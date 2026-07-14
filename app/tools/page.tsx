import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
  alternates: {
    canonical: '/tools',
  },
}

export default function ToolsPage() {
  const calculatorsByCategory = CALCULATOR_CATEGORIES.map((category) => ({
    category,
    description: CATEGORY_DESCRIPTIONS[category],
    calculators: calculatorsData.filter((c) => c.category === category),
  })).filter((group) => group.calculators.length > 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Free SaaS Calculators & Tools',
            description:
              'Free, instant SaaS calculators for unit economics, growth modeling, retention, and GTM with operator-grade benchmarks.',
            url: 'https://www.pressense.co/tools',
            provider: {
              '@type': 'Organization',
              name: 'Pressense',
              url: 'https://www.pressense.co/',
            },
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Calculator className="h-6 w-6" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary">Tools Library</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6 max-w-4xl leading-[1.05]">
            Free calculators with operator-grade benchmarks
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            Calculate your unit economics, model growth scenarios, and benchmark against industry standards. No signup
            required, just enter your numbers and get instant insights.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{calculatorsData.length} calculators</span>
          </div>
        </div>
      </section>

      {/* Calculator Grid by Category */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {calculatorsByCategory.map((group) => (
            <div key={group.category}>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-2">{group.category}</h2>
                <p className="text-muted-foreground">{group.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.calculators.map((calc) => (
                  <Link
                    key={calc.slug}
                    href={`/tools/${calc.slug}`}
                    className="group rounded-2xl border border-border/60 bg-card/40 p-6 hover-elevate transition-all hover:border-primary/40"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {calc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{calc.shortDescription}</p>
                    <p className="text-xs text-muted-foreground/80 mb-4">
                      <span className="font-medium text-foreground/80">Benchmarks:</span> {calc.benchmarks}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary">
                      Open calculator <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-background p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">Pressense Diagnostic</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 leading-[1.1]">
              Need help interpreting your numbers?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Calculators give you the data, but knowing what to do with it is where the value lives. Book a free
              30-minute diagnostic and we&apos;ll map where you&apos;re leaking growth.
            </p>
            <Link href="/diagnostic">
              <Button size="lg" className="rounded-2xl text-base font-medium">
                Start your diagnostic <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
