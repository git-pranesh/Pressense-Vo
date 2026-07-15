export function SaaSGTMHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20"
      aria-label="SaaS go-to-market strategy consulting"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Strategy / SaaS GTM</span>
          </div>
          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            SaaS Go-to-Market Strategy for Growing Businesses
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            We build your ICP definition, positioning, channel strategy, and 90-day execution roadmap so your first customers come from a plan, not a guess.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A SaaS go-to-market strategy</strong> is a structured plan that defines who your product is for, how you reach them, and how you convert and retain them. A strong GTM strategy covers ICP definition, competitive positioning, pricing, channel selection, and a phased launch roadmap, giving your team a shared playbook instead of competing assumptions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">90 days</span>
              <span className="text-sm text-muted-foreground">to first GTM sprint</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">4 phases</span>
              <span className="text-sm text-muted-foreground">Diagnose to Scale</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">From $3K</span>
              <span className="text-sm text-muted-foreground">GTM Sprint</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#gtm-problems"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See What We Solve
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
