import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const playbooksFAQs = [
  {
    question: 'What are Pressense playbooks?',
    answer: (
      <>
        Pressense playbooks are practical guides that explain how founders and operators can think through growth, positioning, systems, workflows, content, websites, AI, and execution. They are designed to clarify decisions, not create generic advice.
      </>
    ),
  },
  {
    question: 'Who are the playbooks written for?',
    answer: (
      <>
        They are written for founders, operators, and teams trying to understand why{' '}
        <Link href="/what-we-fix" className="text-primary hover:underline">growth feels scattered</Link>, why execution is slow, or why current systems are not supporting scale.
      </>
    ),
  },
  {
    question: 'How should we use the playbooks?',
    answer: (
      <>
        Use them to understand the problem more clearly before jumping into solutions. A playbook can help you identify whether your next step should be{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">advisory</Link>, a website, a content system, an{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tool</Link>, CRM improvement, or{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI workflow design</Link>.
      </>
    ),
  },
  {
    question: 'Are playbooks a replacement for a diagnostic?',
    answer: (
      <>
        No. Playbooks can help you think better, but they cannot fully assess your business context. A{' '}
        <Link href="/apply" className="text-primary hover:underline">diagnostic</Link>{' '}
        is more specific because it looks at your actual market, offer, team, systems, workflows, and execution gaps.
      </>
    ),
  },
  {
    question: 'Why are playbooks useful for AEO and search?',
    answer: (
      <>
        Playbooks answer specific questions in structured language. This helps buyers, search engines, and AI search systems understand Pressense&apos;s point of view on business problems, systems, and execution. See{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">our diagnostic process</Link>.
      </>
    ),
  },
]

export function PlaybooksFAQSection() {
  return (
    <FAQSection
      headline="Questions about Pressense playbooks"
      faqs={playbooksFAQs}
    />
  )
}
