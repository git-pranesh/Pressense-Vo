import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GTMHero } from '@/components/workflow-automation-page/hero'
import { ProblemSection } from '@/components/workflow-automation-page/problem-section'
import { SolutionSection } from '@/components/workflow-automation-page/solution-section'
import { WhoItsForSection } from '@/components/workflow-automation-page/who-its-for-section'
import { GTMFAQSection } from '@/components/workflow-automation-page/faq-section'
import { GTMCTA } from '@/components/workflow-automation-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow Automation Consulting | Pressense',
  description: 'Workflow automation consulting that reduces manual work, improves consistency, and empowers teams.',
  openGraph: {
    title: 'Workflow Automation Consulting | Pressense',
    description:
      'Workflow automation consulting. Design AI-powered workflows, reduce manual work, improve operational efficiency.',
    url: '/workflow-automation-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Workflow Automation' }],
  },
  alternates: {
    canonical: '/workflow-automation-consulting',
  },
}

export default function WorkflowAutomationPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/workflow-automation-consulting',
    name: 'Pressense - Workflow Automation Consulting',
    description: 'Workflow automation consulting for growing businesses.',
    url: 'https://pressense.co/workflow-automation-consulting',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Workflow Automation',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <GTMHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
      <Footer />
    </>
  )
}
