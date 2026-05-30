import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIWorkflowsHero } from '@/components/ai-workflows-page/hero'
import { AIWorkflowsAmplifiesSection } from '@/components/ai-workflows-page/amplifies-section'
import { AIWhereWrongSection } from '@/components/ai-workflows-page/where-wrong-section'
import { AIRealTeamsSection } from '@/components/ai-workflows-page/real-teams-section'
import { AIWorkflowsDiagnosisSection } from '@/components/ai-workflows-page/diagnosis-section'
import { AIWorkflowsWhatWeBuildSection } from '@/components/ai-workflows-page/what-we-build-section'
import { AIWorkflowsMostUsefulSection } from '@/components/ai-workflows-page/most-useful-section'
import { AIWorkflowsWhatChangesSection } from '@/components/ai-workflows-page/what-changes-section'
import { AIWhenWorthBuildingSection } from '@/components/ai-workflows-page/when-worth-building-section'
import { AIWhenNotRecommendSection } from '@/components/ai-workflows-page/when-not-recommend-section'
import { AIStructuredScaleSection } from '@/components/ai-workflows-page/structured-scale-section'
import { AIWorkflowsNotImplementationSection } from '@/components/ai-workflows-page/not-implementation-section'
import { AIWorkflowsEngagementPathSection } from '@/components/ai-workflows-page/engagement-path-section'
import { AIWorkflowsFinalCTA } from '@/components/ai-workflows-page/final-cta'
import { AIWorkflowsFAQSection } from '@/components/ai-workflows-page/faq-section'

export const metadata: Metadata = {
  title: 'AI Workflows & Automation | Pressense',
  description:
    'Practical AI workflows and automation systems that reduce manual work, improve consistency, and help teams execute with clarity.',
  alternates: {
    canonical: '/ai-workflows-automation',
  },
  openGraph: {
    title: 'AI Workflows & Automation | Pressense',
    description:
      'Pressense designs practical AI workflows and automation systems that reduce manual work, improve consistency, and help teams execute with more clarity.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflows & Automation | Pressense',
    description:
      'Pressense designs practical AI workflows and automation systems that reduce manual work, improve consistency, and help teams execute with more clarity.',
  },
}

export default function AIWorkflowsAutomationPage() {
  return (
    <>
      <Header />
      <main>
        <AIWorkflowsHero />
        <AIWorkflowsAmplifiesSection />
        <AIWhereWrongSection />
        <AIRealTeamsSection />
        <AIWorkflowsDiagnosisSection />
        <AIWorkflowsWhatWeBuildSection />
        <AIWorkflowsMostUsefulSection />
        <AIWorkflowsWhatChangesSection />
        <AIWhenWorthBuildingSection />
        <AIWhenNotRecommendSection />
        <AIStructuredScaleSection />
        <AIWorkflowsNotImplementationSection />
        <AIWorkflowsEngagementPathSection />
        <AIWorkflowsFAQSection />
        <AIWorkflowsFinalCTA />
      </main>
      <Footer />
    </>
  )
}
