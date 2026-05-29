const whoItsForCards = [
  { title: 'Businesses with product-market fit', description: 'Customers love your product, but you cannot scale acquisition predictably. Something in the GTM is broken.' },
  { title: 'Founders who need to get out of sales', description: 'You are still the best closer in the company. We help build a sales motion that works without you in every deal.' },
  { title: 'Companies entering new markets', description: 'You are expanding to a new segment, geography, or vertical. Current GTM will not transfer directly.' },
  { title: 'Teams with pipeline but low conversion', description: 'Leads come in, but deals stall. The bottleneck is somewhere between awareness and close.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">Who GTM strategy consulting helps</h2>
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
