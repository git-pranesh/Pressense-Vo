import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const crmErpFAQs = [
  {
    question: 'What is the difference between a CRM and an ERP?',
    answer:
      'A CRM (Customer Relationship Management system) manages the front end of the business: leads, contacts, pipeline stages, sales activity, and customer communication. An ERP (Enterprise Resource Planning system) manages the back end: finance, inventory, procurement, operations, and reporting. Most growing businesses start with a CRM and add operational systems as they scale. The point at which a CRM alone is not enough is when finance, delivery, inventory, or operations need to be tracked alongside sales in a connected way.',
  },
  {
    question: 'When does a small business need a CRM?',
    answer:
      'A small business needs a CRM when leads are being tracked in spreadsheets or in someone\'s head, when follow-up is inconsistent, when pipeline visibility is unclear, when handoffs between sales and delivery break regularly, or when leadership cannot see deal status without asking the team. A CRM does not need to be complex. It needs to match how the business actually sells and serve as a single source of truth for all customer-related activity.',
  },
  {
    question: 'What is an ERP-lite system and who needs one?',
    answer:
      'An ERP-lite system is a lightweight operational layer built for businesses that have grown beyond basic CRM and spreadsheet management but are not ready for a full enterprise ERP. It typically covers order management, delivery tracking, vendor management, basic finance workflows, approval chains, and operational reporting. Businesses that need one are typically in the 10 to 100 employee range where operational complexity has outgrown their current tools but a full ERP would be over-engineered.',
  },
  {
    question: 'Should we use HubSpot, Salesforce, or build something custom?',
    answer: (
      <>
        Use a platform like HubSpot or Salesforce when your sales process fits their standard model and your team will actually use it. Build something custom when the workflow is genuinely specific, when multiple systems need to be unified, or when off-the-shelf tools require so much configuration that you are paying for features you do not use. Pressense maps the workflow first and recommends a tool only after understanding how the business actually operates. See{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">custom internal tools</Link>{' '}
        for cases where a bespoke build makes more sense.
      </>
    ),
  },
  {
    question: 'Why do most CRM implementations fail?',
    answer:
      'Most CRM implementations fail because the tool is configured before the process is designed. The team gets a CRM that reflects how the vendor thinks sales works, not how that specific business sells. Fields go unused, stages do not match reality, reporting is meaningless, and adoption drops within six weeks. The fix is to map the actual sales and handoff workflow first, then configure the CRM to reflect it, then train and enforce usage with ownership defined at every stage.',
  },
  {
    question: 'How long does a CRM or ERP implementation take?',
    answer: (
      <>
        A CRM implementation for a business with a defined sales process takes two to four weeks from workflow mapping to live deployment. An ERP-lite system connecting sales, operations, and finance takes six to twelve weeks depending on complexity. The diagnostic sprint to map the workflow and define requirements takes one week and happens before any tool selection or build begins.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">Start with the diagnostic</Link>.
      </>
    ),
  },
]

export function CrmErpFAQSection() {
  return <FAQSection headline="Questions about CRM and ERP systems" faqs={crmErpFAQs} />
}
