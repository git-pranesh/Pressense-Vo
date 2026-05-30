import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional CMO Advisor | Part-Time Marketing Leadership | Pressense',
  description: 'Fractional CMO services providing part-time executive marketing leadership without the full-time cost. Scale your marketing strategy with an experienced CMO advisor.',
  openGraph: {
    title: 'Fractional CMO Advisor | Part-Time Marketing Leadership | Pressense',
    description: 'Part-time CMO leadership for scaling founders. Strategy, positioning, execution, without full-time overhead.',
    url: '/fractional-cmo-advisor',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fractional CMO Advisor' }],
  },
  alternates: {
    canonical: '/fractional-cmo-advisor',
  },
}

export default function FractionalCMOAdvisorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/fractional-cmo-advisor',
    name: 'Pressense - Fractional CMO Advisor',
    description: 'Part-time executive marketing leadership and fractional CMO services for scaling startups.',
    url: 'https://pressense.co/fractional-cmo-advisor',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Fractional CMO Services',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Fractional CMO Advisor</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Part-time, executive-level marketing leadership without the full-time CMO cost. For founders who need strategy, positioning, and execution expertise on demand.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What is a Fractional CMO?</h2>
              <p className="text-muted-foreground mb-4">
                A fractional CMO (Chief Marketing Officer) is an experienced marketing leader who works with your company part-time—typically 10-20 hours per week—providing strategic guidance, positioning, messaging, and execution oversight.
              </p>
              <p className="text-muted-foreground">
                You get C-suite marketing expertise and decision-making without paying for a full-time salary (typically $150K-250K annually). Cost: $2,000-$5,000+ per month depending on scope.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Engagement Models</h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground ml-2">
                <li><strong>Advisory:</strong> 1-2 days per week strategic guidance, decision support (20 hours/month)</li>
                <li><strong>Embedded:</strong> 3-4 days per week hands-on execution, team leadership (40 hours/month)</li>
                <li><strong>Intensive Sprint:</strong> 4-6 weeks dedicated focus on GTM overhaul or campaign launch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Who It's For</h2>
              <p className="text-muted-foreground mb-4">Fractional CMO services work best for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Growth-stage founders ($1M-$8M ARR) who need marketing strategy but can't afford full-time CMO</li>
                <li>Companies with existing marketing team needing strategic oversight and leadership</li>
                <li>Startups pivoting positioning or go-to-market strategy</li>
                <li>Teams lacking marketing credibility or experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Deliver</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Brand positioning and messaging framework</li>
                <li>Go-to-market strategy and channel prioritization</li>
                <li>Marketing team leadership and coaching</li>
                <li>Campaign strategy and execution oversight</li>
                <li>Metrics, dashboards, and accountability</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ready to Add Marketing Leadership?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss your marketing challenges and find the right engagement model for your team.
              </p>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Schedule Consultation
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
