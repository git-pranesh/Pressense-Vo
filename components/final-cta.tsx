export function FinalCTA() {
  return (
    /* Pattern 7 — Editorial CTA Block: MODE B full-bleed, centered, flanking eyebrow */
    <section
      id="diagnostic"
      className="py-32 lg:py-40 bg-ink"
      aria-labelledby="diagnostic-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">

        {/* Flanking eyebrow — line · label · line */}
        <div className="eyebrow-flanked eyebrow-on-dark mb-10">
          Start Diagnosing
        </div>

        <h2
          className="text-display font-serif text-ink-foreground text-balance mb-6"
          id="diagnostic-heading"
        >
          If your business is growing but feels unstructured,{' '}
          <em className="italic">start with a diagnostic.</em>
        </h2>

        <p className="text-lg text-ink-muted mb-12 max-w-xl mx-auto leading-relaxed text-pretty font-sans">
          We will help you understand whether the right next step is advisory support,
          a workflow, website, content system, or a practical implementation sprint.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="/diagnostic"
            className="btn-primary"
            aria-label="Start a diagnostic"
          >
            Start With a Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/how-we-work"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-medium font-sans border border-ink-foreground/25 text-ink-foreground hover:border-ink-foreground/50 hover:bg-ink-foreground/5 transition-all duration-200"
            aria-label="See how we work"
          >
            See How We Work
          </a>
        </div>

        {/* Small note */}
        <p className="text-xs text-ink-muted/60 tracking-wide font-sans">
          No commitment required. Requests reviewed within 48 hours.
        </p>
      </div>
    </section>
  )
}
