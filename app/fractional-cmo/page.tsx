import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CMO | Pressense',
  description: 'CMO-level marketing strategy without the full-time hire. Embedded, accountable, and results-focused — from positioning to pipeline.',
  openGraph: {
    title: 'Fractional CMO | Pressense',
    description: 'CMO-level marketing strategy without the full-time hire. Embedded, accountable, and results-focused — from positioning to pipeline.',
    url: '/fractional-cmo',
    type: 'website',
  },
}

export default function FractionalCmoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Service</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
              Fractional CMO
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Placeholder content — this page is coming soon. We provide CMO-level marketing strategy and execution on a retainer basis — positioning, demand generation, GTM strategy, and board-ready reporting without the $250K salary.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
              >
                Start Diagnostic
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
              >
                How we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder body */}
      <section className="py-16 lg:py-20 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">What we deliver</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Full page content is being written. This section will cover marketing audits, positioning frameworks, GTM strategy, demand generation setup, content programmes, and the monthly retainer engagement model.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Ready for CMO-level strategy?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every engagement starts with a free diagnostic call. We assess your current marketing, identify the biggest leverage points, and propose a retainer scoped to your stage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start your diagnostic
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
