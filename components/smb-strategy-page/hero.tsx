export function SMBStrategyHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20 bg-background hero-section"
      aria-label="Small business strategy consultant"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Strategy / Small Business</span>
          </div>
          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Small Business Strategy Consultant: Direction First, Then Tools
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Most small business owners do not need more software. They need someone to sit with them, understand where they are stuck, and build a clear roadmap for where they are going. We do that first. AI and systems come after.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A small business strategy consultant</strong> helps business owners move from reactive day-to-day operations to deliberate, outcome-driven growth. At Pressense, that means a diagnostic session, a written business roadmap, mentorship through execution, and outcome-tied deliverables at every stage. We do not hand you a generic framework. We build a plan for your specific business.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">Strategy first</span>
              <span className="text-sm text-muted-foreground">AI comes after clarity</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">90-day roadmap</span>
              <span className="text-sm text-muted-foreground">with clear deliverables</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">Mentorship</span>
              <span className="text-sm text-muted-foreground">not just advice</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Strategy Session
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#why-strategy-first"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              Why Strategy First
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
