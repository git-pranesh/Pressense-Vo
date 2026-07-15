const profiles = [
  {
    type: 'Technical co-founders',
    description:
      'You have built a product that works. You need help with positioning, go-to-market, and building the business side without hiring a full commercial team.',
  },
  {
    type: 'Service-based founders',
    description:
      'You are running a consultancy, agency, or professional services firm and need to break out of the founder bottleneck: systems, positioning, and a scalable delivery model.',
  },
  {
    type: 'SaaS companies (seed to Series A)',
    description:
      'You have early traction and need to make it repeatable. GTM strategy, sales process, AI automation, and software to support scale without proportional headcount growth.',
  },
  {
    type: 'Bootstrapped operators',
    description:
      'No VC funding, no runway pressure, but a real business that needs to grow. You want a consulting partner who works at your pace and builds systems you can own.',
  },
]

const notFor = [
  'Pre-revenue companies with no validated offer',
  'Businesses looking for slide decks without execution',
  'Teams that want to move slowly across 6-month strategy phases',
  'Companies that already have strong internal capabilities in these areas',
]

export function StartupConsultingWhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
              Who It Is For
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-8">
              Four types of founders we work well with
            </h2>
            <div className="space-y-5">
              {profiles.map((p) => (
                <div key={p.type} className="rounded-xl bg-card border border-border p-5 border border-border/40">
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.type}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
              Who It Is Not For
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-8">
              We are not the right fit for everyone
            </h2>
            <p className="text-base text-ink-muted leading-relaxed mb-8">
              We would rather say this clearly upfront than waste your time. Pressense works best when there is already a validated offer, a small team, and a real intent to move.
            </p>
            <ul className="space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full border border-border/60 flex items-center justify-center" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 2l4 4M6 2l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-ink-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
