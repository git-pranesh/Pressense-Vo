import Link from 'next/link'

export function FractionalCMOCTA() {
  return (
    <section className="py-28 lg:py-36">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-[1.08]">
            Book your Fractional CMO Sprint.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed text-pretty">
            Start with a free 45-minute diagnostic. We map your current marketing constraints, confirm whether a fractional CMO engagement is the right fit, and outline exactly what the first 90 days would look like for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            >
              Book a Free Diagnostic
              <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-2xl text-base font-semibold border border-border/40 text-foreground hover:border-primary/40 transition-all duration-200"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
