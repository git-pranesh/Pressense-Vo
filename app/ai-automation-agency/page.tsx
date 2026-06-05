import { StructuredData } from '@/components/structured-data'
import { AIAutomationAgencyHero } from '@/components/ai-automation-agency-page/hero'
import { ProblemSection } from '@/components/ai-automation-agency-page/problem-section'
import { SolutionSection } from '@/components/ai-automation-agency-page/solution-section'
import { WhoItsForSection } from '@/components/ai-automation-agency-page/who-its-for-section'
import { WhatYouGetSection } from '@/components/ai-automation-agency-page/what-you-get-section'
import { FractionalCMOFAQSection } from '@/components/ai-automation-agency-page/faq-section'
import { AIAutomationAgencyCTA } from '@/components/ai-automation-agency-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency | Pressense',
  description: 'AI automation consulting that diagnoses broken workflows and builds AI-powered solutions in 1-2 weeks. Save 15+ hours per week.',
  openGraph: {
    title: 'AI Automation Agency | Pressense',
    description: 'AI automation consulting. Automate manual workflows, eliminate busywork, scale operations. Save 15+ hours per week.',
    url: '/ai-automation-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Automation Agency' }],
  },
  alternates: {
    canonical: '/ai-automation-agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency | Pressense',
    description: 'AI automation consulting that diagnoses broken workflows and builds AI-powered solutions in 1-2 weeks. Save 15+ hours per week.',
    images: ['/og-image.jpg'],
  },
}

export default function AIAutomationAgencyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/ai-automation-agency',
    name: 'Pressense - AI Automation Agency',
    description: 'AI automation consulting and implementation services. Build workflows that eliminate manual work.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI Automation Agency",
        "provider": { "@type": "Organization", "name": "Pressense", "url": "https://www.pressense.co" },
        "description": "AI automation consulting that diagnoses broken workflows and builds AI-powered solutions in 1-2 weeks.",
        "url": "https://www.pressense.co/ai-automation-agency",
        "areaServed": "United States"
      }) }} />
      
      <main className="min-h-screen">
        <AIAutomationAgencyHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <FractionalCMOFAQSection />
        <AIAutomationAgencyCTA />
      </main>
      
    </>
  )
}
