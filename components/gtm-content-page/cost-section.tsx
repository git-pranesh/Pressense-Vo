export function GtmContentCostSection() {
  const tiers = [
    {
      name: 'System Design',
      timeline: 'Weeks 1–3',
      price: 'From $2,500',
      note: 'Fixed deliverable',
      features: [
        'ICP definition and positioning statement',
        'Topic cluster architecture across buyer journey',
        'Content calendar for 90 days',
        'Distribution channel playbook',
        'CRM attribution setup guide',
        'Production workflow templates',
      ],
      suitable: 'Founders who need the architecture before hiring a writer or agency',
    },
    {
      name: 'System Build and Operate',
      timeline: 'Monthly retainer',
      price: 'From $2,000/mo',
      note: 'Design + production',
      features: [
        'Everything in System Design (month one)',
        'Two long-form pieces per month',
        'One decision-stage piece per month (comparison, use-case, or alternative)',
        'LinkedIn repurposing: four posts per month from long-form content',
        'Email newsletter setup and monthly send',
        'CRM attribution active and monitored',
        'Monthly performance report with pipeline attribution',
        'Quarterly positioning and ICP review',
      ],
      suitable: 'Seed to Series A companies building a full content motion from scratch',
      highlighted: true,
    },
    {
      name: 'Content System Audit',
      timeline: 'One-time',
      price: 'From $1,500',
      note: 'Fixed deliverable',
      features: [
        'Full audit of existing content, distribution, and CRM attribution',
        'Gap analysis across all four system layers',
        'Content performance mapped to pipeline',
        'Distribution channel effectiveness review',
        'Prioritised rebuild recommendations',
        'System architecture document for what needs to change',
      ],
      suitable: 'Companies with an existing content programme that is not generating pipeline',
    },
  ]

  return (
    <section id="cost" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What does a GTM content system cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          A full GTM content system design and operation starts from $2,000 per month. The first month covers the system design: ICP, positioning, architecture, and the first content cluster. Subsequent months run the operational cadence. A system design as a standalone fixed deliverable starts from $2,500.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every engagement begins with a diagnostic session that reviews your current pipeline, content, and positioning, then defines the engagement scope and fixed cost before any work starts. There is no commitment required from the diagnostic.
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
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                  Most Common
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-bold text-foreground mb-0.5">{tier.price}</p>
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

              <p className="text-xs text-muted-foreground border-t border-border/30 pt-4">
                <strong className="text-foreground">Best for:</strong> {tier.suitable}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          All prices exclude applicable taxes. Retainer scope is reviewed at 90 days and adjusted based on what the data shows is working. No lock-in beyond the current month.
        </p>
      </div>
    </section>
  )
}
