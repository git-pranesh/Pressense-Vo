export function MvpCostSection() {
  const tiers = [
    {
      name: 'MVP Starter',
      timeline: 'Weeks 1–8',
      price: 'From $5,000',
      note: 'Fixed-price build',
      features: [
        'Core value loop (1 primary user journey)',
        'User auth and basic account management',
        '1–2 third-party integrations',
        'Deployed on Replit — you own the code',
        'Basic analytics and error tracking',
        'Post-launch two-week support window',
      ],
      suitable: 'Pre-revenue founders with a defined core hypothesis',
    },
    {
      name: 'MVP Growth',
      timeline: 'Weeks 1–12',
      price: 'From $28,000',
      note: 'Fixed-price build',
      features: [
        'Everything in MVP Starter',
        '2–3 user journey types',
        'Admin dashboard and basic reporting',
        '3–5 integrations (payments, email, CRM)',
        'Role-based access controls',
        'Mobile-responsive interface',
        'Post-launch four-week support window',
      ],
      suitable: 'Founders raising seed or pre-seed with investor demo requirements',
      highlighted: true,
    },
    {
      name: 'MVP + Retainer',
      timeline: 'After initial build',
      price: 'From $3,500/mo',
      note: 'Monthly sprint retainer',
      features: [
        'Monthly two-week development sprints',
        'Feature additions based on user feedback',
        'Bug fixes and performance tuning',
        'Integration maintenance',
        'Quarterly roadmap planning session',
      ],
      suitable: 'Founders who want to keep iterating after the initial launch',
    },
  ]

  return (
    <section id="cost" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          How much does an MVP cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          MVP development for startups starts from $5,000 for a focused build and scales based on scope, integrations, and data model complexity. In the age of Replit and AI-assisted development, a disciplined founder can get a production-ready MVP for $5,000 to $28,000 — a fraction of traditional agency rates.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The right question is not "how much does an MVP cost?" but "what is the minimum scope that tests the hypothesis?" A $5,000 build that validates a paying user exists is worth more than a $100,000 build that nobody uses. Every engagement starts with a fixed-price estimate from the diagnostic session. No surprises mid-project.
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
          All prices exclude GST. Final cost depends on feature scope, number of integrations, and whether existing design assets are provided. The diagnostic session produces a fixed-price build estimate before any work begins.
        </p>
      </div>
    </section>
  )
}
