const constraints = [
  { title: 'Manual repetition', description: 'Teams spend time on tasks that repeat every day or week.' },
  { title: 'Inconsistent execution', description: 'Output varies depending on who is doing the work.' },
  { title: 'Slow turnaround', description: 'Content, reporting, follow-ups, and operations take longer than they should.' },
  { title: 'Fragmented tools', description: 'Multiple tools are used without a clear workflow connecting them.' },
  { title: 'No system for knowledge', description: 'Information is scattered and not easily reusable.' },
  { title: 'AI without structure', description: 'Teams experiment with AI tools but lack a system to apply them effectively.' },
]

export function AIWorkflowsConstraintsSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          The constraint we usually see
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
