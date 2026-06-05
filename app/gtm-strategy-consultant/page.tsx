import type { Metadata } from 'next'
import { GTMHero } from '@/components/gtm-consultant-page/hero'
import { ProblemSection } from '@/components/gtm-consultant-page/problem-section'
import { SolutionSection } from '@/components/gtm-consultant-page/solution-section'
import { WhoItsForSection } from '@/components/gtm-consultant-page/who-its-for-section'
import { GTMFAQSection } from '@/components/gtm-consultant-page/faq-section'
import { GTMCTA } from '@/components/gtm-consultant-page/final-cta'

export const metadata: Metadata = {
  title: 'GTM Strategy Consultant for Founder-Led Businesses | Pressense',
  description:
    'GTM strategy consultant for $1M-$8M businesses. We diagnose go-to-market bottlenecks and build strategies that convert.',
  alternates: { canonical: '/gtm-strategy-consultant' },
  openGraph: {
    title: 'GTM Strategy Consultant for Founder-Led Businesses | Pressense',
    description: 'GTM strategy consultant that diagnoses go-to-market bottlenecks and builds strategies that convert.',
    type: 'website',
    url: '/gtm-strategy-consultant',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GTM Strategy Consultant - Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Strategy Consultant for Founder-Led Businesses | Pressense',
    description:
      'GTM strategy consultant for $1M-$8M businesses. We diagnose go-to-market bottlenecks and build strategies that convert.',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'GTM Strategy Consulting',
  provider: { '@type': 'ProfessionalService', name: 'Pressense', url: 'https://pressense.co' },
  description: 'Go-to-market strategy consulting that diagnoses GTM bottlenecks and builds strategies that convert for founder-led businesses.',
  serviceType: 'GTM Strategy Consulting',
  areaServed: 'Worldwide',
}

export default function GTMStrategyConsultantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main>
        <GTMHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
      
    </>
  )
}
