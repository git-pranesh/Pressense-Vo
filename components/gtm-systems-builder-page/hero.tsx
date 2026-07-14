export function GtmSystemsBuilderHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="GTM systems builder for B2B SaaS founders"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              What Pressense Does
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            GTM Systems Builder: Strategy, Content, and Internal Tools for B2B Founders
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Most founders build a great product and then fight for traction with ad hoc marketing, a disconnected content calendar, and manual operations held together by spreadsheets. Pressense builds the systems that replace all three: a GTM motion that generates organic pipeline, and the internal tools that make the operation run without the founder in the middle of everything.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A GTM systems builder</strong> designs, builds, and automates the infrastructure that powers a B2B revenue operation: data enrichment pipelines, signal-based outbound workflows, CRM integrations, and content systems that generate inbound pipeline. Where a GTM consultant defines the strategy and RevOps manages the operating engine, a GTM systems builder builds the machine — the technical layer that executes the strategy at scale without proportional headcount growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-semibold text-foreground">Three tracks</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">GTM, content, internal tools</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">One operator</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">not a committee</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">Founder-led</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">B2B SaaS focus</p>
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
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See the three tracks
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
