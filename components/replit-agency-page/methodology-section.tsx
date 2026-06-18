const phases = [
  {
    number: '01',
    name: 'Diagnose',
    tagline: 'Define the build before writing a line of code',
    deliverable: 'Scoped build brief',
    weeks: 'Week 1',
    body1:
      'We start with a 60-minute diagnostic session. You describe what you need in plain English. We ask about the primary user, the core workflow, the data that needs to flow in and out, and the integrations you rely on. Most clients have a clear mental model. Our job is to translate it into a precise build scope.',
    body2:
      'The output is a written brief: user journeys, data model, integration list, and a fixed-price estimate. You approve the scope before we write a single line of code. No surprises at week six.',
  },
  {
    number: '02',
    name: 'Strategise',
    tagline: 'Architecture and component decisions before building',
    deliverable: 'Technical architecture doc',
    weeks: 'Week 1–2',
    body1:
      'We design the data model, select integrations, and plan the component structure. This is where we make decisions that are hard to change later: how auth works, how data is structured, which third-party APIs handle which jobs. Getting this right in week one means clean code at week eight.',
    body2:
      'Everything is built on Replit in standard TypeScript. The architecture document lives in your Replit workspace. Your development team, your future hires, or any contractor can read it and understand the system without calling us.',
  },
  {
    number: '03',
    name: 'Build',
    tagline: 'Two-week sprints with working software at every checkpoint',
    deliverable: 'Working app per sprint',
    weeks: 'Weeks 2–7',
    body1:
      'We work in two-week sprints. At the end of each sprint, you have working software to test and respond to. Not a progress report. Not a Figma file. A live URL. Feedback from real use shapes the next sprint. This is how the eight-week timeline holds.',
    body2:
      'Production readiness is not an afterthought — it is built into every sprint from day one. Authentication uses a proven library (Better Auth or Supabase Auth), not a hand-rolled session cookie. The database uses a managed PostgreSQL provider (Neon or Supabase) with parameterised queries throughout. Environment variables and API secrets never appear in source code. Role-based access controls are scoped at the data layer, not just the UI. The result is an app that is secure, maintainable, and auditable before it goes live.',
  },
  {
    number: '04',
    name: 'Scale',
    tagline: 'Handover, documentation, and ongoing sprint retainer',
    deliverable: 'Production handover + docs',
    weeks: 'Week 8+',
    body1:
      'Week eight is handover. We walk through every component, document the data model, record a video walkthrough of the admin and developer interfaces, and hand over the Replit workspace with all credentials and environment variables. Your team can maintain it from day one.',
    body2:
      'Most clients continue on a dedicated developer and support retainer. Each sprint adds features based on what real users asked for. Retainer pricing is scoped on a call based on the level of support needed — bug fixes within 24–48 hours are standard. There is no lock-in: you can pause or cancel with two weeks notice.',
  },
]

export function ReplitAgencyMethodologySection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          How we work
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          The Pressense Replit build framework
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Diagnose. Strategise. Build. Scale. Four phases, fixed timeline, working software at every checkpoint.
        </p>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.name}
              className={`py-10 grid md:grid-cols-[1fr_2fr] gap-8 ${i < phases.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-primary/60">{phase.number}</span>
                  <span className="text-xl font-semibold text-foreground">{phase.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{phase.tagline}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/8 border border-primary/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span className="text-xs font-medium text-primary">{phase.deliverable}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{phase.weeks}</p>
              </div>
              <div>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">{phase.body1}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{phase.body2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
