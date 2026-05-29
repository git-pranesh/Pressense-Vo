const whoItsForCards = [
  { title: 'Founder-dependent businesses', description: 'If the business cannot run for a week without you, you have a systems problem. We fix the infrastructure so you can scale.' },
  { title: 'Companies with fragmented operations', description: 'Data in spreadsheets, processes in people heads, tools that do not talk to each other. We bring order to the chaos.' },
  { title: 'Growing teams that need structure', description: 'You are hiring, but new people take too long to ramp. We build the systems that make onboarding fast and consistent.' },
  { title: 'Businesses preparing for the next stage', description: 'Raising a round, hiring executives, or expanding operations. You need systems that can handle the growth.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">Who business systems consulting helps</h2>
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
