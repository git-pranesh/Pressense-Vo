import { StructuredData } from '@/components/structured-data'
import { BPAHero } from '@/components/bpa-consulting-page/hero'
import { ProblemSection } from '@/components/bpa-consulting-page/problem-section'
import { SolutionSection } from '@/components/bpa-consulting-page/solution-section'
import { WhoItsForSection } from '@/components/bpa-consulting-page/who-its-for-section'
import { SystemsFAQSection } from '@/components/bpa-consulting-page/faq-section'
import { SystemsCTA } from '@/components/bpa-consulting-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Process Automation Consulting | Pressense',
  description: 'Business process automation consulting that reduces manual work, improves consistency, and scales operations without proportional headcount growth.',
  openGraph: {
    title: 'Business Process Automation Consulting | Pressense',
    description:
      'Business process automation consulting. Automate inefficient operations, reduce manual work, improve consistency and reduce costs.',
    url: '/business-process-automation-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Business Process Automation' }],
  },
  alternates: {
    canonical: '/business-process-automation-consulting',
  },
}

export default function BPAConsultingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/business-process-automation-consulting',
    name: 'Pressense - Business Process Automation',
    description: 'Business process automation consulting and implementation services for growing businesses.',
    url: 'https://pressense.co/business-process-automation-consulting',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Business Process Automation',
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        <BPAHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
      
    </>
  )
}
