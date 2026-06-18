import Link from 'next/link'

export function BPAHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Business Process Automation Consulting">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Business Process Automation Consulting</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            Automate the processes that break as you grow.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Manual processes that worked for 10 people break at 50. We diagnose which workflows are costing you the most time and build automation that scales your operations without scaling your headcount.
          </p>

          <div className="border-l-2 border-primary/40 pl-5 mb-8 max-w-2xl">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Business process automation consulting</strong> is the practice of auditing how work flows through a business, identifying where manual steps create bottlenecks or errors, and building automated systems to replace them. Pressense does this for founder-led businesses, service firms, and growing SaaS companies using n8n, Make, Zapier, and custom-built internal tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Audit-first</span>
              <span className="text-sm text-muted-foreground">no tools before diagnosis</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">n8n, Make, Zapier</span>
              <span className="text-sm text-muted-foreground">matched to your data needs</span>
            </div>
            <div className="w-px bg-border/60 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">From $1,200</span>
              <span className="text-sm text-muted-foreground">process audit and roadmap</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/diagnostic" className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link href="/ai-workflows-automation" className="group inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200">
              See AI Workflow Systems
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
