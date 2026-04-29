import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContentAuthorityHero } from '@/components/content-authority-page/hero'
import { TranslationSection } from '@/components/content-authority-page/translation-section'
import { ConstraintsSection } from '@/components/content-authority-page/constraints-section'
import { DiagnosisSection } from '@/components/content-authority-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/content-authority-page/what-we-build-section'
import { MostUsefulSection } from '@/components/content-authority-page/most-useful-section'
import { WhatChangesSection } from '@/components/content-authority-page/what-changes-section'
import { NotWritingServiceSection } from '@/components/content-authority-page/not-writing-service-section'
import { EngagementPathSection } from '@/components/content-authority-page/engagement-path-section'
import { ContentAuthorityCTA } from '@/components/content-authority-page/final-cta'

export const metadata: Metadata = {
  title: 'Content & Authority Systems | Pressense',
  description:
    'We help businesses, SaaS products, and experts turn expertise into structured content systems, website copy, SEO content, and authority-driven communication that builds trust and demand.',
  openGraph: {
    title: 'Content & Authority Systems | Pressense',
    description:
      'We help businesses, SaaS products, and experts turn expertise into structured content systems, website copy, SEO content, and authority-driven communication that builds trust and demand.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content & Authority Systems | Pressense',
    description:
      'We help businesses, SaaS products, and experts turn expertise into structured content systems, website copy, SEO content, and authority-driven communication that builds trust and demand.',
  },
}

export default function ContentAuthoritySystemsPage() {
  return (
    <>
      <Header />
      <main>
        <ContentAuthorityHero />
        <TranslationSection />
        <ConstraintsSection />
        <DiagnosisSection />
        <WhatWeBuildSection />
        <MostUsefulSection />
        <WhatChangesSection />
        <NotWritingServiceSection />
        <EngagementPathSection />
        <ContentAuthorityCTA />
      </main>
      <Footer />
    </>
  )
}
