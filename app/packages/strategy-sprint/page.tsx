import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategy Sprint | Pressense Packages',
  description: 'Intensive 2-week strategy sprint from $8,000. Deep dive into a specific challenge and emerge with clarity.',
  openGraph: {
    title: 'Strategy Sprint | Pressense Packages',
    description: 'Intensive 2-week strategy sprint from $8,000. Deep dive into a specific challenge and emerge with clarity.',
    url: '/packages/strategy-sprint',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Strategy Sprint Package' }],
  },
  alternates: {
    canonical: '/packages/strategy-sprint',
  },
}

const deliverables = [
  'Problem definition and scope alignment',
  'Research and competitive analysis',
  'Strategy development sessions',
  'Implementation roadmap',
  'Final strategy document',
  'Follow-up check-in call',
]

const sprintTypes = [
  { title: 'Positioning Sprint', description: 'Clarify who you serve, what you offer, and why it matters.' },
  { title: 'GTM Sprint', description: 'Build a go-to-market plan for a new product, market, or segment.' },
  { title: 'Pricing Sprint', description: 'Redesign your pricing to capture more value and reduce friction.' },
  { title: 'Market Entry Sprint', description: 'Evaluate and plan entry into a new market or geography.' },
]

const faqs = [
  { q: 'What can we solve in 2 weeks?', a: 'One focused problem. Positioning, GTM, pricing, market entry, or a specific strategic decision.' },
  { q: 'How much of my time is required?', a: 'Plan for 4-6 hours across the 2 weeks for sessions and reviews.' },
  { q: 'What if we need more time?', a: 'Sprints can extend to 3-4 weeks for complex challenges. We will scope before starting.' },
  { q: 'Is this just strategy or do you help implement?', a: 'The sprint delivers strategy and roadmap. Implementation can be scoped separately.' },
]

export default function StrategySprintPackagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Strategy Sprint',
    description: 'Intensive 2-week engagement to solve a specific strategic challenge.',
    provider: { '@type': 'Organization', name: 'Pressense' },
    offers: {
      '@type': 'Offer',
      price: '8000',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Packages
            </Link>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Strategy Sprint
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$8,000</span>
              <span className="text-muted-foreground">2-week engagement</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Big decisions need focused thinking. Our Strategy Sprint is an intensive 2-week engagement where we go deep on one strategic challenge - positioning, GTM, pricing, or market entry - and deliver a clear path forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
              <Link
                href="/gtm-strategy-consultant"
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
              >
                Learn More About GTM Strategy
              </Link>
            </div>
          </div>
        </section>

        {/* Sprint Types */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Sprint Types</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {sprintTypes.map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">What You Get</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Ideal For</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Founders facing a major decision who need expert input fast</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Businesses considering a pivot or new direction</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Teams launching a new product or entering a new market</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Leaders who want to pressure-test their strategy</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Questions</h2>
            <div className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="pb-6 border-b border-border/40 last:border-0">
                  <h3 className="font-medium text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Ready to sprint?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us the challenge. We will tell you if a sprint is the right approach.
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
      
    </>
  )
}
