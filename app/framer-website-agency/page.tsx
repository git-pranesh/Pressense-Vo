import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FractionalCMOHero } from '@/components/framer-page/hero'
import { ProblemSection } from '@/components/framer-page/problem-section'
import { AdvantagesSection } from '@/components/framer-page/advantages'
import { ServicesSection } from '@/components/framer-page/services'
import { WhoItsForSection } from '@/components/framer-page/who-its-for'
import { ProcessSection } from '@/components/framer-page/process'
import { FractionalCMOFAQSection } from '@/components/framer-page/faq-section'
import { FractionalCMOCTA } from '@/components/framer-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Framer Website Agency | Conversion-Focused Design | Pressense',
  description: 'Framer website design and development for SaaS and startups. Launch in 2 weeks with animations, interactions, and real-time collaboration.',
  openGraph: {
    title: 'Framer Website Agency | Pressense',
    description: 'Conversion-focused Framer websites: Design + development in one platform. No handoff delays, fast delivery.',
    url: '/framer-website-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Framer Website Agency' }],
  },
  alternates: {
    canonical: '/framer-website-agency',
  },
}

export default function FramerAgencyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pressense.co/framer-website-agency',
    name: 'Pressense - Framer Website Agency',
    description: 'Framer website design and development services for conversion-focused experiences.',
    url: 'https://pressense.co/framer-website-agency',
    serviceArea: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Design & Development',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        <FractionalCMOHero />
        <ProblemSection />
        <AdvantagesSection />
        <ServicesSection />
        <WhoItsForSection />
        <ProcessSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      <Footer />
    </>
  )
}
