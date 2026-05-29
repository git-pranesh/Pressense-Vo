import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const systemsFAQs = [
  { question: 'What is a business systems consultant?', answer: 'A business systems consultant helps companies diagnose operational chaos and build systems that make work predictable and scalable. This includes processes, tools, documentation, and the infrastructure that lets businesses grow without founder dependency.' },
  { question: 'What kinds of systems do you build?', answer: (<>Operations systems, CRM and sales processes, project management infrastructure, reporting dashboards, client delivery systems, internal tools, and documentation frameworks. We also connect existing tools so they work together. See our <Link href="/custom-internal-tools" className="text-primary hover:underline">internal tools</Link> and <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM systems</Link> pages.</>) },
  { question: 'How long does a systems engagement take?', answer: 'Most engagements run 6-12 weeks depending on scope. We start with an operations audit to identify the highest-impact systems to build first, then deploy in focused sprints.' },
  { question: 'What tools do you use?', answer: 'We are tool-agnostic. Depending on your needs and stage, we use Notion, Monday, Asana, HubSpot, custom Airtable systems, or purpose-built internal tools. The goal is systems that work, not tools for the sake of tools.' },
  { question: 'How is this different from hiring an operations person?', answer: 'An ops hire maintains systems. A systems consultant builds them. We create the infrastructure that your future ops team will run, documenting everything so you are not dependent on any individual.' },
  { question: 'What if we already have tools that are not working?', answer: (<>Common. Most tool problems are actually process problems. We diagnose why current tools are not adopted and either fix the implementation or recommend alternatives. <Link href="/diagnostic" className="text-primary hover:underline">Start with a diagnostic</Link>.</>) },
]

export function SystemsFAQSection() {
  return <FAQSection headline="Questions about business systems consulting" faqs={systemsFAQs} />
}
