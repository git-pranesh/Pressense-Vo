export function DiagnosisSection() {
  const phases = [
    { number: 1, title: 'Diagnose', description: 'We study the business, customer, product, positioning, and current communication gaps.' },
    { number: 2, title: 'Strategize', description: 'We define what the business should be known for, what content matters, and how to structure it.' },
    { number: 3, title: 'Build', description: 'We create content systems, website copy, technical narratives, and repeatable workflows.' },
    { number: 4, title: 'Scale', description: 'We help maintain consistency using systems, AI workflows, and structured execution.' },
  ]

  return (
    <section className="py-28 lg:py-36 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-16">
          We do not start by writing. We start by understanding.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div key={phase.number} className="glass-card rounded-2xl p-8 border border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-bold text-primary/40">{phase.number}</span>
                <div className="h-px flex-1 bg-primary/20" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
