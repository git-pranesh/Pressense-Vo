const phases = [
  {
    number: '1',
    phase: 'Diagnose',
    tagline: 'Understand the real bottleneck',
    description:
      'We audit your current operations in the first week. We interview the people doing the manual work, map every process to a tool and a person, and calculate the true time cost of your current state. Most clients discover two to three high-impact automation opportunities they had not considered.',
    deliverable: 'Operations audit report with time-cost analysis',
    duration: 'Week 1',
  },
  {
    number: '2',
    phase: 'Strategise',
    tagline: 'Design the automated architecture',
    description:
      'We document the future-state architecture: which tools connect, what triggers each workflow, what logic handles exceptions, and what the fallback is when something breaks. You approve the design before we write a single line of code or configure a single automation.',
    deliverable: 'Workflow architecture document and approved build plan',
    duration: 'Week 2',
  },
  {
    number: '3',
    phase: 'Build',
    tagline: 'Build, test, and document everything',
    description:
      'We build the automations on Make, n8n, Zapier, or custom API depending on your stack. Every workflow is tested with real data, edge cases are handled, and full documentation is written so your team can understand and maintain what we build.',
    deliverable: 'Live automations with documentation and test logs',
    duration: 'Weeks 3–4',
  },
  {
    number: '4',
    phase: 'Scale',
    tagline: 'Monitor, train, and expand',
    description:
      'We monitor performance for 30 days post-launch, run a team training session, and identify the next batch of workflows to automate. Clients who stay on retainer typically double the number of automated processes in the first six months.',
    deliverable: '30-day monitoring report and next-phase roadmap',
    duration: 'Week 5+',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
          Our Methodology
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink-foreground text-balance mb-4">
          The Pressense Workflow Automation Framework
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-12 max-w-2xl">
          Every engagement runs through four phases. Each phase ends with a deliverable. Nothing moves forward without your sign-off.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary/20 leading-none">{phase.number}</span>
                <div>
                  <h3 className="font-semibold text-lg text-foreground leading-tight">{phase.phase}</h3>
                  <p className="text-sm text-primary/80 font-medium">{phase.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{phase.description}</p>
              <div className="flex items-start justify-between gap-4 pt-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-1">
                    Deliverable
                  </p>
                  <p className="text-sm text-muted-foreground">{phase.deliverable}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-1">
                    Timeline
                  </p>
                  <p className="text-sm text-foreground font-medium">{phase.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
