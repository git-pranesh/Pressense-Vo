export function SeoSaasCostSection() {
  const tiers = [
    {
      name: 'Content Foundation',
      timeline: 'Weeks 1–8',
      price: 'From $2,000',
      note: 'Fixed deliverable',
      features: [
        'Content audit of existing pages',
        'Keyword gap analysis across buyer journey stages',
        'One pillar page (2,500+ words, fully optimised)',
        'Four cluster articles built to brief',
        'Comparison or alternative page (decision-stage)',
        'Internal linking architecture set up',
        'FAQPage and Article schema on all pieces',
      ],
      suitable: 'Founders who need to establish the organic foundation fast',
    },
    {
      name: 'Content Programme',
      timeline: 'Monthly retainer',
      price: 'From $1,500/mo',
      note: 'Ongoing production',
      features: [
        'Everything in Content Foundation (first month)',
        'Two long-form pieces per month (blog or cluster)',
        'One conversion piece per quarter (comparison, use-case, or integration guide)',
        'Monthly performance report (rankings, conversions, pipeline)',
        'Content briefs reviewed against SERP and buyer intent',
        'FAQPage schema updated with each new piece',
        'Quarterly topic cluster expansion',
      ],
      suitable: 'Post-seed or Series A companies building organic acquisition as a channel',
      highlighted: true,
    },
    {
      name: 'Content Audit',
      timeline: 'One-time',
      price: 'From $1,500',
      note: 'Fixed deliverable',
      features: [
        'Full inventory of existing content',
        'Keyword and ranking analysis per page',
        'Buyer-stage classification for every published piece',
        'Conversion rate analysis (sessions vs. trials)',
        'Gap analysis across buyer journey',
        'Prioritised action list: improve, cut, or create',
      ],
      suitable: 'Companies with existing content who want to understand what is working',
    },
  ]

  return (
    <section id="cost" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          How much does a B2B SaaS SEO content programme cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          A content foundation build starts from $2,000 for a defined set of deliverables. Ongoing monthly production starts from $1,500 per month. Every engagement begins with a diagnostic session that defines the content gaps, the buyer-journey priorities, and the fixed-price scope before any content is produced.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The right question is not "how much does SEO content cost?" but "which content types will generate pipeline fastest given our current domain authority and ICP?" We answer that question in the diagnostic before you commit to anything.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-2xl border flex flex-col ${
                tier.highlighted
                  ? 'border-primary/50 bg-primary/5'
                  : 'border-border/50 bg-card'
              }`}
            >
              {tier.highlighted && (
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  Most Common
                </span>
              )}
              <h3 className="text-lg font-medium text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-medium text-foreground mb-0.5">{tier.price}</p>
              <p className="text-xs text-muted-foreground mb-1">{tier.note}</p>
              <p className="text-xs text-muted-foreground mb-5">Timeline: {tier.timeline}</p>

              <div className="space-y-2 flex-1 mb-6">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/30 pt-4">
                <strong className="text-foreground">Best for:</strong> {tier.suitable}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          All prices exclude applicable taxes. Monthly retainer pricing is based on a standard content scope. Engagements requiring additional research, technical writing depth, or broader content volume are scoped individually from the diagnostic.
        </p>
      </div>
    </section>
  )
}
