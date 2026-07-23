import Link from 'next/link'

const tiers = [
  {
    name: 'Strategy Sprint',
    price: 'From $1,500 / month',
    description: 'Ideal for founders who need marketing direction but not yet a full embedded CMO.',
    deliverables: [
      { title: 'Marketing audit and constraint map', detail: 'Week 1–2' },
      { title: 'ICP definition and positioning document', detail: 'Week 2–3' },
      { title: 'GTM strategy and 90-day roadmap', detail: 'Week 3–4' },
    ],
  },
  {
    name: 'Embedded CMO',
    price: 'Scoped on call',
    description: 'Full fractional CMO embed — strategy, team management, and system build-out over 90 days.',
    deliverables: [
      { title: 'Everything in Strategy Sprint', detail: 'Month 1' },
      { title: 'Demand gen engine setup', detail: 'Month 2' },
      { title: 'CRM workflow and lead scoring', detail: 'Month 2' },
      { title: 'Content system and editorial calendar', detail: 'Month 2–3' },
      { title: 'Board-ready reporting dashboard', detail: 'Month 3' },
      { title: 'Team structure and hiring plan', detail: 'Ongoing' },
    ],
  },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
            What you get
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Fractional CMO services at Pressense deliver concrete outputs on a defined timeline. You get a working marketing system, not a slide deck. The right tier depends on your stage — confirmed on the diagnostic call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {tiers.map((tier) => (
            <div key={tier.name} className="glass-card rounded-xl p-6 border border-border/40 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">{tier.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-lg border border-primary/30 bg-primary/5 text-xs font-semibold text-primary whitespace-nowrap">
                  {tier.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
              <ul className="space-y-2 pt-2 border-t border-border/30">
                {tier.deliverables.map((item) => (
                  <li key={item.title} className="flex items-start justify-between gap-4">
                    <span className="text-sm text-foreground">{item.title}</span>
                    <span className="text-xs text-muted-foreground shrink-0">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground max-w-2xl mb-3">
          Every engagement starts with a{' '}
          <Link href="/contact" className="text-primary hover:underline">free diagnostic call</Link>{' '}
          to confirm fit, scope, and which tier is right for your business.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl">
          For clients who started with a systems or internal-tools engagement, fractional CMO work often follows naturally once the operational foundation is in place — ask about combined engagements.
        </p>

      </div>
    </section>
  )
}
