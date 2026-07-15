export function ReplitAgencyHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Replit development agency"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">
              Replit Agency / Vibe Coding
            </span>
          </div>

          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Hire a Replit Developer: Build Apps, Internal Tools &amp; MVPs with Vibe Coding
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Pressense is the first Replit expert agency for founder-led businesses. We turn your plain-English idea into a production-ready app in two to eight weeks. Authentication, database, security — built right from day one. You own the code. No DevOps overhead, no enterprise price tag.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">A Replit agency</strong> is a development firm that uses Replit&apos;s AI-powered cloud IDE to design, build, and deploy production-ready software for businesses. Many founders start building with Replit Agent and get stuck halfway — the prototype works but lacks proper auth, security, error handling, and a real data model. A Replit expert developer takes ownership of the full build so you ship something that actually works in production, not just a demo.
            </p>
          </div>

          {/* Micro-stats */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            <div>
              <p className="text-2xl font-medium text-foreground">2–8 weeks</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">from brief to live app</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">From $1,500</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">production builds</p>
            </div>
            <div className="w-px bg-border/40 self-stretch" aria-hidden="true" />
            <div>
              <p className="text-2xl font-medium text-foreground">You own it</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Code in your account</p>
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
              See 15 apps we build
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
