export function GtmSystemsBuilderHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 overflow-hidden"
      aria-label="GTM systems builder for B2B SaaS founders"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              What Pressense Does
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            GTM Systems Builder: Strategy, Content, and Internal Tools for B2B Founders
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We replace founder heroics with three connected systems: a GTM motion, a content programme, and internal tools that scale without you in the middle.
          </p>

          <div className="border-l-2 border-primary/50 pl-5 mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A GTM systems builder designs, builds, and operates the infrastructure that powers a B2B revenue operation: ICP and positioning, SEO content systems that generate organic pipeline, and custom internal tools that remove operational bottlenecks. Where a fractional CMO manages an existing team and a consultant writes strategy documents, a GTM systems builder builds the machine and makes it run.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 py-5 border-y border-border/40">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-semibold text-foreground">Three tracks</span>
              <span className="text-sm text-muted-foreground">GTM, content, internal tools</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-semibold text-foreground">One operator</span>
              <span className="text-sm text-muted-foreground">not a committee</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-semibold text-foreground">B2B SaaS focus</span>
              <span className="text-sm text-muted-foreground">seed to Series A</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              See How We Work
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
