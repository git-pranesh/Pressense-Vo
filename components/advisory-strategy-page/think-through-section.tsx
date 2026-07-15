const thinkThroughCards = [
  {
    title: 'Business model clarity',
    description: 'What is working, what is fragile, and what needs to change before scaling further.',
  },
  {
    title: 'GTM strategy',
    description: 'Who to target, how to position, what message to lead with, and what channels to prioritize.',
  },
  {
    title: 'Customer understanding',
    description: 'How your customers think, buy, hesitate, compare, and decide.',
  },
  {
    title: 'Revenue leakage',
    description: 'Where leads, opportunities, margins, or execution quality are being lost.',
  },
  {
    title: 'Market entry and expansion',
    description: 'Which markets or segments to enter, how to evaluate them, and what risks to avoid.',
  },
  {
    title: 'Team and operating structure',
    description: 'Where ownership is unclear, where the founder is the bottleneck, and what needs systemization.',
  },
  {
    title: 'Offer and pricing direction',
    description: 'How to package value clearly, avoid underpricing, and make offers easier to buy.',
  },
  {
    title: 'Execution priorities',
    description: 'What to do first, what to delay, what to stop doing, and what to build.',
  },
]

export function ThinkThroughSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          What we help you think through
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {thinkThroughCards.map((card, i) => (
            <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-medium text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
