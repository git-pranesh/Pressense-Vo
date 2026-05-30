import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Go-to-Market Strategy | 90-Day GTM Blueprint | Pressense',
  description: 'Comprehensive SaaS go-to-market strategy from ICP definition to sales playbook. 90-day roadmap to accelerate revenue.',
  openGraph: {
    title: 'SaaS Go-to-Market Strategy | Pressense',
    description: 'Build your SaaS GTM blueprint: ICP, positioning, pricing strategy, and 90-day implementation roadmap.',
    url: '/saas-go-to-market-strategy',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SaaS GTM Strategy' }],
  },
  alternates: {
    canonical: '/saas-go-to-market-strategy',
  },
}

export default function SaaSGTMPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/saas-go-to-market-strategy',
    name: 'Pressense - SaaS Go-to-Market Strategy',
    description: 'SaaS go-to-market strategy consulting and 90-day implementation support.',
    url: 'https://pressense.co/saas-go-to-market-strategy',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'GTM Strategy Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">SaaS Go-to-Market Strategy</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Build a comprehensive go-to-market strategy with ICP definition, positioning, pricing, sales playbook, and 90-day implementation roadmap to accelerate revenue growth.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">
                Many SaaS founders build product first, then discover their GTM approach is misaligned with their market. Result: slow growth, wasted marketing spend, and frustrated sales teams. A clear GTM strategy prevents costly pivots and accelerates market traction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>ICP & Buyer Persona Definition</li>
                <li>Competitive Positioning & Messaging</li>
                <li>Pricing Strategy & Packaging</li>
                <li>Sales Playbook & Win/Loss Analysis</li>
                <li>90-Day Tactical Roadmap</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ready to Build Your GTM Blueprint?</h2>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Start Your Strategy
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
