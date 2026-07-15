export function ConstraintsSection() {
  const constraints = [
    {
      title: 'Spreadsheet dependency',
      description: 'Your most important workflows are managed through spreadsheets that are hard to maintain, easy to break, and difficult to scale.',
    },
    {
      title: 'No single source of truth',
      description: 'Different teams rely on different tools, files, messages, and versions of the same information.',
    },
    {
      title: 'Founder dependency',
      description: 'Approvals, decisions, follow-ups, and visibility still depend too much on the founder or one key person.',
    },
    {
      title: 'Manual reporting',
      description: 'Leadership does not get clear, timely visibility into leads, operations, delivery, finance, or team performance.',
    },
    {
      title: 'Broken handoffs',
      description: 'Work gets delayed or lost between sales, operations, delivery, finance, support, or leadership.',
    },
    {
      title: 'SaaS mismatch',
      description: 'Off-the-shelf tools are either too rigid, too expensive, too bloated, or not aligned with how the business actually operates.',
    },
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="constraints-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <h2 id="constraints-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-4">
            The constraint we usually see
          </h2>
          <p className="text-lg text-muted-foreground">
            Internal tools are useful when the business has real workflow pain, not when someone simply wants an app.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {constraints.map((constraint, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">{constraint.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{constraint.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
