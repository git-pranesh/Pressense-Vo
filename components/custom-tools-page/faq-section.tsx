import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const customToolsFAQs = [
  {
    question: 'What is a custom internal tool?',
    answer:
      'A custom internal tool is software built specifically for the way your business operates, not adapted from a generic SaaS product. It replaces the spreadsheets, manual handoffs, and disconnected tools your team has outgrown. Common examples include operations dashboards, client onboarding portals, approval workflow systems, inventory trackers, internal request tools, and reporting tools built around how your business actually runs. You own the code, you control the roadmap, and there is no per-seat licensing cost that grows with your team.',
  },
  {
    question: 'When is building a custom tool worth it instead of using SaaS?',
    answer: (
      <>
        A custom tool is worth building when the workflow is repeated, important, painful, and not handled well by current tools. The decision point is usually one of four situations: the off-the-shelf SaaS requires so much configuration that you are essentially building in it anyway; the workflow involves multiple steps and multiple people that no single SaaS tool covers; the team has accumulated four or more tools that each handle one part of a workflow that should be unified; or per-seat SaaS pricing has become more expensive than a one-time build. See{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM and ERP systems</Link>{' '}
        for the data and operations side of this decision.
      </>
    ),
  },
  {
    question: 'How long does it take to build a custom internal tool?',
    answer:
      'Timeline depends on scope. A single-workflow tool (one approval system, one data entry portal) takes 2 to 3 weeks. A multi-workflow tool with integrations and role-based access takes 4 to 6 weeks. A full business-systems rebuild spanning CRM, reporting, and multiple departments takes 6 to 12 weeks. The workflow mapping and specification phase takes one week and happens before any code is written.',
  },
  {
    question: 'How much does a custom internal tool cost?',
    answer:
      'Custom internal tool builds start from $3,000 for a single-workflow tool with a defined scope. Complex multi-workflow tools with multiple integrations typically run from $8,000 to $20,000 depending on scope. All builds include workflow mapping, specification, build, deployment, team training, and source code handover. Ongoing developer support and improvements are available on a monthly retainer from $800 per month.',
  },
  {
    question: 'Who owns the code after the tool is built?',
    answer:
      'You do. Pressense builds the tool and hands over the source code, documentation, and deployment at the end of the engagement. There is no vendor lock-in, no licensing fee, and no ongoing dependency on Pressense unless you choose the ongoing support retainer. You can take the code to any developer. You can host it anywhere.',
  },
  {
    question: 'Do I need a custom tool or should I just hire an operations person?',
    answer:
      'An operations hire maintains and runs systems that already exist. A custom tool build creates the systems your future ops hire will run — and documents everything so you are not dependent on any one person. Most clients build the tool first, then hire operations support to run it, not the other way around.',
  },
  {
    question: 'What is the difference between RPA and custom workflow automation?',
    answer:
      'RPA (robotic process automation) automates a single repetitive task by mimicking clicks and keystrokes in existing software. A custom internal tool replaces the underlying workflow itself — new interface, new data model, no fragile click-simulation. RPA is faster to set up for one narrow task; a custom tool is the right call when the workflow spans multiple steps, multiple people, or needs to scale.',
  },
  {
    question: 'What happens after the tool launches?',
    answer: (
      <>
        Your dedicated Pressense developer stays available for fixes, improvements, and new workflows after launch. Support is provided through a direct channel with the developer who built the tool, not a helpdesk ticket system. Most clients start with a defined build engagement and move to a monthly retainer for ongoing iteration. The tool is a living system, not a one-time project.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">Start with a workflow diagnostic</Link>.
      </>
    ),
  },
]

export function CustomToolsFAQSection() {
  return <FAQSection headline="Questions about custom internal tools" faqs={customToolsFAQs} />
}
