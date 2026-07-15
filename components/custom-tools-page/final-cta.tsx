export function CustomToolsFinalCTA() {
  return (
    <section id="cta" className="py-28 lg:py-40 relative overflow-hidden" aria-labelledby="final-heading">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="final-heading" className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-foreground text-balance mb-6 leading-[1.08]">
            Start with one workflow.
          </h2>
          <p className="text-lg text-ink-muted mb-12 leading-relaxed text-pretty">
            You do not need to rebuild your entire business at once. The best place to start is usually one workflow that is painful, repeated, and important.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/diagnostic" className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href="/playbooks" className="inline-flex items-center gap-2 px-7 py-5 rounded-2xl text-base font-medium border border-border text-ink-foreground hover:border-primary/50 hover:bg-ink-card/40 transition-all duration-200">
              View Playbooks
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
