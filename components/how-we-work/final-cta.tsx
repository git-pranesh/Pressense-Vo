import Link from 'next/link'

export function HowWeWorkCTA() {
  return (
    <section
      id="start"
      className="py-28 lg:py-40 relative overflow-hidden"
      aria-labelledby="start-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="start-heading"
            className="text-display font-serif font-medium text-foreground text-balance mb-6"
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
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
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
              className="btn-secondary"
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
