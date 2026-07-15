export function WebsitesConversionFinalCTA() {
  return (
    <section className="py-28 lg:py-36 bg-ink rounded-t-3xl">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink-foreground mb-6 text-balance">
            Start with clarity, not design.
          </h2>
          <p className="text-lg text-ink-muted mb-10 leading-relaxed">
            If your website is not converting, the issue is usually not design. It is clarity, structure, and communication.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start With a Diagnostic
              <span className="w-5 h-5 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="/playbooks"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border border-border/60 text-foreground hover:bg-ink-card/50 transition-all duration-200"
            >
              View Playbooks
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
