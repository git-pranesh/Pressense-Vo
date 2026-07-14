export function AIWorkflowsHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="AI workflows and automation">
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Solutions / AI Workflows & Automation</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            AI workflows that reduce manual work without adding more noise.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            AI becomes useful only when it is applied to the right workflow, with clear inputs, ownership, review, and outcomes. We help businesses use AI and automation to reduce repeated work, improve consistency, and support execution where it actually makes sense.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">AI workflow automation</strong> is the practice of identifying repeatable business tasks — content creation, sales follow-up, reporting, research, onboarding — and building structured systems where AI handles the repeated parts while humans own the judgment and review. Pressense designs and builds these systems for founder-led businesses, professional services firms, and SaaS companies.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">Workflow-first</span>
              <span className="text-sm text-muted-foreground">tools follow the process</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">n8n, Make, Zapier</span>
              <span className="text-sm text-muted-foreground">matched to your needs</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-foreground">From $2,500</span>
              <span className="text-sm text-muted-foreground">automation build</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/how-we-work" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
