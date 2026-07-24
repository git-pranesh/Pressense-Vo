import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const homeFAQs = [
  {
    question: 'What does Pressense actually do?',
    answer: (
      <>
        Pressense helps founder-led and growing businesses find what is blocking growth, then build the strategy, systems, websites, content, workflows, and tools needed to scale with more clarity. We do not start with execution. We start by{' '}
        <Link href="/contact" className="text-primary hover:underline">diagnosing the real constraint</Link>.
      </>
    ),
  },
  {
    question: 'Is Pressense a consulting firm or an execution partner?',
    answer: (
      <>
        Pressense sits between{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">strategic advisory</Link>{' '}
        and execution. We help clarify the problem first, then support implementation where useful. That could mean a website,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">content system</Link>,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">internal tool</Link>, CRM workflow,{' '}
        <Link href="/ai-integration" className="text-primary hover:underline">AI automation</Link>, or operating roadmap.
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
    question: 'What is a business diagnostic and what does it include?',
    answer: (
      <>
        A{' '}
        <Link href="/contact" className="text-primary hover:underline">business diagnostic</Link>{' '}
        is a structured review of your business to find the real constraint blocking growth. At Pressense it covers positioning, sales systems, operations, marketing, team structure, and tech stack. You receive a prioritised action roadmap showing exactly what to fix first and why.
      </>
    ),
  },
  {
    question: 'How long does a business diagnostic take?',
    answer: (
      <>
        Our diagnostic process typically takes one week. We review your systems, talk to your team, and deliver a written report with your top three constraints and recommended next steps. There is no obligation to continue after the diagnostic.
      </>
    ),
  },
  {
    question: 'Why do you start with a diagnostic?',
    answer: (
      <>
        Many businesses waste money solving the wrong problem. A{' '}
        <Link href="/contact" className="text-primary hover:underline">diagnostic</Link>{' '}
        helps identify whether the real issue is strategy, positioning, workflow, sales visibility, website clarity, content, systems, or execution. This makes the next step more precise.
      </>
    ),
  },
  {
    question: 'Can Pressense help with both strategy and implementation?',
    answer: (
      <>
        Yes. The work usually starts with{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">strategy and diagnosis</Link>, then moves into implementation where needed. Pressense can support advisory,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">websites</Link>,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">content systems</Link>,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/custom-crm" className="text-primary hover:underline">CRM and ERP-lite systems</Link>, and{' '}
        <Link href="/ai-integration" className="text-primary hover:underline">AI workflows</Link>.
      </>
    ),
  },
  {
    question: 'What should we do if we are not sure what we need yet?',
    answer: (
      <>
        Start with the{' '}
        <Link href="/contact" className="text-primary hover:underline">diagnostic</Link>. It is designed for businesses that feel something is not working but are not sure whether the issue is marketing, operations, positioning, systems, people, tools, or execution.
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
