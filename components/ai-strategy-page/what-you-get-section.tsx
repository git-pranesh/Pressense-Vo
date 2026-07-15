const tiers = [
  {
    name: 'Strategy Sprint',
    price: 'From $1,500',
    timeline: '2 weeks',
    highlight: false,
    deliverables: [
      'AI Opportunity Map (top 5 use cases ranked by ROI)',
      'Four-dimension readiness assessment',
      'Phased implementation roadmap',
      'Tool recommendations with cost estimates',
      'One 60-minute strategy presentation session',
    ],
    note: 'Most clients identify 3+ workflows to automate — saving 8–15 hours per week.',
  },
  {
    name: 'Strategy + Pilots',
    price: 'From $2,500',
    timeline: '4 weeks',
    highlight: true,
    deliverables: [
      'Everything in Strategy Sprint',
      'Two built and tested AI pilots',
      'Process documentation for each pilot',
      'Team training session (up to 4 people)',
      'Two weeks of post-launch support',
    ],
    note: 'Most popular. Clients see working automations in production before the engagement ends.',
  },
  {
    name: 'Ongoing Retainer',
    price: 'From $1,500/month',
    timeline: 'Monthly rolling',
    highlight: false,
    deliverables: [
      'Two to three new AI builds per month',
      'Optimisation of existing systems',
      'Monthly strategy review session',
      'Priority support and iteration',
      'Quarterly roadmap refresh',
    ],
    note: 'Dedicated AI operator without the hire. Most clients recover the retainer cost in week one.',
  },
]

const deliverableRows = [
  { item: 'AI Opportunity Map', sprint: true, pilots: true, retainer: true },
  { item: 'Readiness assessment', sprint: true, pilots: true, retainer: true },
  { item: 'Implementation roadmap', sprint: true, pilots: true, retainer: true },
  { item: 'Working pilots built', sprint: false, pilots: true, retainer: true },
  { item: 'Team training', sprint: false, pilots: true, retainer: true },
  { item: 'Monthly builds', sprint: false, pilots: false, retainer: true },
  { item: 'Ongoing optimisation', sprint: false, pilots: false, retainer: true },
]

export function AIStrategyWhatYouGet() {
  return (
    <section
      className="py-16 bg-background"
      aria-labelledby="what-you-get-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4 block">
            What you get
          </span>
          <h2
            id="what-you-get-heading"
            className="text-3xl sm:text-4xl font-medium text-foreground text-balance leading-tight mb-4"
          >
            How much does AI strategy consulting cost?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Enterprise AI strategy firms charge $25,000 to $250,000 for engagements that end in a presentation deck. Our engagements end with working systems your team uses on day one of week five. Every tier below includes implementation, not just advice. Pricing is fixed-scope so there are no budget surprises. Larger or multi-site engagements? <a href="/diagnostic" className="text-primary hover:underline">Let&apos;s scope it together.</a>
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-5 flex flex-col gap-4 ${
                  tier.highlight
                    ? 'border-primary/40 bg-primary/5'
                    : 'border-border/50 bg-card/30'
                }`}
              >
                {tier.highlight && (
                  <span className="text-xs font-medium text-primary uppercase tracking-widest">
                    Most popular
                  </span>
                )}
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">{tier.name}</p>
                  <p className="text-2xl font-medium text-foreground">{tier.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tier.timeline}</p>
                </div>
                <ul className="space-y-2" aria-label={`${tier.name} deliverables`}>
                  {tier.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">+</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/30 pt-3 mt-auto">
                  {tier.note}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-border/40">
            <table className="w-full text-sm" aria-label="Deliverable comparison by tier">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left px-4 py-3 text-foreground font-medium">Deliverable</th>
                  <th className="px-4 py-3 text-center text-muted-foreground font-medium">Sprint</th>
                  <th className="px-4 py-3 text-center text-primary font-medium">Pilots</th>
                  <th className="px-4 py-3 text-center text-muted-foreground font-medium">Retainer</th>
                </tr>
              </thead>
              <tbody>
                {deliverableRows.map((row, i) => (
                  <tr
                    key={row.item}
                    className={i % 2 === 0 ? 'bg-card/20' : ''}
                  >
                    <td className="px-4 py-3 text-muted-foreground">{row.item}</td>
                    <td className="px-4 py-3 text-center text-muted-foreground" aria-label={row.sprint ? 'Included' : 'Not included'}>
                      {row.sprint ? <span className="text-primary font-bold">+</span> : <span className="opacity-30">-</span>}
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground" aria-label={row.pilots ? 'Included' : 'Not included'}>
                      {row.pilots ? <span className="text-primary font-bold">+</span> : <span className="opacity-30">-</span>}
                    </td>
                    <td className="px-4 py-3 text-center text-muted-foreground" aria-label={row.retainer ? 'Included' : 'Not included'}>
                      {row.retainer ? <span className="text-primary font-bold">+</span> : <span className="opacity-30">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
