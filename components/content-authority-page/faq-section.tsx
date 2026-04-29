import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const contentFAQs = [
  {
    question: 'What is a content and authority system?',
    answer: (
      <>
        A content and authority system turns internal expertise into clear market-facing communication. It can include{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">website copy</Link>, SEO content, founder-led content, product narratives, technical content, publishing workflows, and{' '}
        <Link href="/ai-workflows-automation" className="text-primary hover:underline">AI-assisted content systems</Link>.
      </>
    ),
  },
  {
    question: 'How is this different from content writing?',
    answer: (
      <>
        Content writing focuses on output. A content system focuses on translation,{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">positioning</Link>, structure, buyer understanding, and repeatability. Pressense helps clarify what the business should be known for before creating more content.
      </>
    ),
  },
  {
    question: 'When does a business need a content system?',
    answer: (
      <>
        A content system is useful when the business has real expertise but weak visibility, buyers misunderstand the offer, the founder explains better on calls than the website does, or content is being created without clarity or demand.
      </>
    ),
  },
  {
    question: 'Can this support SEO and AEO?',
    answer: (
      <>
        Yes. Strong content systems help answer specific buyer questions, clarify expertise, structure ideas, and create useful pages that search engines and AI systems can understand. The goal is not keyword volume alone, but useful, specific, buyer-relevant content. See{' '}
        <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link>.
      </>
    ),
  },
  {
    question: 'What kind of content does Pressense help build?',
    answer: (
      <>
        Pressense can help with website copy, use-case pages, technical content, SEO articles, founder-led authority content, product narratives, playbooks, content workflows, and AI-assisted publishing systems.
      </>
    ),
  },
  {
    question: 'When would Pressense not recommend more content?',
    answer: (
      <>
        Pressense may advise against more content if the offer is unclear, the ideal buyer is undefined, the website cannot explain the business, the team is only chasing keywords, or the positioning problem needs to be fixed first.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">Start with a communication diagnostic</Link>.
      </>
    ),
  },
  {
    question: 'How does content connect to sales?',
    answer: (
      <>
        Good content reduces confusion before a sales conversation. It helps buyers understand the problem, trust the business, compare options, and decide whether they are a good fit. This makes sales conversations clearer and more qualified.
      </>
    ),
  },
]

export function ContentFAQSection() {
  return (
    <FAQSection
      headline="Questions about content and authority systems"
      faqs={contentFAQs}
    />
  )
}
