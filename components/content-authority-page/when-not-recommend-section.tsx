const reasons = [
  'The offer itself is unclear',
  'The business does not yet know its ideal buyer',
  'The website cannot explain the business clearly',
  'There is no point of view, only keyword chasing',
  'The team wants volume without strategy',
  'The product, pricing, or positioning problem needs to be fixed first',
  'There is no owner for review, publishing, or distribution',
]

export function WhenNotRecommendSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="When we would not recommend more content">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            When we would not recommend more content.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We may advise against creating more content if:
          </p>
          <ul className="space-y-4">
            {reasons.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-destructive/10 border border-destructive/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 3l6 6M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-muted-foreground leading-relaxed">
            In these cases, we typically recommend starting with a <a href="/advisory-strategy" className="text-primary hover:underline">strategy diagnostic</a> or <a href="/websites-conversion-systems" className="text-primary hover:underline">positioning work</a> before investing in content production.
          </p>
        </div>
      </div>
    </section>
  )
}
