const patterns = [
  'Founder bottleneck: Decisions stalled without one person.',
  'Pricing misalignment: Revenue left on the table from poor model design.',
  'Sales-marketing mismatch: Teams not speaking the same language.',
  'Onboarding friction: Customer success not systematic.',
  'Systems debt: Growth kept outpacing operational capability.',
]

export function WorkPatternsSection() {
  return (
    <section className="py-28 lg:py-36 bg-background" aria-labelledby="patterns-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-section-title font-serif font-medium text-foreground text-balance mb-12" id="patterns-heading">
            Recurring patterns we see.
          </h2>

          <div className="space-y-4">
            {patterns.map((pattern, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 lg:p-6 border border-border/40 hover:border-primary/20 transition-all duration-300">
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{pattern}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-12 pt-8">
            See the full diagnostic of what we fix on the <a href="/what-we-fix" className="text-primary hover:text-highlight transition-colors">What We Fix</a> page.
          </p>
        </div>
      </div>
    </section>
  )
}
