export function EngagementPathSection() {
  const steps = [
    { number: 1, title: 'Diagnostic', description: 'We review current content, positioning, and communication gaps.' },
    { number: 2, title: 'Content strategy', description: 'We define themes, use cases, audience, and structure.' },
    { number: 3, title: 'System design', description: 'We create a repeatable workflow for content production.' },
    { number: 4, title: 'Execution', description: 'We produce core assets, website, articles, product content, authority content.' },
    { number: 5, title: 'Scale', description: 'We enable ongoing content through systems and AI-assisted workflows.' },
  ]

  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          Typical engagement path
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{step.number}</span>
                  </div>
                  {step.number < steps.length && <div className="w-0.5 h-12 bg-primary/20 my-2" />}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
