const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'We map the current operating workflow: how leads are tracked, how sales are managed, how delivery is coordinated, how finance is tracked, and where the gaps are. We interview the people doing the work, review the current tools, and identify the highest-cost failure points.',
    deliverable: 'Operating gap map and tool audit',
  },
  {
    number: '02',
    name: 'Design',
    description: 'Before any software is touched, we design the workflow: pipeline stages, ownership rules, handoff logic, reporting requirements, and automation triggers. This design is the source of truth for the build. We agree on what success looks like before we start.',
    deliverable: 'Workflow design document and system specification',
  },
  {
    number: '03',
    name: 'Build',
    description: 'We build the system inside the right tools: HubSpot for sales-led businesses, Notion or Airtable for operations-heavy teams, custom tools for workflows that no off-the-shelf software handles cleanly. We connect the tools, build the automations, and configure reporting.',
    deliverable: 'Live CRM, ERP-lite, or operational system with automation and reporting',
  },
  {
    number: '04',
    name: 'Train and Handover',
    description: 'We train the team on how to use the system, document the workflow, and build in the quality controls that keep data clean over time. The system should work without us. You leave with documentation, training, and a team that trusts the data.',
    deliverable: 'Team training, documentation, and quality control checklist',
  },
]

export function CrmMethodologySection() {
  return (
    <section className="py-20 md:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">The Pressense Method</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
          Map the workflow first. Build the system second.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-14">
          Most CRM implementations fail because software is configured before the workflow is designed. We design the operating process first, build the system to match it, and train the team to trust and maintain it.
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
