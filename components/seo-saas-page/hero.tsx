export function SeoSaasHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="SEO content for SaaS companies"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              Content / SEO for SaaS
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            SEO Content for SaaS: Build Organic Pipeline, Not Just Traffic
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Most SaaS content agencies optimise for word count. We optimise for buyers who are actively searching for what you sell. Pressense builds SEO content systems for B2B SaaS companies that need organic pipeline, not just page views, and need to show up in both Google and AI search engines when the right buyer is looking.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">SEO content for SaaS</strong> is content written specifically to rank for the search queries your buyers use at every stage of the buying journey, from problem-aware to solution-ready. It is not blog posts for brand awareness. It is a structured content architecture designed to bring in qualified traffic, convert visitors into leads, and get cited by AI engines like ChatGPT and Perplexity when buyers ask about your category.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-semibold text-foreground">2-6 months</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">to first page rankings</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">AEO-ready</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Google + AI search engines</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">Technical</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">written for real buyers</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how-we-work"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60"
        aria-hidden="true"
      />
    </section>
  )
}
