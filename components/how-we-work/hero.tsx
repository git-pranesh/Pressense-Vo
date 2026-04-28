export function HowWeWorkHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Introduction to our process"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
            Our Process
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6 text-balance">
            A system, not a service.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            We don&apos;t offer deliverables and disappear. We work inside your business
            for a focused period of time to diagnose, fix, and build the systems that
            allow you to scale.
          </p>

          {/* Phase indicators */}
          <div className="flex flex-wrap gap-3">
            {['Diagnose', 'Build the Plan', 'Execute', 'Measure'].map((phase, i) => (
              <span
                key={phase}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-secondary/60 text-foreground border border-border/50"
              >
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                {phase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
