export function MvpMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnose',
      tagline: 'Scope the MVP before a line of code is written',
      description:
        'Week one is a structured discovery session. We define the primary value loop: the single action a user takes that tests your core hypothesis. We cut every feature that does not directly support that loop. You see a scope document, a feature list, and a fixed-price build estimate before the project starts. Nothing is ambiguous.',
      deliverable: 'Scope document + fixed-price build estimate',
    },
    {
      number: '02',
      name: 'Strategise',
      tagline: 'Design the data model and user flows',
      description:
        'Week two covers architecture. We design the database schema, the key user journeys, the integration points, and the deployment environment. We use Replit as the primary build platform, which means the codebase is readable, standard TypeScript, and owned by you from the first commit. No proprietary framework, no vendor dependency.',
      deliverable: 'Architecture diagram + user flow map + tech spec',
    },
    {
      number: '03',
      name: 'Build',
      tagline: 'Ship in two-week sprints with working software each cycle',
      description:
        'Weeks three through six are two-week sprints. At the end of each sprint you have working software to test against real users or internal reviewers. We do not show you a demo environment. We deploy to production early so feedback is grounded in real behaviour. The core MVP is live and functional by the end of week six.',
      deliverable: 'Live MVP with core value loop and primary user journey',
    },
    {
      number: '04',
      name: 'Scale',
      tagline: 'Iterate based on real user data',
      description:
        'Weeks seven and eight are stabilisation and the first iteration cycle. We fix anything the initial user feedback surfaces, add the one or two secondary features that testing reveals are essential, and set up analytics so you can track the behaviour that matters. After week eight you have a stable, live product and a clear next-step roadmap.',
      deliverable: 'Stable live product + iteration roadmap + analytics setup',
    },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          How long does MVP development take? The 8-week framework
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Eight weeks is not a marketing claim. It is a structured process: one week of scoping, one week of architecture, four weeks of two-sprint build cycles, two weeks of stabilisation and iteration. Every phase ends with a named deliverable.
        </p>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`flex flex-col md:flex-row gap-8 py-10 ${
                i < phases.length - 1 ? 'border-b border-border/30' : ''
              }`}
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20 leading-none block mb-1">
                  {phase.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{phase.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.tagline}</p>
              </div>

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
