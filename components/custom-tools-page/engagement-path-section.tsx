export function EngagementPathSection() {
  const steps = [
    { number: '1', title: 'Diagnostic', description: 'We review the current workflow, bottlenecks, data, users, tools, and business impact.' },
    { number: '2', title: 'System blueprint', description: 'We define what should be built, what should be automated, and what should stay simple.' },
    { number: '3', title: 'Prototype or pilot', description: 'We build the first version around one high-friction workflow.' },
    { number: '4', title: 'Implementation', description: 'We refine the tool, connect workflows, and support adoption.' },
    { number: '5', title: 'Scale', description: 'Once one system works, we expand carefully into adjacent workflows.' },
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="path-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 id="path-heading" className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          Typical engagement path
        </h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors flex gap-6 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
