import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const workflowFAQs = [
  {
    question: 'What is workflow automation consulting?',
    answer:
      'Workflow automation consulting is the practice of auditing your business processes, identifying which tasks are repetitive and rules-based, and building automated systems to replace them. A consultant maps your current manual workflows, selects the right automation tools for your tech stack, builds the integrations, and trains your team on how to manage them. The result is a documented, maintained set of systems that run without human input.',
  },
  {
    question: 'How much does workflow automation consulting cost?',
    answer:
      'For small businesses and scaling startups, scoped workflow automation builds typically range from $3,000 to $15,000 depending on the number of workflows and integration complexity. Multi-system implementations with custom API development can range from $15,000 to $50,000 or more. Pressense offers project engagements from $3,000 and ongoing retainer options from $2,500 per month for teams that want continuous workflow development. See our packages page for current pricing.',
  },
  {
    question: 'How long does workflow automation take to implement?',
    answer:
      'A standard workflow automation engagement runs five weeks from audit to live automations. Week one covers the process audit and priority mapping. Week two produces the architecture document and build plan. Weeks three and four are the build and test phase. Week five is training and handover, followed by 30 days of monitoring. Simple single-workflow builds can be completed in one to two weeks. Complex multi-system integrations may take six to eight weeks.',
  },
  {
    question: 'What tools do workflow automation consultants use?',
    answer:
      'The most common tools are Make (formerly Integromat), Zapier, n8n, and custom API integrations built in Python or Node.js. The right choice depends on your existing tech stack, your volume requirements, and your budget for tool subscriptions. Make and n8n are preferred for complex multi-step workflows. Zapier suits simpler point-to-point connections. Custom API code is used when no off-the-shelf connector exists. We do not mandate a specific tool.',
  },
  {
    question: 'What is the difference between RPA and workflow automation?',
    answer:
      'Robotic Process Automation (RPA) mimics a human using a graphical interface, typically on legacy enterprise systems with no API access. Workflow automation uses APIs and native integrations to connect cloud-based tools directly. RPA is slower, more brittle, and typically used in large enterprise contexts. Workflow automation is faster to build, more reliable, and the right fit for most startups and SMBs running modern SaaS tools. If you use mostly cloud software, workflow automation is almost always the better choice.',
  },
  {
    question: 'Do I need a consultant or can I do workflow automation myself?',
    answer:
      'If you have a technical co-founder or operations manager who understands APIs and automation platforms, you can build simple workflows yourself using Zapier or Make. Most businesses benefit from a consultant when the workflow involves three or more systems, requires custom logic, or when the cost of an error (missed payment, lost lead, failed onboarding) is high. A consultant also brings process analysis skills that most founders lack, which often reveals higher-impact automation opportunities than the ones originally identified.',
  },
  {
    question: 'Do you work with businesses outside the US?',
    answer:
      'Yes. Pressense works with B2B SaaS companies, agencies, and founder-led businesses across India, the UK, Australia, the US, and the rest of the world. All engagements are delivered remotely. Our team operates across time zones, and we have worked with clients on every continent except Antarctica. If you are based in India and looking for workflow automation consulting, we have specific experience with Indian SaaS and services companies scaling their operations.',
  },
]

export function GTMFAQSection() {
  return <FAQSection headline="Questions about workflow automation consulting" faqs={workflowFAQs} />
}
