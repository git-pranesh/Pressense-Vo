export function WhatChangesSection() {
  const changes = [
    { title: 'Clarity', description: 'The business becomes easier to understand.' },
    { title: 'Consistency', description: 'Content is no longer random or dependent on time.' },
    { title: 'Trust', description: 'Buyers see expertise, not generic messaging.' },
    { title: 'Conversion', description: 'Website and content start supporting sales conversations.' },
    { title: 'Speed', description: 'Teams produce content faster with better structure.' },
    { title: 'Alignment', description: 'Marketing, product, and sales communicate the same story.' },
  ]

  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-16">
          What good content systems change
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {changes.map((change) => (
            <div key={change.title} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-3">{change.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{change.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
