export function AIImplementationHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="AI implementation for small business"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">AI / Implementation</span>
          </div>
          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            AI Implementation for Small Business: Hands-On Help That Gets It Done
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            We sit with you, identify where AI saves the most time in your business, build the workflows, and make sure your team actually uses them. Healthcare, real estate, IT, interior design, and most small businesses in between.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AI implementation for small business</strong> is the process of identifying which parts of your operations can be improved with AI tools, then building and deploying those tools so your team can use them in day-to-day work. Unlike strategy-only engagements, Pressense stays through the build and the handoff, so AI actually gets used rather than filed away as a plan.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">30–60 days</span>
              <span className="text-sm text-muted-foreground">to first live workflow</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">10+ hrs/week</span>
              <span className="text-sm text-muted-foreground">typical time saved</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">4 verticals</span>
              <span className="text-sm text-muted-foreground">healthcare, real estate, IT, design</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#where-ai-helps"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See Where AI Helps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
