const deliverables = [
  'GTM strategy and positioning',
  'Marketing system design',
  'Channel prioritization',
  'Team and agency oversight',
  'Metrics and reporting frameworks',
  'Content strategy direction',
  'Campaign planning and review',
  'Founder leverage and support',
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">What you get</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Fractional CMO engagements are tailored to your stage and needs. Common deliverables include:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-5 border border-border/40">
              <p className="text-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
