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
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="eyebrow mb-6">
          Apply to Work With Us
        </p>

        {/* H1 - Only H1 on page */}
        <h1 className="text-display font-serif font-medium text-foreground leading-[1.08] text-balance mb-6">
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
