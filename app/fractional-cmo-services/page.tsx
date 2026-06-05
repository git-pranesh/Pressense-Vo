import type { Metadata } from 'next'
import { FractionalCMOHero } from '@/components/fractional-cmo-page/hero'
import { ProblemSection } from '@/components/fractional-cmo-page/problem-section'
import { SolutionSection } from '@/components/fractional-cmo-page/solution-section'
import { WhoItsForSection } from '@/components/fractional-cmo-page/who-its-for-section'
import { WhatYouGetSection } from '@/components/fractional-cmo-page/what-you-get-section'
import { FractionalCMOFAQSection } from '@/components/fractional-cmo-page/faq-section'
import { FractionalCMOCTA } from '@/components/fractional-cmo-page/final-cta'

export const metadata: Metadata = {
  title: 'Fractional CMO Services for Growing Businesses | Pressense',
  description:
    'Fractional CMO services for $1M-$8M businesses. Senior marketing leadership without the full-time cost. Strategy, GTM, and execution.',
  alternates: { canonical: '/fractional-cmo-services' },
  openGraph: {
    title: 'Fractional CMO Services for Growing Businesses | Pressense',
    description: 'Fractional CMO services for founder-led businesses. Senior marketing leadership without full-time overhead.',
    type: 'website',
    url: '/fractional-cmo-services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fractional CMO Services - Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO Services for Growing Businesses | Pressense',
    description:
      'Fractional CMO services for $1M-$8M businesses. Senior marketing leadership without the full-time cost. Strategy, GTM, and execution.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional CMO Services',
  provider: { '@type': 'ProfessionalService', name: 'Pressense', url: 'https://pressense.co' },
  description: 'Fractional CMO services providing senior marketing leadership for growing businesses without full-time overhead.',
  serviceType: 'Fractional CMO',
  areaServed: 'Worldwide',
}

export default function FractionalCMOServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Fractional CMO Services",
        "provider": { "@type": "Organization", "name": "Pressense", "url": "https://www.pressense.co" },
        "description": "Fractional CMO services providing embedded strategic marketing leadership for scaling founder-led businesses.",
        "url": "https://www.pressense.co/fractional-cmo-services",
        "areaServed": "United States"
      }) }} />
      
      <main>
        <FractionalCMOHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
      
    </>
  )
}
