import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FractionalCMOHero } from '@/components/ai-impl-page/hero'
import { ProblemSection } from '@/components/ai-impl-page/problem-section'
import { OpportunitiesSection } from '@/components/ai-impl-page/opportunities'
import { ProcessSection } from '@/components/ai-impl-page/process'
import { ROISection } from '@/components/ai-impl-page/roi'
import { WhoItsForSection } from '@/components/ai-impl-page/who-its-for'
import { FractionalCMOFAQSection } from '@/components/ai-impl-page/faq-section'
import { FractionalCMOCTA } from '@/components/ai-impl-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Implementation for Small Business | Deploy AI Workflows | Pressense',
  description: 'Identify, build, and deploy high-impact AI workflows for your team. Save 10+ hours per week. Measurable ROI in 30-60 days.',
  openGraph: {
    title: 'AI Implementation for Small Business | Pressense',
    description: 'AI workflow implementation for small business: Content generation, data insights, automation, lead scoring.',
    url: '/ai-implementation-small-business',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AI Implementation SMB' }],
  },
  alternates: {
    canonical: '/ai-implementation-small-business',
  },
}

export default function AIImplementationPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/ai-implementation-small-business',
    name: 'Pressense - AI Implementation for Small Business',
    description: 'AI workflow implementation and deployment services for small businesses.',
    url: 'https://pressense.co/ai-implementation-small-business',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Implementation',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <FractionalCMOHero />
        <ProblemSection />
        <OpportunitiesSection />
        <ProcessSection />
        <ROISection />
        <WhoItsForSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      <Footer />
    </>
  )
}
