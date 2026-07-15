import Link from 'next/link'

const stats = [
  { value: '3-5x', label: 'faster pipeline velocity' },
  { value: 'From $2K/mo', label: 'Pressense fractional RevOps' },
  { value: 'India + Global', label: 'clients served' },
]

export function RevOpsHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
      aria-label="Revenue Operations Consulting"
    >
      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Revenue Operations Consulting</span>
          </div>

          {/* H1 — primary keyword exact match */}
          <h1 className="text-hero font-serif font-medium tracking-tight text-foreground text-balance leading-[1.1] mb-4">
            Revenue Operations Consulting for Scaling B2B Businesses
          </h1>

          {/* Outcome statement */}
          <p className="text-xl sm:text-2xl font-medium text-foreground mb-6">
            We align your marketing, sales, and customer success teams around one operating model so revenue becomes predictable, not accidental.
          </p>

          {/* AEO answer block — 44 words, starts "Revenue operations consulting..." */}
          <div className="border-l-2 border-primary/50 pl-5 mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Revenue operations consulting aligns your marketing, sales, and customer success functions under one operational framework, eliminating handoff failures, pipeline leakage, and data silos that stall revenue growth.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 py-5">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/diagnostic"
              className="group inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
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
              className="group inline-flex items-center gap-2 px-9 py-5 rounded-full text-base font-semibold border border-border text-foreground hover:border-foreground/40 transition-all duration-200"
            >
              View Packages
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
