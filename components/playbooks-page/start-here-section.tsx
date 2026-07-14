import Link from 'next/link'

const startHereItems = [
  {
    condition: 'You are growing but the founder is overwhelmed',
    playbook: 'Fixing the Founder Bottleneck',
    slug: 'founder-bottleneck',
  },
  {
    condition: 'Revenue is active but margins are unclear',
    playbook: 'Pricing Leakage & Revenue Clarity',
    slug: 'pricing-leakage',
  },
  {
    condition: 'Marketing creates activity but sales does not convert',
    playbook: 'Sales-Marketing Connection',
    slug: 'sales-marketing-connection',
  },
  {
    condition: 'Customers buy but do not succeed quickly',
    playbook: 'Customer Onboarding That Sticks',
    slug: 'customer-onboarding',
  },
  {
    condition: 'The expert is skilled but not visible enough',
    playbook: 'Visibility & Personal Brand Systems',
    slug: 'visibility-personal-brand',
  },
  {
    condition: 'Operations run on spreadsheets and manual work',
    playbook: 'Systems Audit & Debt Clearance',
    slug: 'systems-audit',
  },
]

export function StartHereSection() {
  return (
    <section className="py-20 lg:py-28" aria-label="Start here guidance">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Start here if...</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-10 text-balance">
            Not sure which playbook fits your situation?
          </h2>

          <div className="space-y-4">
            {startHereItems.map((item) => (
              <Link
                key={item.slug}
                href={`/playbooks/${item.slug}`}
                className="group flex items-start sm:items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/40 hover:border-primary/20 hover:bg-secondary/30 transition-all"
              >
                <span className="text-primary/60 flex-shrink-0 mt-1 sm:mt-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex-1">
                  <span className="text-base text-muted-foreground">{item.condition}</span>
                  <span className="text-base text-muted-foreground"> — </span>
                  <span className="text-base text-foreground font-medium group-hover:text-primary transition-colors">{item.playbook}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
