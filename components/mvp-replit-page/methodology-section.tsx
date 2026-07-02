export function MvpReplitMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Audit',
      tagline: 'Know exactly what you have before writing a single line',
      description:
        'Week one is a structured codebase review. We go through every file the Agent wrote: the data model, the auth flow, the API structure, the environment configuration, and how secrets are handled. We flag what is salvageable and what needs to be rebuilt. You get a written audit report, a clear build plan, and a fixed-price estimate. Nothing starts until you have agreed to the scope.',
      deliverable: 'Audit report + build plan + fixed-price estimate',
    },
    {
      number: '02',
      name: 'Architecture',
      tagline: 'Design the system before building it',
      description:
        'Week two is architecture. We design the database schema, the authentication flow, the API structure, and the environment setup. We configure separate development, staging, and production environments. Auth uses a proven library, not custom code. The database uses Neon PostgreSQL with parameterised queries throughout. Secrets are stored in environment variables, never in source files. This week produces the blueprint every subsequent sprint builds from.',
      deliverable: 'Architecture document + environment setup + auth configured',
    },
    {
      number: '03',
      name: 'Build',
      tagline: 'Ship the core user journey in production-grade sprints',
      description:
        'Weeks three through five are focused build sprints. Each sprint ends with working, deployable software on the staging environment. We build the primary value loop first: the single workflow a user completes that tests your core hypothesis. Payments, integrations, and secondary journeys are layered in order of priority. Every feature is built with error handling, input validation, and proper database queries from the first commit, not added at the end.',
      deliverable: 'Production-grade MVP on your Replit account with core user journey live',
    },
    {
      number: '04',
      name: 'Launch',
      tagline: 'Deploy, hand over, and set you up to keep building',
      description:
        'Week six is stabilisation, launch, and handover. We configure your custom domain, SSL, and basic monitoring. We run a final security pass, deploy to production, and document the codebase so you or any future developer can understand it without asking us. Optionally, we can layer in a GTM kickoff: ICP definition, early channel strategy, and a 90-day content or outreach plan. You leave week six with a live product and a clear path forward.',
      deliverable: 'Live production product + handover docs + optional GTM kickoff',
    },
  ]

  return (
    <section id="how-we-work" className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          How long does Replit MVP development take? The 6-week process
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Six weeks is a structured process, not a marketing number. One week of audit, one week of architecture, three weeks of build sprints, one week of stabilisation and launch. Every phase ends with a named deliverable you can hold us to.
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
                <span className="text-4xl font-bold text-primary/20 font-mono block mb-1">{phase.number}</span>
                <span className="text-base font-semibold text-foreground block">{phase.name}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-2">{phase.tagline}</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">{phase.description}</p>
                <div className="inline-flex items-center gap-2 text-sm text-foreground/70 bg-secondary/40 rounded-lg px-3 py-1.5">
                  <div className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" aria-hidden="true" />
                  <span>{phase.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
