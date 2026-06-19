import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const gtmFAQs = [
  {
    question: 'What is a GTM consultant?',
    answer: 'A GTM consultant diagnoses why your go-to-market approach is failing to convert and designs the strategy to fix it. This covers positioning, ICP definition, channel selection, sales motion design, and the revenue operations infrastructure that makes the system measurable. A GTM consultant works across marketing, sales, and customer success, not just one function.',
  },
  {
    question: 'What are the 5 pillars of GTM strategy?',
    answer: 'The five pillars are Ideal Customer Profile, Positioning, Channel Strategy, Sales Enablement, and Revenue Operations. ICP defines exactly who you sell to. Positioning defines why they should choose you. Channel strategy identifies how you reach them at purchase intent. Sales enablement equips your team to close consistently. Revenue operations builds the metrics and feedback loops that make the whole system improvable.',
  },
  {
    question: 'How much does GTM consulting cost?',
    answer: 'GTM consulting at Pressense starts from $2,500 for a project engagement. Full-scope engagements covering strategy through implementation, like the Pressense PRESS Framework, start from $2,500. Ongoing support retainers are scoped together after the initial engagement. Western boutique GTM firms charge $5,000 to $25,000 for comparable work.',
  },
  {
    question: 'What is the difference between a GTM consultant and a fractional CMO?',
    answer: 'A GTM consultant focuses specifically on go-to-market strategy design and the revenue system. A fractional CMO takes broader operational ownership of the marketing function, including team management, budget ownership, and campaign execution. GTM consulting is typically project-scoped. A fractional CMO is an ongoing leadership role. Many companies start with GTM consulting and move to a fractional CMO once strategy is clear.',
  },
  {
    question: 'How long does a GTM engagement take?',
    answer: 'Most GTM strategy engagements take four to eight weeks from diagnostic to a complete, implemented strategy. The Pressense PRESS Framework is structured across eight weeks with a named deliverable in each phase. Implementation support and team training extend through the eighth week, followed by a 30-day review to catch gaps before full handover.',
  },
  {
    question: 'Do you work with businesses outside the US?',
    answer: 'Yes. Pressense works with B2B SaaS and scaling businesses across India, the UK, the US, and globally. The PRESS Framework applies regardless of geography. We have particular depth in the India B2B SaaS market, where GTM challenges around positioning for both domestic and US enterprise buyers are common.',
  },
  {
    question: 'When should you hire a GTM consultant?',
    answer: (<>Most companies benefit most from GTM consulting at three moments: when growth stalls after initial traction, when entering a new market or segment, or when a funding round creates pressure to scale revenue faster than the current GTM can support. If you are not sure which applies, <Link href="/diagnostic" className="text-primary hover:underline">start with a diagnostic</Link> and we will tell you honestly.</>),
  },
]

export function GTMFAQSection() {
  return <FAQSection headline="Questions about GTM strategy consulting" faqs={gtmFAQs} />
}
