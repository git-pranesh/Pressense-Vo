const steps = [
  { step: '1', title: 'Diagnostic', description: 'We identify workflows where time, effort, or consistency is a problem.' },
  { step: '2', title: 'Workflow design', description: 'We define how the process should work with and without AI.' },
  { step: '3', title: 'Build', description: 'We create the workflow using AI tools, automation platforms, and structured logic.' },
  { step: '4', title: 'Adoption', description: 'We ensure the team understands and uses the system.' },
  { step: '5', title: 'Scale', description: 'We expand to other workflows once results are visible.' },
]

export function AIWorkflowsEngagementPathSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          Typical engagement path
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item) => (
            <article key={item.step} className="relative">
              <span className="text-5xl font-bold text-primary/20 mb-2 block">{item.step}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
