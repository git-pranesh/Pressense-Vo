import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const howWeWorkFAQs = [
  {
    question: 'How does Pressense usually start an engagement?',
    answer: (
      <>
        Pressense usually starts with a{' '}
        <Link href="/contact" className="text-primary hover:underline">diagnostic</Link>. We study the business, market, customer, offer, website, content, workflows, systems, and execution gaps to understand what is actually blocking progress before recommending what to build or change.
      </>
    ),
  },
  {
    question: 'What does Diagnose, Strategize, Build, and Scale mean?',
    answer: (
      <>
        Diagnose means finding the real constraint. Strategize means deciding what should happen next. Build means creating the system, asset, workflow, or roadmap required. Scale means improving adoption, consistency, and repeatability once the first layer works.
      </>
    ),
  },
  {
    question: 'Do you always move from strategy into execution?',
    answer: (
      <>
        Not always. Sometimes the right outcome is a decision, roadmap, or sharper direction. Other times it becomes a{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">website</Link>,{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content system</Link>,{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM</Link>,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">internal tool</Link>,{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI workflow</Link>, or operating process.
      </>
    ),
  },
  {
    question: 'Why not start directly with implementation?',
    answer: (
      <>
        Implementation without diagnosis can create more activity without solving the real problem. A business may think it needs a website, CRM, content, or automation when the real issue is positioning, ownership,{' '}
        <Link href="/custom-software-internal-tools" className="text-primary hover:underline">workflow design</Link>, or offer clarity.
      </>
    ),
  },
  {
    question: 'How do you decide what to build first?',
    answer: (
      <>
        Pressense prioritizes the constraint that creates the most friction or unlocks the next stage of growth. That may be a{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">strategic decision</Link>, one workflow, one website section, one{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM process</Link>, or one communication system.
      </>
    ),
  },
  {
    question: 'Can you work with existing tools and teams?',
    answer: (
      <>
        Yes. Pressense does not require everything to be replaced. We can work with existing tools, teams, vendors, and workflows if they are useful. The goal is clarity and execution, not unnecessary change.
      </>
    ),
  },
]

export function HowWeWorkFAQSection() {
  return (
    <FAQSection
      headline="Questions about the Pressense process"
      faqs={howWeWorkFAQs}
    />
  )
}
