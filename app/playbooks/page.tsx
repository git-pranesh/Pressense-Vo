import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlaybooksHero } from '@/components/playbooks-page/hero'
import { PlaybooksIntroSection } from '@/components/playbooks-page/intro-section'
import { PlaybooksGrid } from '@/components/playbooks-page/playbooks-grid'
import { PlaybooksImplementationSection } from '@/components/playbooks-page/implementation-section'
import { PlaybooksFinalCTA } from '@/components/playbooks-page/final-cta'

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
        <PlaybooksImplementationSection />
        <PlaybooksFinalCTA />
      </main>
      <Footer />
    </>
  )
}
