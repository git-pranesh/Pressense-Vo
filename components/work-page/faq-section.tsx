import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const workFAQs = [
  {
    question: 'What kind of work does Pressense showcase?',
    answer: (
      <>
        Pressense work shows how{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">strategic clarity</Link>{' '}
        turns into execution:{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">websites</Link>,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content systems</Link>,{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM workflows</Link>, AI workflows, operating systems, and advisory-led roadmaps. The focus is on the business problem, not just the deliverable.
      </>
    ),
  },
  {
    question: 'How should a Pressense case study be structured?',
    answer: (
      <>
        A strong case study explains the context, constraint, diagnosis, strategic decision, what was built, and what changed. It avoids overclaiming and focuses on the practical business problem that was solved.
      </>
    ),
  },
  {
    question: 'Why do you focus on the problem before the output?',
    answer: (
      <>
        The same output can solve different problems depending on context. A website may fix positioning. A CRM may fix visibility. An internal tool may fix handoffs. Pressense frames work around the constraint because that is what makes the execution meaningful.
      </>
    ),
  },
  {
    question: 'Can Pressense work be anonymized?',
    answer: (
      <>
        Yes. If a client relationship or business problem is sensitive, work can be presented as an anonymized pattern. The important thing is to show the thinking, constraint, and system built without exposing confidential details.
      </>
    ),
  },
  {
    question: 'What should buyers look for in Pressense work?',
    answer: (
      <>
        Buyers should look for evidence of judgment: whether the problem was diagnosed properly, whether the solution matched the stage of the business, and whether the work created more clarity, visibility, consistency, or execution leverage. Ready to{' '}
        <Link href="/apply" className="text-primary hover:underline">discuss a similar problem</Link>?
      </>
    ),
  },
]

export function WorkFAQSection() {
  return (
    <FAQSection
      headline="Questions about Pressense work and case examples"
      faqs={workFAQs}
    />
  )
}
