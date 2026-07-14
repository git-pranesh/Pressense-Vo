const whoItsForCards = [
  {
    title: 'B2B SaaS at 0-to-1 growth stage',
    description: 'You have early product-market fit and your first paying customers. Marketing is founder-led and inconsistent. You need someone to build the GTM engine before you hire a team.',
  },
  {
    title: 'Startups preparing to raise or scale',
    description: 'You are approaching a funding round or a new market expansion and need structured positioning, a demand gen playbook, and marketing that looks credible to investors.',
  },
  {
    title: 'Businesses between marketing hires',
    description: 'Your last marketing lead left, or you outgrew junior execution and need strategic direction before you hire again. A fractional CMO bridges the gap without a rushed permanent hire.',
  },
  {
    title: 'India-based and global founder-led teams',
    description: 'You are building in India or serving global markets and need fractional CMO services that understand both the cost realities of Indian SaaS and the expectations of US and UK buyers.',
  },
]

const notForCards = [
  {
    title: 'Businesses with no product-market fit yet',
    description: 'If you are still searching for what customers want, a CMO cannot fix that. Start with a diagnostic or a positioning sprint first.',
  },
  {
    title: 'Teams looking for hands-on execution only',
    description: 'Fractional CMO services focus on strategy, leadership, and decision-making. If you need someone to write copy or run ads full-time, that is an execution hire, not a CMO.',
  },
  {
    title: 'Companies that need someone in-office every day',
    description: 'Fractional engagements are structured for remote or hybrid work. If your culture requires full physical presence, a fractional arrangement will not fit.',
  },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        {/* This IS for you */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink-foreground text-balance mb-10">
            Who fractional CMO services help
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsForCards.map((card, i) => (
              <div
                key={i}
                className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* This is NOT for you */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-border/60" aria-hidden="true" />
            <span className="eyebrow">This is NOT for you if</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notForCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border/40 bg-card/30">
                <h3 className="text-lg font-semibold text-ink-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
