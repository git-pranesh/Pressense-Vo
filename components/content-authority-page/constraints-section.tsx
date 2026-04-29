export function ConstraintsSection() {
  const constraints = [
    { title: 'Generic content', description: 'Content sounds like everyone else and does not reflect real expertise.' },
    { title: 'Inconsistent output', description: 'Content depends on time, mood, or availability instead of a system.' },
    { title: 'Unclear positioning', description: 'The business itself is not clearly defined, so content lacks direction.' },
    { title: 'Weak website communication', description: 'The website does not explain what the business actually does in a clear, structured way.' },
    { title: 'Technical gap', description: 'Complex products or services are not translated into understandable use cases.' },
    { title: 'No authority layer', description: 'There is no consistent signal of expertise, trust, or credibility in the market.' },
  ]

  return (
    <section className="py-28 lg:py-36 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">
          The constraint we usually see
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((constraint) => (
            <div key={constraint.title} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-3">{constraint.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{constraint.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
