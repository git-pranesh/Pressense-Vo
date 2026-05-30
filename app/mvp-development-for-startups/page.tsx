import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MVP Development for Startups | Launch in 2-4 Weeks | Pressense',
  description: 'Build and launch your MVP in 2-4 weeks: From hypothesis to users. Modern tech stack, lean methodology, founder-focused.',
  openGraph: {
    title: 'MVP Development for Startups | Pressense',
    description: 'Rapid MVP development for startups: Lean, testable, polished. From idea to users in 2-4 weeks.',
    url: '/mvp-development-for-startups',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MVP Development' }],
  },
  alternates: {
    canonical: '/mvp-development-for-startups',
  },
}

export default function MVPDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/mvp-development-for-startups',
    name: 'Pressense - MVP Development for Startups',
    description: 'Rapid MVP development and launch services for early-stage startups.',
    url: 'https://pressense.co/mvp-development-for-startups',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'MVP Development',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <section className="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">MVP Development for Startups</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Build and launch your MVP in 2-4 weeks. From hypothesis to users with modern tech stack and lean methodology.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">The MVP Approach</h2>
              <p className="text-muted-foreground">
                Perfect is the enemy of shipped. We build lean, testable MVPs that prove your core hypothesis and get real user feedback fast—without overengineering.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                <li>Product specification and user flow design</li>
                <li>Modern tech stack (Next.js, TypeScript, PostgreSQL)</li>
                <li>Core feature development (2-4 weeks)</li>
                <li>Deployment and initial user testing</li>
              </ul>
            </section>

            <section className="mt-16 p-8 bg-secondary/30 rounded-lg border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Ship Your MVP Today</h2>
              <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Start Development
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
