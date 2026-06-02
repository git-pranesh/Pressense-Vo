const deliverables = [
  'Workflow audit and ROI analysis',
  'AI system design and architecture',
  'Integration with your existing tools',
  'Implementation and testing',
  'Team training and documentation',
  'Performance monitoring dashboard',
  'Ongoing optimization and support',
  'Scaling guide for future automation',
]

export function WhatYouGetSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance mb-6">What you get</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          AI automation projects include the full implementation, not just consulting. We deliver working systems, not recommendations.
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
