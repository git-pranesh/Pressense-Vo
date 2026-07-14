const scenarios = [
  {
    title: 'Content teams',
    description: 'Ideas, drafts, edits, approvals, and publishing move slowly because the workflow is not structured.',
  },
  {
    title: 'Sales teams',
    description: 'Research, follow-up, summaries, reminders, and handoffs depend too much on individual discipline.',
  },
  {
    title: 'Founders',
    description: 'AI is used for scattered tasks, but not connected to decision-making, delegation, or execution.',
  },
  {
    title: 'Customer support',
    description: 'Repeated questions, onboarding messages, and internal responses are handled manually without reusable logic.',
  },
  {
    title: 'Operations teams',
    description: 'Updates, reports, task creation, and approvals still require too many small manual actions.',
  },
  {
    title: 'Knowledge-heavy businesses',
    description: 'Important knowledge exists, but the team cannot retrieve, reuse, or apply it consistently.',
  },
]

export function AIRealTeamsSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="Where this shows up in real teams">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Where this shows up in real teams.
          </h2>
          <p className="text-muted-foreground text-lg">
            Concrete scenarios where AI workflows create the most value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((item, i) => (
            <article key={i} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
