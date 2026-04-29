import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WebsitesConversionHero } from '@/components/websites-conversion-page/hero'
import { ClaritySection } from '@/components/websites-conversion-page/clarity-section'
import { ConstraintsSection } from '@/components/websites-conversion-page/constraints-section'
import { DiagnosisSection } from '@/components/websites-conversion-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/websites-conversion-page/what-we-build-section'
import { MostUsefulSection } from '@/components/websites-conversion-page/most-useful-section'
import { WhatChangesSection } from '@/components/websites-conversion-page/what-changes-section'
import { NotWebDesignSection } from '@/components/websites-conversion-page/not-web-design-section'
import { EngagementPathSection } from '@/components/websites-conversion-page/engagement-path-section'
import { WebsitesConversionFinalCTA } from '@/components/websites-conversion-page/final-cta'

export const metadata: Metadata = {
  title: 'Websites & Conversion Systems | Pressense',
  description:
    'We design and build websites that clarify your business, improve conversion, and support growth. Strategy-led websites for SaaS, founders, and experts.',
  openGraph: {
    title: 'Websites & Conversion Systems | Pressense',
    description:
      'We design and build websites that clarify your business, improve conversion, and support growth. Strategy-led websites for SaaS, founders, and experts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websites & Conversion Systems | Pressense',
    description:
      'We design and build websites that clarify your business, improve conversion, and support growth. Strategy-led websites for SaaS, founders, and experts.',
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
        <DiagnosisSection />
        <WhatWeBuildSection />
        <MostUsefulSection />
        <WhatChangesSection />
        <NotWebDesignSection />
        <EngagementPathSection />
        <WebsitesConversionFinalCTA />
      </main>
      <Footer />
    </>
  )
}
