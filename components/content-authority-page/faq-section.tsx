import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const contentFAQs = [
  {
    question: 'What is a content authority system?',
    answer:
      'A content authority system is the infrastructure behind how a business communicates at scale: SEO content, AEO-optimised pages, technical writing, thought leadership, and publishing workflows built into a repeatable process. Unlike a content writing service that produces individual pieces, a content authority system defines what the business should be known for, maps every piece to a specific buyer and pipeline stage, and creates a compounding library of content that generates organic traffic and builds trust over time.',
  },
  {
    question: 'How is a content system different from content writing?',
    answer: (
      <>
        Content writing produces output. A content system produces strategy, structure, and repeatability. Most businesses that hire content writers get articles that look busy and pipelines that do not grow. The reason is that writing without a defined ICP, buyer question map, and topical authority architecture generates volume, not traction. Pressense builds the system first, then produces the content within it. See{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">how positioning connects to content</Link>.
      </>
    ),
  },
  {
    question: 'How long does it take to see results from a content system?',
    answer:
      'Bottom-of-funnel content such as comparison pages and use-case pages can show organic ranking movement within 60 to 90 days. A full content programme generating consistent organic pipeline typically takes 6 to 12 months to compound meaningfully. Founders who start with the right pillar architecture and AEO-structured pages see AI engine citations within 4 to 8 weeks as Google AI Overviews and Perplexity begin indexing the structured answer blocks.',
  },
  {
    question: 'What is AEO and how is it different from SEO?',
    answer:
      'SEO optimises content to rank in traditional search results. Answer Engine Optimisation (AEO) structures content so that AI systems like Google AI Overviews, Perplexity, and ChatGPT cite it as the authoritative answer to a query. AEO requires question-based headings, direct 40 to 60 word answer blocks immediately below each heading, FAQPage schema markup, and strong topical authority from internal linking. The content that wins both SEO and AEO is specific, accurate, and structured for extraction.',
  },
  {
    question: 'What kind of businesses does Pressense build content systems for?',
    answer:
      'Pressense builds content authority systems for B2B SaaS companies with complex products that are hard to explain, medical and specialist businesses where trust is the primary buying trigger, and founder-led service firms where the founder has deep expertise but low market visibility. The common thread is that internal knowledge is strong but the communication infrastructure to turn that knowledge into organic pipeline does not exist yet.',
  },
  {
    question: 'When would a business not need a content system yet?',
    answer: (
      <>
        A content system will not fix a positioning problem. If the business does not yet have a clear ICP, does not know why buyers choose them over alternatives, or cannot explain what they do in two sentences, a{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">strategy engagement</Link>{' '}
        should come first. Building content on top of unclear positioning generates volume without traction and wastes six months.{' '}
        <Link href="/diagnostic" className="text-primary hover:underline">The diagnostic identifies which problem to solve first</Link>.
      </>
    ),
  },
]

export function ContentFAQSection() {
  return <FAQSection headline="Questions about content authority systems" faqs={contentFAQs} />
}
