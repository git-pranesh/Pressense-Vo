const benefits = [
  { title: 'Speed', description: 'Tasks that took hours can be done faster.' },
  { title: 'Consistency', description: 'Output becomes more structured and repeatable.' },
  { title: 'Clarity', description: 'Processes become easier to understand and follow.' },
  { title: 'Leverage', description: 'Small teams can do more without increasing headcount.' },
  { title: 'Focus', description: 'Teams spend less time on repetitive work and more on decisions.' },
  { title: 'Scalability', description: 'Execution improves without proportional increase in effort.' },
]

export function AIWorkflowsWhatChangesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What good AI workflows change
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
