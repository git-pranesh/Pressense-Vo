export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="py-32 lg:py-48 bg-background card-lift"
      aria-labelledby="our-approach-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">Our Approach</span>
          <div className="eyebrow-line" aria-hidden="true" />
        </div>
        <h2
          className="text-display font-serif text-foreground text-balance max-w-3xl mx-auto mb-6"
          id="our-approach-heading"
        >
          We don&apos;t just advise.{' '}
          <em className="italic">
            We diagnose, fix, and build.
          </em>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty font-sans">
          We work with businesses that are already moving, but need clarity, direction, and
          execution to scale properly. From strategy to systems to execution, everything is
          aligned with how the business actually operates.
        </p>
      </div>
    </section>
  )
}
