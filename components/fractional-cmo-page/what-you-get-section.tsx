import Link from 'next/link'

const deliverables = [
  { title: 'Marketing audit and constraint map', detail: 'Week 1-2' },
  { title: 'ICP definition and positioning document', detail: 'Week 2-3' },
  { title: 'GTM strategy and 90-day roadmap', detail: 'Week 3-4' },
  { title: 'Demand gen engine setup', detail: 'Month 2' },
  { title: 'CRM workflow and lead scoring', detail: 'Month 2' },
  { title: 'Content system and editorial calendar', detail: 'Month 2-3' },
  { title: 'Board-ready reporting dashboard', detail: 'Month 3' },
  { title: 'Team structure and hiring plan', detail: 'Ongoing' },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
              What you get
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Fractional CMO services at Pressense deliver concrete outputs on a defined timeline. You get a working marketing system, not a slide deck. Every engagement includes a 90-day sprint structure and a named deliverable for each phase.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">90-day engagement sprint</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">From</span>
              <span className="text-sm font-semibold text-foreground">$2,000 / month</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {deliverables.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border/40 flex flex-col gap-2">
              <p className="text-foreground font-medium leading-snug">{item.title}</p>
              <span className="text-xs text-muted-foreground">{item.detail}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground max-w-2xl">
          See full package details on the{' '}
          <Link href="/packages" className="text-primary hover:underline">packages page</Link>.
          Every engagement starts with a free diagnostic to confirm fit and scope.
        </p>

      </div>
    </section>
  )
}
