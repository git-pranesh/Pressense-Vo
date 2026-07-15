const steps = [
  { num: '1', title: 'Diagnostic', description: 'We review your current tools, workflows, and bottlenecks.' },
  { num: '2', title: 'System design', description: 'We define CRM logic, workflows, and reporting structure.' },
  { num: '3', title: 'Build or configure', description: 'We implement the system using the right tools or custom builds.' },
  { num: '4', title: 'Adoption', description: 'We ensure the team understands and uses the system.' },
  { num: '5', title: 'Scale', description: 'We refine and expand based on real usage.' },
]

export function CrmErpEngagementPathSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-12">
          Typical engagement path
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span className="text-5xl font-bold text-primary/20 mb-2 block">{step.num}</span>
              <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
