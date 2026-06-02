import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const gtmFAQs = [
  { question: 'What types of workflows can be automated?', answer: 'Data movement between systems, email notifications, approval routing, document generation, report scheduling, customer onboarding checklists, lead qualification, and routine follow-ups. Basically anything repetitive and rules-based.' },
  { question: 'How long does workflow automation take to build?', answer: 'Simple workflows: 1-2 weeks. Complex multi-step workflows with 3+ integrations: 3-4 weeks. We prioritize quick wins first so you see ROI fast.' },
  { question: 'Will I need to change my existing tools?', answer: 'No. We build automation that connects your existing systems (Salesforce, HubSpot, Stripe, etc.). We use Make, Zapier, or custom APIs depending on your needs.' },
  { question: 'What happens if something breaks?', answer: (<>We include 30 days of support and monitoring post-launch. Most clients keep us on retainer for ongoing adjustments and new workflow builds. <Link href="/diagnostic" className="text-primary hover:underline">Ask about support packages</Link>.</>) },
  { question: 'How much does workflow automation cost?', answer: (<>Projects typically range from $5K-$30K depending on complexity. Tool subscriptions add $20-$200/month. See <Link href="/packages" className="text-primary hover:underline">pricing</Link> for details.</>) },
  { question: 'Will automation eliminate my team&apos;s jobs?', answer: 'No. It eliminates tasks, not people. Your team shifts from manual work to analysis, strategy, and exception handling. Most clients use the freed-up time for higher-value work.' },
]

export function GTMFAQSection() {
  return <FAQSection headline="Questions about workflow automation" faqs={gtmFAQs} />
}
