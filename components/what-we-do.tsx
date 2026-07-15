export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="py-24 bg-ink rounded-3xl mx-4 lg:mx-8 overflow-hidden"
      aria-labelledby="our-approach-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="eyebrow-line-dark" />
          <span className="eyebrow-on-dark">Our Approach</span>
          <div className="eyebrow-line-dark" />
        </div>
        <h2
          className="text-display font-serif font-medium text-ink-foreground text-balance max-w-3xl mx-auto mb-6"
          id="our-approach-heading"
        >
          We don&apos;t just advise.{' '}
          <em className="not-italic text-primary/90" style={{ fontStyle: 'italic', fontWeight: 400 }}>
            We diagnose, fix, and build.
          </em>
        </h2>
        <p className="text-lg text-ink-muted max-w-xl mx-auto leading-relaxed text-pretty">
          We work with businesses that are already moving, but need clarity, direction, and
          execution to scale properly. From strategy to systems to execution, everything is
          aligned with how the business actually operates.
        </p>
      </div>
    </section>
  )
}
