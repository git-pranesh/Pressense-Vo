import { FAQSection } from '@/components/faq-section'
import type { FAQItem } from '@/components/faq-section'
import Link from 'next/link'

const faqs: FAQItem[] = [
  {
    question: 'What is custom CRM development?',
    answer: (
      <>
        Custom CRM development is the process of building a sales and customer management system designed specifically for your business workflow, data structure, and integration requirements. Unlike off-the-shelf platforms such as Salesforce or HubSpot, a custom CRM does not require your team to adapt to a generic software model. The data objects, pipeline stages, automation rules, and reporting dashboards are built around how your business actually operates. Most custom CRM builds take six to fourteen weeks from scoping to a live MVP.
      </>
    ),
  },
  {
    question: 'How much does custom CRM development cost?',
    answer: (
      <>
        Custom CRM development starts from $5,000 for a lean MVP for a team of three to ten. Most founder-led businesses land in the $5,000 to $15,000 range. The final cost depends on the number of data objects, integrations, automation rules, and custom reporting required. A three-year comparison with Salesforce or HubSpot Enterprise often shows the custom build is cheaper at scale, because you pay once for the build and own the software outright. All Pressense builds come with a fixed-price estimate after the <Link href="/diagnostic" className="text-primary hover:underline">free diagnostic</Link>.
      </>
    ),
  },
  {
    question: 'How long does it take to build a custom CRM?',
    answer: (
      <>
        A lean CRM MVP takes six to eight weeks from scoping to launch. A full-featured custom CRM for a team of ten to fifty takes ten to fourteen weeks. Timeline depends primarily on the number of integrations and the complexity of the data model. Pressense builds in two-week sprints and delivers working software at the end of each sprint, so you are testing against real data throughout, not waiting for a big launch. There is no extended requirements phase before development starts.
      </>
    ),
  },
  {
    question: 'What is the difference between CRM development and CRM customisation?',
    answer: (
      <>
        CRM customisation means configuring or extending an existing platform like Salesforce or HubSpot using their built-in tools and APIs. CRM development means building a new system from scratch in code you own. Customisation is cheaper upfront and faster to start, but you stay within the constraints of the vendor platform and continue paying licensing fees. Development has a higher upfront cost but no ongoing licensing, no vendor lock-in, and no limits on what you can build. Pressense recommends the right approach after the diagnostic, not before.
      </>
    ),
  },
  {
    question: 'Do small businesses need custom CRM development?',
    answer: (
      <>
        Not always. If your sales process fits a standard contact-deal-company model and your team size is under ten, an off-the-shelf tool like HubSpot Free or Pipedrive is usually the right choice. Custom CRM development makes sense when your process requires non-standard data objects, your licensing costs are scaling unsustainably, your team is spending significant time on manual workarounds, or you need deep integrations with proprietary internal systems. The honest answer comes from a workflow audit, not a product pitch.
      </>
    ),
  },
  {
    question: 'Why does Pressense build custom CRMs on Replit?',
    answer: (
      <>
        Replit produces clean, readable, hosted code that you can modify without a complex local development setup. That matters because most founder-led businesses do not have an in-house engineering team. If you want a new feature in six months, any developer can pick up the codebase. If you want to move hosting, the code travels with you. The alternative, a custom CRM built on a proprietary agency stack, creates a new vendor dependency. Replit removes that dependency and keeps the system genuinely yours.
      </>
    ),
  },
  {
    question: 'Can you migrate our data from Salesforce or HubSpot to a custom CRM?',
    answer: (
      <>
        Yes. Data migration is included in the scoping phase of every build. We export your existing contacts, deals, activity logs, and custom fields, map them to the new data model, and import them before launch. The migration plan is part of the fixed-price build estimate you receive after the diagnostic. We have migrated from Salesforce, HubSpot, Pipedrive, Zoho, and various spreadsheet setups. Contact history, pipeline data, and attachment files are all preserved.
      </>
    ),
  },
]

export function CustomCrmFAQSection() {
  return (
    <FAQSection
      headline="Questions about custom CRM development"
      faqs={faqs}
    />
  )
}
