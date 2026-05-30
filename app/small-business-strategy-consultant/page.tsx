import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FractionalCMOHero } from '@/components/smb-strategy-page/hero'
import { ProblemSection } from '@/components/smb-strategy-page/problem-section'
import { StrategicAreasSection } from '@/components/smb-strategy-page/strategic-areas'
import { EngagementModelsSection } from '@/components/smb-strategy-page/engagement-models'
import { WhoItsForSection } from '@/components/smb-strategy-page/who-its-for'
import { ProcessSection } from '@/components/smb-strategy-page/process'
import { FractionalCMOFAQSection } from '@/components/smb-strategy-page/faq-section'
import { FractionalCMOCTA } from '@/components/smb-strategy-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Strategy Consultant | 3x Growth Blueprint | Pressense',
  description: 'Strategic planning for small business: Data-driven decisions, operational systems, founder coaching. Move from reactive to strategic.',
  openGraph: {
    title: 'Small Business Strategy Consultant | Pressense',
    description: 'Small business strategy consulting: Build systems for 3x growth. Founder coaching + strategic roadmap.',
    url: '/small-business-strategy-consultant',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SMB Strategy' }],
  },
  alternates: {
    canonical: '/small-business-strategy-consultant',
  },
}

export default function SMBStrategyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/small-business-strategy-consultant',
    name: 'Pressense - Small Business Strategy Consultant',
    description: 'Strategic consulting for small businesses: Growth planning, operations, founder coaching.',
    url: 'https://pressense.co/small-business-strategy-consultant',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Business Strategy Consulting',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <FractionalCMOHero />
        <ProblemSection />
        <StrategicAreasSection />
        <EngagementModelsSection />
        <WhoItsForSection />
        <ProcessSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      <Footer />
    </>
  )
}
