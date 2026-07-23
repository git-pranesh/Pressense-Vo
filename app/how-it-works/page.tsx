import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'
import { VisualCard } from '@/components/visual-card'

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
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 pt-28 pb-16 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow-pill">How It Works</span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05] text-balance mb-6">
                How an engagement works
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We look at your business before we recommend anything. No pitch on day one.
              </p>
            </div>
            <VisualCard aspectRatio="4 / 3" style={{ minHeight: '360px' }} />
          </div>
        </div>
      </section>

      {/* ── Phase 1 — Diagnose ───────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <span className="eyebrow-pill">Phase 1 — Diagnose</span>
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
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <span className="eyebrow-pill">Phase 2 — Build</span>
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
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <span className="eyebrow-pill">Phase 3 — Grow</span>
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
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Start with the diagnostic"
            body="There's no obligation past that first step. If the fix is small, we'll say so. If it's bigger, you'll know exactly what you're signing up for before spending anything."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}
