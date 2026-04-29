import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const applyFAQs = [
  {
    question: 'What happens after we apply?',
    answer: (
      <>
        After you apply, Pressense reviews the context and determines whether a diagnostic makes sense. The goal is to understand the business problem before suggesting a scope, system, or implementation path. Learn more about{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">how the diagnostic process works</Link>.
      </>
    ),
  },
  {
    question: 'Who should apply?',
    answer: (
      <>
        Founders, operators, and business leaders should apply if they are dealing with unclear growth, weak positioning,{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">broken workflows</Link>, scattered tools, poor visibility,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">inconsistent content</Link>,{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">website confusion</Link>, or execution bottlenecks.
      </>
    ),
  },
  {
    question: 'What should we share in the application?',
    answer: (
      <>
        Share what the business does, what feels unclear or broken, what you have already tried, what systems or assets exist today, and what outcome you want. The more specific the context, the more useful the diagnostic can be.
      </>
    ),
  },
  {
    question: 'Is this a sales call?',
    answer: (
      <>
        The application should lead into a diagnostic conversation, not a generic sales call. The purpose is to understand whether Pressense can help and what kind of engagement would make sense.
      </>
    ),
  },
  {
    question: 'What if we are not ready for a full engagement?',
    answer: (
      <>
        That is fine. Pressense often starts with a diagnostic or focused{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">advisory sprint</Link>{' '}
        before moving into larger execution work. The first step is clarity, not a full commitment. You can also{' '}
        <Link href="/playbooks" className="text-primary hover:underline">read the playbooks</Link>{' '}
        to understand common patterns.
      </>
    ),
  },
]

export function ApplyFAQSection() {
  return (
    <FAQSection
      headline="Questions before applying"
      faqs={applyFAQs}
    />
  )
}
