const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'We spend the first week inside your business. We map every manual process, interview the people doing the work, and identify which workflows are costing you the most time and money. You receive a prioritised list of automation opportunities ranked by ROI.',
    deliverable: 'Workflow audit report and automation roadmap',
  },
  {
    number: '02',
    name: 'Strategise',
    description: 'Before we write a single line of code, we design the system architecture. We choose the right tools for your stack, define the data flows, and plan integrations with your existing platforms. You approve the blueprint before build begins.',
    deliverable: 'Technical design document and tool selection',
  },
  {
    number: '03',
    name: 'Build',
    description: 'We build, test, and iterate in two-week sprints. You see working automations running against real data before we ship anything to production. Edge cases are handled, error alerts are set up, and your team is trained on how each system works.',
    deliverable: 'Live automations, documentation, and team training',
  },
  {
    number: '04',
    name: 'Scale',
    description: 'After launch we monitor performance for 30 days, fix anything that needs adjustment, and identify the next highest-ROI workflow to automate. You leave with a scaling guide so your team can add new automations without us if you choose to.',
    deliverable: '30-day performance review and scaling guide',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow-on-dark">The Pressense Method</span>
        </div>

        <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-4">
          Diagnose. Strategise. Build. Scale.
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-14">
          Every engagement follows the same four-phase process. No surprises, no scope creep. You know what happens in each phase and what you receive at the end of it.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="font-medium text-primary/20 leading-none">{phase.number}</span>
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium pt-1">{phase.name}</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{phase.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
              <div className="flex items-start gap-2.5 pt-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-foreground font-medium">{phase.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
