import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const advisoryFAQs = [
  {
    question: 'What is strategic advisory for founders?',
    answer:
      'Strategic advisory for founders is structured support for high-stakes decisions and growth constraints. An advisor works with the founder to identify what is blocking growth, sharpen positioning, clarify priorities, and define a practical execution roadmap. It is different from a consultant who delivers a report, a coach who focuses on personal development, or a fractional executive who manages a team. The focus is on better decisions and a clear direction, not on adding more activity.',
  },
  {
    question: 'When does a business need a strategy advisor?',
    answer:
      'A business needs a strategy advisor when growth feels active but unclear, when the founder is carrying too many decisions and the business cannot scale without them, when revenue is leaking without an obvious cause, when the team lacks a shared direction, or when the business is entering a new market or segment. The common thread is that more effort is not the answer. The answer is identifying the actual constraint and fixing it first.',
  },
  {
    question: 'What is the difference between a business advisor and a consultant?',
    answer:
      'A consultant is typically hired to solve a defined, bounded problem with a clear deliverable: a market sizing report, a pricing analysis, a technical audit. An advisor provides ongoing, context-driven guidance across multiple areas of the business, helping founders see around corners and challenge assumptions. Pressense advisory bridges both: it starts with a structured diagnostic and ends with a practical execution plan, which means it delivers consultant-level clarity with advisor-level depth.',
  },
  {
    question: 'How long does a strategy advisory engagement take?',
    answer:
      'A diagnostic sprint takes two weeks and produces a constraint map, GTM direction, and 90-day execution roadmap. An ongoing advisory retainer runs month to month and provides decision support, strategic review, and execution guidance across growth, operations, GTM, and systems. Most founders start with the diagnostic sprint to identify the constraint, then move into execution with or without continued advisory support.',
  },
  {
    question: 'What does advisory and strategy consulting cost?',
    answer:
      'The diagnostic sprint starts from $2,500 for a two-week engagement. Ongoing advisory retainers start from $3,500 per month. The initial diagnostic session is free and takes 45 minutes. It defines the problem and determines whether advisory is the right starting point or whether a specific execution track would be more valuable.',
  },
  {
    question: 'How is Pressense advisory different from traditional consulting?',
    answer: (
      <>
        Pressense advisory connects strategy with execution. The diagnosis does not end with a slide deck. It leads into a practical roadmap and, where useful, into execution through{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">websites</Link>,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content systems</Link>,{' '}
        <Link href="/ai-automation-agency" className="text-primary hover:underline">AI workflows</Link>, or operating processes. The goal is not a report. It is a business that moves differently after the engagement.
      </>
    ),
  },
]

export function AdvisoryFAQSection() {
  return <FAQSection headline="Questions about advisory and strategy" faqs={advisoryFAQs} />
}
