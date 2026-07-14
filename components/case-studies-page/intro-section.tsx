export function IntroSection() {
  return (
    <section
      id="intro"
      className="py-16"
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="sr-only" id="intro-heading">
            About our case studies
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            These are anonymised composites drawn from real engagements. The patterns, problems, and outcomes are real. We don&apos;t name clients or inflate results.
          </p>
        </div>
      </div>
    </section>
  )
}
