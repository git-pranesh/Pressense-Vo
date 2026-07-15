export function ContentAuthorityHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Content and authority systems">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Solutions / Content & Authority Systems</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Content systems that turn expertise into market trust.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Most businesses do not lack knowledge. They lack a clear system for translating that knowledge into positioning, website copy, search content, founder-led authority, and buyer-facing communication that supports demand.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A content authority system</strong> is the infrastructure behind how a business communicates: SEO content, AEO-optimised pages, technical writing, thought leadership, LinkedIn, and Medium publishing, built into a repeatable workflow. Pressense designs and builds this system for SaaS companies, medical businesses, and founder-led service firms that need to be found, trusted, and cited.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">SEO + AEO</span>
              <span className="text-sm text-muted-foreground">built into one system</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">SaaS, Medical</span>
              <span className="text-sm text-muted-foreground">and service verticals</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Thought leadership</span>
              <span className="text-sm text-muted-foreground">LinkedIn and Medium</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/how-we-work" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
              See How We Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
