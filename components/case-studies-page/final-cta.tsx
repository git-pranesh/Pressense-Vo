import Link from 'next/link'

export function CaseStudiesFinalCTA() {
  return (
    <section
      id="cta"
      className="py-28 lg:py-40 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-[1.08]"
            id="cta-heading"
          >
            Seeing yourself in these stories?{' '}
            <span className="text-primary font-light italic">
              Let&apos;s talk.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            If your business is stuck in a pattern you can&apos;t break, we should have a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
              aria-label="Go to the application page"
            >
              Apply to Work With Us
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
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
              aria-label="Learn more about our methodology"
            >
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
