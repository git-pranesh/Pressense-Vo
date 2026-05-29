import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FractionalCMOHero } from '@/components/ai-automation-agency-page/hero'
import { ProblemSection } from '@/components/ai-automation-agency-page/problem-section'
import { SolutionSection } from '@/components/ai-automation-agency-page/solution-section'
import { WhoItsForSection } from '@/components/ai-automation-agency-page/who-its-for-section'
import { FractionalCMOFAQSection } from '@/components/ai-automation-agency-page/faq-section'
import { FractionalCMOCTA } from '@/components/ai-automation-agency-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency | Pressense',
  description: 'AI automation services that diagnose broken workflows and build AI-powered solutions in 1 week.',
  openGraph: {
    title: 'AI Automation Agency | Pressense',
    description:
      'AI-powered automation consulting. Diagnose workflow bottlenecks, build AI solutions, scale operations faster.',
    url: '/ai-automation-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Automation Agency' }],
  },
  alternates: {
    canonical: '/ai-automation-agency',
  },
}

export default function AIAutomationAgencyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/ai-automation-agency',
    name: 'Pressense - AI Automation Agency',
    description: 'AI automation consulting and implementation services for growing businesses.',
    url: 'https://pressense.co/ai-automation-agency',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'AI Automation Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <FractionalCMOHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      <Footer />
    </>
  )
}
