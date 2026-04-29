const benefits = [
  { title: 'Clarity', description: 'Visitors understand the business quickly.' },
  { title: 'Trust', description: 'The website reflects expertise and credibility.' },
  { title: 'Conversion', description: 'More visitors take action.' },
  { title: 'Alignment', description: 'Marketing, content, and sales communicate the same story.' },
  { title: 'Speed', description: 'Teams can launch campaigns faster with a strong base.' },
  { title: 'Scalability', description: 'The website supports growth instead of limiting it.' },
]

export function WhatChangesSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-12">
          What a strong website changes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="glass-card rounded-xl p-6 border border-border/40">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
