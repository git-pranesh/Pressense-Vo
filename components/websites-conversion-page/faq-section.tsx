import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const websitesFAQs = [
  {
    question: 'What makes a website a conversion system rather than just a website?',
    answer:
      'A conversion system is a website built around buyer decisions, not around the business\'s internal structure. Every page has a defined job at a specific stage of the buyer journey. Every section answers a specific question a buyer at that stage would be asking. The outcome is not just a polished online presence — it is a site that moves visitors toward a defined action and filters out buyers who are not the right fit before they book a call.',
  },
  {
    question: 'How is this different from hiring a web design agency?',
    answer: (
      <>
        A web design agency typically starts with visual direction and builds pages to a brief. Pressense starts with positioning: who the buyer is, what they need to believe before they buy, and where the current site fails to establish that. Design is applied after messaging and structure are validated. The result is a site that could not belong to a different company, because it reflects specific positioning rather than a template.{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">See our advisory and strategy work</Link>.
      </>
    ),
  },
  {
    question: 'When should a business rebuild its website?',
    answer:
      'A rebuild makes sense when the gap between what the business actually does and what the site communicates has become a sales obstacle. Common triggers include: the offer has evolved but the site still reflects the old version; sales discovery calls explain value the homepage never mentions; inbound leads are consistently the wrong fit; the business is entering a new market; or the site has not generated a qualified lead in months despite adequate traffic.',
  },
  {
    question: 'How long does a website build take?',
    answer:
      'A full positioning-led website build takes 4 to 8 weeks from kick-off to launch. The first week is the positioning and messaging sprint. Weeks two and three cover page architecture and copy. Weeks four through eight are design and development with review cycles. Single landing pages for campaigns or diagnostics can be built and launched within one to two weeks once positioning is established.',
  },
  {
    question: 'Does the website need to rank on Google for it to work?',
    answer: (
      <>
        No. A well-structured website generates value before organic search traffic arrives. Warm referrals, outbound sequences, paid campaigns, and direct sharing all drive traffic to a site. Conversion structure determines whether that traffic turns into qualified leads. SEO compounds the results over 6 to 12 months but is not a prerequisite for the site to work on day one.{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">Content authority systems</Link>{' '}
        are the right way to build organic search traffic alongside a strong website.
      </>
    ),
  },
  {
    question: 'When would Pressense recommend not starting with a website rebuild?',
    answer: (
      <>
        If the offer is not yet clearly defined, or if the ideal customer profile is still being tested, a website rebuild will lock in positioning that may need to change within six months. In that case, a{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">positioning and strategy sprint</Link>{' '}
        is a better starting point. A website is only as strong as the clarity behind it.{' '}
        <Link href="/contact" className="text-primary hover:underline">Book a free diagnostic</Link>.
      </>
    ),
  },
]

export function WebsitesFAQSection() {
  return <FAQSection headline="Questions about websites and conversion systems" faqs={websitesFAQs} />
}
