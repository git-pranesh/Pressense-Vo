const typicalSituations = [
  'Founder brainstorming and decision support',
  'Growth bottleneck diagnosis',
  'GTM reset',
  'New market entry planning',
  'Product and use-case positioning',
  'Revenue leakage review',
  'Team and role clarity',
  'Pricing and offer refinement',
  'Content and visibility strategy',
  'Tech and systems roadmap',
  'Operations restructuring',
  '90-day growth planning',
]

export function TypicalSituationsSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-16">
          Typical advisory situations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {typicalSituations.map((situation, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 border border-border/40 hover:border-primary/20 transition-all duration-300">
              <p className="text-lg font-medium text-foreground">{situation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
