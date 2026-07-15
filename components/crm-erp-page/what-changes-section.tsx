const benefits = [
  { title: 'Visibility', description: 'You know exactly what is happening across leads, deals, and operations.' },
  { title: 'Consistency', description: 'Follow-ups, updates, and workflows no longer depend on individuals.' },
  { title: 'Ownership', description: 'Each stage, task, and workflow has clear responsibility.' },
  { title: 'Speed', description: 'Decisions happen faster because data is available.' },
  { title: 'Alignment', description: 'Sales, marketing, operations, and finance work on the same system.' },
  { title: 'Scalability', description: 'The system supports growth instead of breaking under it.' },
]

export function CrmErpWhatChangesSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What good systems change
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
