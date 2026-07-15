export function MvpReplitWhatYouGetSection() {
  const deliverables = [
    { week: 'Week 1', item: 'Scope document', detail: 'Value loop definition, feature list, cut list, fixed-price estimate' },
    { week: 'Week 2', item: 'Replit project setup', detail: 'Your account, production pipeline configured, secrets managed, schema designed' },
    { week: 'Week 2', item: 'Architecture spec', detail: 'PostgreSQL schema, user journey map, integration points, tech decisions documented' },
    { week: 'Weeks 3-4', item: 'Sprint 1 live build', detail: 'Auth, primary data model, core user journey deployed to production on Replit' },
    { week: 'Weeks 5-6', item: 'Sprint 2 live build', detail: 'Integrations, secondary flows, admin access, end-to-end testing complete' },
    { week: 'Week 6', item: 'Stabilisation pass', detail: 'User feedback incorporated, performance tested, analytics configured' },
    { week: 'Week 6', item: 'Handover session', detail: 'Architecture walkthrough, deployment docs, environment variable documentation' },
  ]

  return (
    <section id="what-you-get" className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">
          Deliverables
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What you get at the end of 6 weeks
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every week has a named output. You always know what you are paying for and what you will have when each phase completes.
        </p>

        <div className="overflow-hidden rounded-2xl mb-10">
          {deliverables.map((row, i) => (
            <div
              key={`${row.week}-${row.item}`}
              className={`flex flex-col sm:flex-row gap-3 sm:gap-6 px-6 py-5 items-start sm:items-center ${
                i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'
              } ${i < deliverables.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <span className="text-xs font-medium text-primary uppercase tracking-wider sm:w-20 flex-shrink-0">
                {row.week}
              </span>
              <span className="text-sm font-medium text-foreground sm:w-52 flex-shrink-0">
                {row.item}
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">{row.detail}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm font-medium text-foreground mb-2">Production standards applied from day one</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Auth uses a tested library. Queries are parameterised throughout. Secrets live in environment variables. Role-based access is scoped at the data layer. These are not things we add at the end. They are how the project is built from sprint one.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <p className="text-sm font-medium text-foreground mb-2">You own it, forever</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Replit project lives in your account. The code is standard TypeScript and PostgreSQL. No proprietary framework, no Pressense dependency in the runtime. You can hire any developer to pick it up, migrate it to any host, or fork it at any point.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card">
            <p className="text-sm font-medium text-foreground mb-2">Start with a diagnostic</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Sixty minutes. We scope the build, define the value loop, and give you a fixed-price estimate before the session ends. No obligation if the fit is not right.
            </p>
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Book a diagnostic
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
