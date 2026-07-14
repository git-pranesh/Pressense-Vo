export function ApplyHero() {
  return (
    <section
      id="apply-hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Apply page introduction"
    >
      {/* Grid background */}

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
          Apply to Work With Us
        </p>

        {/* H1 - Only H1 on page */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.08] text-balance mb-6">
          Let&apos;s see if we&apos;re the right fit.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          We work with a limited number of businesses at a time. This short
          application helps us understand your situation and see if there&apos;s
          alignment.
        </p>
      </div>
    </section>
  )
}
