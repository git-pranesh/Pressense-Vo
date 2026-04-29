const engagementFormats = [
  {
    title: 'Diagnostic Sprint',
    description: 'Best when you know something is not working but need clarity on what to fix first.',
  },
  {
    title: 'Strategic Advisory',
    description: 'Best when founders or teams need ongoing decision support across growth, operations, GTM, and execution.',
  },
  {
    title: 'Strategy-to-Build Engagement',
    description: 'Best when the diagnosis is clear and you need help building the systems, content, workflows, or assets required.',
  },
]

export function EngagementFormatsSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">
          Engagement formats
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {engagementFormats.map((format, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-3">{format.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
