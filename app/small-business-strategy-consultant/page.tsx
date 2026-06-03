import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Strategy Consultant | 3x Growth Blueprint | Pressense',
  description: 'Strategic planning for small business: Data-driven decisions, operational systems, founder coaching. Move from reactive to strategic.',
  openGraph: {
    title: 'Small Business Strategy Consultant | Pressense',
    description: 'Small business strategy consulting: Build systems for 3x growth. Founder coaching + strategic roadmap.',
    url: '/small-business-strategy-consultant',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SMB Strategy' }],
  },
  alternates: {
    canonical: '/small-business-strategy-consultant',
  },
}

export default function SMBStrategyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/small-business-strategy-consultant',
    name: 'Pressense - Small Business Strategy Consultant',
    description: 'Strategic consulting for small businesses: Growth planning, operations, founder coaching.',
    url: 'https://pressense.co/small-business-strategy-consultant',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Business Strategy Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Small Business Strategy Consultant</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Strategic guidance for small business owners. Scale revenue, optimize operations, and build systems that work without you.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The SMB Bottleneck</h2>
              <p className="text-muted-foreground">
                Many small business owners are stuck in their own operations. We help you build scalable systems, delegate effectively, and focus on strategic growth instead of daily firefighting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Strategic Focus Areas</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Revenue optimization and pricing strategy</li>
                <li>Operations and process documentation</li>
                <li>Team scaling and delegation systems</li>
                <li>Market positioning and competitive advantage</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ready to Scale Your Business?</h2>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Schedule Strategy Call
              </a>
            </section>
          </div>
        </section>
      </main>
      
    </>
  )
}
