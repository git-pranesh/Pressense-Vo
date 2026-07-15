export function CustomCrmMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnose',
      tagline: 'Understand your actual sales motion',
      description:
        'We spend one to two weeks mapping how deals actually move through your business. Not how the CRM should work in theory. How your team actually tracks leads, manages follow-up, handles handoffs, and reports to leadership. We document the gaps, the workarounds, and the data that matters.',
      deliverable: 'Sales process map + data requirements document',
    },
    {
      number: '02',
      name: 'Strategise',
      tagline: 'Design the system before building it',
      description:
        'Before writing a line of code, we design the data schema, user flows, automation logic, and integration points. You see a full architecture diagram, a feature scope, a timeline, and a build cost estimate. Nothing is ambiguous before development starts.',
      deliverable: 'CRM architecture blueprint + build specification',
    },
    {
      number: '03',
      name: 'Build',
      tagline: 'Ship the MVP in weeks, not months',
      description:
        'We build on Replit. That means the codebase is readable, modifiable, and yours from day one. We develop in two-week sprints with working software at the end of each sprint. You test against real data, not a demo environment. The MVP is live in six to fourteen weeks depending on scope.',
      deliverable: 'Live CRM MVP with core workflows and integrations',
    },
    {
      number: '04',
      name: 'Scale',
      tagline: 'Add capability as your business grows',
      description:
        'After the MVP is stable and your team is using it, we move to expansion. New modules, additional integrations, reporting dashboards, AI features, or mobile access. Because you own the code, every new feature is a targeted sprint, not a platform upgrade that requires a new licence tier.',
      deliverable: 'Quarterly roadmap + ongoing sprint retainer',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          The Pressense CRM Build Framework
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Diagnose. Strategise. Build. Scale. Every custom CRM development engagement follows this sequence. Each phase ends with a named deliverable so you always know what you are paying for.
        </p>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${
                i < phases.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              {/* Left: number + name */}
              <div className="md:w-48 flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20 leading-none block mb-1">
                  {phase.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{phase.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.tagline}</p>
              </div>

              {/* Right: description + deliverable */}
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Deliverable</span>
                  <span className="text-xs text-foreground">{phase.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
