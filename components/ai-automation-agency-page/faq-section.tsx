import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const cmoFAQs = [
  {
    question: 'What does an AI automation agency do?',
    answer: 'An AI automation agency diagnoses broken or manual workflows in your business, then builds custom systems that let AI handle repetitive tasks automatically. This includes connecting your existing tools, building AI agents that respond and take actions, automating sales follow-up, generating reports, processing documents, and handling client communications. The goal is to reclaim hours your team currently spends on work a machine can do faster and more consistently.',
  },
  {
    question: 'Who are the big 4 AI agents?',
    answer: 'There is no single established "Big 4" of AI agents, but the enterprise market is led by platforms including Salesforce Agentforce, Harvey (for legal workflows), Sierra (for customer experience), and Automation Anywhere. These are large-scale platforms built for enterprise environments. For founder-led businesses, the more relevant question is which agent framework fits your stack and budget. We build on OpenAI, Anthropic, and open-source models depending on what gives the best results for your specific workflows.',
  },
  {
    question: 'Is an AI automation agency profitable?',
    answer: 'Yes. The ROI on automation is typically measured in weeks, not years. Most of our clients reclaim 15 to 20 hours per week from repetitive tasks across their team. At an average fully-loaded hourly rate of $50 to $150 per team member, that translates to $3,000 to $12,000 per month in recovered capacity. AI automation agency engagements start from $2,000 — most clients recover that cost within the first month.',
  },
  {
    question: 'How long does it take to build AI automation?',
    answer: 'Most workflows are automated within two to four weeks from diagnostic to delivery. The diagnostic itself takes one week. Implementation depends on how many systems need connecting and how complex the logic is. Simpler workflows like CRM update automation or weekly report generation can be live in five to seven days. Multi-system integrations with custom AI agents typically take three to four weeks.',
  },
  {
    question: 'Will AI automation replace people on my team?',
    answer: 'No. Automation replaces tasks, not people. The work your team currently does manually shifts to higher-leverage activities: strategy, client relationships, product decisions, and growth work. Most clients use automation to avoid hiring additional operations staff as they scale, rather than to reduce headcount. The outcome is a leaner team doing more valuable work.',
  },
  {
    question: 'What if the automation breaks or our workflow changes?',
    answer: (<>We handle ongoing support and adjustments. Workflows change as businesses grow and we build with that in mind. Most clients keep a retainer for maintenance, monitoring, and iterative improvements. <Link href="/diagnostic" className="text-primary hover:underline">Talk to us about ongoing support</Link>.</>),
  },
]

export function FractionalCMOFAQSection() {
  return <FAQSection headline="Questions about AI automation" faqs={cmoFAQs} />
}
