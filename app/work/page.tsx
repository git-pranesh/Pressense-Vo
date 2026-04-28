import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WorkHero } from '@/components/work-page/hero'
import { WorkIntroSection } from '@/components/work-page/intro-section'
import { WorkGrid } from '@/components/work-page/work-grid'
import { WorkPatternsSection } from '@/components/work-page/patterns-section'
import { WorkFinalCTA } from '@/components/work-page/final-cta'

export const metadata: Metadata = {
  title: 'Work | Real Problems. Real Fixes.',
  description:
    'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick. Anonymised examples from real engagements.',
  openGraph: {
    title: 'Work | Real Problems. Real Fixes.',
    description:
      'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work | Real Problems. Real Fixes.',
    description:
      'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick.',
  },
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkHero />
        <WorkIntroSection />
        <WorkGrid />
        <WorkPatternsSection />
        <WorkFinalCTA />
      </main>
      <Footer />
    </>
  )
}
