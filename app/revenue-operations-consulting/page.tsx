import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SystemsHero } from '@/components/revops-page/hero'
import { ProblemSection } from '@/components/revops-page/problem-section'
import { SolutionSection } from '@/components/revops-page/solution-section'
import { WhoItsForSection } from '@/components/revops-page/who-its-for'
import { FrameworkSection } from '@/components/revops-page/framework'
import { ProcessSection } from '@/components/revops-page/process'
import { SystemsFAQSection } from '@/components/revops-page/faq-section'
import { SystemsCTA } from '@/components/revops-page/final-cta'
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
      <Header />
      <main className="min-h-screen">
        <SystemsHero />
        <ProblemSection />
        <SolutionSection />
        <FrameworkSection />
        <WhoItsForSection />
        <ProcessSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
      <Footer />
    </>
  )
}
