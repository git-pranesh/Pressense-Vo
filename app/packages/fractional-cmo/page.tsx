import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional CMO Services | Pressense Packages',
  description: 'Fractional CMO from $2,000/month. Strategic marketing leadership without the full-time cost.',
  openGraph: {
    title: 'Fractional CMO Services | Pressense Packages',
    description: 'Fractional CMO from $2,000/month. Strategic marketing leadership without the full-time cost.',
    url: '/packages/fractional-cmo',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fractional CMO Package' }],
  },
  alternates: {
    canonical: '/packages/fractional-cmo',
  },
}

const deliverables = [
  'Monthly strategy sessions',
  'GTM planning and execution oversight',
  'Positioning and messaging guidance',
  'Marketing team direction and coaching',
  'Demand generation strategy',
  'Metrics and reporting framework',
]

const whatYouGet = [
  { title: 'Strategic Direction', description: 'Clear marketing strategy aligned with business goals. No random tactics.' },
  { title: 'Execution Oversight', description: 'We direct your team or contractors. You get senior leadership without the salary.' },
  { title: 'Positioning Clarity', description: 'Messaging that resonates with your market. Stop sounding like everyone else.' },
  { title: 'Demand Generation', description: 'Systems to generate qualified leads consistently, not just campaigns.' },
]

const faqs = [
  { q: 'How many hours per month?', a: 'Engagements start at 10 hours/month. Most clients scale to 15-20 hours as we build momentum.' },
  { q: 'Do you replace our marketing team?', a: 'No. We direct and elevate your existing team or contractors. We add strategy, not more hands.' },
  { q: 'What if we need more hands-on execution?', a: 'We can recommend contractors or expand scope. The model is flexible.' },
  { q: 'How long is the commitment?', a: 'Month-to-month after a 3-month initial engagement. We earn continued work.' },
]

export default function FractionalCMOPackagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fractional CMO Services',
    description: 'Strategic marketing leadership on a flexible retainer.',
    provider: { '@type': 'Organization', name: 'Pressense' },
    offers: {
      '@type': 'Offer',
      price: '2000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '2000',
        priceCurrency: 'USD',
        unitCode: 'MON',
      },
    },
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/packages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Packages
            </Link>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Fractional CMO
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$2,000</span>
              <span className="text-muted-foreground">/month onwards</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Strategic marketing leadership without the full-time cost. We bring the experience of a senior CMO to your business on a flexible retainer - GTM strategy, positioning, demand generation, and team direction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
              <Link
                href="/fractional-cmo-services"
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">What You Get</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whatYouGet.map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Monthly Deliverables</h2>
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
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Growing businesses ($1M-$10M ARR) that need marketing leadership</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Founders doing marketing themselves who need to hand it off</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Teams with execution capacity but lacking strategic direction</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Businesses preparing for fundraise or major growth push</li>
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
              Ready for marketing leadership?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a diagnostic. We will assess your marketing situation and see if fractional CMO is the right fit.
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
