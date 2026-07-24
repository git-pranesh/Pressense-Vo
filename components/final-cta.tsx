export function FinalCTA() {
  return (
    <section id="diagnostic" className="py-28 lg:py-40 relative overflow-hidden" aria-labelledby="diagnostic-heading">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, #D4CFC8 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-accent opacity-60" />
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium">Diagnostic</span>
          <div className="h-px w-8 bg-accent opacity-60" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-[1.08]" id="diagnostic-heading">
          If your business is growing but feels unstructured,{' '}
          <span className="text-primary font-light italic">start with a diagnostic.</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
          We will help you understand whether the right next step is advisory support, a workflow, website, content system, or a practical implementation sprint.
        </p>

        {/* CTA button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
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

        {/* Small note */}
        <p className="mt-8 text-xs text-text-dim tracking-wide">
          Diagnostic requests are reviewed within 48 hours. We respond to every serious inquiry.
        </p>
      </div>
    </section>
  )
}
