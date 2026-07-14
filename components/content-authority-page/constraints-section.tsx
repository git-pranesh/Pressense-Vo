const constraints = [
  {
    title: 'Untranslated expertise',
    description: 'The business knows more than the market can see. Knowledge stays inside calls, documents, delivery, or founder memory.',
  },
  {
    title: 'Generic output',
    description: 'Content is being produced, but it could belong to almost any company in the category.',
  },
  {
    title: 'Weak positioning',
    description: 'The business has not clearly defined what it should be known for, so content lacks direction.',
  },
  {
    title: 'Disconnected website and content',
    description: 'The website, articles, landing pages, and founder content do not reinforce the same story.',
  },
  {
    title: 'Technical complexity',
    description: 'Products, services, or expertise are accurate internally but difficult for buyers to understand externally.',
  },
  {
    title: 'No authority system',
    description: 'There is no repeatable way to turn insight, experience, case knowledge, and point of view into trust-building communication.',
  },
]

export function ConstraintsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="Common constraints">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            The constraint we usually see.
          </h2>
          <p className="text-muted-foreground text-lg">
            These are the communication patterns that prevent expertise from reaching the market.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constraints.map((item, i) => (
            <article key={i} className="rounded-2xl p-6 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
