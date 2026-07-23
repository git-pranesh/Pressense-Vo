import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

// All 6 questions match the FAQPage schema in page.tsx exactly
const cmoFAQs = [
  {
    question: 'What are fractional CMO services?',
    answer: (
      <>
        Fractional CMO services are part-time senior marketing leadership engagements where an experienced CMO embeds in your business on a retainer basis. Unlike an agency that handles execution, or a consultant who writes reports, a fractional CMO owns your marketing strategy, manages your team and agencies, and is accountable for pipeline and revenue outcomes. In Western markets, fractional CMO retainers typically run $5,000 to $15,000 per month. Pressense offers the same senior strategic leadership from $1,500 per month — built for founder-led businesses and B2B SaaS companies that need CMO-level thinking without the enterprise price tag.{' '}
        <Link href="/contact" className="text-primary hover:underline">Book a free diagnostic</Link> to see what is right for your stage.
      </>
    ),
  },
  {
    question: 'What does a fractional CMO do?',
    answer: (
      <>
        A fractional CMO defines your ICP and positioning, builds your GTM strategy, aligns marketing with sales, leads your marketing team and agencies, and reports pipeline metrics to the leadership team. At B2B SaaS companies in the 0-to-3 million ARR range, this typically means setting up the demand generation engine, creating the messaging playbook, and building the reporting infrastructure needed to scale. The work is strategic and leadership-oriented, not task execution.
      </>
    ),
  },
  {
    question: 'When should a startup hire a fractional CMO?',
    answer: (
      <>
        Hire a fractional CMO once you have proven product-market fit and a repeatable sales motion. The right signal is that deals are closing but marketing feels scattered, dependent on the founder, or inconsistent. For B2B SaaS, this typically happens between $500K and $5M ARR. Hiring too early, before you have product-market fit, means the CMO is solving a product problem with marketing tactics. A{' '}
        <Link href="/contact" className="text-primary hover:underline">free diagnostic</Link> can confirm whether your business is at the right stage.
      </>
    ),
  },
  {
    question: 'How much do fractional CMO services cost?',
    answer: (
      <>
        Fractional CMO services at Pressense start from $1,500 per month. Full embedded leadership, covering strategy, team management, and system build-out, is scoped together after the diagnostic. This compares to $20,000 to $35,000 per month for a full-time CMO when salary, benefits, and employer costs are included. Most clients reach payback within 60 to 90 days through improved pipeline conversion and reduced wasted ad spend.
      </>
    ),
  },
  {
    question: 'What is the difference between a GTM consultant and a fractional CMO?',
    answer: (
      <>
        A GTM consultant typically delivers a strategy document — positioning, ICP, messaging — and hands it off. A fractional CMO does that same strategic work but stays embedded to run it: hiring, campaign execution, weekly iteration based on real results. If you want a plan, you want strategy consulting. If you want someone accountable for the number going up, that is fractional CMO.
      </>
    ),
  },
  {
    question: 'What is the difference between a CMO and a fractional CMO?',
    answer: (
      <>
        The scope and time commitment differ, but the seniority level and accountability are the same. A full-time CMO works 40+ hours per week and typically costs $250,000 to $400,000 per year all-in. A fractional CMO provides the same strategic leadership at 10 to 20 hours per week, structured around the decisions and deliverables your stage actually requires. For most companies under $15 million ARR, a fractional arrangement delivers more value per dollar because the bottleneck is strategy, not CMO working hours.
      </>
    ),
  },
  {
    question: 'Can a fractional CMO work with our existing marketing team?',
    answer: (
      <>
        Yes. Most fractional CMO engagements include direct management of your existing marketing team, oversight of agencies, and hiring guidance for future roles. The goal is to make your existing resources more effective through clear priorities and better strategy, not to replace the people already doing good execution work. Many clients have a junior marketing hire or two in place and need the fractional CMO to give that team direction and accountability.
      </>
    ),
  },
  {
    question: 'Do you work with businesses outside Australia?',
    answer: (
      <>
        Yes. Pressense works with B2B SaaS companies and founder-led businesses across Australia, New Zealand, the UK, the US, and India. Fractional CMO services are fully remote and structured to work across time zones.
      </>
    ),
  },
]

export function FractionalCMOFAQSection() {
  return <FAQSection headline="Questions about fractional CMO services" faqs={cmoFAQs} />
}
