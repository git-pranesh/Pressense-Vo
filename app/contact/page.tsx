import type { Metadata } from 'next'
import { Suspense } from 'react'
import { DiagnosticHero } from '@/components/diagnostic/diagnostic-hero'
import { ForBusinessesSection } from '@/components/apply/for-businesses-section'
import { WhatWeHelpWithSection } from '@/components/apply/what-we-help-with'
import { NotForSection } from '@/components/apply/not-for-section'
import { ProcessSection } from '@/components/apply/process-section'
import { DiagnosticForm } from '@/components/diagnostic/diagnostic-form'
import { DiagnosticFAQSection } from '@/components/diagnostic/faq-section'
import { Spinner } from '@/components/ui/spinner'

export const metadata: Metadata = {
  title: 'Start Diagnostic | Pressense Strategy & Systems',
  description:
    'Tell us what feels unclear, broken, or stuck. We help identify the right next step: advisory, workflow, website, content system, or tools.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Start Diagnostic | Pressense Strategy & Systems',
    description:
      'Tell us what feels unclear, broken, or stuck. We help identify the right next step for your business.',
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
      
      <main>
        <DiagnosticHero />
        <ForBusinessesSection />
        <WhatWeHelpWithSection />
        <NotForSection />
        <ProcessSection />
        <DiagnosticFAQSection />
        <Suspense fallback={<div className="py-20 flex justify-center"><Spinner className="h-8 w-8" /></div>}>
          <DiagnosticForm />
        </Suspense>
      </main>
      
    </>
  )
}
