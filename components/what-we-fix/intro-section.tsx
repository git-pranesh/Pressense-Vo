export function IntroSection() {
  return (
    <section
      id="intro"
      className="py-20 border-y border-border/40"
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="intro-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-6 text-balance"
          >
            We see the same patterns again and again.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These are the constraints that most often block growth — unclear positioning,
            weak handoffs, manual processes, misaligned teams, and systems that don&apos;t fit
            the current stage. The good news: they&apos;re fixable.
          </p>
        </div>
      </div>
    </section>
  )
}
