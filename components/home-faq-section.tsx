import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const homeFAQs = [
  {
    question: 'What does Pressense actually do?',
    answer: (
      <>
        Pressense helps founder-led and growing businesses find what is blocking growth, then build the strategy, systems, websites, content, workflows, and tools needed to scale with more clarity. We do not start with execution. We start by{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">diagnosing the real constraint</Link>.
      </>
    ),
  },
  {
    question: 'Is Pressense a consulting firm or an execution partner?',
    answer: (
      <>
        Pressense sits between{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">strategic advisory</Link>{' '}
        and execution. We help clarify the problem first, then support implementation where useful. That could mean a website,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content system</Link>,{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tool</Link>, CRM workflow,{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI automation</Link>, or operating roadmap.
      </>
    ),
  },
  {
    question: 'Who is Pressense best suited for?',
    answer: (
      <>
        Pressense is best suited for founders, operators, and growing teams dealing with scattered growth, unclear positioning, weak systems, revenue leakage, manual workflows, or execution bottlenecks. It is not ideal for businesses looking only for isolated low-cost tasks.
      </>
    ),
  },
  {
    question: 'Why do you start with a diagnostic?',
    answer: (
      <>
        Many businesses waste money solving the wrong problem. A{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">diagnostic</Link>{' '}
        helps identify whether the real issue is strategy, positioning, workflow, sales visibility, website clarity, content, systems, or execution. This makes the next step more precise.
      </>
    ),
  },
  {
    question: 'Can Pressense help with both strategy and implementation?',
    answer: (
      <>
        Yes. The work usually starts with{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">strategy and diagnosis</Link>, then moves into implementation where needed. Pressense can support advisory,{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">websites</Link>,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content systems</Link>,{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM and ERP-lite systems</Link>, and{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI workflows</Link>.
      </>
    ),
  },
  {
    question: 'What should we do if we are not sure what we need yet?',
    answer: (
      <>
        Start with the{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">diagnostic</Link>. It is designed for businesses that feel something is not working but are not sure whether the issue is marketing, operations, positioning, systems, people, tools, or execution.
      </>
    ),
  },
]

export function HomeFAQSection() {
  return (
    <FAQSection
      headline="Questions founders usually ask before working with Pressense"
      faqs={homeFAQs}
    />
  )
}
