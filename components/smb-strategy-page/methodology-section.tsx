const phases = [
  {
    number: '01',
    name: 'Diagnose',
    tagline: 'Understand the business as it actually is',
    deliverable: 'Business Clarity Map',
    weeks: 'Week 1–2',
    body1:
      'The first two weeks are a deep conversation about your business. Revenue model, operations, team structure, current bottlenecks, and personal goals for the business. We are not looking for what you wish the business was. We are mapping what it actually is.',
    body2:
      'You receive a Business Clarity Map: a written summary of your current state, the three biggest constraints on growth, and the specific decisions that need to be made. This is the foundation for everything that follows.',
  },
  {
    number: '02',
    name: 'Strategise',
    tagline: 'Define the direction and the decisions',
    deliverable: 'Growth Roadmap',
    weeks: 'Week 3–4',
    body1:
      'Using the Clarity Map, we define a specific direction for the next six to twelve months. This is not a mission statement. It is a prioritised list of moves: which markets to focus on, what to stop doing, where to invest time, and what outcomes to measure.',
    body2:
      'You receive a Growth Roadmap with quarterly milestones, a decision log explaining the reasoning behind each choice, and a one-page summary you can share with your team or investors.',
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Turn the roadmap into a working rhythm',
    deliverable: 'Weekly Action Plan',
    weeks: 'Month 2',
    body1:
      'Strategy only works if it changes what you do on Monday morning. Month two is about translating the roadmap into a weekly rhythm. We break down quarterly milestones into fortnightly actions, identify who owns each one, and set up the tracking that keeps the plan visible.',
    body2:
      'If AI or automation belongs in the plan, we introduce it here as a deliberate tool with a specific job. If it does not, it is not mentioned. The focus stays on execution.',
  },
  {
    number: '04',
    name: 'Scale',
    tagline: 'Retainer, accountability, and ongoing direction',
    deliverable: 'Monthly Retainer with Outcome Targets',
    weeks: 'Month 3 onwards',
    body1:
      'Most clients move into a monthly retainer after the initial engagement. Sessions are fortnightly. Each session reviews progress against the previous period targets, handles any decisions that have come up, and sets the focus for the next two weeks.',
    body2:
      'Retainer outcomes are defined before the contract starts. You know exactly what you are paying for and what success looks like. If the outcomes are not being met, we change the approach.',
  },
]

export function SMBStrategyMethodologySection() {
  return (
    <section className="border-t border-border/40 py-16">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="eyebrow-line" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">How We Work</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground text-pretty mb-2">
          Diagnose. Strategise. Build. Scale.
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-10">
          The Pressense framework for small business strategy. Each phase has a named deliverable so you always know what you are getting.
        </p>
        <div className="space-y-10">
          {phases.map((phase) => (
            <div key={phase.number} className="grid grid-cols-1 sm:grid-cols-[72px_1fr] gap-4">
              <div className="flex flex-col items-start sm:items-center pt-1">
                <span className="text-3xl font-bold text-primary/40">{phase.number}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-bold text-lg text-foreground">{phase.name}</h3>
                  <span className="text-xs font-semibold tracking-widest uppercase text-primary/70 border border-primary/20 rounded-full px-2 py-0.5">{phase.weeks}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 italic">{phase.tagline}</p>
                <p className="text-xs font-semibold text-primary/70 mb-3">Deliverable: {phase.deliverable}</p>
                <p className="text-muted-foreground leading-relaxed mb-2">{phase.body1}</p>
                <p className="text-muted-foreground leading-relaxed">{phase.body2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
