import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SystemsHero } from '@/components/bpa-consulting-page/hero'
import { ProblemSection } from '@/components/bpa-consulting-page/problem-section'
import { SolutionSection } from '@/components/bpa-consulting-page/solution-section'
import { WhoItsForSection } from '@/components/bpa-consulting-page/who-its-for-section'
import { SystemsFAQSection } from '@/components/bpa-consulting-page/faq-section'
import { SystemsCTA } from '@/components/bpa-consulting-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Process Automation Consulting | Pressense',
  description: 'Business process automation consulting that streamlines operations and improves organizational efficiency.',
  openGraph: {
    title: 'Business Process Automation Consulting | Pressense',
    description:
      'Business process automation consulting. Streamline operations, reduce costs, improve compliance and efficiency.',
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
    description: 'Business process automation consulting for growing businesses.',
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
      <Header />
      <main className="min-h-screen">
        <SystemsHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
      <Footer />
    </>
  )
}
