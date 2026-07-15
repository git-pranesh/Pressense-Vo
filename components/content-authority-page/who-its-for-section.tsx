const whoItsForCards = [
  {
    title: 'SaaS products that are hard to explain',
    description: 'Your product does something genuinely useful but the website requires a demo to understand it. Buyers bounce before they book. The fix is content that explains the problem and solution in buyer language, not product language.',
  },
  {
    title: 'Founders building personal authority',
    description: 'You have strong views, relevant experience, and real customer insight. None of it is reaching the market at scale. A content system turns what you know into a compounding LinkedIn and publishing presence without making you a full-time writer.',
  },
  {
    title: 'Businesses with content but no traction',
    description: 'You have a blog, a content calendar, and a team producing articles. Organic traffic is flat. The problem is not volume. It is structure, buyer intent mapping, and topical authority architecture.',
  },
  {
    title: 'Technical or medical businesses',
    description: 'Expertise is deep but communication is weak. Doctors, specialists, consultants, and technical founders often explain their value well in a room and poorly on a page. We translate internal clarity into external trust.',
  },
]

const notForCards = [
  {
    title: 'Businesses with undefined positioning',
    description: 'Content cannot fix a positioning problem. If you do not know who you are selling to or why they should choose you, we recommend a strategy engagement before building any content system.',
  },
  {
    title: 'Teams that want keyword volume only',
    description: 'We do not build content for vanity metrics. Every piece is mapped to a buyer, a problem, and a pipeline stage. If the goal is impressions, not inbound, this is not the right engagement.',
  },
  {
    title: 'Companies that need results in 30 days',
    description: 'SEO and content authority compound over 6 to 12 months. If you need pipeline this month, the right starting point is the diagnostic, not a content system.',
  },
]

export function ContentWhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">This is right for you if</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-10">
            Who content authority systems help
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
