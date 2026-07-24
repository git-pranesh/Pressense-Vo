import Link from 'next/link'

export function DiagnosticApproach() {
  return (
    <section
      id="diagnostic"
      className="py-28 lg:py-36 border-t border-border/40 relative overflow-hidden"
      aria-labelledby="diagnostic-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Our Approach
            </p>
            <h2
              id="diagnostic-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6 text-balance"
            >
              We don&apos;t guess.{' '}
              <span className="text-muted-foreground font-light">
                We diagnose.
              </span>
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Every engagement starts with a structured diagnostic. We map
                your current state, identify the real constraints, and build a
                prioritized roadmap.
              </p>
              <p>
                Then we work alongside you to fix what&apos;s broken and build
                what&apos;s missing, not as consultants who leave you with a
                deck, but as operators who help you execute.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
              >
                See our four-step approach
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right visual - diagnostic diagram */}
          <div className="relative" aria-hidden="true">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Center circle */}
              <div className="absolute inset-[30%] rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  Root Cause
                </span>
              </div>

              {/* Outer ring */}
              <div className="absolute inset-[15%] rounded-full border border-border/40" />

              {/* Outermost ring */}
              <div className="absolute inset-0 rounded-full border border-border/20" />

              {/* Connector nodes */}
              {[
                { label: 'Strategy', angle: 0 },
                { label: 'Sales', angle: 60 },
                { label: 'Ops', angle: 120 },
                { label: 'Finance', angle: 180 },
                { label: 'Team', angle: 240 },
                { label: 'Systems', angle: 300 },
              ].map((node) => {
                const radian = (node.angle * Math.PI) / 180
                const x = 50 + 42 * Math.cos(radian)
                const y = 50 + 42 * Math.sin(radian)
                return (
                  <div
                    key={node.label}
                    className="absolute w-16 h-16 -ml-8 -mt-8 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm flex items-center justify-center"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {node.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
