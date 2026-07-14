const whoItsForCards = [
  {
    title: 'B2B startups past product-market fit',
    description: 'You have customers who get real value from your product, but growth is inconsistent. You cannot explain why some months are good and others are not. GTM strategy makes growth repeatable.',
  },
  {
    title: 'Founders who are still the main closer',
    description: 'Deals close when you are in them and stall when you are not. That is not a sales problem. It is a GTM problem. We build the process and messaging that lets your team close without you.',
  },
  {
    title: 'Businesses entering a new market or segment',
    description: 'What worked in your first market will not automatically transfer to the next. New segment, new ICP, new positioning, new channel mix. We design the GTM for where you are going, not where you have been.',
  },
  {
    title: 'Teams generating leads that do not convert',
    description: 'Pipeline is there but deals stall or price objections come up late. This usually means the ICP is too broad, positioning is off, or the sales motion does not fit the buyer cycle. We find and fix the specific break point.',
  },
]

const notForCards = [
  {
    title: 'Pre-product businesses',
    description: 'GTM strategy requires product-market fit to be meaningful. If you have not validated that customers want what you are building, a GTM strategy will give you an efficient route to the wrong destination.',
  },
  {
    title: 'Companies that need execution only',
    description: 'We design strategy and build the systems to run it. If you need someone to write ads, manage your CRM day-to-day, or run campaigns, our fractional CMO service is a better fit.',
  },
  {
    title: 'Businesses wanting a one-week turnaround',
    description: 'Good GTM strategy takes four to eight weeks minimum. If you need a quick slide deck for a board meeting, we are not the right partner for that job.',
  },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink-foreground text-balance mb-10">
            When should you hire a GTM consultant?
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
