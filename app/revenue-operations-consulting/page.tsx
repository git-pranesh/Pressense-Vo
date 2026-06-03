import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Operations Consulting | RevOps Strategy | Pressense',
  description: 'Build an integrated revenue operating model: Align marketing, sales, success, finance. Improve forecasting and revenue predictability.',
  openGraph: {
    title: 'Revenue Operations Consulting | Pressense',
    description: 'Revenue operations consulting to align all revenue functions around unified data model and playbooks.',
    url: '/revenue-operations-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Revenue Operations' }],
  },
  alternates: {
    canonical: '/revenue-operations-consulting',
  },
}

export default function RevOpsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/revenue-operations-consulting',
    name: 'Pressense - Revenue Operations Consulting',
    description: 'Revenue operations consulting to build integrated revenue systems and improve forecasting accuracy.',
    url: 'https://pressense.co/revenue-operations-consulting',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Revenue Operations Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Revenue Operations Consulting</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Align sales, marketing, and customer success around revenue goals. Build the processes, tools, and accountability framework for predictable growth.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The RevOps Challenge</h2>
              <p className="text-muted-foreground">
                Siloed teams, fragmented data, and misaligned metrics kill growth. Without RevOps, your GTM is reactive rather than strategic. We build the operational backbone that connects revenue teams and drives predictable, scalable growth.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Revenue process design and optimization</li>
                <li>CRM implementation and data architecture</li>
                <li>Sales forecasting and pipeline management</li>
                <li>KPI definition and reporting dashboards</li>
                <li>Cross-functional alignment and accountability</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Build Your Revenue Engine</h2>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Schedule Consultation
              </a>
            </section>
          </div>
        </section>
      </main>
      
    </>
  )
}
