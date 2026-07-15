export function GtmContentHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20"
      aria-label="GTM content systems for B2B SaaS"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Solutions / GTM Content Systems
            </span>
          </div>

          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            GTM Content Systems: From Founder-Led Heroics to Repeatable Pipeline
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Most early-stage B2B SaaS companies generate their first pipeline through founder hustle: personal network, warm intros, a few LinkedIn posts that hit. That works until it does not. When you need predictable, repeatable revenue that does not depend on the founder showing up every week, you need a GTM content system, not a content calendar.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A GTM content system</strong> is the architecture that connects your positioning, content production, distribution channels, and CRM into a single repeatable motion. Every piece of content has a defined job at a specific stage of the buyer journey. Every distribution channel has a cadence. Every lead that comes through content is tagged, tracked, and followed up. The system runs without heroics. It compounds without constant intervention.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-medium text-foreground">4–6 weeks</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">system design to live</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">One motion</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">strategy + content + distribution</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">Compounds</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">paid ads stop, this does not</p>
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
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See how it works
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
