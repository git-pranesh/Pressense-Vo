const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'We study the business, customer, market, team, funnel, systems, and revenue flow to understand what is actually happening. Not what founders think is happening. We interview the people doing the work, review the data, and map the constraint.',
    deliverable: 'Constraint map and prioritised opportunity list',
  },
  {
    number: '02',
    name: 'Strategise',
    description: 'We define the highest-leverage priorities, clarify the decisions that need to be made, and build a practical direction for the next stage. This includes GTM positioning, offer clarity, channel prioritisation, and a view of what to stop doing.',
    deliverable: 'GTM direction, positioning document, and decision framework',
  },
  {
    number: '03',
    name: 'Build the Roadmap',
    description: 'We turn strategy into a sequenced execution plan across marketing, content, systems, workflows, people, and technology. Every item has an owner, a timeline, and a measurable outcome. Nothing sits in a deck without an action attached.',
    deliverable: '90-day roadmap with ownership and success metrics',
  },
  {
    number: '04',
    name: 'Support Execution',
    description: 'Where useful, we help implement the plan through internal tools, websites, content systems, AI workflows, CRM systems, or operating processes. Strategy that connects to execution is advisory that actually moves the business forward.',
    deliverable: 'Implementation support across Pressense service lines',
  },
]

export function AdvisoryMethodologySection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">The Pressense Method</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
          Diagnose. Strategise. Build. Execute.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-14">
          Every advisory engagement follows the same four-phase process. You know what happens in each phase and what you receive at the end of it. No surprises, no scope creep.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="text-4xl font-bold text-primary/20 leading-none">{phase.number}</span>
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium pt-1">{phase.name}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{phase.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
              <div className="flex items-start gap-2.5 pt-4 border-t border-border/40">
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
