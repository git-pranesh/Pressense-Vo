import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DiagnosticHero } from '@/components/diagnostic/diagnostic-hero'
import { ForBusinessesSection } from '@/components/apply/for-businesses-section'
import { WhatWeHelpWithSection } from '@/components/apply/what-we-help-with'
import { NotForSection } from '@/components/apply/not-for-section'
import { ProcessSection } from '@/components/apply/process-section'
import { DiagnosticForm } from '@/components/diagnostic/diagnostic-form'
import { DiagnosticFAQSection } from '@/components/diagnostic/faq-section'

export const metadata: Metadata = {
  title: 'Start Diagnostic | Pressense Strategy & Systems',
  description:
    'Tell us what feels unclear, broken, or stuck. We will use the context to understand whether the next step should be advisory, a workflow, website, content system, CRM/ERP layer, internal tool, AI workflow, or something simpler.',
  openGraph: {
    title: 'Start Diagnostic | Pressense Strategy & Systems',
    description:
      'Tell us what feels unclear, broken, or stuck. We will use the context to understand whether the next step should be advisory, a workflow, website, content system, CRM/ERP layer, internal tool, AI workflow, or something simpler.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Diagnostic | Pressense Strategy & Systems',
    description:
      'Tell us what feels unclear, broken, or stuck in your business.',
  },
}

export default function DiagnosticPage() {
  return (
    <>
      <Header />
      <main>
        <DiagnosticHero />
        <ForBusinessesSection />
        <WhatWeHelpWithSection />
        <NotForSection />
        <ProcessSection />
        <DiagnosticFAQSection />
        <DiagnosticForm />
      </main>
      <Footer />
    </>
  )
}
