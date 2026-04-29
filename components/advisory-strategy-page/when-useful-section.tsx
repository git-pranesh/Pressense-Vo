const whenUsefulCards = [
  {
    title: 'Growth feels active but unclear',
    description: 'You are doing marketing, sales, content, hiring, or expansion, but the direction feels scattered.',
  },
  {
    title: 'The founder is carrying too much',
    description: 'Too many decisions, approvals, client escalations, and growth ideas still depend on the founder.',
  },
  {
    title: 'The team needs sharper direction',
    description: 'People are working, but not always toward the same priority or customer understanding.',
  },
  {
    title: 'Revenue is leaking',
    description: 'Leads, customers, margins, follow-ups, or opportunities are slipping through unclear processes.',
  },
  {
    title: 'You are entering a new market',
    description: 'You need clarity on positioning, competition, buyer pain, use cases, and GTM direction.',
  },
  {
    title: 'You need an outside operator perspective',
    description: 'You want someone who can challenge assumptions, identify blind spots, and connect strategy with execution.',
  },
]

export function WhenUsefulSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-16">
          When advisory is useful
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {whenUsefulCards.map((card, i) => (
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
