const clarifyItems = [
  {
    title: 'The problem',
    description: 'What pain, friction, risk, or opportunity the buyer is actually dealing with.',
  },
  {
    title: 'The fit',
    description: 'Who the business is best for, and who it is not built for.',
  },
  {
    title: 'The value',
    description: 'Why the offer matters beyond features, design, or activity.',
  },
  {
    title: 'The proof',
    description: 'What shows the business understands the problem and can solve it.',
  },
  {
    title: 'The path',
    description: 'What the buyer should do next and what happens after they take action.',
  },
]

export function WhatMustClarifySection() {
  return (
    <section className="py-24 lg:py-32" aria-label="What a website must clarify">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            What a website must clarify.
          </h2>
          <p className="text-muted-foreground text-lg">
            Every page should help visitors answer these questions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clarifyItems.map((item, i) => (
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
