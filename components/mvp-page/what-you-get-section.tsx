export function MvpWhatYouGetSection() {
  const deliverables = [
    { week: 'Week 1', item: 'Scope document', detail: 'Feature list, value loop definition, cut features list' },
    { week: 'Week 1', item: 'Fixed-price build estimate', detail: 'Agreed cost before any work begins, no mid-project surprises' },
    { week: 'Week 2', item: 'Architecture blueprint', detail: 'Database schema, user flows, integration map, tech spec' },
    { week: 'Week 2', item: 'Replit project setup', detail: 'Codebase initialised in your Replit account — owned by you from commit one' },
    { week: 'Weeks 3–4', item: 'Sprint 1 live build', detail: 'Core authentication, primary data model, first user journey deployed' },
    { week: 'Weeks 5–6', item: 'Sprint 2 live build', detail: 'Integrations, secondary flows, admin access, end-to-end testing' },
    { week: 'Week 7', item: 'Stabilisation build', detail: 'User feedback incorporated, performance tested, production-ready' },
    { week: 'Week 8', item: 'Launch-ready MVP', detail: 'Live product, analytics configured, documentation, handover session' },
  ]

  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          Deliverables
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance mb-4 leading-tight">
          What you get in 8 weeks
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Every week of the engagement has a named output. You always know what you are paying for and what you will have at the end of each phase.
        </p>

        <div className="overflow-hidden rounded-2xl border border-border/50">
          {deliverables.map((row, i) => (
            <div
              key={`${row.week}-${row.item}`}
              className={`flex flex-col sm:flex-row gap-3 sm:gap-6 px-6 py-5 items-start sm:items-center ${
                i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'
              } ${i < deliverables.length - 1 ? 'border-b border-border/30' : ''}`}
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider sm:w-20 flex-shrink-0">
                {row.week}
              </span>
              <span className="text-sm font-semibold text-foreground sm:w-52 flex-shrink-0">
                {row.item}
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">{row.detail}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 items-start">
          <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm font-semibold text-foreground mb-2">Production-grade from day one</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build on Replit using TypeScript, Next.js, and PostgreSQL. Auth, parameterised queries, RBAC, and environment variable hygiene are built in from sprint one — not bolted on at the end. The codebase is readable by any developer and portable to any host.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card">
            <p className="text-sm font-semibold text-foreground mb-2">Beyond the build</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pressense pairs MVP delivery with optional GTM support — ICP definition, early channel strategy, and a launch playbook. You leave with a live product and a plan for how to get your first ten paying customers.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border/50 bg-card">
            <p className="text-sm font-semibold text-foreground mb-2">Get your MVP built in 8 weeks</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Book a discovery call. Sixty minutes. We scope the build, define the value loop, and give you a fixed-price estimate before the session ends.
            </p>
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
