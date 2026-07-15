export function MvpReplitCostSection() {
  const tiers = [
    {
      name: 'Replit MVP Build',
      timeline: 'Weeks 1–6',
      price: 'From $3,000',
      note: 'Fixed-price build',
      features: [
        'Core value loop (1 primary user journey)',
        'User auth using a production-grade library',
        '2–3 third-party integrations',
        'PostgreSQL database with parameterised queries',
        'Deployed to production on Replit — you own the code',
        'Analytics and error tracking configured',
        'Two-week post-launch support window',
      ],
      suitable: 'Founders with a validated idea and a defined primary user journey',
    },
    {
      name: 'Replit MVP Plus',
      timeline: 'Weeks 1–10',
      price: 'From $5,000',
      note: 'Fixed-price build',
      features: [
        'Everything in Replit MVP Build',
        '2–3 user journey types',
        'Admin dashboard and basic reporting',
        '4–5 integrations (payments, email, CRM, webhooks)',
        'Role-based access controls',
        'Mobile-responsive interface',
        'Four-week post-launch support window',
      ],
      suitable: 'Founders raising seed or preparing for investor demo with broader scope',
      highlighted: true,
    },
    {
      name: 'Replit Sprint Retainer',
      timeline: 'After initial build',
      price: 'From $1,500/mo',
      note: 'Monthly sprint retainer',
      features: [
        'One two-week development sprint per month',
        'Feature additions based on user feedback',
        'Bug fixes and performance improvements',
        'Integration maintenance',
        'Monthly scope planning session',
      ],
      suitable: 'Founders iterating after launch based on real user data',
    },
  ]

  return (
    <section id="cost" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          How much does it cost to build an MVP on Replit?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          Replit MVP development with Pressense starts from $3,000 for a focused six-week build. Replit and AI-assisted development have compressed the cost of a production-grade MVP significantly: a build that would have cost $50,000 with a traditional agency in 2022 now starts at $3,000 to $5,000.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The right question is not "how much does a Replit MVP cost?" but "what is the minimum scope that proves the core hypothesis?" Every engagement starts with a fixed-price estimate from the diagnostic session. No surprises.
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
          All prices exclude applicable taxes. Final cost depends on feature scope, number of integrations, and whether design assets are provided. The diagnostic session produces a fixed-price estimate before any work begins.
        </p>
      </div>
    </section>
  )
}
