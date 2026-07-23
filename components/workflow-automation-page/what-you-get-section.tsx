import Link from 'next/link'

const deliverables = [
  { item: 'Operations audit and process map', week: 'Week 1' },
  { item: 'Automation priority matrix with ROI estimates', week: 'Week 1' },
  { item: 'Workflow architecture document', week: 'Week 2' },
  { item: 'Approved build plan with tool selection', week: 'Week 2' },
  { item: 'Built and tested automations', week: 'Weeks 3–4' },
  { item: 'Full documentation for each workflow', week: 'Weeks 3–4' },
  { item: 'Team training session (live, 90 min)', week: 'Week 5' },
  { item: '30-day monitoring report and next-phase roadmap', week: 'Week 5+' },
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
          Deliverables
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
          What you get from a workflow automation consulting engagement
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          Every engagement is a five-week sprint from audit to live automations. Below is the full deliverable list with timing.           Consulting starts from{' '}
          <Link href="/pricing" className="text-primary hover:underline">
            $1,200 for an audit and roadmap
          </Link>
          . Implementation is scoped and quoted after the diagnostic call.
        </p>

        {/* Timeline table */}
        <div className="rounded-2xl border border-border/40 overflow-hidden mb-10">
          <div className="grid grid-cols-3 bg-card/60 px-6 py-3 border-b border-border/40">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground col-span-2">
              Deliverable
            </p>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground text-right">
              Timeline
            </p>
          </div>
          {deliverables.map((row, i) => (
            <div
              key={row.item}
              className={`grid grid-cols-3 px-6 py-4 border-b border-border/20 last:border-0 ${
                i % 2 === 0 ? 'bg-background' : 'bg-card/20'
              }`}
            >
              <p className="text-foreground text-sm leading-relaxed col-span-2">{row.item}</p>
              <p className="text-muted-foreground text-sm text-right">{row.week}</p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          {[
            '5-week engagement',
            'Consulting from $1,200',
            'Implementation scoped on call',
            'Australia + Global clients',
            'Works with your existing tools',
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center px-4 py-2 rounded-full border border-border/40 text-sm text-muted-foreground bg-card/30"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
