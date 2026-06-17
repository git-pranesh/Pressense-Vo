export function CustomCrmPricingSection() {
  const tiers = [
    {
      name: 'CRM MVP',
      timeline: '6–8 weeks',
      price: 'From $15,000',
      note: 'One-time build',
      features: [
        'Core contact and deal management',
        'Custom pipeline stages',
        'Basic automation (follow-up, status changes)',
        '1–2 integrations (e.g. email, calendar)',
        'Admin dashboard and reporting',
        'Built on Replit — you own the code',
      ],
      suitable: 'Teams of 3–10 with a defined sales process',
    },
    {
      name: 'Full Custom CRM',
      timeline: '10–14 weeks',
      price: 'From $35,000',
      note: 'One-time build',
      features: [
        'Everything in CRM MVP',
        'Multi-object data model (accounts, contacts, projects)',
        'Advanced automation and workflow engine',
        'Full integration suite (CRM, billing, project, support)',
        'Role-based permissions and access controls',
        'Custom reporting and CEO dashboard',
        'Mobile-responsive interface',
      ],
      suitable: 'Teams of 10–50 with complex or non-standard sales workflows',
      highlighted: true,
    },
    {
      name: 'CRM + Retainer',
      timeline: 'Ongoing',
      price: 'From $3,500/mo',
      note: 'After initial build',
      features: [
        'Monthly development sprints',
        'New features and modules on demand',
        'Bug fixes and performance tuning',
        'Integration maintenance',
        'Quarterly roadmap planning session',
      ],
      suitable: 'Teams that want to keep developing after MVP launch',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What does custom CRM development cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          Custom CRM development typically costs between $15,000 for a lean MVP and $60,000 for a full-featured system for a team of up to fifty. Most founder-led businesses land in the $20,000 to $40,000 range.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The right way to think about cost is over three years. A $35,000 custom build with $5,000 per year in maintenance is $50,000 over three years. Ten Salesforce Enterprise seats over the same period is $90,000 to $130,000, plus admin time, plus customisation costs. The custom build is cheaper at scale and you own what you paid for.
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
                  Most Popular
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
          All prices exclude GST. Final cost depends on feature scope, number of integrations, and data migration requirements. The diagnostic session produces a fixed-price build estimate before any work begins.
        </p>
      </div>
    </section>
  )
}
