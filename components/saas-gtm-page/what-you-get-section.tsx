export function SaaSGTMWhatYouGetSection() {
  const tiers = [
    {
      name: 'GTM Audit',
      price: 'From $1,500',
      timeline: '1–2 weeks',
      items: [
        'Review of existing GTM materials',
        'ICP and positioning assessment',
        'Channel performance analysis',
        'Written audit report with priority fixes',
        'One 90-minute debrief call',
      ],
      outcome: 'Most clients leave with 3–5 specific fixes that move the needle immediately.',
    },
    {
      name: 'GTM Sprint',
      price: 'From $3,000',
      timeline: '6–8 weeks',
      featured: true,
      items: [
        'Buyer research (5–8 conversations)',
        'ICP definition document',
        'Competitive positioning map',
        'Pricing recommendation',
        'Channel selection and playbook',
        '90-day execution roadmap',
        'One handoff call + 30-day email support',
      ],
      outcome: 'Most clients go from "guessing ICP" to a validated, documented strategy in under 8 weeks.',
    },
    {
      name: 'Larger Engagement',
      price: 'Custom',
      timeline: 'Scoped together',
      items: [
        'Multi-market or multi-product GTM',
        'Ongoing retainer post-sprint',
        'Sales team training and enablement',
        'Channel expansion and paid acquisition',
        'Board-ready GTM reporting',
      ],
      outcome: 'Larger team or complex scope? Let\'s scope it together on a call.',
    },
  ]

  return (
    <section className="py-16 bg-background" aria-label="SaaS GTM pricing and deliverables">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">What You Get</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance mb-4">
          How much does SaaS go-to-market strategy cost?
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
          Enterprise GTM consultancies charge $20K to $80K for a strategy engagement. We work with founder-led SaaS companies that do not have that budget but need the same quality of thinking. Our sprint format keeps scope tight — starting from $3,000 — so the price stays accessible.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-xl border flex flex-col gap-4 ${
                tier.featured
                  ? 'border-primary/60 bg-card ring-1 ring-primary/20'
                  : 'border-border/60 bg-card'
              }`}
            >
              {tier.featured && (
                <span className="text-xs font-medium tracking-widest uppercase text-primary">Most popular</span>
              )}
              <div>
                <h3 className="text-base font-medium text-foreground mb-1">{tier.name}</h3>
                <p className="text-xl font-medium text-foreground">{tier.price}</p>
                <p className="text-xs text-muted-foreground">{tier.timeline}</p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {tier.items.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground leading-relaxed pl-3 border-l border-border/60">
                    {item}
                  </p>
                ))}
              </div>
              {tier.outcome && (
                <p className="text-xs text-muted-foreground/30 pt-3 mt-2 leading-relaxed">
                  {tier.outcome}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          All prices are indicative. Final scope confirmed after your free diagnostic session. Retainer is month-to-month.
        </p>
      </div>
    </section>
  )
}
