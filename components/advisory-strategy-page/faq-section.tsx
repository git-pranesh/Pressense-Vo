import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const advisoryFAQs = [
  {
    question: 'What is strategic advisory?',
    answer: (
      <>
        Strategic advisory helps founders and teams identify what is blocking growth before they invest in more marketing, hiring, tools, content, or execution. It focuses on better decisions, sharper priorities, clearer positioning, and a practical roadmap for the next stage.
      </>
    ),
  },
  {
    question: 'How is Pressense advisory different from traditional consulting?',
    answer: (
      <>
        Pressense advisory is not built around theory or slide decks alone. It connects strategy with execution. The work may lead into{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">websites</Link>,{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content systems</Link>,{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM systems</Link>,{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI workflows</Link>, operating processes, or clearer decision frameworks.
      </>
    ),
  },
  {
    question: 'When does a business need advisory?',
    answer: (
      <>
        Advisory is useful when growth feels active but unclear, the founder is carrying too many decisions, revenue is leaking, the team lacks direction, the business is entering a new market, or execution is happening without a clear strategy.
      </>
    ),
  },
  {
    question: 'What does Pressense help think through?',
    answer: (
      <>
        Pressense helps think through business model clarity, GTM direction, customer understanding, revenue leakage, market entry, team structure, offer packaging, pricing, execution priorities, and what not to do next. See{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">Diagnose, Strategize, Build, and Scale</Link>.
      </>
    ),
  },
  {
    question: 'What is the output of advisory?',
    answer: (
      <>
        The output may be a diagnostic, strategic roadmap, execution plan, decision framework, offer direction, market-entry plan, systems roadmap, or a clear scope for implementation. The goal is to make execution sharper.
      </>
    ),
  },
  {
    question: 'Can advisory continue after implementation starts?',
    answer: (
      <>
        Yes. Some clients need ongoing strategic support while implementation happens. Pressense can help review decisions, sharpen priorities, support execution, and ensure the work stays connected to the real business constraint.{' '}
        <Link href="/apply" className="text-primary hover:underline">Start with a diagnostic</Link>.
      </>
    ),
  },
]

export function AdvisoryFAQSection() {
  return (
    <FAQSection
      headline="Questions about strategic advisory"
      faqs={advisoryFAQs}
    />
  )
}
