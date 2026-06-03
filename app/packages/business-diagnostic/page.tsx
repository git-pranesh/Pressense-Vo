import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Diagnostic | Pressense Packages',
  description: 'Business diagnostic from $2,500. A structured audit to identify what is holding back your growth.',
  openGraph: {
    title: 'Business Diagnostic | Pressense Packages',
    description: 'Business diagnostic from $2,500. A structured audit to identify what is holding back your growth.',
    url: '/packages/business-diagnostic',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Business Diagnostic Package' }],
  },
  alternates: {
    canonical: '/packages/business-diagnostic',
  },
}

const deliverables = [
  'Operations assessment and workflow mapping',
  'GTM and revenue analysis',
  'Systems and tools audit',
  'Team structure review',
  'Prioritized problem list with root causes',
  'Action roadmap with recommendations',
]

const process = [
  { step: '1', title: 'Intake', description: 'You share context - metrics, challenges, goals. We review before our first call.' },
  { step: '2', title: 'Discovery', description: '2-3 deep-dive sessions. We interview, observe, and dig into the details.' },
  { step: '3', title: 'Analysis', description: 'We synthesize findings, identify patterns, and prioritize problems.' },
  { step: '4', title: 'Delivery', description: 'You get a clear diagnostic report with actionable recommendations.' },
]

const faqs = [
  { q: 'How long does the diagnostic take?', a: 'Typically 1-2 weeks from kickoff to final report delivery.' },
  { q: 'What do I need to prepare?', a: 'Access to key metrics, tools, and 2-3 hours of your time for discovery sessions.' },
  { q: 'What happens after the diagnostic?', a: 'You can implement yourself, hire someone else, or engage us for the fix.' },
  { q: 'Is this just a sales pitch for other services?', a: 'No. The diagnostic stands alone. Many clients implement our recommendations themselves.' },
]

export default function BusinessDiagnosticPackagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Diagnostic',
    description: 'Structured audit of operations, GTM, and systems to identify growth blockers.',
    provider: { '@type': 'Organization', name: 'Pressense' },
    offers: {
      '@type': 'Offer',
      price: '2500',
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
              Business Diagnostic
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$2,500</span>
              <span className="text-muted-foreground">onwards</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              You know something is broken, but you cannot pinpoint what. We run a structured audit of your operations, GTM, and systems to identify the root causes holding back growth - and give you a clear action plan.
            </p>
            <div className="mt-8">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
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

        {/* Process */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <span className="text-3xl font-bold text-primary/60">{item.step}</span>
                  <h3 className="mt-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">Ideal For</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Founders who feel stuck but cannot articulate why</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Businesses hitting a ceiling they cannot break through</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Teams overwhelmed by too many problems to prioritize</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Leaders who want an outside perspective before making big decisions</li>
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
              Ready for clarity?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stop guessing. Get a structured diagnosis of what is actually holding you back.
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
