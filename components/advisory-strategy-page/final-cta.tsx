export function AdvisoryStrategyCTA() {
  return (
    <section className="py-28 lg:py-36 bg-ink rounded-t-3xl">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-foreground text-balance mb-6 leading-[1.08]">
            Start with the right problem.
          </h2>

          <p className="text-lg text-ink-muted mb-12 leading-relaxed text-pretty">
            If your business is growing but feels scattered, do not start by adding more activity. Start by identifying the real constraint.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="/playbooks"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-full text-base font-medium border border-ink-border/40 text-ink-foreground hover:border-primary/60 transition-all duration-200"
            >
              View Playbooks
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
