import type { Metadata } from 'next'
import { WorkHero } from '@/components/work-page/hero'
import { WorkIntroSection } from '@/components/work-page/intro-section'
import { WorkGrid } from '@/components/work-page/work-grid'
import { WorkPatternsSection } from '@/components/work-page/patterns-section'
import { WorkFinalCTA } from '@/components/work-page/final-cta'

export const metadata: Metadata = {
  title: 'Selected Work | Pressense',
  description:
    'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Selected Work | Pressense',
    description:
      'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Work | Pressense',
    description:
      'Selected work from strategy, GTM, and systems engagements. See how we diagnose root cause and build solutions that stick.',
  },
}

export default function WorkPage() {
  return (
    <>
      
      <main>
        <WorkHero />
        <WorkIntroSection />
        <WorkGrid />
        <WorkPatternsSection />
        <WorkFinalCTA />
      </main>
      
    </>
  )
}
