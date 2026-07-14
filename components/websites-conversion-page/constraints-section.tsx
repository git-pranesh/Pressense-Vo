const constraints = [
  {
    title: 'Unclear first impression',
    description: 'Visitors do not quickly understand what the business does, who it helps, or why it matters.',
  },
  {
    title: 'Generic category language',
    description: 'The website uses the same claims as competitors, making comparison harder and trust weaker.',
  },
  {
    title: 'Weak buyer journey',
    description: 'Pages do not guide visitors from problem awareness to trust, proof, and action.',
  },
  {
    title: 'Traffic without conversion',
    description: 'Marketing brings visitors in, but the website does not turn attention into qualified conversations.',
  },
  {
    title: 'Design without explanation',
    description: 'The site looks good but does not help buyers understand the offer or make a decision.',
  },
  {
    title: 'No qualification layer',
    description: 'The website attracts broad interest but does not filter for the right-fit buyer.',
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
            These are the website patterns that prevent traffic from becoming qualified demand.
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
