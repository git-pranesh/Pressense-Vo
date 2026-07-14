const whoItsForCards = [
  { title: 'Operations teams drowning in manual work', description: 'Your ops team spends 50%+ of their time on data entry, onboarding, or reporting. You are losing efficiency because scaling means hiring more people, not getting smarter.' },
  { title: 'Founders managing too many things', description: 'You are stuck doing administrative tasks instead of building product or selling. Founders should not spend 5+ hours per week on manual operations.' },
  { title: 'Scaling without adding headcount', description: 'You have proven product-market fit and want to double output without doubling your team. Automation buys you two to three years of growth at current team size.' },
  { title: 'Businesses with consistency problems', description: 'Manual processes create errors, missed deadlines, and customer frustration. You need reliability before you scale.' },
]

const notForCards = [
  { title: 'Businesses with no defined processes yet', description: 'Automation locks in your existing workflows. If your processes are chaotic or undefined, we will recommend a diagnostic and strategy engagement first.' },
  { title: 'Teams looking for a one-day fix', description: 'Good automation takes two to four weeks to build correctly. If you need something live tomorrow, we are not the right fit.' },
  { title: 'Enterprise organisations with procurement cycles', description: 'We move fast and work directly with founders and operators. If your decision requires six months of procurement, we are not structured for that.' },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        {/* This IS for you */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink-foreground text-balance mb-10">Who AI automation helps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsForCards.map((card, i) => (
              <div key={i} className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* This is NOT for you */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-border/60" aria-hidden="true" />
            <span className="eyebrow">This is NOT for you if</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {notForCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border/40 bg-card/30">
                <h3 className="text-lg font-semibold text-ink-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
