import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const cmoFAQs = [
  { question: 'What counts as a workflow worth automating?', answer: 'Any manual task that happens weekly and takes more than 30 minutes. Email follow-ups, data entry, report generation, customer onboarding checklists, approval processes—these are common wins. Run a diagnostic to identify yours.' },
  { question: 'How long does it take to build AI automation?', answer: 'Most workflows are automated within 1-2 weeks, including setup and team training. Longer timelines usually mean waiting on integrations or access approvals, not implementation.' },
  { question: 'Will this replace people on my team?', answer: 'No. Automation replaces tasks, not people. Your team shifts from manual work to decision-making and higher-leverage projects. Most clients hire fewer people but train them on more valuable work.' },
  { question: 'What tools do you use?', answer: 'We build with AI APIs, no-code automation platforms, and your existing software stack. The tools depend on your needs—we optimize for reliability and cost, not vendor lock-in.' },
  { question: 'How much does AI automation cost?', answer: (<>Typical projects range from $3K-$20K depending on complexity. Tool subscriptions add $50-$500/month. See <Link href="/packages" className="text-primary hover:underline">pricing</Link> for details.</>) },
  { question: 'What if automation breaks or my workflow changes?', answer: (<>We handle ongoing support and adjustments. Most clients keep us for maintenance and optimization. <Link href="/diagnostic" className="text-primary hover:underline">Talk to us about ongoing support</Link>.</>) },
]

export function FractionalCMOFAQSection() {
  return <FAQSection headline="Questions about AI automation" faqs={cmoFAQs} />
}
