const deliverables = [
  { week: 'Week 1', phase: 'Audit', items: 'Operations audit report, bottleneck prioritisation, tool inventory' },
  { week: 'Week 2', phase: 'Architecture', items: 'Systems design document, integration map, 90-day roadmap' },
  { week: 'Weeks 3–4', phase: 'Build', items: 'SOPs, tool configurations, workflow automations, integrations live' },
  { week: 'Week 5+', phase: 'Deploy', items: 'Team training, post-launch monitoring, scaling guide' },
]

const included = [
  'Full operations audit and prioritised bottleneck report',
  'Systems architecture document and roadmap',
  'SOPs and process documentation',
  'Tool integrations and workflow automations',
  'Reporting dashboard setup',
  'Team training and handover sessions',
  'Four weeks of post-launch support',
  'Scaling guide for the next 18 months',
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
              Every engagement includes full implementation. We build the systems, not just the plan. All deliverables are live and tested before handover.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end shrink-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-primary/30 bg-primary/5">
              <span className="text-sm font-semibold text-primary">90-day engagement</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-border/40 bg-card/40">
              <span className="text-sm font-medium text-muted-foreground">Starting from</span>
              <span className="text-sm font-semibold text-foreground">$1,500</span>
            </div>
          </div>
        </div>

        {/* Timeline table */}
        <div className="rounded-2xl border border-border/40 overflow-hidden mb-10">
          <div className="grid grid-cols-3 bg-card/60 px-6 py-3 border-b border-border/40">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Timeline</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Phase</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Deliverables</span>
          </div>
          {deliverables.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 gap-4 ${i < deliverables.length - 1 ? 'border-b border-border/40' : ''}`}
            >
              <span className="text-sm font-semibold text-primary">{row.week}</span>
              <span className="text-sm font-semibold text-foreground">{row.phase}</span>
              <span className="text-sm text-muted-foreground">{row.items}</span>
            </div>
          ))}
        </div>

        {/* Deliverables grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {included.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border/40">
              <p className="text-sm text-foreground font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
