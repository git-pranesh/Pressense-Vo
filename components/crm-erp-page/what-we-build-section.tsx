const solutions = [
  { title: 'Custom CRM systems', description: 'Lead tracking, pipeline stages, qualification, ownership, and follow-up systems tailored to your process.' },
  { title: 'ERP-lite systems', description: 'Lightweight operational systems for orders, delivery, vendors, finance, and internal workflows.' },
  { title: 'Sales pipelines', description: 'Clear pipeline visibility, stage tracking, and conversion flow.' },
  { title: 'Follow-up systems', description: 'Structured reminders, tasks, and automation for consistent follow-up.' },
  { title: 'Reporting dashboards', description: 'Real-time visibility into sales, revenue, operations, and performance.' },
  { title: 'Workflow automation', description: 'Automated updates, handoffs, notifications, and task creation.' },
  { title: 'Integration layers', description: 'Connecting CRM, marketing tools, finance tools, and internal systems.' },
]

export function CrmErpWhatWeBuildSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What we build
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
