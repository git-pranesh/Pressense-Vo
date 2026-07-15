const phases = [
  {
    number: '01',
    name: 'Diagnose',
    tagline: 'Find what is actually broken',
    description: 'We spend the first week running a structured operations audit. We interview your team, map every workflow, review your current toolstack, and identify where decisions stall, data breaks, and time gets wasted. Most companies discover two or three critical bottlenecks they did not know were connected.',
    deliverable: 'Operations audit report with prioritised bottleneck list',
  },
  {
    number: '02',
    name: 'Strategise',
    tagline: 'Design the right fix for your stage',
    description: 'We translate the audit findings into a systems architecture. This covers which tools to connect, which processes to document, which workflows to automate, and which decisions to delegate. We do not recommend enterprise solutions to a 20-person company. The design fits your stage and your next 18 months.',
    deliverable: 'Systems architecture document and 90-day implementation roadmap',
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Build the systems, not just the docs',
    description: 'We build. That means configuring tools, building integrations, writing SOPs, creating onboarding guides, and setting up reporting dashboards. We do not hand you a slide deck and leave. Every deliverable is live and tested before we sign it off.',
    deliverable: 'Live systems, integrations, documentation, and training materials',
  },
  {
    number: '04',
    name: 'Scale',
    tagline: 'Hand over, train, and optimise',
    description: 'We run a structured handover with your team, covering every system we built. Then we monitor for four weeks post-launch to catch anything that needs adjustment. The final deliverable is a scaling guide that tells your team how to extend each system as you grow.',
    deliverable: 'Team training sessions, post-launch monitoring, and scaling guide',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow-on-dark">How We Work</span>
        </div>

        <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-4">
          The Pressense Systems Method
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-14">
          Four phases. Every engagement follows this structure. Nothing skipped.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-medium text-primary/30 leading-none">{phase.number}</span>
                <div>
                  <span className="text-xl font-medium text-foreground">{phase.name}</span>
                  <p className="text-sm text-primary/80 font-medium mt-0.5">{phase.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
              <div className="pt-4">
                <span className="eyebrow font-medium">Deliverable</span>
                <p className="text-sm text-foreground font-medium mt-1">{phase.deliverable}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
