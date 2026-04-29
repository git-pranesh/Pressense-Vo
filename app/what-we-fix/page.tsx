import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatWeFixHero } from '@/components/what-we-fix/hero'
import { IntroSection } from '@/components/what-we-fix/intro-section'
import { ProblemsGrid } from '@/components/what-we-fix/problems-grid'
import { DiagnosticApproach } from '@/components/what-we-fix/diagnostic-approach'
import { BecomesSection } from '@/components/what-we-fix/becomes-section'
import { FixOneFirstSection } from '@/components/what-we-fix/fix-one-first-section'
import { WhenSection } from '@/components/what-we-fix/when-section'
import { WhenNotSection } from '@/components/what-we-fix/when-not-section'
import { WhatWeFixCTA } from '@/components/what-we-fix/final-cta'

export const metadata: Metadata = {
  title: 'What We Fix | Pressense',
  description:
    'Positioning, offers, acquisition systems, delivery operations, team structure, financial clarity, and founder dependency. We diagnose and fix the structural issues holding your business back.',
  openGraph: {
    title: 'What We Fix | Pressense',
    description:
      'Seven structural problems that keep businesses stuck, and how we help you fix them.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Fix | Pressense',
    description:
      'Seven structural problems that keep businesses stuck, and how we help you fix them.',
  },
}

export default function WhatWeFixPage() {
  return (
    <>
      <Header />
      <main>
        <WhatWeFixHero />
        <IntroSection />
        <ProblemsGrid />
        <DiagnosticApproach />
        <BecomesSection />
        <FixOneFirstSection />
        <WhenSection />
        <WhenNotSection />
        <WhatWeFixCTA />
      </main>
      <Footer />
    </>
  )
}
