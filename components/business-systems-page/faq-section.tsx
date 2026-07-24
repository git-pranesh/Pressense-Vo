import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const systemsFAQs = [
  {
    question: 'What does a business systems consultant do?',
    answer: (
      <>
        A business systems consultant audits your operations, identifies where processes break down, and builds the systems that fix them. This includes designing SOPs, connecting your toolstack, automating manual workflows, setting up reporting, and training your team. Unlike an IT consultant who focuses on software procurement, a business systems consultant owns the full operational layer: process, tooling, documentation, and team adoption. Most engagements run 60 to 90 days from audit to deployed systems.
      </>
    ),
  },
  {
    question: 'How much does a business systems consultant cost?',
    answer: (
      <>
        Pricing depends on scope and engagement structure. Business systems consulting at Pressense starts from $1,500 for a consulting or advisory engagement. Full 90-day retainers covering audit, design, build, and handover are scoped after the diagnostic. Enterprise-scale or multi-department transformations are scoped separately. See our{' '}
        <Link href="/contact" className="text-primary hover:underline">
          free diagnostic
        </Link>{' '}
        for a no-obligation scope assessment.
      </>
    ),
  },
  {
    question: 'What is the difference between a business systems consultant and a systems analyst?',
    answer:
      'A systems analyst typically works inside a company, supporting and documenting existing IT systems. A business systems consultant is an external expert who diagnoses operational problems, designs new systems, and implements them end-to-end. The key difference is ownership: an analyst maintains, a consultant transforms. We act as the builder your business needs when internal bandwidth or expertise is not there.',
  },
  {
    question: 'How long does a business systems consulting engagement take?',
    answer:
      'Most engagements follow a 90-day structure: one week for the audit, one week for architecture and design, two to three weeks to build core systems, and then deployment, training, and four weeks of post-launch support. Larger engagements covering multiple departments or complex integrations can run four to six months. We always start with the highest-impact systems first so you see results before the engagement is complete.',
  },
  {
    question: 'Do I need a business systems consultant or an operations hire?',
    answer:
      'The short answer: hire a consultant to build the systems, then hire an operator to run them. A new operations hire cannot build the systems they will manage without a clear brief and existing infrastructure. We create that infrastructure. Most of our clients hire an ops or systems manager within six months of our engagement because they finally have something for that person to maintain.',
  },
  {
    question: 'What tools do you use?',
    answer:
      'We are tool-agnostic. Depending on your stack and stage, we work with Notion, HubSpot, Pipedrive, Monday, Asana, Airtable, Make, Zapier, and custom internal tools. We do not push particular platforms. We evaluate your existing toolstack first and make it work before recommending replacements. Most companies have the right tools and the wrong implementation.',
  },
  {
    question: 'Do you work with companies outside the US?',
    answer: (
      <>
        Yes. Pressense is based in India and works with B2B SaaS companies, agencies, and service businesses across the US, UK, Australia, and globally. All work is done remotely. Our clients in India and the Asia-Pacific region benefit from the same methodology as our US clients. Time zone overlap is managed during onboarding.{' '}
        <Link href="/contact" className="text-primary hover:underline">
          Book a diagnostic call
        </Link>{' '}
        to discuss your situation.
      </>
    ),
  },
]

export function SystemsFAQSection() {
  return <FAQSection headline="Questions about business systems consulting" faqs={systemsFAQs} />
}
