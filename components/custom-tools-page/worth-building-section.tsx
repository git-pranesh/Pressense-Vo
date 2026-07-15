export function WorthBuildingSection() {
  const checklist = [
    'The same process happens every week',
    'Multiple people or teams are involved',
    'Mistakes or delays affect revenue, delivery, or customer experience',
    'Reporting is slow or unclear',
    'Current SaaS tools do not fit the workflow',
    'The founder or manager has to manually follow up too often',
    'The business needs visibility before it can scale further',
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="worth-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 id="worth-heading" className="text-section-title font-serif font-medium text-foreground text-balance mb-4">
            When an internal tool is worth building
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A custom internal tool makes sense when the workflow is repeated, important, painful, and not handled well by your current tools.
          </p>
          <div className="space-y-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded border border-primary/40 bg-primary/5 flex items-center justify-center mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary" aria-hidden="true">
                    <path d="M2 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-base text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
