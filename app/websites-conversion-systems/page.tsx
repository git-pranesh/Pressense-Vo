import type { Metadata } from 'next'
import { WebsitesConversionHero } from '@/components/websites-conversion-page/hero'
import { WebsitesProblemSection } from '@/components/websites-conversion-page/problem-section'
import { WebsitesSolutionSection } from '@/components/websites-conversion-page/solution-section'
import { WebsitesWhoItsForSection } from '@/components/websites-conversion-page/who-its-for-section'
import { WebsitesMethodologySection } from '@/components/websites-conversion-page/methodology-section'
import { WebsitesWhatYouGetSection } from '@/components/websites-conversion-page/what-you-get-section'
import { WebsitesConversionFinalCTA } from '@/components/websites-conversion-page/final-cta'
import { WebsitesFAQSection } from '@/components/websites-conversion-page/faq-section'

export const metadata: Metadata = {
  title: 'Websites & Conversion Systems | Pressense',
  description:
    'Positioning-led websites and conversion systems that clarify value, guide buyers, support sales, and turn traffic into demand.',
  alternates: {
    canonical: '/websites-conversion-systems',
  },
  openGraph: {
    title: 'Websites & Conversion Systems | Pressense',
    description:
      'Pressense builds positioning-led websites and conversion systems that clarify value, guide buyers, support sales, and turn traffic into qualified demand.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites & Conversion Systems | Pressense',
    description:
      'Pressense builds positioning-led websites and conversion systems that clarify value, guide buyers, support sales, and turn traffic into qualified demand.',
  },
}

export default function WebsitesConversionSystemsPage() {
  return (
    <>
      
      <main>
        <WebsitesConversionHero />
        <WebsitesProblemSection />
        <WebsitesSolutionSection />
        <WebsitesWhoItsForSection />
        <WebsitesMethodologySection />
        <WebsitesWhatYouGetSection />
        <WebsitesFAQSection />
        <WebsitesConversionFinalCTA />
      </main>
      
    </>
  )
}
