export function SeoSaasHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20 bg-background hero-section"
      aria-label="SEO content for SaaS companies"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Solutions / SEO Content for SaaS
            </span>
          </div>

          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            SEO Content for SaaS: Organic Pipeline, Not Just Traffic
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Most SaaS content programmes generate sessions that never convert. You publish, rankings move, traffic grows, and your trial sign-up rate stays flat. The problem is not the writing. It is that the content was built for search volume rather than buyer intent. We build content that captures the searches your best customers make right before they sign up.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">SEO content for SaaS</strong> is a specific discipline: content mapped to how software buyers research, evaluate, and commit. It is not blog writing with keywords added. It addresses bottom-of-funnel queries like comparison pages, use-case pages, and integration guides alongside the educational content that builds topical authority. The output is organic traffic with pipeline intent, not passive traffic with no commercial behaviour.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-medium text-foreground">90 days</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">to measurable organic growth</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">Pipeline-first</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">not traffic-first</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">B2B SaaS</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">specialist, not generalist</p>
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
              href="#what-we-build"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See what we build
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
      />
    </section>
  )
}
