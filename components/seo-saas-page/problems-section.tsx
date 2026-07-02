export function SeoSaasProblemsSection() {
  const problems = [
    {
      heading: 'Why does our SaaS blog get traffic but zero trial sign-ups?',
      body1:
        'The gap between traffic and conversion in most SaaS content programmes is a funnel problem. The content is generating top-of-funnel awareness: people researching a problem category. These are not buyers. They are researchers. They read the post, get the answer, and leave. If your entire content programme lives at the top of the funnel, you have built an audience with no purchase intent.',
      body2:
        'The conversion layer is bottom-of-funnel content: comparison pages that capture "[your product] vs [competitor]" searches, alternative pages that capture "alternatives to [market leader]" searches, integration guides that capture "[your product] + [tool your ICP uses]" searches, and use-case pages that answer exactly the problem your best customer was solving when they first signed up. We audit what you have and build what is missing.',
    },
    {
      heading: 'How do we build topical authority in our category without publishing every day?',
      body1:
        'Topical authority does not come from publishing frequency. It comes from depth and coverage. Google and AI engines assess whether a site covers a topic comprehensively: every major subtopic, every common question, every adjacent concept. A content programme that publishes two substantive pieces per month that each cover a topic thoroughly builds more authority than one that publishes five thin posts per week.',
      body2:
        'The approach is a topic cluster model: one pillar page that defines your core category, supported by eight to twelve cluster articles that cover every subtopic and long-tail variation. Each cluster article links back to the pillar and forward to adjacent clusters. This creates an interlocking content architecture that signals depth to search engines rather than a disconnected blog archive that signals nothing. A B2B SaaS company can build category authority in a competitive market using this model because the structure matters more than the publishing volume.',
    },
    {
      heading: 'How do we write content that gets cited by ChatGPT and Perplexity?',
      body1:
        'AI engines pull from content that answers questions directly, with specific detail, in a structure they can parse. Vague brand copy does not get cited. Long introductions before the answer does not get cited. Generic claims with no supporting specifics does not get cited. What gets cited is: a direct answer in the first sentence, two to three sentences of context with specific detail, and clear headings that match the question being answered.',
      body2:
        'This is not a different content format from good SEO content. It is the same principles applied consistently: answer the question first, then explain, then support with detail. Every piece of content we produce for B2B SaaS clients is structured for AI citation from the first draft. We think about Google ranking and Perplexity citation in the same pass, not as separate workstreams.',
    },
    {
      heading: 'Why does our agency-produced SaaS content not sound like us?',
      body1:
        'Generic SEO agencies produce generic content. Their writers research the keyword, read the top three ranking pages, and produce a version of what already exists with better formatting. The output ranks for something but it does not differentiate the brand, demonstrate technical depth, or reflect how your team actually thinks about the problem. Your sales team would never send it to a prospect.',
      body2:
        'Pressense approaches B2B SaaS content as a technical writer would, not a generalist copywriter. We talk to your product team before writing about the product. We review your sales call transcripts to understand how your buyers describe the problem. We surface the specific insight, the counter-intuitive claim, the concrete example that makes a piece worth reading rather than worth skimming. The content sounds like it was written by someone who understands the domain, because it was.',
    },
    {
      heading: 'How long does SEO content take to rank for a SaaS startup?',
      body1:
        'The honest answer is three to six months for competitive keywords, and six to twelve months for a meaningful portion of the content programme to have compounding impact. This is not a weakness of SEO content compared to paid ads. It is the structural advantage: once it ranks, it keeps generating pipeline without additional spend. A paid campaign stops the moment you stop funding it. A piece of content that earns a first-page ranking keeps generating qualified traffic for years.',
      body2:
        'The fastest path to measurable organic results is to start with bottom-of-funnel content: comparison pages, use-case pages, and integration guides. These have lower competition and higher conversion rates than top-of-funnel educational content. A Series A SaaS company with no domain authority can rank a well-built comparison page in sixty to ninety days because the competition for those terms is often thin. We sequence the content programme to produce measurable pipeline impact within the first ninety days, not year two.',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Real Problems
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          Why most SaaS content programmes do not generate pipeline
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The founders and marketing leads who book a diagnostic with us have usually already tried content. They know what is not working. These are the gaps we fix.
        </p>

        <div className="space-y-0">
          {problems.map((p, i) => (
            <div
              key={p.heading}
              className={`py-10 ${i < problems.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{p.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.body1}</p>
              <p className="text-muted-foreground leading-relaxed">{p.body2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
