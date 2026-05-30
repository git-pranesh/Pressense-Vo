import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GTMHero } from '@/components/startup-consulting-page/hero'
import { ProblemSection } from '@/components/startup-consulting-page/problem-section'
import { StageApproachSection } from '@/components/startup-consulting-page/stage-approach'
import { ServicesByStageSection } from '@/components/startup-consulting-page/services-by-stage'
import { WhoItsForSection } from '@/components/startup-consulting-page/who-its-for'
import { ProcessSection } from '@/components/startup-consulting-page/process'
import { GTMFAQSection } from '@/components/startup-consulting-page/faq-section'
import { GTMCTA } from '@/components/startup-consulting-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Firm for Startups | Pre-Seed to Series A | Pressense',
  description: 'End-to-end startup consulting from pre-seed through Series A: Product strategy, GTM, fundraising, operations.',
  openGraph: {
    title: 'Consulting Firm for Startups | Pressense',
    description: 'Stage-based consulting for startups: Pre-seed validation to Series A scaling. Founder-focused, integrated approach.',
    url: '/consulting-firm-for-startups',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Startup Consulting' }],
  },
  alternates: {
    canonical: '/consulting-firm-for-startups',
  },
}

export default function StartupConsultingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/consulting-firm-for-startups',
    name: 'Pressense - Consulting Firm for Startups',
    description: 'Startup consulting services from pre-seed through Series A funding.',
    url: 'https://pressense.co/consulting-firm-for-startups',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Startup Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <GTMHero />
        <ProblemSection />
        <StageApproachSection />
        <ServicesByStageSection />
        <WhoItsForSection />
        <ProcessSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
      <Footer />
    </>
  )
}
