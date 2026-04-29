import Link from 'next/link'

export function WhatWeFixCTA() {
  return (
    <section
      id="cta"
      className="py-28 lg:py-40 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-[1.08]"
          >
            Ready to fix what&apos;s broken?{' '}
            <span className="text-primary font-light italic">
              Let&apos;s talk.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Start with a conversation. We&apos;ll help you understand what&apos;s
            really holding you back, and whether we&apos;re the right team to
            help.
          </p>

          {/* CTA button */}
          <Link
            href="/diagnostic"
            className="group inline-flex items-center gap-3 px-9 py-5 rounded-2xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
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
        </div>
      </div>
    </section>
  )
}
