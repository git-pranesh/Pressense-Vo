export function DiagnosisSection() {
  const steps = [
    {
      label: 'Diagnose',
      description: 'We study the workflow, users, data, handoffs, ownership, exceptions, and reporting gaps.',
    },
    {
      label: 'Strategize',
      description: 'We define what should be automated, what should stay manual, what needs visibility, and what should not be built yet.',
    },
    {
      label: 'Build',
      description: 'We create the internal tool, dashboard, workflow, CRM logic, approval system, or automation layer required.',
    },
    {
      label: 'Scale',
      description: 'We help the team adopt the system so it reduces chaos instead of creating another unused tool.',
    },
  ]

  return (
    <section className="py-28 lg:py-36 border-t border-border/40" aria-labelledby="diagnosis-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <h2 id="diagnosis-heading" className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-4">
            We do not start by building. We start by diagnosing.
          </h2>
          <p className="text-lg text-muted-foreground">
            Before building anything, we map the workflow, identify the bottleneck, and understand what actually needs to change.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 flex flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                <span className="text-sm font-semibold text-primary">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
