const tiers = [
  {
    name: 'Focused Build',
    timeline: '2–4 weeks',
    price: 'From $1,500',
    note: 'Fixed-price build',
    features: [
      'Single workflow, tool, or landing page',
      'Auth and basic user roles',
      '1–2 data sources or integrations',
      'Deployed on Replit — you own the code',
      'Handover documentation',
      'Two-week support window post-launch',
    ],
    suitable: 'Fast deployment for a specific problem — most clients are in production in under 3 weeks',
  },
  {
    name: 'MVP or Custom App',
    timeline: '6–8 weeks',
    price: 'From $5,000',
    note: 'Fixed-price build',
    features: [
      'Full product with core user journey',
      'User auth, onboarding, and account management',
      '2–4 integrations (Stripe, HubSpot, email, etc.)',
      'Admin dashboard and reporting',
      'Role-based access controls',
      'Four-week support window post-launch',
    ],
    suitable: 'Founders building their first product — you own 100% of the code from commit one',
    highlighted: true,
  },
  {
    name: 'Support Retainer',
    timeline: 'Ongoing monthly',
    price: 'Custom',
    note: 'Dedicated developer + support',
    features: [
      'Dedicated developer for your project',
      'Bug fixes within 24–48 hours',
      'Feature additions from user feedback',
      'Integration maintenance',
      'Quarterly architecture review',
    ],
    suitable: 'Larger engagements or ongoing apps — scope it together on a call',
  },
]

const deliverables = [
  { week: 'Week 1', item: 'Scoped build brief and fixed-price estimate' },
  { week: 'Week 1–2', item: 'Technical architecture document in your Replit workspace' },
  { week: 'Week 2–4', item: 'Sprint 1 — core data model and primary user journey' },
  { week: 'Week 4–6', item: 'Sprint 2 — integrations, auth, admin interface' },
  { week: 'Week 6–7', item: 'Sprint 3 — stabilisation, edge cases, performance' },
  { week: 'Week 8', item: 'Production handover, video walkthrough, all credentials' },
]

export function ReplitAgencyWhatYouGetSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Deliverables and pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What you get and how much Replit development costs
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          Replit development starts from $1,500 for a focused build and scales based on scope. Enterprise agencies charge $150,000 and up for the same output. We serve the founder and SMB tier with fixed-price builds, a dedicated developer, and fast support after launch. Larger projects or enterprise scope? Let&apos;s scope it together.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every engagement starts with a fixed-price estimate from the diagnostic session. No time-and-materials billing. No invoices for "additional scope." What you agree to in week one is what you pay.
        </p>

        {/* Timeline table */}
        <div className="mb-14">
          <h3 className="text-lg font-semibold text-foreground mb-5">8-week delivery timeline</h3>
          <div className="rounded-xl border border-border/40 overflow-hidden">
            {deliverables.map((row, i) => (
              <div
                key={row.week}
                className={`flex gap-6 px-6 py-4 ${i % 2 === 0 ? 'bg-secondary/20' : 'bg-card'}`}
              >
                <span className="text-sm font-medium text-primary w-24 flex-shrink-0">{row.week}</span>
                <span className="text-sm text-muted-foreground">{row.item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing tiers */}
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
          All prices exclude GST. Final cost depends on feature scope, number of integrations, and complexity of the data model. The diagnostic session produces a fixed-price estimate before any work begins.
        </p>
      </div>
    </section>
  )
}
