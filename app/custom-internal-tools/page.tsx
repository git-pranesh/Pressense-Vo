import type { Metadata } from 'next'
import { CustomToolsHero } from '@/components/custom-tools-page/hero'
import { ManualSystemsSection } from '@/components/custom-tools-page/manual-systems-section'
import { ConstraintsSection } from '@/components/custom-tools-page/constraints-section'
import { DiagnosisSection } from '@/components/custom-tools-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/custom-tools-page/what-we-build-section'
import { ExampleWorkflowsSection } from '@/components/custom-tools-page/example-workflows-section'
import { WorthBuildingSection } from '@/components/custom-tools-page/worth-building-section'
import { WhenNotSection } from '@/components/custom-tools-page/when-not-section'
import { StructuredScaleSection } from '@/components/custom-tools-page/structured-scale-section'
import { EngagementPathSection } from '@/components/custom-tools-page/engagement-path-section'
import { CustomToolsFinalCTA } from '@/components/custom-tools-page/final-cta'
import { CustomToolsFAQSection } from '@/components/custom-tools-page/faq-section'

export const metadata: Metadata = {
  title: 'Custom Internal Tools for Growing Businesses, Pressense',
  description:
    'Replace spreadsheets and scattered SaaS tools with custom internal tools, dashboards, automation, and workflow systems built for scale.',
  alternates: {
    canonical: '/custom-internal-tools',
  },
  openGraph: {
    title: 'Custom Internal Tools for Growing Businesses, Pressense',
    description:
      'We help growing businesses replace spreadsheets, manual workflows, and scattered SaaS tools with custom internal tools and systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Internal Tools for Growing Businesses, Pressense',
    description:
      'Replace spreadsheets and scattered SaaS tools with custom internal tools, dashboards, automation, and workflow systems built for scale.',
    images: ['/og-image.jpg'],
  },
}

export default function CustomInternalToolsPage() {
  return (
    <>
      
      <main>
        <CustomToolsHero />
        <ManualSystemsSection />
        <ConstraintsSection />
        <DiagnosisSection />
        <WhatWeBuildSection />
        <ExampleWorkflowsSection />
        <WorthBuildingSection />
        <WhenNotSection />
        <StructuredScaleSection />
        <EngagementPathSection />
        <CustomToolsFAQSection />
        <CustomToolsFinalCTA />
      </main>
      
    </>
  )
}
