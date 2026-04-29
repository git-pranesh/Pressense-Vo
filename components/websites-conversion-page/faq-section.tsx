import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const websitesFAQs = [
  {
    question: 'What is a website and conversion system?',
    answer: (
      <>
        A website and conversion system is a site built to help buyers understand, trust, and decide. It includes{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">positioning</Link>, messaging, page structure, proof, buyer journey, CTAs, service pages, landing pages, and{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content pathways</Link>.
      </>
    ),
  },
  {
    question: 'How is this different from web design?',
    answer: (
      <>
        Web design focuses mainly on how the site looks. Pressense focuses on what the site needs to communicate, how buyers make decisions, what pages are needed, and how the website supports sales, trust, content, SEO, and conversion.
      </>
    ),
  },
  {
    question: 'When should a business rebuild its website?',
    answer: (
      <>
        A rebuild is useful when the business has outgrown its positioning, sales calls explain the offer better than the website, traffic is not converting, the product is hard to understand, or the site does not support referrals, outbound, SEO, or content.
      </>
    ),
  },
  {
    question: 'Why do polished websites still fail?',
    answer: (
      <>
        A polished website can still fail if buyers leave confused. Common issues include generic messaging, unclear offer structure, weak proof, poor page flow, missing qualification, and no clear next step. See{' '}
        <Link href="/what-we-fix" className="text-primary hover:underline">the problems we fix before redesigning</Link>.
      </>
    ),
  },
  {
    question: 'What should a strong website clarify?',
    answer: (
      <>
        A strong website should clarify the{' '}
        <Link href="/what-we-fix" className="text-primary hover:underline">buyer&apos;s problem</Link>, who the business is for, why the offer matters, how the business is different, what proof exists, what action to take next, and what happens after that action.
      </>
    ),
  },
  {
    question: 'Can Pressense build landing pages too?',
    answer: (
      <>
        Yes. Pressense can build focused landing pages for diagnostics, campaigns, offers, markets, products, services, or buyer segments. Landing pages work best when the positioning and conversion goal are clear. Read{' '}
        <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link>.
      </>
    ),
  },
  {
    question: 'When would Pressense not recommend starting with a website?',
    answer: (
      <>
        Pressense may not recommend starting with a website if the offer is unclear, the ideal buyer is undefined, the business model needs strategic work first, or a focused messaging sprint would solve the immediate problem.{' '}
        <Link href="/apply" className="text-primary hover:underline">Start with a website diagnostic</Link>.
      </>
    ),
  },
]

export function WebsitesFAQSection() {
  return (
    <FAQSection
      headline="Questions about websites and conversion systems"
      faqs={websitesFAQs}
    />
  )
}
