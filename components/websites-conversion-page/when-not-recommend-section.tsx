const reasons = [
  'The offer is not clear yet',
  'The ideal buyer is still undefined',
  'The business model needs strategic work first',
  'The team wants design before positioning',
  'There is no clear conversion goal',
  'The real problem is lead quality, sales process, or delivery capacity',
  'A focused landing page or messaging sprint would be enough for now',
]

export function WebsitesWhenNotRecommendSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20" aria-label="When we would not recommend starting with the website">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
            When we would not recommend starting with the website.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We may advise against starting with a website if:
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
            In these cases, we typically recommend starting with a <a href="/advisory-strategy" className="text-primary hover:underline">strategy diagnostic</a> or <a href="/content-authority-systems" className="text-primary hover:underline">positioning work</a> before investing in a full website build.
          </p>
        </div>
      </div>
    </section>
  )
}
