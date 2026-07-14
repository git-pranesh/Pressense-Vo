export function CustomToolsHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Custom internal tools solution">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Solutions, Internal Tools</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Custom internal tools for businesses that have outgrown spreadsheets.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            When growth creates operational chaos, the answer is not always another SaaS subscription. We help teams diagnose broken workflows, design better systems, and build internal tools that create visibility, ownership, and scale.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A custom internal tool</strong> is software built specifically for the way your business operates, not adapted from a generic SaaS product. It replaces the spreadsheets, manual handoffs, and disconnected tools your team has outgrown. You own the code, you control the roadmap, and a dedicated Pressense developer keeps it running and improving after launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">From $3,000</span>
              <span className="text-sm text-muted-foreground">fixed-price build</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">2–6 weeks</span>
              <span className="text-sm text-muted-foreground">first working version</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Dedicated dev</span>
              <span className="text-sm text-muted-foreground">and support included</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/replit-development-agency" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
              See Our Replit Agency
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
