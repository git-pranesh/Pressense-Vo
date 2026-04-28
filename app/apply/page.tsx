import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ApplyHero } from '@/components/apply/apply-hero'
import { ForBusinessesSection } from '@/components/apply/for-businesses-section'
import { WhatWeHelpWithSection } from '@/components/apply/what-we-help-with'
import { NotForSection } from '@/components/apply/not-for-section'
import { ProcessSection } from '@/components/apply/process-section'
import { ApplicationForm } from '@/components/apply/application-form'

export const metadata: Metadata = {
  title: 'Apply to Work With Us | Strategy & Systems Consulting',
  description:
    'Submit your application to work with our strategy and systems team. We help scaling founders, operators, and enterprise teams move from scattered growth to structured scale.',
  openGraph: {
    title: 'Apply to Work With Us | Strategy & Systems Consulting',
    description:
      'Submit your application to work with our strategy and systems team. We help scaling founders, operators, and enterprise teams move from scattered growth to structured scale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply to Work With Us | Strategy & Systems Consulting',
    description:
      'Submit your application to work with our strategy and systems team.',
  },
}

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main>
        <ApplyHero />
        <ForBusinessesSection />
        <WhatWeHelpWithSection />
        <NotForSection />
        <ProcessSection />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  )
}
