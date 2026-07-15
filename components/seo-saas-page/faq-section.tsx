const faqs = [
  {
    question: 'What is SEO content for SaaS and how is it different from regular SEO?',
    answer:
      'SEO content for SaaS is built around the B2B software buying cycle, which has distinct stages: problem awareness, solution research, vendor evaluation, and commitment. Each stage requires different content types and keyword targeting. Regular SEO content often targets the awareness stage only. SaaS SEO includes comparison pages, use-case pages, integration guides, and alternative pages that capture buyers at the evaluation and decision stage, where conversion rates are highest. The goal is organic pipeline, not organic traffic.',
  },
  {
    question: 'How long does SEO content take to show results for a SaaS startup?',
    answer:
      'For a SaaS startup with limited domain authority, bottom-of-funnel content like comparison pages and use-case pages can show ranking movement within sixty to ninety days. These have lower competition and higher conversion rates. Top-of-funnel educational content targeting competitive head terms takes three to six months for meaningful rankings. The full compounding effect of a content programme takes twelve to eighteen months to become a significant acquisition channel. Founders who start immediately after funding have a material advantage over those who wait.',
  },
  {
    question: 'What does a B2B SaaS content audit involve?',
    answer:
      'A content audit maps every published page against buyer intent: which stage of the buyer journey it targets, what keyword it is optimised for, and whether it is actually generating any conversions. We look at organic traffic, ranking positions, and downstream behaviour (did the visitor start a trial, request a demo, or just leave). The audit identifies which content is worth improving, which content is hurting the site by attracting low-intent traffic, and which gaps in the buyer journey have no content at all. You receive a prioritised action list, not a spreadsheet of metrics.',
  },
  {
    question: 'How do comparison pages and alternative pages work for SaaS SEO?',
    answer:
      'Comparison pages capture the search "[your product] vs [competitor]" and alternative pages capture "[best alternatives to market leader]". These searches are made by buyers in active evaluation, which is why they convert significantly better than informational content. The searches exist regardless of whether you have content for them. If you do not own the page, your competitor does. A well-built comparison page that is genuinely honest about trade-offs outranks a marketing-led comparison every time, because buyers trust balanced analysis.',
  },
  {
    question: 'Do you write the content or do we?',
    answer:
      'We write it. Every piece is produced to a brief that we develop collaboratively: we define the keyword, the buyer stage, the specific question to answer, and the insight or claim that differentiates it from what already ranks. We typically need a thirty-minute call with someone on your team before writing the first draft of any pillar page or product-specific content, so the writing reflects real product knowledge rather than surface-level research. Cluster articles are more independent once the brief is set.',
  },
  {
    question: 'Can you also write content for AI search, not just Google?',
    answer:
      'Yes, and it is the same content. The principles that make content rank in Google also make it get cited by ChatGPT, Perplexity, and Claude: answer the question directly, support the answer with specific detail, use clear heading structure, and avoid vague marketing language. We structure every piece for AI citation from the first draft. This is not a separate workstream — it is how we write.',
  },
  {
    question: 'How do you measure whether the SEO content is working?',
    answer:
      'We track organic trial sign-ups, organic demo requests, and organic-sourced pipeline revenue as the primary success metrics. Ranking positions and organic traffic are leading indicators. We set up conversion tracking in your analytics platform so organic-attributed trials and demos are visible. Monthly reports cover keyword ranking movements, content that is generating conversion events, and what the next iteration priorities are. The goal is to connect content performance to business outcomes your board can read.',
  },
  {
    question: 'Is this suitable for a recently funded SaaS startup with no existing organic presence?',
    answer:
      'Yes. Starting from zero domain authority is a slower path than starting with an established site, but the sequence makes it viable within the first year. The first ninety days focus on low-competition, high-conversion-rate content: comparison pages, use-case pages, and integration guides. These rank faster than head terms and produce qualified pipeline earlier in the programme. By month six, the educational cluster content starts to rank. By month twelve, compounding sets in. Founders who start the programme within three months of closing a seed or Series A round consistently outperform those who delay.',
  },
]

export function SeoSaasFaqSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-14 leading-tight">
          SEO content for SaaS questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
