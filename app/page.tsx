import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ProblemSection } from '@/components/problem-section'
import { WhatWeDo } from '@/components/what-we-do'
import { ApproachSection } from '@/components/approach-section'
import { StartFocusedSection } from '@/components/start-focused-section'
import { ServicesSection } from '@/components/services-section'
import { WhoSection } from '@/components/who-section'
import { FinalCTA } from '@/components/final-cta'
import { HomeFAQSection } from '@/components/home-faq-section'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main>
      
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <WhatWeDo />
      <ApproachSection />
      <StartFocusedSection />
      <ServicesSection />
      <WhoSection />
      <HomeFAQSection />
      <FinalCTA />
      
    </main>
  )
}
