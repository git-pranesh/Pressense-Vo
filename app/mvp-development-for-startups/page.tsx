import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GTMHero } from '@/components/mvp-page/hero'
import { ProblemSection } from '@/components/mvp-page/problem-section'
import { MVPDefinitionSection } from '@/components/mvp-page/mvp-definition'
import { ProcessFrameworkSection } from '@/components/mvp-page/process-framework'
import { WhoItsForSection } from '@/components/mvp-page/who-its-for'
import { TechStackSection } from '@/components/mvp-page/tech-stack'
import { ProcessSection } from '@/components/mvp-page/process'
import { GTMFAQSection } from '@/components/mvp-page/faq-section'
import { GTMCTA } from '@/components/mvp-page/final-cta'
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
        <GTMHero />
        <ProblemSection />
        <MVPDefinitionSection />
        <ProcessFrameworkSection />
        <TechStackSection />
        <WhoItsForSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
      <Footer />
    </>
  )
}
