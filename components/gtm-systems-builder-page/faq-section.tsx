import { FAQSection } from '@/components/faq-section'

const faqs = [
  {
    question: 'What is a GTM systems builder?',
    answer:
      'A GTM systems builder designs and builds the go-to-market infrastructure for founder-led B2B SaaS companies: the strategy that defines the ICP and positioning, the content system that generates organic pipeline, and the internal tools that remove operational bottlenecks. It is not a consultant who advises, a content agency that writes, or a dev shop that builds. It is an operator who combines all three to build a running system.',
  },
  {
    question: 'How is this different from hiring a fractional CMO?',
    answer:
      'A fractional CMO advises on strategy and manages an existing marketing team. They are the right hire when you have a team and need leadership for it. Pressense is for founders who do not yet have a marketing team and need to build the system before hiring into it. The output is a working content programme and operational infrastructure, not management of existing resources.',
  },
  {
    question: 'What does a GTM systems builder cost?',
    answer:
      'Pricing depends on the scope of the engagement. A GTM strategy and content system design starts from $8,000 for a fixed deliverable. A running content programme with monthly production is a retainer from $3,500 per month. Internal tools are fixed-price based on scope from the diagnostic session. Every engagement starts with a diagnostic session that defines the problem and the fixed-price cost before any work begins.',
  },
  {
    question: 'Can you work across all three tracks at once?',
    answer:
      'Yes, and for many founders it makes sense to do so. The GTM strategy informs the content system keyword and topic priorities. The content system generates the organic leads that the internal tools help track and convert. Running all three simultaneously means the outputs compound faster. In practice, most engagements start with either the GTM strategy or the content system, and add internal tools once the growth motion is defined.',
  },
  {
    question: 'How long does it take to see results from a GTM content system?',
    answer:
      'Bottom-of-funnel content like comparison pages and use-case pages can show organic ranking movement within sixty to ninety days. A full content programme generating consistent organic pipeline takes six to twelve months to compound meaningfully. Most founders see measurable impact across all three tracks within six months of the system going live.',
  },
  {
    question: 'What kind of B2B SaaS companies do you work with?',
    answer:
      'Pressense works with founder-led B2B SaaS companies typically between seed and Series A: past product-market-fit, generating early revenue, and facing the transition from founder-led growth to system-led growth. Enterprise SaaS companies with large existing teams are not the right fit.',
  },
]

export function GtmSystemsBuilderFaqSection() {
  return <FAQSection headline="GTM systems builder questions" faqs={faqs} />
}
