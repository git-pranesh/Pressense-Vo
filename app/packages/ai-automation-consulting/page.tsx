import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Consulting | Pressense Packages',
  description: 'AI automation consulting from $5,000. We diagnose broken workflows and build AI-powered solutions in 1-2 weeks.',
  openGraph: {
    title: 'AI Automation Consulting | Pressense Packages',
    description: 'AI automation consulting from $5,000. We diagnose broken workflows and build AI-powered solutions in 1-2 weeks.',
    url: '/packages/ai-automation-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Automation Consulting Package' }],
  },
  alternates: {
    canonical: '/packages/ai-automation-consulting',
  },
}

const deliverables = [
  'Comprehensive workflow audit and process mapping',
  'AI solution architecture document',
  'Custom AI workflow implementation',
  'Integration with your existing tools',
  'Team training and documentation',
  'Post-launch support period',
]

const process = [
  { step: '1', title: 'Discovery', description: 'We map your current workflows, identify bottlenecks, and scope the AI solution.' },
  { step: '2', title: 'Architecture', description: 'We design the AI system, select tools, and create an implementation plan.' },
  { step: '3', title: 'Build', description: 'We build and test the AI workflows, integrating with your existing stack.' },
  { step: '4', title: 'Deploy', description: 'We launch, train your team, and provide support during the transition.' },
]

const faqs = [
  { q: 'How long does an AI automation project take?', a: 'Most projects complete in 1-2 weeks. Complex multi-system integrations may take 3-4 weeks.' },
  { q: 'What AI tools do you use?', a: 'We are tool-agnostic. We select based on your needs - OpenAI, Claude, custom models, Make, Zapier, n8n, or custom code.' },
  { q: 'Do I need technical knowledge?', a: 'No. We handle the technical work and train your team on the finished system.' },
  { q: 'What if the AI solution does not work?', a: 'We iterate until it does. Our goal is a working system, not just a deliverable.' },
]

export default function AIAutomationPackagePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation Consulting',
    description: 'End-to-end AI workflow design and implementation for growing businesses.',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
    },
    offers: {
      '@type': 'Offer',
      price: '5000',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '5000',
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false,
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
              AI Automation Consulting
            </h1>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">$5,000</span>
              <span className="text-muted-foreground">onwards</span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We diagnose your broken processes, design AI-powered solutions, and deploy working systems in 1-2 weeks. No fluff, no pilots that go nowhere - just automation that works.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
              <Link
                href="/ai-automation-agency"
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
              >
                Learn More About Our Approach
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
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Businesses with manual, repetitive workflows eating up team time</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Teams that have tried AI tools but cannot make them stick</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Founders who know AI could help but do not have time to figure it out</li>
              <li className="flex items-start gap-3"><span className="text-primary">-</span>Operations that need to scale without scaling headcount</li>
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
              Ready to automate?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a diagnostic. We will identify your highest-impact automation opportunities.
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
