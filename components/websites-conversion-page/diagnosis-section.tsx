const phases = [
  { step: '01', title: 'Diagnose', description: 'We review positioning, messaging, structure, and current website performance.' },
  { step: '02', title: 'Strategize', description: 'We define what the website needs to communicate, how it should flow, and what pages matter.' },
  { step: '03', title: 'Build', description: 'We design and develop the website with clear structure, messaging, and conversion flow.' },
  { step: '04', title: 'Scale', description: 'We refine, expand, and connect the website with content, SEO, and other systems.' },
]

export function DiagnosisSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          We do not start with design. We start with clarity.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div key={phase.step} className="glass-card rounded-xl p-6 border border-border/40">
              <span className="text-xs text-primary font-medium">{phase.step}</span>
              <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
