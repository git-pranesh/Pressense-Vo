import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How an Engagement Works | Pressense',
  description:
    'We look at your business before we recommend anything. No pitch on day one. Three phases: Diagnose, Build, Grow.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How an Engagement Works | Pressense',
    description:
      'We look at your business before we recommend anything. No pitch on day one.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How an Engagement Works | Pressense',
    description:
      'We look at your business before we recommend anything. No pitch on day one.',
  },
}

export default function HowItWorksPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="grid-bg border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-20 lg:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">How It Works</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] text-balance">
            How an engagement works
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We look at your business before we recommend anything. No pitch on day one.
          </p>
        </div>
      </section>

      {/* ── Phase 1 — Diagnose ───────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Phase 1 — Diagnose</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-8">
            We find the actual problem first
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Someone usually comes to us already sure they need a new CRM, or an app, or some kind of automation. Sometimes they&apos;re right. Often the CRM isn&apos;t the real issue. It&apos;s a symptom of something upstream.
            </p>
            <p>
              We spend time inside the business. We look at how work moves from a sale closing to delivery starting. Who has to sign off on what. Where reports come from. What still lives in someone&apos;s inbox, or a spreadsheet only one person understands.
            </p>
            <p>
              You get a plain breakdown of what&apos;s costing you time and money, and what we&apos;d fix first. If the honest answer is you don&apos;t need us, we say that.
            </p>
            <p className="text-sm text-muted-foreground/70">This part takes about a week.</p>
          </div>
        </div>
      </section>

      {/* ── Phase 2 — Build ──────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Phase 2 — Build</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-8">
            We build what fixes it
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Once we know the bottleneck, we build the tool or system that addresses it. We shape it around how your team already works, so people aren&apos;t relearning their jobs to use it.
            </p>
            <p>
              If you&apos;re a strong fit, we&apos;ll build a small first piece for free. You see real work before committing to the full build.
            </p>
            <p>
              You stay in the loop the whole way. You won&apos;t wait three months for a reveal.
            </p>
          </div>
        </div>
      </section>

      {/* ── Phase 3 — Grow ───────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Phase 3 — Grow</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-8">
            Some clients bring us in further
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              This step is optional, and we don&apos;t push it. Once the systems work, the data&apos;s clean, and the team isn&apos;t waiting on the founder for every approval, growth work sticks.
            </p>
            <p>
              For clients who want it, we help with positioning, go-to-market, and fractional CMO support. This only works because the operations underneath are already solid. Skip that part, and growth work usually falls apart quickly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 mb-4">Where to start</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground leading-tight text-balance mb-4">
            Start with the diagnostic
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-xl mb-8">
            There&apos;s no obligation past that first step. If the fix is small, we&apos;ll say so. If it&apos;s bigger, you&apos;ll know exactly what you&apos;re signing up for before spending anything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary text-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Start a Free Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
