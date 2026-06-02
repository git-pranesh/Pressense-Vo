const whoItsForCards = [
  { title: 'Operations teams drowning in manual work', description: 'Your ops team spends 50%+ of their time on data entry, onboarding, or reporting. You are losing efficiency because scaling means hiring more people, not getting smarter.' },
  { title: 'Founders managing too many things', description: 'You are stuck doing administrative tasks instead of building product or selling. Founders should not spend 5+ hours per week on manual operations.' },
  { title: 'Scaling without adding headcount', description: 'You have proven product-market fit and want to double output without doubling your team. Automation buys you 2-3 years of growth at current team size.' },
  { title: 'Businesses with consistency problems', description: 'Manual processes create errors, missed deadlines, and customer frustration. You need reliability before you scale.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">Who AI automation helps</h2>
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
