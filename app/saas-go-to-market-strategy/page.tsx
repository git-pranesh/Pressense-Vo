import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GTMHero } from '@/components/saas-gtm-page/hero'
import { ProblemSection } from '@/components/saas-gtm-page/problem-section'
import { SolutionSection } from '@/components/saas-gtm-page/solution-section'
import { WhoItsForSection } from '@/components/saas-gtm-page/who-its-for'
import { DeliverableSection } from '@/components/saas-gtm-page/deliverables'
import { ProcessSection } from '@/components/saas-gtm-page/process'
import { GTMFAQSection } from '@/components/saas-gtm-page/faq-section'
import { GTMCTA } from '@/components/saas-gtm-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Go-to-Market Strategy | 90-Day GTM Blueprint | Pressense',
  description: 'Comprehensive SaaS go-to-market strategy from ICP definition to sales playbook. 90-day roadmap to accelerate revenue.',
  openGraph: {
    title: 'SaaS Go-to-Market Strategy | Pressense',
    description: 'Build your SaaS GTM blueprint: ICP, positioning, pricing strategy, and 90-day implementation roadmap.',
    url: '/saas-go-to-market-strategy',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SaaS GTM Strategy' }],
  },
  alternates: {
    canonical: '/saas-go-to-market-strategy',
  },
}

export default function SaaSGTMPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/saas-go-to-market-strategy',
    name: 'Pressense - SaaS Go-to-Market Strategy',
    description: 'SaaS go-to-market strategy consulting and 90-day implementation support.',
    url: 'https://pressense.co/saas-go-to-market-strategy',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'GTM Strategy Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <GTMHero />
        <ProblemSection />
        <SolutionSection />
        <DeliverableSection />
        <WhoItsForSection />
        <ProcessSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
      <Footer />
    </>
  )
}
