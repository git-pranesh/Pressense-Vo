import Link from 'next/link'

export function HowWeWorkCTA() {
  return (
    <section
      id="start"
      className="py-28 lg:py-40 relative overflow-hidden"
      aria-labelledby="start-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-15"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="start-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ink-foreground text-balance mb-6 leading-[1.08]"
          >
            Ready to build the systems your business needs?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Start with a conversation. We&apos;ll discuss where you are, where you want
            to go, and whether we&apos;re the right fit to help you get there.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
              aria-label="Start a diagnostic"
            >
              Start With a Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5h6M5 2l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="/what-we-fix"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-medium border border-border text-ink-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
              aria-label="See what problems we solve"
            >
              See What We Fix
            </Link>
          </div>

          {/* Trust note */}
          <p className="mt-10 text-sm text-muted-foreground">
            No pressure. No sales pitch. Just an honest conversation about fit.
          </p>
        </div>
      </div>
    </section>
  )
}
