import type { Metadata } from 'next'
import { AdvisoryStrategyHero } from '@/components/advisory-strategy-page/hero'
import { AdvisoryProblemSection } from '@/components/advisory-strategy-page/problem-section'
import { AdvisorySolutionSection } from '@/components/advisory-strategy-page/solution-section'
import { AdvisoryWhoItsForSection } from '@/components/advisory-strategy-page/who-its-for-section'
import { AdvisoryMethodologySection } from '@/components/advisory-strategy-page/methodology-section'
import { AdvisoryWhatYouGetSection } from '@/components/advisory-strategy-page/what-you-get-section'
import { AdvisoryFAQSection } from '@/components/advisory-strategy-page/faq-section'
import { AdvisoryStrategyCTA } from '@/components/advisory-strategy-page/final-cta'

export const metadata: Metadata = {
  title: 'Advisory and Strategy for Founder-Led Businesses | Pressense',
  description:
    'Strategic advisory for founders needing clarity on growth bottlenecks, GTM, revenue leakage, positioning, and execution priorities. 2-week diagnostic sprint from $2,500.',
  alternates: {
    canonical: '/advisory-strategy',
  },
  openGraph: {
    title: 'Advisory and Strategy for Founder-Led Businesses | Pressense',
    description:
      'Strategic advisory for founders who need clarity on growth bottlenecks, GTM, revenue leakage, market entry, positioning, and execution priorities.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory and Strategy for Founder-Led Businesses | Pressense',
    description:
      'Strategic advisory for founders who need clarity on growth bottlenecks, GTM, revenue leakage, market entry, positioning, and execution priorities.',
  },
}

export default function AdvisoryStrategyPage() {
  return (
    <main>
      <AdvisoryStrategyHero />
      <AdvisoryProblemSection />
      <AdvisorySolutionSection />
      <AdvisoryWhoItsForSection />
      <AdvisoryMethodologySection />
      <AdvisoryWhatYouGetSection />
      <AdvisoryFAQSection />
      <AdvisoryStrategyCTA />
    </main>
  )
}
