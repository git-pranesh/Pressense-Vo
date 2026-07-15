const forItems = [
  'Founder-led businesses ready to scale',
  'Teams stuck between growth and chaos',
  'Companies outgrowing spreadsheets and manual workflows',
  'Enterprise teams that need sharper customer, product, and GTM clarity',
  'Experts and professionals who need systems, visibility, and structure',
]

const notForItems = [
  'Early-stage ideas without traction',
  'Teams looking only for cheap execution',
  'Businesses unwilling to implement change',
  '"Just build me something" requests without clarity',
]

export function WhoSection() {
  return (
    <section
      id="who-we-work-with"
      className="py-32 lg:py-48 bg-ink"
      aria-labelledby="who-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="eyebrow-line-dark" />
            <span className="eyebrow-on-dark">Who We Work With</span>
          </div>
          <h2
            className="text-section-title font-serif font-medium text-ink-foreground text-balance max-w-2xl"
            id="who-heading"
          >
            We work with a select number of serious businesses.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* For you */}
          <div className="rounded-2xl border border-ink-border bg-ink-card p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 5.5L3.5 7.5l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                </svg>
              </div>
              <span className="text-sm font-medium text-ink-foreground">This is for you if</span>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {forItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-ink-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="rounded-2xl border border-ink-border p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full border border-ink-border flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 2l6 6M8 2L2 8" stroke="#6F6A64" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-medium text-ink-muted">This is not for you if</span>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {notForItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-border flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-ink-muted/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
