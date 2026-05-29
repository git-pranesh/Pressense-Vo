import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const gtmFAQs = [
  { question: 'What is a GTM strategy consultant?', answer: 'A GTM strategy consultant helps businesses diagnose why their go-to-market approach is not converting and builds a strategy that aligns positioning, channels, and sales motion to drive predictable revenue growth.' },
  { question: 'What does GTM strategy include?', answer: (<>GTM strategy covers positioning, channel selection, sales motion design, pricing, messaging, and the systems that connect marketing to sales to revenue. Use our <Link href="/tools/sales-velocity-calculator" className="text-primary hover:underline">sales velocity calculator</Link> to identify where your current GTM is leaking.</>) },
  { question: 'How is this different from marketing consulting?', answer: 'Marketing consulting often focuses on tactics and campaigns. GTM strategy focuses on the overall system: how positioning, channels, and sales work together to convert leads into revenue. It is strategic, not just executional.' },
  { question: 'How long does a GTM engagement take?', answer: 'Most GTM engagements run 4-8 weeks for the initial diagnostic and strategy. Implementation support can extend longer depending on scope. We focus on clarity first, then execution.' },
  { question: 'What if we have already tried GTM consultants?', answer: (<>Most GTM failures happen because the diagnosis was wrong. We start with understanding where your specific GTM breaks down, not generic frameworks. <Link href="/diagnostic" className="text-primary hover:underline">Start with a diagnostic</Link>.</>) },
  { question: 'What results should we expect?', answer: 'Typical outcomes include shorter sales cycles, higher conversion rates, clearer positioning, and more predictable pipeline. The specific impact depends on where your current GTM is broken.' },
]

export function GTMFAQSection() {
  return <FAQSection headline="Questions about GTM strategy consulting" faqs={gtmFAQs} />
}
