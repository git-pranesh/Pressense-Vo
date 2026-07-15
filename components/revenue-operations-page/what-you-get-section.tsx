const deliverables = [
  { title: 'Revenue audit and constraint map', detail: 'Week 1-2' },
  { title: 'CRM data model redesign', detail: 'Week 2-3' },
  { title: 'Pipeline stage definitions and handoff criteria', detail: 'Week 3' },
  { title: 'Shared KPI framework and reporting dashboard', detail: 'Week 3-4' },
  { title: 'Forecast model and deal review cadence', detail: 'Week 4-5' },
  { title: 'Team training and process documentation', detail: 'Week 5-6' },
  { title: 'Monthly revenue review playbook', detail: 'Delivery' },
  { title: 'Scaling and hiring transition guide', detail: 'Delivery' },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-4">
              What you get
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every engagement delivers a working revenue operating model, not a slide deck. You receive documented processes, a configured CRM, and a team that knows how to use both.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-sm font-medium text-primary">6-week implementation</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Starting from</span>
              <span className="text-sm font-medium text-foreground">$2,000/month</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="rounded-xl bg-card border border-border p-5 border border-border/40 flex flex-col gap-2">
              <p className="text-foreground font-medium leading-snug">{item.title}</p>
              <span className="text-xs text-muted-foreground">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
