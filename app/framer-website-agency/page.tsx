import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Framer Website Agency | Conversion-Focused Design | Pressense',
  description: 'Framer website design and development for SaaS and startups. Launch in 2 weeks with animations, interactions, and real-time collaboration.',
  openGraph: {
    title: 'Framer Website Agency | Pressense',
    description: 'Conversion-focused Framer websites: Design + development in one platform. No handoff delays, fast delivery.',
    url: '/framer-website-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Framer Website Agency' }],
  },
  alternates: {
    canonical: '/framer-website-agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Framer Website Agency | Conversion-Focused Design | Pressense',
    description: 'Framer website design and development for SaaS and startups. Launch in 2 weeks with animations, interactions, and real-time collaboration.',
    images: ['/og-image.jpg'],
  },
}

export default function FramerAgencyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/framer-website-agency',
    name: 'Pressense - Framer Website Agency',
    description: 'Framer website design and development services for conversion-focused experiences.',
    url: 'https://pressense.co/framer-website-agency',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Design & Development',
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Framer Website Agency</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Beautiful, interactive, conversion-optimized websites built with Framer. Modern design, smooth animations, and fast deployment.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Framer?</h2>
              <p className="text-muted-foreground">
                Framer combines design and code seamlessly. Build stunning, interactive websites with built-in hosting, analytics, and CMS capabilities without traditional deployment complexity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Build</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>High-conversion landing pages and homepages</li>
                <li>Interactive product showcases and portfolios</li>
                <li>Animated UI components and smooth transitions</li>
                <li>CMS-enabled content sites with fast deployment</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ready for a Beautiful Website?</h2>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Let's Design Together
              </a>
            </section>
          </div>
        </section>
      </main>
      
    </>
  )
}
