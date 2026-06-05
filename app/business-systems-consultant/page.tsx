import type { Metadata } from 'next'
import { SystemsHero } from '@/components/business-systems-page/hero'
import { ProblemSection } from '@/components/business-systems-page/problem-section'
import { SolutionSection } from '@/components/business-systems-page/solution-section'
import { WhoItsForSection } from '@/components/business-systems-page/who-its-for-section'
import { SystemsFAQSection } from '@/components/business-systems-page/faq-section'
import { SystemsCTA } from '@/components/business-systems-page/final-cta'

export const metadata: Metadata = {
  title: 'Business Systems Consultant for Growing Companies | Pressense',
  description:
    'Business systems consultant for $1M-$8M companies. We diagnose operational chaos and build systems that scale.',
  alternates: { canonical: '/business-systems-consultant' },
  openGraph: {
    title: 'Business Systems Consultant for Growing Companies | Pressense',
    description: 'Business systems consultant that diagnoses operational chaos and builds systems that scale.',
    type: 'website',
    url: '/business-systems-consultant',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Business Systems Consultant - Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Systems Consultant for Growing Companies | Pressense',
    description:
      'Business systems consultant for $1M-$8M companies. We diagnose operational chaos and build systems that scale.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Systems Consulting',
  provider: { '@type': 'ProfessionalService', name: 'Pressense', url: 'https://pressense.co' },
  description: 'Business systems consulting that diagnoses operational chaos and builds scalable systems for growing companies.',
  serviceType: 'Business Systems Consulting',
  areaServed: 'Worldwide',
}

export default function BusinessSystemsConsultantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main>
        <SystemsHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
      
    </>
  )
}
