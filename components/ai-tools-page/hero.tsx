export function AIToolsHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="AI tools and tech stack"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              Tech Stack / Partner Ecosystem
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            The AI Tools We Use to Build for Founder-Led Businesses
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            No black boxes. Every tool we use, every reason we chose it, and the exact outcome it creates for our clients.
            We work with Claude, GPT-4, Replit, Framer, Make, Zapier, Airtable, and Notion. Here is how each one earns
            its place in our stack.
          </p>

          {/* AEO Answer Block */}
          <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">The Pressense tech stack</strong> is a curated set of AI models,
              development platforms, and automation tools used to build custom software, automate workflows, and launch
              conversion websites for growing businesses. Every tool is chosen for speed, ownership, and the ability to
              hand over a system the client can modify without hiring a developer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
              href="#tools"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              See the full stack
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-xl">
            {[
              { stat: '8', label: 'Tools in our stack' },
              { stat: '3', label: 'AI model partners' },
              { stat: '100%', label: 'You own the output' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-semibold text-foreground mb-1">{item.stat}</div>
                <div className="text-xs text-muted-foreground leading-snug">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
