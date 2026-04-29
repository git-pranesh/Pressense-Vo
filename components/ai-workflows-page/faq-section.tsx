import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const aiFAQs = [
  {
    question: 'What are AI workflows?',
    answer: (
      <>
        AI workflows are structured processes that use AI where it helps with repeated work, research, drafting, summarization, reporting, follow-up, knowledge retrieval, or operational coordination. The workflow defines the input, owner, review layer, and output.
      </>
    ),
  },
  {
    question: 'How is this different from AI implementation?',
    answer: (
      <>
        AI implementation often starts with tools. Pressense starts with the workflow. The goal is not to use AI everywhere, but to identify where AI can reduce manual work, improve consistency, or support execution without creating more noise.
      </>
    ),
  },
  {
    question: 'When is AI automation worth using?',
    answer: (
      <>
        AI automation is worth using when a task repeats often, inputs and outputs can be defined, there is a clear owner, and speed or consistency is a real bottleneck. It should support a workflow that already matters to the business.
      </>
    ),
  },
  {
    question: 'What kinds of AI workflows can Pressense help build?',
    answer: (
      <>
        Pressense can help with AI-assisted{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content workflows</Link>, sales follow-up systems, internal knowledge systems, reporting automation, customer communication workflows, onboarding support, research workflows, and operations automation.
      </>
    ),
  },
  {
    question: 'Why do AI projects fail?',
    answer: (
      <>
        AI projects often fail because teams start with tools before defining the workflow. Prompts stay scattered, ownership is unclear, review standards are missing, and outputs do not connect to the next step in the business process. See{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">workflow strategy before automation</Link>.
      </>
    ),
  },
  {
    question: 'When should a business avoid AI automation?',
    answer: (
      <>
        AI automation should be avoided when the process is unclear, the work requires high judgment without review, no one owns the workflow, the task is too variable, or a checklist, template, or simple process fix would solve the problem first.
      </>
    ),
  },
  {
    question: 'Can AI workflows connect with internal tools or CRM systems?',
    answer: (
      <>
        Yes. AI workflows often work best when connected to{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tools</Link>,{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM systems</Link>, reporting dashboards, content systems, or operational processes.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">Start with one workflow</Link>.
      </>
    ),
  },
]

export function AIWorkflowsFAQSection() {
  return (
    <FAQSection
      headline="Questions about AI workflows and automation"
      faqs={aiFAQs}
    />
  )
}
