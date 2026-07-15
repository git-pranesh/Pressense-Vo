const constraints = [
  {
    title: 'CRM exists, but no one trusts it',
    description: 'The tool is there, but the data is incomplete, outdated, or not useful for decisions.',
  },
  {
    title: 'Sales and operations are disconnected',
    description: 'Leads, customers, delivery, finance, and support move through different systems with no shared visibility.',
  },
  {
    title: 'Follow-up depends on people',
    description: 'Important actions depend on memory, discipline, or one person manually checking everything.',
  },
  {
    title: 'Leadership lacks visibility',
    description: 'Founders and operators cannot clearly see pipeline, revenue, delivery status, bottlenecks, or risk.',
  },
  {
    title: 'ERP feels too heavy',
    description: 'Enterprise systems are too complex, expensive, or rigid for the current stage of the business.',
  },
  {
    title: 'The process does not match the tool',
    description: 'The system forces the team into a workflow that does not reflect how the business actually sells, delivers, or operates.',
  },
]

export function CrmErpConstraintsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="Common constraints">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            The constraint we usually see.
          </h2>
          <p className="text-muted-foreground text-lg">
            These are the operational patterns that prevent systems from creating value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((item, i) => (
            <article key={i} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
