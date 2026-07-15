const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description: 'The first two weeks are a full revenue audit. We review your CRM data, pipeline history, deal velocity, funnel conversion rates, and handoff processes between teams. We interview your sales, marketing, and customer success leads separately, then together. You receive a written diagnosis showing exactly where revenue is leaking and why.',
    deliverable: 'Revenue audit report and constraint map',
  },
  {
    number: '02',
    name: 'Strategise',
    description: 'Based on the audit, we design your revenue operating model. This defines your pipeline stages precisely, your shared KPI set, your handoff criteria between teams, and your reporting cadence. Every decision gets documented so the system survives team changes. You have a clear blueprint before anything gets built.',
    deliverable: 'Revenue operating model and 90-day implementation roadmap',
  },
  {
    number: '03',
    name: 'Build',
    description: 'We implement the operating model in your CRM, set up the reporting dashboard, configure automation rules, and train your team on the new process. This phase typically takes four to six weeks. By the end, your pipeline is accurate, your forecast is reliable, and your three teams are finally looking at the same numbers.',
    deliverable: 'CRM buildout, dashboards, playbooks, and team training',
  },
  {
    number: '04',
    name: 'Scale',
    description: 'Once the system is running, we move from building to optimising. We run monthly revenue reviews, identify new leaks before they compound, and help you add headcount into a structured process rather than chaos. Some clients continue with a lighter ongoing advisory arrangement. Others transition to a full-time internal hire we help them recruit.',
    deliverable: 'Ongoing optimisation plan and full-time hire transition guide',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="flex items-center gap-3 mb-8">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow-on-dark">The Pressense Method</span>
        </div>

        <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-4">
          Diagnose. Strategise. Build. Scale.
        </h2>
        <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mb-14">
          Every revenue operations consulting engagement follows the same four phases. You know what happens in each one and what you receive when it is done.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="font-medium text-primary/20 leading-none">{phase.number}</span>
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium pt-1">{phase.name}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{phase.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{phase.description}</p>
              <div className="flex items-start gap-2.5 pt-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-foreground font-medium">{phase.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
