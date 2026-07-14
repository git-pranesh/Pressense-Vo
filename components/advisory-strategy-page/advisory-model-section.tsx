const advisoryPhases = [
  {
    title: 'Diagnose',
    description: 'We study the business, customer, market, team, funnel, systems, and revenue flow to understand what is actually happening.',
  },
  {
    title: 'Strategize',
    description: 'We define the highest-leverage priorities, clarify decisions, and create a practical direction for the next stage.',
  },
  {
    title: 'Build the roadmap',
    description: 'We turn strategy into an execution roadmap across marketing, content, systems, workflows, people, and technology.',
  },
  {
    title: 'Support execution',
    description: 'Where useful, we help implement the plan through internal tools, websites, content systems, AI workflows, CRM/ERP systems, or operating processes.',
  },
]

export function AdvisoryModelSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-16">
          Our advisory model
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {advisoryPhases.map((phase, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-lg font-semibold text-primary">{i + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
