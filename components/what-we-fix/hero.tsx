'use client'

import Link from 'next/link'

export function WhatWeFixHero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-6">
            What We Fix
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-8 text-balance">
            Most businesses don&apos;t fail from lack of effort.{' '}
            <span className="text-muted-foreground font-light">
              They struggle because the fundamentals are broken.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Revenue is growing, but margins are shrinking. Teams are busy, but
            output is unclear. Goals exist, but no one can explain the path to
            them.
          </p>

          {/* CTA */}
          <Link
            href="/diagnostic"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
            aria-label="Start a diagnostic"
          >
            Start With a Diagnostic
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
    </section>
  )
}
