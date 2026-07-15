export function CustomCrmPricingSection() {
  const tiers = [
    {
      name: 'CRM MVP',
      timeline: '6–8 weeks',
      price: 'From $5,000',
      note: 'One-time build',
      features: [
        'Core contact and deal management',
        'Custom pipeline stages',
        'Basic automation (follow-up, status changes)',
        '1–2 integrations (e.g. email, calendar)',
        'Admin dashboard and reporting',
        'Built on Replit — you own the code',
      ],
      suitable: 'Most clients replace their spreadsheet CRM in under 8 weeks and never look back',
    },
    {
      name: 'Full Custom CRM',
      timeline: '10–14 weeks',
      price: 'From $15,000',
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
      suitable: 'Teams with complex workflows — own it outright instead of paying Salesforce forever',
      highlighted: true,
    },
    {
      name: 'Enterprise / Complex',
      timeline: 'Scoped together',
      price: 'Custom',
      note: 'Larger engagements',
      features: [
        'Multi-team or multi-site data models',
        'Deep integration with existing ERP or finance stack',
        'Advanced automation and workflow engine',
        'Dedicated developer and support team',
        'Bug fixes within 24–48 hours',
        'Quarterly roadmap and architecture review',
      ],
      suitable: 'Larger engagements? Let\'s scope it together on a call',
    },
  ]

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What does custom CRM development cost?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          Custom CRM development starts from $5,000 for a lean MVP. Most founder-led businesses land in the $5,000 to $15,000 range for a fully functional, owned CRM — built for exactly how their pipeline works.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          The right way to think about cost is over three years. A $15,000 custom build with $3,000 per year in maintenance is $24,000 over three years. Ten Salesforce Enterprise seats over the same period is $90,000 to $130,000, plus admin time, plus customisation costs. The custom build is cheaper at scale and you own what you paid for.
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
                  Most Popular
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
          All prices exclude GST. Final cost depends on feature scope, number of integrations, and data migration requirements. The diagnostic session produces a fixed-price build estimate before any work begins.
        </p>
      </div>
    </section>
  )
}
