import type { FAQItem } from '@/components/faq-section'

export const framerFAQs: FAQItem[] = [
  {
    question: 'What is Framer website design?',
    answer:
      'Framer is a modern no-code/low-code design and publishing platform that produces production-quality websites with real CSS, responsive layouts, and interactive animations — without requiring a traditional development stack. A Framer designer works in a visual canvas that outputs clean, performant code. Framer sites are fast, CMS-ready, and easy for non-technical teams to manage after launch.',
  },
  {
    question: 'How much does Framer website design cost?',
    answer:
      'Pressense Framer website design starts from $1,500 for a landing page or conversion-focused single-page site. A full multi-page website typically runs $3,000 to $7,000 depending on page count, CMS requirements, and animation complexity. Every engagement starts with a fixed-price estimate after the scoping call.',
  },
  {
    question: 'How long does a Framer website take to build?',
    answer:
      'A focused landing page takes one to two weeks. A full website with CMS, blog, and custom animations takes three to six weeks. Framer builds significantly faster than traditional development because design and code are unified in one tool — there is no hand-off from designer to developer.',
  },
  {
    question: 'Can I update my Framer website after launch?',
    answer:
      'Yes. Framer has a built-in CMS that lets non-technical team members add blog posts, update case studies, and edit copy without touching the design. We hand over the Framer workspace at the end of every engagement and provide a one-hour training session so your team can manage content independently.',
  },
  {
    question: 'Is Framer good for SEO?',
    answer:
      'Framer is strong on SEO. It outputs semantic HTML, supports custom meta tags, structured data, Open Graph, and canonical URLs per page. Framer sites load fast, have clean URLs, and support sitemap generation. We apply all on-page SEO best practices as part of every build.',
  },
  {
    question: 'Do you offer Framer website design for SaaS companies?',
    answer:
      'Yes — SaaS marketing sites are one of our most common Framer engagements. We build positioning-first landing pages, feature pages, pricing pages, and blog setups. The CMS integration means your content team can ship new posts and landing pages without involving developers.',
  },
]

export function FramerFAQSection() {
  return (
    <section className="py-20 px-6 md:px-8 bg-background" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto">
        <h2 id="faq-heading" className="text-2xl font-medium text-foreground mb-12 text-balance">
          Framer Website Design — Questions &amp; Answers
        </h2>
        <dl className="divide-y divide-border/40">
          {framerFAQs.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="text-base font-medium text-foreground mb-2">{item.question}</dt>
              <dd className="text-base text-muted-foreground leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
