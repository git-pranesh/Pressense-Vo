import Link from 'next/link'

const deliverables = [
  'ICP definition document and positioning statement',
  'Full keyword map and topic cluster architecture',
  'Two pillar pages (minimum 2,500 words each)',
  'Eight supporting cluster articles',
  'LinkedIn distribution content (posts and carousels)',
  'Email newsletter template and first three editions',
  'CRM attribution setup with UTM parameters and pipeline tagging',
  'Monthly performance report template',
  'Content brief template and production workflow documentation',
  'Source files and access to all tools and platforms configured',
]

export function GtmContentWhatYouGetSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-primary/50" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Deliverables</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance leading-tight mb-4">
              What you get at the end of the engagement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every GTM content system engagement ends with a fully operational system your team can run without us, plus the option to continue on a monthly retainer for ongoing content production and optimisation.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Book a diagnostic to scope your system
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <ul className="space-y-3" aria-label="Deliverables list">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1 w-4 h-4 rounded-full border border-primary/40 flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
