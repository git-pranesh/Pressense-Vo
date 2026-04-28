export function WhatWeDo() {
  return (
    <section className="py-20 border-y border-border/40 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.82 0.05 80) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-accent font-medium mb-5">
          Our Approach
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-5 text-balance">
          We don&apos;t just advise.
          <br />
          <span className="text-primary font-light italic">We diagnose, fix, and build.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          We work with businesses that are already moving — but need clarity, direction, and
          execution to scale properly. From strategy to systems to execution, everything is
          aligned with how the business actually operates.
        </p>
      </div>
    </section>
  )
}
