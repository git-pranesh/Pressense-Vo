export function CaseStudiesHero() {
  return (
    <section
      id="case-studies-hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Case studies introduction"
    >
      {/* Grid background */}

      {/* Gradient accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
            Case Studies
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.08] mb-6 text-balance">
            We don&apos;t share testimonials.{' '}
            <span className="text-muted-foreground font-light">
              We share what we fixed, and how.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every engagement starts with a broken system. Here&apos;s what we found—and what we built to fix it.
          </p>
        </div>
      </div>
    </section>
  )
}
