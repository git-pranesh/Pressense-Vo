const whoItsForCards = [
  {
    title: 'B2B businesses with unpredictable revenue',
    description: 'Your pipeline looks full but deals keep slipping. Forecast accuracy is below 70 percent and leadership cannot confidently plan headcount or spend. The underlying issue is usually process, not market.',
  },
  {
    title: 'Post-funding companies building their GTM',
    description: 'You have raised a round and now need to build the sales and marketing infrastructure to hit your board targets. You need RevOps architecture from day one, not a retrofit six months in when things break.',
  },
  {
    title: 'Scaling B2B SaaS with siloed teams',
    description: 'Marketing, sales, and customer success use different tools, track different metrics, and blame each other when numbers miss. Revenue operations consulting builds the shared model that ends this.',
  },
  {
    title: 'Founder-led businesses replacing founder-led sales',
    description: 'The founder has been closing every deal personally. Now you need a repeatable process that a sales team can run without founder involvement. This is the most important RevOps problem we solve.',
  },
]

const notForCards = [
  {
    title: 'Businesses with fewer than 5 customers',
    description: 'If you are still validating your offer, RevOps infrastructure is premature. We will recommend a strategy and diagnostic engagement first.',
  },
  {
    title: 'Teams that want tools, not process',
    description: 'Buying a new CRM without fixing your process just creates an expensive mess. We only implement tools after the underlying process is designed.',
  },
  {
    title: 'Enterprises with existing RevOps teams',
    description: 'We work best with businesses under $30M ARR where we can own and build the function. Enterprise orgs with large internal teams are not our primary fit.',
  },
]

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        {/* Positive ICP */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow-on-dark">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink-foreground text-balance mb-10">
            Who revenue operations consulting helps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whoItsForCards.map((card, i) => (
              <div key={i} className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NOT for you */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-border/60" aria-hidden="true" />
            <span className="eyebrow-on-dark">This is NOT for you if</span>
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
