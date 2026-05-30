import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WebsitesConversionHero } from '@/components/websites-conversion-page/hero'
import { ClaritySection } from '@/components/websites-conversion-page/clarity-section'
import { ConstraintsSection } from '@/components/websites-conversion-page/constraints-section'
import { WhatMustClarifySection } from '@/components/websites-conversion-page/what-must-clarify-section'
import { DiagnosisSection } from '@/components/websites-conversion-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/websites-conversion-page/what-we-build-section'
import { MostUsefulSection } from '@/components/websites-conversion-page/most-useful-section'
import { WhatChangesSection } from '@/components/websites-conversion-page/what-changes-section'
import { WebsitesWhenWorthBuildingSection } from '@/components/websites-conversion-page/when-worth-building-section'
import { WebsitesWhenNotRecommendSection } from '@/components/websites-conversion-page/when-not-recommend-section'
import { WebsitesStructuredScaleSection } from '@/components/websites-conversion-page/structured-scale-section'
import { NotWebDesignSection } from '@/components/websites-conversion-page/not-web-design-section'
import { EngagementPathSection } from '@/components/websites-conversion-page/engagement-path-section'
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
      <Header />
      <main>
        <WebsitesConversionHero />
        <ClaritySection />
        <ConstraintsSection />
        <WhatMustClarifySection />
        <DiagnosisSection />
        <WhatWeBuildSection />
        <MostUsefulSection />
        <WhatChangesSection />
        <WebsitesWhenWorthBuildingSection />
        <WebsitesWhenNotRecommendSection />
        <WebsitesStructuredScaleSection />
        <NotWebDesignSection />
        <EngagementPathSection />
        <WebsitesFAQSection />
        <WebsitesConversionFinalCTA />
      </main>
      <Footer />
    </>
  )
}
