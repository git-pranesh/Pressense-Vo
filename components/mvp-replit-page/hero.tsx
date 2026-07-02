export function MvpReplitHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="MVP development on Replit"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              Replit / MVP Development
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            MVP Development on Replit: Launch a Production-Ready SaaS in 6 Weeks
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Vibe coding gets you to a working demo. We get you to a live product. Pressense builds production-grade MVPs on Replit for founders who have outgrown what Replit Agent can do alone. Authentication, database, security, and deployment, all built right from the start. You own the code in your own account.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">MVP development on Replit</strong> is the process of using Replit&apos;s AI-powered cloud IDE to build, deploy, and iterate on a minimum viable product. The platform is fully production-capable, supporting Neon PostgreSQL, custom domains, auth libraries, and full-stack TypeScript. Most founders start strong with Replit Agent and get 70% of the way there. The remaining 30%, production auth, security, error handling, and a real data model, is where you need a developer who knows what they are doing.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-semibold text-foreground">6 weeks</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">from audit to live MVP</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">From $3,500</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">fixed-price builds</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-semibold text-foreground">Your account</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">you own every line</p>
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
              See the 6-week process
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
