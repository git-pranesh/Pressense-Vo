import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const crmErpFAQs = [
  {
    question: 'What does Pressense mean by CRM and ERP systems?',
    answer: (
      <>
        Pressense uses CRM and ERP systems to mean the operating layer that tracks leads, customers, delivery, finance, ownership, reporting, follow-up, and workflows. Sometimes this is built inside existing software. Sometimes it requires a custom or ERP-lite system.
      </>
    ),
  },
  {
    question: 'Is this the same as CRM setup?',
    answer: (
      <>
        No. CRM setup is only one part of the work. Pressense focuses on the operating logic: what should be tracked, who owns each stage, what should happen next, what should be automated, and what leadership needs to see. See{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">our workflow approach</Link>.
      </>
    ),
  },
  {
    question: 'When does a business need CRM improvement?',
    answer: (
      <>
        CRM improvement is useful when follow-up is inconsistent, pipeline visibility is unclear, sales data is unreliable, leads are missed, handoffs break, or founders cannot see what is happening without asking the team manually.
      </>
    ),
  },
  {
    question: 'What is an ERP-lite system?',
    answer: (
      <>
        ERP-lite is a lighter operational system for growing businesses that need visibility across orders, vendors, delivery, finance, approvals, inventory, or reporting without implementing a heavy enterprise ERP too early.
      </>
    ),
  },
  {
    question: 'Should we use off-the-shelf CRM or build something custom?',
    answer: (
      <>
        If an existing CRM fits the process, use it. If the business workflow is too specific, fragmented, or operationally complex, a{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">custom CRM layer</Link>{' '}
        or ERP-lite system may work better. Pressense decides this after mapping the workflow.
      </>
    ),
  },
  {
    question: 'Why do CRM systems fail?',
    answer: (
      <>
        CRM systems often fail because the team does not trust the data, ownership is unclear, fields are poorly designed, reporting is not useful, or the tool does not match how{' '}
        <Link href="/what-we-fix" className="text-primary hover:underline">sales and operations</Link>{' '}
        actually work.
      </>
    ),
  },
  {
    question: 'When would Pressense not recommend a new CRM or ERP system?',
    answer: (
      <>
        Pressense may not recommend a new system if the real issue is poor sales discipline, unclear ownership, weak process, lack of data hygiene, or leadership not being ready to enforce usage.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">Start with a system diagnostic</Link>.
      </>
    ),
  },
]

export function CrmErpFAQSection() {
  return (
    <FAQSection
      headline="Questions about CRM and ERP systems"
      faqs={crmErpFAQs}
    />
  )
}
