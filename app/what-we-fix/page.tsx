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
import { WhatWeFixFAQSection } from '@/components/what-we-fix/faq-section'

export const metadata: Metadata = {
  title: 'What We Fix | Pressense',
  description:
    'Positioning, offers, acquisition systems, delivery operations, team structure, and founder dependency. We fix structural issues holding your business back.',
  alternates: {
    canonical: '/what-we-fix',
  },
  openGraph: {
    title: 'What We Fix | Pressense',
    description:
      'Seven structural problems that keep businesses stuck, and how we help you fix them.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense - What We Fix' }],
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
        <WhatWeFixFAQSection />
        <WhatWeFixCTA />
      </main>
      <Footer />
    </>
  )
}
