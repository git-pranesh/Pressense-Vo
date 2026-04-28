import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ProblemSection } from '@/components/problem-section'
import { WhatWeDo } from '@/components/what-we-do'
import { ApproachSection } from '@/components/approach-section'
import { StartFocusedSection } from '@/components/start-focused-section'
import { ServicesSection } from '@/components/services-section'
import { WhoSection } from '@/components/who-section'
import { CaseStudiesSection } from '@/components/case-studies-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <WhatWeDo />
      <ApproachSection />
      <StartFocusedSection />
      <ServicesSection />
      <WhoSection />
      <CaseStudiesSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
