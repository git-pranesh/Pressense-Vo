const whoItsForCards = [
  { title: 'Operations & finance teams', description: 'You spend 50+ hours per week on manual data entry, reconciliation, and reporting. Automation gets that time back.' },
  { title: 'GTM operations', description: 'Your sales team spends more time on admin than selling. Automated lead routing, proposal generation, and follow-ups fix this.' },
  { title: 'Customer onboarding teams', description: 'You are doing the same checklist for every customer manually. Automate onboarding and cut your time in half.' },
  { title: 'Growing companies', description: 'You are hiring more ops people every quarter just to keep up. Workflow automation lets you scale without proportional headcount growth.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">Who workflow automation helps</h2>
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
