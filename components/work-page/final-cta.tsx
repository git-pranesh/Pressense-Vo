export function WorkFinalCTA() {
  return (
    <section id="apply" className="py-28 lg:py-40 relative overflow-hidden bg-ink" aria-labelledby="cta-heading" data-dark="true">
      {/* Grid background */}

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-foreground text-balance mb-6 leading-[1.08]" id="cta-heading">
            See a pattern in your business?
          </h2>

          <p className="text-lg text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Start with a focused diagnostic. We will help identify whether the real constraint is strategy, GTM, operations, systems, or execution.
          </p>

          {/* CTA button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
              aria-label="Start a diagnostic"
            >
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" aria-hidden="true" />
    </section>
  )
}
