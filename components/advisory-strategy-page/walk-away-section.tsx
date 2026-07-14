const walkAwayCards = [
  {
    title: 'Clearer priorities',
    description: 'You know what matters now, what can wait, and what should stop.',
  },
  {
    title: 'Better decisions',
    description: 'You make growth, hiring, marketing, content, and systems decisions with more context.',
  },
  {
    title: 'Sharper positioning',
    description: 'You understand how to explain your value to the right buyer.',
  },
  {
    title: 'A practical roadmap',
    description: 'You get a clear view of what to fix, what to build, and how to sequence execution.',
  },
  {
    title: 'Less founder overload',
    description: 'The business starts moving toward clearer ownership and less founder dependency.',
  },
  {
    title: 'Execution clarity',
    description: 'The work becomes easier to brief, build, delegate, and measure.',
  },
]

export function WalkAwaySection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-16">
          What you walk away with
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {walkAwayCards.map((card, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
