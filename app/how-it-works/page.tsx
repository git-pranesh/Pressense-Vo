import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

const GARAMOND = '"EB Garamond", Georgia, serif'

export const metadata: Metadata = {
  title: 'How an Engagement Works | Pressense',
  description:
    'We look at your business before we recommend anything. No pitch on day one. Three phases: Diagnose, Build, Grow.',
  alternates: { canonical: '/how-it-works' },
  openGraph: {
    title: 'How an Engagement Works | Pressense',
    description: 'We look at your business before we recommend anything. No pitch on day one.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How an Engagement Works | Pressense',
    description: 'We look at your business before we recommend anything. No pitch on day one.',
  },
}

const phases = [
  {
    number: '01',
    label: 'Phase 1 — Diagnose',
    title: 'We find the actual problem first',
    duration: 'About a week',
    body: [
      "Someone usually comes to us already sure they need a new CRM, or an app, or some kind of automation. Sometimes they're right. Often the CRM isn't the real issue. It's a symptom of something upstream.",
      "We spend time inside the business. We look at how work moves from a sale closing to delivery starting. Who has to sign off on what. Where reports come from. What still lives in someone's inbox, or a spreadsheet only one person understands.",
      "You get a plain breakdown of what's costing you time and money, and what we'd fix first. If the honest answer is you don't need us, we say that.",
    ],
  },
  {
    number: '02',
    label: 'Phase 2 — Build',
    title: 'We build what fixes it',
    duration: 'Weeks, not months',
    body: [
      "Once we know the bottleneck, we build the tool or system that addresses it. We shape it around how your team already works, so people aren't relearning their jobs to use it.",
      "If you're a strong fit, we'll build a small first piece for free. You see real work before committing to the full build.",
      "You stay in the loop the whole way. You won't wait three months for a reveal.",
    ],
  },
  {
    number: '03',
    label: 'Phase 3 — Grow',
    title: 'Some clients bring us in further',
    duration: 'Optional',
    body: [
      "This step is optional, and we don't push it. Once the systems work, the data's clean, and the team isn't waiting on the founder for every approval, growth work sticks.",
      "For clients who want it, we help with positioning, go-to-market, and fractional CMO support. This only works because the operations underneath are already solid. Skip that part, and growth work usually falls apart quickly.",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/images/pages-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>How It Works</span>
              <h1 className="font-normal leading-[1.05] text-balance mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}>
                How an engagement works
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(237,235,229,0.72)' }}>
                We look at your business before we recommend anything. No pitch on day one.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors" style={{ background: '#EDEBE5', color: '#1A0F06' }}>
                  Book a free call
                </Link>
                <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-colors" style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}>
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Phases ───────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="flex flex-col gap-24 lg:gap-32">
            {phases.map((phase) => (
              <div key={phase.number} className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">

                {/* Left — large number + label */}
                <div className="flex lg:flex-col items-baseline lg:items-start gap-5 lg:gap-4 lg:pt-1">
                  <span
                    className="leading-none select-none"
                    style={{
                      fontFamily: GARAMOND,
                      fontSize: 'clamp(64px, 8vw, 100px)',
                      fontWeight: 400,
                      color: 'rgba(26,15,6,0.10)',
                    }}
                    aria-hidden="true"
                  >
                    {phase.number}
                  </span>
                  <span className="eyebrow-pill">{phase.label}</span>
                </div>

                {/* Right — heading + body + duration */}
                <div>
                  <h2
                    className="font-normal text-foreground leading-tight text-balance mb-8"
                    style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
                  >
                    {phase.title}
                  </h2>
                  <div className="space-y-5">
                    {phase.body.map((para, i) => (
                      <p key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                  <p
                    className="mt-6 text-sm font-medium"
                    style={{ color: 'rgba(26,15,6,0.35)' }}
                  >
                    {phase.duration}
                  </p>
                </div>

              </div>
            ))}
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
