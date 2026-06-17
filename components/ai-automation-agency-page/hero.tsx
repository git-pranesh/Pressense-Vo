import Link from 'next/link'

const stats = [
  { value: '20+', label: 'hours saved per week' },
  { value: '2-4 weeks', label: 'delivery' },
  { value: '0', label: 'bloated dev teams needed' },
]

export function AIAutomationAgencyHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="AI Automation Agency">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">AI Automation Agency</span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            AI Automation Agency for Founder-Led Businesses
          </h1>

          {/* AEO answer block */}
          <div className="border-l-2 border-primary/50 pl-5 mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              An AI automation agency builds custom workflows that connect your existing tools and let AI handle repetitive tasks, lead follow-up, data entry, reporting, and client comms, so your team focuses on work that generates revenue.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 py-5 border-y border-border/40">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Get Your AI Readiness Assessment
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link
              href="/playbooks/workflow-automation-roi"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              Calculate ROI
            </Link>
          </div>

        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
