import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const customToolsFAQs = [
  {
    question: 'What are custom internal tools?',
    answer: (
      <>
        Custom internal tools are purpose-built software applications designed for your organisation&apos;s specific workflows, replacing the manual processes, spreadsheets, and patchwork of off-the-shelf SaaS products that most growing businesses accumulate. Unlike commercial SaaS, you own the code and the data. There is no vendor lock-in and no per-seat pricing that scales with your team. Common examples include approvals, dashboards, lead tracking, onboarding, reporting, field operations, vendor management, inventory, finance, and team coordination — built around how your business actually runs rather than a generic template.
      </>
    ),
  },
  {
    question: 'When is a custom internal tool worth building?',
    answer: (
      <>
        A custom internal tool is worth building when a workflow is repeated, important, painful, and not handled well by current tools. It usually involves multiple people, manual updates, reporting gaps, broken handoffs, or too much founder follow-up.
      </>
    ),
  },
  {
    question: 'Should we build a custom tool or use existing SaaS?',
    answer: (
      <>
        Use SaaS when it fits the workflow well. Consider a custom tool when SaaS is too rigid, too bloated, too expensive, or does not match how your team actually operates. Pressense may advise against building if a simpler tool solves the problem.
      </>
    ),
  },
  {
    question: 'What kinds of workflows can become internal tools?',
    answer: (
      <>
        Examples include lead routing, proposal approvals, invoice tracking, customer onboarding, field reporting, commission tracking, vendor portals, inventory flow, internal requests, delivery dashboards, and founder KPI dashboards.
      </>
    ),
  },
  {
    question: 'Why does Pressense start with workflow diagnosis?',
    answer: (
      <>
        Building before diagnosis can create another unused tool. Pressense first maps the users, data, handoffs, ownership, exceptions, reporting gaps, and business impact so the tool solves the right problem. See{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">how we diagnose workflows</Link>.
      </>
    ),
  },
  {
    question: 'Can an internal tool connect with CRM or AI workflows?',
    answer: (
      <>
        Yes. Internal tools often connect with{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM systems</Link>, ERP-lite systems, reporting dashboards, and{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI workflows</Link>. The goal is not isolated software, but a clearer operating system for the business.
      </>
    ),
  },
  {
    question: 'When would Pressense not build an internal tool?',
    answer: (
      <>
        Pressense may advise against building if the process is unclear, the team is not ready to adopt a new system, the workflow changes too often, a simple SaaS tool is enough, or there is no clear owner for the system.{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">Strategic diagnosis before building</Link>.
      </>
    ),
  },
]

export function CustomToolsFAQSection() {
  return (
    <FAQSection
      headline="Questions about custom internal tools"
      faqs={customToolsFAQs}
    />
  )
}
