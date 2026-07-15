export function MvpReplitMethodologySection() {
  const phases = [
    {
      number: '01',
      name: 'Diagnose',
      tagline: 'Define the value loop before touching Replit',
      description:
        'Week one is a structured scoping session. We define the primary value loop: the single user action that tests your core hypothesis. We review your validation evidence, map the minimum feature set, and cut anything that does not directly support the loop. You receive a scope document, a cut features list, and a fixed-price build estimate before the project starts. Nothing is ambiguous.',
      deliverable: 'Scope document + cut list + fixed-price estimate',
    },
    {
      number: '02',
      name: 'Architect',
      tagline: 'Design the data model and Replit project structure',
      description:
        'Week two covers architecture. We design the PostgreSQL schema, map the key user journeys, specify the integration points, and set up the Replit project in your account with the correct environment structure. We configure secrets management, set up the production deployment pipeline, and establish the code conventions that will govern the entire build. The project is owned by you from commit one.',
      deliverable: 'Replit project setup + database schema + integration spec',
    },
    {
      number: '03',
      name: 'Build',
      tagline: 'Two-week sprints with live deployments every cycle',
      description:
        'Weeks three and four are sprint one. Authentication, the primary data model, and the core user journey are built and deployed to production, not a demo environment. Real users can access it. Week five and six are sprint two: integrations, secondary flows, admin access, and end-to-end testing. We deploy early because production feedback is worth more than demo feedback. Every production build on Replit uses parameterised queries, environment-variable-managed secrets, a tested auth library, and role-scoped data access from the first sprint.',
      deliverable: 'Live MVP on Replit with core value loop complete',
    },
    {
      number: '04',
      name: 'Stabilise',
      tagline: 'Harden the codebase and hand over cleanly',
      description:
        'Week six ends with a stabilisation pass: anything the first real users flag gets fixed, the one or two secondary features that testing reveals as essential get added, and analytics are configured so you track the behaviour that matters. The handover session covers the architecture, deployment process, database structure, and integration points. Every environment variable is documented. The codebase is yours to run, iterate, or migrate without Pressense in the loop.',
      deliverable: 'Hardened live product + documentation + handover session',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-ink-foreground text-balance mb-4 leading-tight">
          How we build your Replit MVP: the 6-week process
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed mb-14 max-w-2xl">
          Six weeks is achievable because the scope is locked before development starts. One week of scoping, one week of architecture, four weeks of two-sprint builds. Every phase ends with a named deliverable and a live deployment.
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
                <span className="font-medium text-primary/20 leading-none block mb-1">
                  {phase.number}
                </span>
                <h3 className="text-xl font-medium text-foreground">{phase.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{phase.tagline}</p>
              </div>

              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Deliverable</span>
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
