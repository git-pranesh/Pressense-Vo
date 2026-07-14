export function SeoSaasWhoItsForSection() {
  const rightFor = [
    {
      title: 'You have recently closed a seed or Series A round',
      description:
        'Post-funding, investors expect you to start building the acquisition channels that reduce CAC over time. Paid ads scale quickly and stop the moment you pause spend. Organic search compounds. The founders who start their SEO content programme in the first quarter after funding are the ones who have meaningful organic pipeline by month twelve. The founders who wait until month nine are starting from scratch when the board asks about channel diversification.',
    },
    {
      title: 'Your sales team is closing deals but organic is zero',
      description:
        'Outbound works. Founder network deals close. But every deal that comes through organic search or referral is structurally cheaper and faster to close than one that started with a cold sequence. If your organic channel is generating fewer than ten qualified trials per month, it is not working as a channel. We build the content architecture that changes that within ninety days.',
    },
    {
      title: 'You have published content but rankings are not converting',
      description:
        'Traffic without conversion is a content strategy problem, not a traffic problem. Most SaaS content programmes produce top-of-funnel educational posts that attract people researching a problem rather than evaluating a solution. The missing layer is bottom-of-funnel content: comparison pages, alternative pages, integration guides, and use-case pages that capture buyers who are ready to evaluate. We audit what exists and build what is missing.',
    },
    {
      title: 'You need content that works for both Google and AI search',
      description:
        'ChatGPT, Perplexity, and Google AI Overviews are changing how buyers research software. Content that ranks in 2025 needs to be structured for AI citation as well as traditional search. That means clear question-answer structure, defined entity relationships, and specific claims backed by detail rather than vague assertions. We write for both citation surfaces simultaneously.',
    },
  ]

  const notFor = [
    {
      title: 'You want to rank for high-volume keywords with no buyer intent',
      description:
        'Traffic from informational keywords is not a business outcome. If the brief is "we want to rank for terms with 10,000 searches a month" with no mapping to buyer stage, the content will generate sessions that do not convert. We build content connected to pipeline, not content connected to dashboards.',
    },
    {
      title: 'You need a content agency that publishes four posts a week at scale',
      description:
        'We do not operate a content mill. The value Pressense brings is strategic content built for topical authority and buyer intent, not volume. If the goal is high-frequency publishing with low strategic overhead, we are not the right fit. If the goal is fewer, higher-quality pieces that each do a specific job in the buyer journey, we are.',
    },
    {
      title: 'You are pre-product-market fit',
      description:
        'SEO content takes three to six months to show meaningful returns. If you are still iterating your ICP or core value proposition, investing in content before those fundamentals are settled means the content you publish will need to be rewritten when the positioning changes. Get PMF first. Then build the content system.',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Right Fit
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-ink-foreground text-balance mb-4 leading-tight">
          Who this SEO content programme is built for
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          This is not a generic content service. It is a B2B SaaS-specific engagement for companies that have product-market fit and are ready to build organic acquisition as a serious channel.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {rightFor.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border/30 pt-12">
          <p className="eyebrow mb-4">
            Honest Disqualifiers
          </p>
          <h3 className="text-2xl font-semibold text-ink-foreground text-balance mb-10">
            This is not right for you if...
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {notFor.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/30 bg-secondary/20"
              >
                <h4 className="text-base font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
