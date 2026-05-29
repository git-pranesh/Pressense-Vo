const whoItsForCards = [
  { title: 'Founder-led businesses ($1M-$8M)', description: 'You have product-market fit and some traction, but marketing feels scattered or dependent on founder hustle.' },
  { title: 'Companies between hires', description: 'Your previous marketing leader left, or you have outgrown junior execution and need strategic direction.' },
  { title: 'Businesses preparing to scale', description: 'You are about to raise, launch, or expand and need marketing infrastructure before you grow.' },
  { title: 'Teams that need direction', description: 'You have marketing people but no marketing leadership. Activity happens but outcomes are inconsistent.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">Who fractional CMO services help</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whoItsForCards.map((card, i) => (
            <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
