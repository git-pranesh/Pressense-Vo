export function AdvisoryStrategyHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Strategic advisory">
      {/* Grid background */}

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Solutions, Advisory & Strategy</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Strategic advisory for businesses that need clarity before execution.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            We work with founders, operators, and teams to identify what is blocking growth, sharpen decisions, and define the right path forward before investing in more activity, tools, people, or marketing.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="/how-we-work"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
