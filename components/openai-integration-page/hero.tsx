import Link from 'next/link'

export function OpenAIHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="OpenAI Integration Services"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              OpenAI API Integration
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            OpenAI API Integration Services for Business
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Build AI-powered products and internal tools on GPT-4o, GPT-4o mini, and OpenAI&apos;s vision and embedding APIs. From conversational interfaces to image understanding to structured data extraction — we handle the integration, prompt engineering, and deployment so you can focus on your business.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">OpenAI API integration</strong> is the process of connecting OpenAI&apos;s models to a business application, internal tool, or workflow. GPT-4o is the most widely adopted model for conversational interfaces, tool calling, image input, and agentic systems. Pressense designs the system architecture, builds the integration, and delivers a working application your team can use from day one.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">GPT-4o</span>
              <span className="text-sm text-muted-foreground">latest model</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">From $2,000</span>
              <span className="text-sm text-muted-foreground">integration build</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">2–4 weeks</span>
              <span className="text-sm text-muted-foreground">to live integration</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/diagnostic"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/claude-api-integration"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
            >
              Compare with Claude Integration
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
