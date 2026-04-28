import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CaseStudiesHero } from '@/components/case-studies-page/hero'
import { IntroSection } from '@/components/case-studies-page/intro-section'
import { CaseStudiesGrid } from '@/components/case-studies-page/case-studies-grid'
import { PatternsSection } from '@/components/case-studies-page/patterns-section'
import { ApproachSection } from '@/components/case-studies-page/approach-section'
import { CaseStudiesFinalCTA } from '@/components/case-studies-page/final-cta'

export const metadata: Metadata = {
  title: 'Case Studies | Real Problems. Real Fixes. No Inflated Metrics.',
  description:
    'Anonymised case studies from real engagements. See how we diagnosed broken systems—sales motion misalignment, founder bottlenecks, pricing leaks, operational chaos—and built fixes that stuck.',
  openGraph: {
    title: 'Case Studies | Real Problems. Real Fixes.',
    description:
      'Anonymised case studies from real engagements. See how we diagnosed broken systems and built fixes that stuck.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Real Problems. Real Fixes.',
    description:
      'Anonymised case studies from real engagements. See how we diagnosed broken systems and built fixes that stuck.',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudiesHero />
        <IntroSection />
        <CaseStudiesGrid />
        <PatternsSection />
        <ApproachSection />
        <CaseStudiesFinalCTA />
      </main>
      <Footer />
    </>
  )
}
