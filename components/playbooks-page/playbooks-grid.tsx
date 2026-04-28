const playbooks = [
  {
    id: 'founder-bottleneck',
    icon: '→',
    title: 'Fixing the Founder Bottleneck',
    description: 'When every decision waits for the founder. Diagnosis, delegation framework, and systems to free up time.',
    tags: ['Leadership', 'Operations', 'Scalability'],
  },
  {
    id: 'pricing-leakage',
    icon: '💰',
    title: 'Pricing Leakage & Revenue Clarity',
    description: 'Identify pricing leakage, design a defensible model, and communicate it to customers.',
    tags: ['Revenue', 'Strategy', 'GTM'],
  },
  {
    id: 'sales-marketing',
    icon: '🔗',
    title: 'Building a Sales-Marketing Connection',
    description: 'Align language, create handoff processes, and build shared accountability.',
    tags: ['Sales', 'Marketing', 'Operations'],
  },
  {
    id: 'onboarding',
    icon: '✓',
    title: 'Customer Onboarding That Sticks',
    description: 'Design repeatable onboarding, reduce churn, and build success metrics.',
    tags: ['Customer Success', 'Operations', 'Retention'],
  },
  {
    id: 'visibility-brand',
    icon: '📊',
    title: 'Visibility & Personal Brand Systems',
    description: 'Build systematic visibility for experts and founders. Consistency without overwhelm.',
    tags: ['Personal Brand', 'Content', 'Growth'],
  },
  {
    id: 'systems-audit',
    icon: '⚙️',
    title: 'Systems Audit & Debt Clearance',
    description: 'Identify operational debt. Prioritize. Rebuild incrementally without disrupting revenue.',
    tags: ['Systems', 'Operations', 'Scale'],
  },
]

export function PlaybooksGrid() {
  return (
    <section className="py-28 lg:py-36" aria-label="Playbook library">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance" id="playbooks-heading">
            Playbook library.
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            Click a playbook to view the full diagnostic framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {playbooks.map((playbook) => (
            <a
              key={playbook.id}
              href={`#playbook-${playbook.id}`}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:translate-y-1 transition-transform">{playbook.icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{playbook.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-1">{playbook.description}</p>
              <div className="flex flex-wrap gap-2">
                {playbook.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View framework</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
