export function WhoItsForSection() {
  const positiveCards = [
    {
      title: 'Founder-dependent businesses',
      description: 'If the business cannot run for a week without you, you have a systems problem. Your people are capable. The infrastructure is not. We fix the operational layer so decisions do not route through you by default.',
    },
    {
      title: 'Companies with fragmented operations',
      description: 'Data in spreadsheets, processes in people\'s heads, tools that do not connect. You spend every Monday reconciling information that should update automatically. We build the layer that ties everything together.',
    },
    {
      title: 'Growing teams that need onboarding structure',
      description: 'You are hiring fast, but new people take three months to become useful because nothing is documented. We build the role documentation, SOPs, and tool training that cut ramp time to four weeks.',
    },
    {
      title: 'Businesses preparing for the next stage',
      description: 'Raising a round, bringing in an executive team, or expanding into new markets. Investors and new hires will both ask the same question: do you have systems? We make sure the answer is yes.',
    },
  ]

  const notForCards = [
    {
      title: 'Businesses with under 5 employees',
      description: 'At very early stage, over-engineering operations creates bureaucracy before you need it. If you are pre-product-market fit, we will tell you to hold off and come back when your processes are repeatable.',
    },
    {
      title: 'Enterprise companies needing IT governance',
      description: 'We are not an IT consultancy. We do not do ITIL frameworks, enterprise software procurement, or compliance audits for regulated industries. That work requires a different firm.',
    },
    {
      title: 'Teams looking for project management training',
      description: 'We build systems. We do not run workshops or coach teams on using Asana. If you need tooling training without underlying process design, that is a different engagement.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">

        {/* Positive ICP */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow-on-dark">This is right for you if</span>
          </div>
          <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-10">
            Who business systems consulting helps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {positiveCards.map((card, i) => (
              <div key={i} className="bg-ink-card border border-ink-border rounded-2xl p-8 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-medium text-foreground mb-3">{card.title}</h3>
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
                <h3 className="text-lg font-medium text-ink-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
