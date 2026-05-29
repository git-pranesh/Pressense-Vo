import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const cmoFAQs = [
  { question: 'What is a fractional CMO?', answer: 'A fractional CMO is a senior marketing executive who works with your business part-time, providing strategic leadership without the cost of a full-time hire. You get experienced GTM direction on a schedule that matches your needs.' },
  { question: 'How is a fractional CMO different from a marketing agency?', answer: 'Agencies execute campaigns. A fractional CMO provides strategy, direction, and accountability. They work as part of your leadership team, ensuring marketing connects to business outcomes rather than just producing activity.' },
  { question: 'How much time does a fractional CMO spend with a client?', answer: 'Typical engagements range from 2-10 hours per week depending on scope and stage. The goal is strategic leverage, not task execution. You get senior attention when it matters most.' },
  { question: 'What does a fractional CMO cost?', answer: (<>Fractional CMO engagements typically range from $5K-$15K per month, compared to $250K-$400K annually for a full-time CMO. See <Link href="/packages" className="text-primary hover:underline">packages</Link> for details.</>) },
  { question: 'How long are typical engagements?', answer: 'Most clients start with a 3-month engagement to establish strategy and systems, then continue with ongoing advisory. Some projects are shorter and focused on a specific GTM initiative.' },
  { question: 'Can you work with our existing marketing team?', answer: (<>Yes. Fractional CMO services often include team direction and development. We help your existing marketers execute more effectively by providing the strategic clarity they need. <Link href="/diagnostic" className="text-primary hover:underline">Start with a diagnostic</Link>.</>) },
]

export function FractionalCMOFAQSection() {
  return <FAQSection headline="Questions about fractional CMO services" faqs={cmoFAQs} />
}
