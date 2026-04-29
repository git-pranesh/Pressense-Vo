import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AIWorkflowsHero } from '@/components/ai-workflows-page/hero'
import { AIWorkflowsAmplifiesSection } from '@/components/ai-workflows-page/amplifies-section'
import { AIWorkflowsConstraintsSection } from '@/components/ai-workflows-page/constraints-section'
import { AIWorkflowsDiagnosisSection } from '@/components/ai-workflows-page/diagnosis-section'
import { AIWorkflowsWhatWeBuildSection } from '@/components/ai-workflows-page/what-we-build-section'
import { AIWorkflowsMostUsefulSection } from '@/components/ai-workflows-page/most-useful-section'
import { AIWorkflowsWhatChangesSection } from '@/components/ai-workflows-page/what-changes-section'
import { AIWorkflowsNotImplementationSection } from '@/components/ai-workflows-page/not-implementation-section'
import { AIWorkflowsEngagementPathSection } from '@/components/ai-workflows-page/engagement-path-section'
import { AIWorkflowsFinalCTA } from '@/components/ai-workflows-page/final-cta'

export const metadata: Metadata = {
  title: 'AI Workflows & Automation | Pressense',
  description:
    'We help businesses use AI to automate workflows, reduce manual work, and improve execution. Strategy-led AI systems for content, sales, operations, and internal processes.',
  openGraph: {
    title: 'AI Workflows & Automation | Pressense',
    description:
      'We help businesses use AI to automate workflows, reduce manual work, and improve execution. Strategy-led AI systems for content, sales, operations, and internal processes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflows & Automation | Pressense',
    description:
      'We help businesses use AI to automate workflows, reduce manual work, and improve execution. Strategy-led AI systems for content, sales, operations, and internal processes.',
  },
}

export default function AIWorkflowsAutomationPage() {
  return (
    <>
      <Header />
      <main>
        <AIWorkflowsHero />
        <AIWorkflowsAmplifiesSection />
        <AIWorkflowsConstraintsSection />
        <AIWorkflowsDiagnosisSection />
        <AIWorkflowsWhatWeBuildSection />
        <AIWorkflowsMostUsefulSection />
        <AIWorkflowsWhatChangesSection />
        <AIWorkflowsNotImplementationSection />
        <AIWorkflowsEngagementPathSection />
        <AIWorkflowsFinalCTA />
      </main>
      <Footer />
    </>
  )
}
