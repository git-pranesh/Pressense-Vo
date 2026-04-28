const playbooks = [
  {
    icon: '→',
    title: 'Fixing the Founder Bottleneck',
    description: 'When every decision waits for the founder. Diagnosis, delegation framework, and systems to free up time.',
    tags: ['Leadership', 'Operations', 'Scalability'],
  },
  {
    icon: '💰',
    title: 'Pricing Strategy & Revenue Recovery',
    description: 'Identify pricing leakage, design a defensible model, and communicate it to customers.',
    tags: ['Revenue', 'Strategy', 'GTM'],
  },
  {
    icon: '🔗',
    title: 'Building a Sales-Marketing Connection',
    description: 'Align language, create handoff processes, and build shared accountability.',
    tags: ['Sales', 'Marketing', 'Operations'],
  },
  {
    icon: '✓',
    title: 'Customer Onboarding That Sticks',
    description: 'Design repeatable onboarding, reduce churn, and build success metrics.',
    tags: ['Customer Success', 'Operations', 'Retention'],
  },
  {
    icon: '📊',
    title: 'Visibility & Personal Brand Systems',
    description: 'Build systematic visibility for experts and founders. Consistency without overwhelm.',
    tags: ['Personal Brand', 'Content', 'Growth'],
  },
  {
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
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance" id="playbooks-heading">
            Playbook library.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {playbooks.map((playbook, i) => (
            <article
              key={i}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{playbook.icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">{playbook.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
