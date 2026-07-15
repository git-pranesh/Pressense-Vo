export function GtmContentWhoItsForSection() {
  const rightFor = [
    {
      title: 'You have product-market-fit but no repeatable organic pipeline',
      description:
        'Customers love the product. Outbound is working. But every deal requires founder effort and every marketing hire you make asks "where is the content strategy?" You need a system that generates inbound without constant founder input. The GTM content system is the infrastructure that makes that happen.',
    },
    {
      title: 'You closed a seed or Series A and your board expects organic growth',
      description:
        'Post-funding investors ask about CAC reduction and channel diversification. Paid ads scale quickly and stop the moment you pause spend. A GTM content system compounds. Founders who build the system in the first quarter after funding have measurable organic pipeline by month twelve. Those who wait are starting from zero when the question comes up in the Series B deck.',
    },
    {
      title: 'You have published content but it is not generating pipeline',
      description:
        'Traffic without trials is a strategy problem. Most SaaS companies have published educational blog posts that attract researchers, not buyers. The conversion layer is bottom-of-funnel content, attribution infrastructure, and a distribution system that gets content in front of buyers at evaluation stage. We build what is missing.',
    },
    {
      title: 'You need the system to work without the founder in every piece',
      description:
        'Founder-led content works until it does not. A GTM content system is designed so a founder or single marketing hire can run the weekly cadence without the founder writing every post. The system handles the brief, the structure, and the distribution. The founder reviews and approves. The pipeline continues even in a busy quarter.',
    },
  ]

  const notFor = [
    {
      title: 'You are pre-product-market-fit',
      description:
        'A content system built on undefined positioning produces content that will need to be rewritten when the positioning clarifies. Get product-market-fit first. Then build the system on a foundation that will not shift.',
    },
    {
      title: 'You want daily publishing volume with low strategic overhead',
      description:
        'We do not operate a content mill. The value here is a system built for topical authority and buyer intent, not volume. If the goal is frequent shallow publishing, a generalist content agency is the better fit.',
    },
    {
      title: 'You need results in under 30 days',
      description:
        'The foundation build takes four to six weeks. Measurable organic ranking movement begins within ninety days. If the timeline constraint is shorter than that, the right solution is a different channel while the content system gets built in parallel.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          Who this GTM content system is built for
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          This is a B2B SaaS-specific engagement for founder-led companies that have validated their product and are ready to build organic acquisition as a repeatable motion, not an experiment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="eyebrow mb-4">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-medium text-ink-foreground text-balance mb-10">
            This is not right for you if...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <h4 className="text-base font-medium text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
