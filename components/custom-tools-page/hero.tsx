import Link from 'next/link'

const stats = [
  { value: 'From $3,000', label: 'fixed-price build' },
  { value: '2 to 6 weeks', label: 'to first working version' },
  { value: 'Dedicated dev', label: 'and ongoing support included' },
  { value: '20+ hrs/week', label: 'reclaimed per client on average' },
]

export function CustomToolsHero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden" aria-label="Custom internal tools">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Custom Internal Tools</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            Custom Internal Tools for Businesses That Have Outgrown Spreadsheets
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We build software for the workflows your current tools cannot handle, and a dedicated developer keeps it running after launch.
          </p>

          <div className="border-l-2 border-primary/50 pl-5 mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A custom internal tool is software built specifically for the way your business operates, not adapted from a generic SaaS product. It replaces the spreadsheets, manual handoffs, and disconnected tools your team has outgrown. You own the code, you control the roadmap, and a dedicated Pressense developer keeps it running and improving after launch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 py-5 border-y border-border/40">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              See How We Work
            </Link>
          </div>

        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
    </section>
  )
}
