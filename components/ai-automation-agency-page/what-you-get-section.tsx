const deliverables = [
  { title: 'Workflow audit and ROI analysis', detail: 'Week 1' },
  { title: 'AI system design and architecture', detail: 'Week 1-2' },
  { title: 'Integration with your existing tools', detail: 'Week 2-3' },
  { title: 'Implementation and testing', detail: 'Week 2-4' },
  { title: 'Team training and documentation', detail: 'Week 4' },
  { title: 'Performance monitoring dashboard', detail: 'Delivery' },
  { title: 'Ongoing optimisation and support', detail: 'Post-launch' },
  { title: 'Scaling guide for future automation', detail: 'Delivery' },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-4">What you get</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Every project includes full implementation, not just consulting. We deliver working systems with documentation your team can operate on day one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">2-4 week delivery</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Starting from</span>
              <span className="text-sm font-semibold text-foreground">$3,500</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border/40 flex flex-col gap-2">
              <p className="text-foreground font-medium leading-snug">{item.title}</p>
              <span className="text-xs text-muted-foreground">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
