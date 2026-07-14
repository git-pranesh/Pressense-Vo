const phases = [
  { step: '01', title: 'Diagnose', description: 'We identify repeated workflows, bottlenecks, and manual effort.' },
  { step: '02', title: 'Strategize', description: 'We define what should be automated, what should remain manual, and where AI adds real value.' },
  { step: '03', title: 'Build', description: 'We design workflows using AI, automation tools, and system logic.' },
  { step: '04', title: 'Scale', description: 'We refine and expand workflows once the system is adopted.' },
]

export function AIWorkflowsDiagnosisSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          We do not start with AI. We start with the workflow.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <article key={phase.step} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <span className="text-xs font-medium text-primary mb-3 block">{phase.step}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
