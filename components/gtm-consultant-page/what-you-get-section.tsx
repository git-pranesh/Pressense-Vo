const deliverables = [
  { title: 'ICP definition and buyer intelligence report', detail: 'Week 1-2' },
  { title: 'Positioning statement and competitive map', detail: 'Week 2' },
  { title: 'Channel playbook (2-3 channels)', detail: 'Week 3-4' },
  { title: 'Sales motion design and qualification framework', detail: 'Week 4-5' },
  { title: 'Messaging framework and objection handling guide', detail: 'Week 5' },
  { title: 'CRM configuration and pipeline dashboards', detail: 'Week 6' },
  { title: 'GTM playbook (full documentation)', detail: 'Week 7-8' },
  { title: 'Team training and 30-day review', detail: 'Week 8+' },
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
              Every PRESS Framework engagement produces eight named deliverables. Not a deck of recommendations. Actual assets your team uses from day one, built in your tools, documented in your language.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">8-week engagement</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Starting from</span>
              <span className="text-sm font-semibold text-foreground">$2,500</span>
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
