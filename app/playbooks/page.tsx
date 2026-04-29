import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlaybooksHero } from '@/components/playbooks-page/hero'
import { PlaybooksIntroSection } from '@/components/playbooks-page/intro-section'
import { PlaybooksGrid } from '@/components/playbooks-page/playbooks-grid'
import { PlaybookDetails } from '@/components/playbooks-page/playbook-details'
import { PlaybooksFinalCTA } from '@/components/playbooks-page/final-cta'
import { PlaybooksFAQSection } from '@/components/playbooks-page/faq-section'

export const metadata: Metadata = {
  title: 'Playbooks | Implementation Guides for Growth Constraints',
  description:
    'Structured frameworks for fixing common growth constraints. From diagnosis to implementation. Founder bottlenecks, pricing, GTM alignment, onboarding, personal brand, systems debt.',
  openGraph: {
    title: 'Playbooks | Implementation Guides for Growth Constraints',
    description:
      'Structured frameworks for fixing common growth constraints. From diagnosis to implementation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playbooks | Implementation Guides for Growth Constraints',
    description:
      'Structured frameworks for fixing common growth constraints. From diagnosis to implementation.',
  },
}

export default function PlaybooksPage() {
  return (
    <>
      <Header />
      <main>
        <PlaybooksHero />
        <PlaybooksIntroSection />
        <PlaybooksGrid />
        <PlaybookDetails />
        <PlaybooksFAQSection />
        <PlaybooksFinalCTA />
      </main>
      <Footer />
    </>
  )
}
