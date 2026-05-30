import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FractionalCMOHero } from '@/components/replit-page/hero'
import { ProblemSection } from '@/components/replit-page/problem-section'
import { SolutionSection } from '@/components/replit-page/solution-section'
import { ServiceMenuSection } from '@/components/replit-page/service-menu'
import { ComparisonSection } from '@/components/replit-page/comparison'
import { WhoItsForSection } from '@/components/replit-page/who-its-for'
import { ProcessSection } from '@/components/replit-page/process'
import { FractionalCMOFAQSection } from '@/components/replit-page/faq-section'
import { FractionalCMOCTA } from '@/components/replit-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Replit Developer for Hire | Full-Stack Development | Pressense',
  description: 'Hire a Replit expert developer for AI agents, SaaS products, API integrations, and custom automation. Quick turnaround, founder-focused.',
  openGraph: {
    title: 'Replit Developer for Hire | Pressense',
    description: 'Full-stack Replit development: From AI agents to SaaS MVPs. Fast, focused, founder-friendly.',
    url: '/replit-developer-for-hire',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Replit Developer' }],
  },
  alternates: {
    canonical: '/replit-developer-for-hire',
  },
}

export default function ReplyitDeveloperPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/replit-developer-for-hire',
    name: 'Pressense - Replit Developer for Hire',
    description: 'Full-stack Replit development services for MVPs, AI agents, and custom integrations.',
    url: 'https://pressense.co/replit-developer-for-hire',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Software Development',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <FractionalCMOHero />
        <ProblemSection />
        <ServiceMenuSection />
        <ComparisonSection />
        <WhoItsForSection />
        <ProcessSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      <Footer />
    </>
  )
}
