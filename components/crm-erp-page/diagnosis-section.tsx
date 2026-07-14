const phases = [
  { num: '01', title: 'Diagnose', description: 'We map your current workflows across sales, operations, delivery, finance, and reporting.' },
  { num: '02', title: 'Strategize', description: 'We define what the system should look like: what to track, what to automate, and what to simplify.' },
  { num: '03', title: 'Build', description: 'We design and implement CRM logic, ERP-lite systems, workflows, dashboards, and integrations.' },
  { num: '04', title: 'Scale', description: 'We ensure adoption, visibility, and ongoing refinement so the system actually gets used.' },
]

export function CrmErpDiagnosisSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          We do not start with tools. We start with workflows.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div key={phase.num} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <span className="text-xs font-semibold text-primary mb-3 block">{phase.num}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
