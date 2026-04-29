import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlaybooksHero } from '@/components/playbooks-page/hero'
import { PlaybooksIntroSection } from '@/components/playbooks-page/intro-section'
import { StartHereSection } from '@/components/playbooks-page/start-here-section'
import { PlaybooksGrid } from '@/components/playbooks-page/playbooks-grid'
import { PlaybooksFinalCTA } from '@/components/playbooks-page/final-cta'
import { PlaybooksFAQSection } from '@/components/playbooks-page/faq-section'
import { PageStructuredData } from '@/components/page-structured-data'

export const metadata: Metadata = {
  title: 'Playbooks | Diagnostic Frameworks for Growth Constraints | Pressense',
  description:
    'Diagnostic frameworks for growth constraints. Founder bottlenecks, pricing leakage, GTM alignment, customer onboarding, personal brand, systems debt, CRM adoption.',
  alternates: {
    canonical: '/playbooks',
  },
  openGraph: {
    title: 'Playbooks | Diagnostic Frameworks for Growth Constraints',
    description:
      'Diagnostic frameworks for fixing common growth constraints. From diagnosis to implementation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playbooks | Diagnostic Frameworks for Growth Constraints',
    description:
      'Diagnostic frameworks for fixing common growth constraints. From diagnosis to implementation.',
  },
}

const hubFaqs = [
  {
    question: 'What are Pressense playbooks?',
    answer: 'Pressense playbooks are diagnostic frameworks that help founders and operators understand growth constraints, pricing issues, systems debt, and execution gaps. Each playbook includes symptoms, inspection areas, decision frameworks, and implementation guidance.',
  },
  {
    question: 'Who are the playbooks written for?',
    answer: 'They are written for founders, operators, and teams trying to understand why growth feels scattered, why execution is slow, or why current systems are not supporting scale.',
  },
  {
    question: 'How should we use the playbooks?',
    answer: 'Use them to understand the problem more clearly before jumping into solutions. A playbook can help you identify whether your next step should be advisory, a website rebuild, a content system, an internal tool, CRM improvement, or AI workflow design.',
  },
  {
    question: 'Are playbooks a replacement for a diagnostic?',
    answer: 'No. Playbooks can help you think better, but they cannot fully assess your business context. A diagnostic is more specific because it looks at your actual market, offer, team, systems, workflows, and execution gaps.',
  },
  {
    question: 'Why are playbooks useful for AEO and search?',
    answer: 'Playbooks answer specific questions in structured language. This helps buyers, search engines, and AI search systems understand our point of view on business problems, systems, and execution.',
  },
]

export default function PlaybooksPage() {
  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Playbooks', url: '/playbooks' },
        ]}
        faqs={hubFaqs}
        pageType="WebPage"
        pageName="Playbooks | Diagnostic Frameworks for Growth Constraints"
        pageDescription="Diagnostic frameworks for fixing common growth constraints. Founder bottlenecks, pricing leakage, GTM alignment, customer onboarding, personal brand, systems debt."
      />
      <Header />
      <main>
        <PlaybooksHero />
        <PlaybooksIntroSection />
        <StartHereSection />
        <PlaybooksGrid />
        <PlaybooksFAQSection />
        <PlaybooksFinalCTA />
      </main>
      <Footer />
    </>
  )
}
