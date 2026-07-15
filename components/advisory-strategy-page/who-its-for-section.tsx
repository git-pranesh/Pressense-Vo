const whoItsForCards = [
  {
    title: 'Founders with scattered growth',
    description: 'You are doing marketing, sales, content, hiring, or expansion but the direction feels unclear. Activity is high. Progress is slow. The problem is usually prioritisation, not execution.',
  },
  {
    title: 'Operators carrying too much',
    description: 'Too many decisions, approvals, client escalations, and growth ideas still depend on one person. The business cannot scale without removing that dependency.',
  },
  {
    title: 'Teams without a shared direction',
    description: 'People are working but not always toward the same priority or the same customer. The fix is a shared GTM direction and a sequenced roadmap everyone can execute from.',
  },
  {
    title: 'Businesses entering a new market',
    description: 'You need clarity on positioning, competition, buyer pain, use cases, and GTM direction before committing resource to a new segment or geography.',
  },
]

const notForCards = [
  {
    title: 'Businesses that want validation, not clarity',
    description: 'Advisory surfaces real constraints. If you want someone to confirm a decision already made rather than challenge it, this is not the right engagement.',
  },
  {
    title: 'Teams looking for a one-week fix',
    description: 'Good advisory takes two to four weeks minimum to do properly. A rushed diagnosis produces a bad roadmap.',
  },
  {
    title: 'Enterprise companies with procurement cycles',
    description: 'We work directly with founders and operators and move fast. If the decision process takes six months, we are not structured for that.',
  },
]

export function AdvisoryWhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-10">
            Who advisory and strategy helps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsForCards.map((card, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-border/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">This is NOT for you if</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notForCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border/40 bg-card/30">
                <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
