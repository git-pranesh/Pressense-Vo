import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AdvisoryStrategyHero } from '@/components/advisory-strategy-page/hero'
import { IntroSection } from '@/components/advisory-strategy-page/intro-section'
import { WhenUsefulSection } from '@/components/advisory-strategy-page/when-useful-section'
import { ThinkThroughSection } from '@/components/advisory-strategy-page/think-through-section'
import { AdvisoryModelSection } from '@/components/advisory-strategy-page/advisory-model-section'
import { TypicalSituationsSection } from '@/components/advisory-strategy-page/typical-situations-section'
import { WalkAwaySection } from '@/components/advisory-strategy-page/walk-away-section'
import { NotTheorySection } from '@/components/advisory-strategy-page/not-theory-section'
import { EngagementFormatsSection } from '@/components/advisory-strategy-page/engagement-formats-section'
import { AdvisoryStrategyCTA } from '@/components/advisory-strategy-page/final-cta'

export const metadata: Metadata = {
  title: 'Advisory & Strategy for Founder-Led Businesses, Pressense',
  description:
    'Strategic advisory for founders and teams who need clarity on growth bottlenecks, GTM, revenue leakage, market entry, positioning, operations, and execution priorities.',
  openGraph: {
    title: 'Advisory & Strategy for Founder-Led Businesses, Pressense',
    description:
      'Strategic advisory for founders and teams who need clarity on growth bottlenecks, GTM, revenue leakage, market entry, positioning, operations, and execution priorities.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory & Strategy for Founder-Led Businesses, Pressense',
    description:
      'Strategic advisory for founders and teams who need clarity on growth bottlenecks, GTM, revenue leakage, market entry, positioning, operations, and execution priorities.',
  },
}

export default function AdvisoryStrategyPage() {
  return (
    <>
      <Header />
      <main>
        <AdvisoryStrategyHero />
        <IntroSection />
        <WhenUsefulSection />
        <ThinkThroughSection />
        <AdvisoryModelSection />
        <TypicalSituationsSection />
        <WalkAwaySection />
        <NotTheorySection />
        <EngagementFormatsSection />
        <AdvisoryStrategyCTA />
      </main>
      <Footer />
    </>
  )
}
