const investmentTiers = [
  {
    name: 'Foundation',
    description: 'For businesses ready to build their first real operational systems.',
    includes: [
      'Full diagnostic phase',
      'Strategic roadmap',
      '4 weeks of execution support',
      'Core playbooks and SOPs',
      'KPI dashboard setup',
    ],
    note: 'Best for: Early-stage teams scaling past founder-led operations.',
  },
  {
    name: 'Scale',
    description: 'For growing businesses that need comprehensive systems overhaul.',
    includes: [
      'Everything in Foundation',
      '8 weeks of execution support',
      'Team structure and hiring blueprint',
      'Full tech stack implementation',
      'Training and enablement materials',
      '30-day post-engagement support',
    ],
    note: 'Best for: Businesses at $1M-5M looking to scale infrastructure.',
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For established businesses requiring deep transformation.',
    includes: [
      'Everything in Scale',
      '12+ weeks of embedded support',
      'Multi-department coordination',
      'Executive alignment sessions',
      'Change management support',
      '90-day post-engagement support',
    ],
    note: 'Best for: Established businesses undergoing significant change.',
  },
]

export function InvestmentSection() {
  return (
    <section
      id="investment"
      className="py-28 lg:py-36"
      aria-labelledby="investment-heading"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Investment
          </p>
          <h2
            id="investment-heading"
            className="text-display font-serif font-medium text-foreground mb-6 text-balance"
          >
            What it costs to work with us.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work on a project basis, not hourly. Pricing is based on scope, complexity,
            and timeline. Below are typical engagement structures. Your actual proposal
            will be customized after our diagnostic conversation.
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {investmentTiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 lg:p-8 border ${
                tier.featured
                  ? 'glass-card border-primary/50 ring-1 ring-primary/20'
                  : 'bg-secondary/30 border-border/50'
              }`}
            >
              {tier.featured && (
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-3">
                  Most Common
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-6">
                {tier.includes.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l4 4 6-8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <p className="text-xs text-muted-foreground italic">{tier.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Pricing transparency:</span>{' '}
            Engagements are scoped to your situation after the diagnostic. Starting prices
            vary by service — from $500 for advisory sessions to $5,000+ for full builds.
            Detailed proposals are provided after an initial conversation. No surprises, no
            hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}
