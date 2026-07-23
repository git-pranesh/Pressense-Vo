import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fractional CMO | Pressense',
  description: 'Marketing leadership, once the operations underneath it can hold the weight. Senior go-to-market strategy on a retainer basis, without the full-time hire.',
  openGraph: {
    title: 'Fractional CMO | Pressense',
    description: 'Marketing leadership, once the operations underneath it can hold the weight. Senior go-to-market strategy on a retainer basis, without the full-time hire.',
    url: '/fractional-cmo',
    type: 'website',
  },
}

export default function FractionalCmoPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow-pill">Service</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance mb-6 leading-tight">
              Marketing leadership, once the operations underneath it can hold the weight
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
              Growth plans fail more often because of what&apos;s happening inside a business than because of the marketing plan itself. If the operational side is stuck, no amount of demand generation fixes that.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              For clients whose foundation is already solid, we step in on positioning, go-to-market, and growth strategy, without the cost of a full-time hire.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start a Free Diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Problem</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What this usually looks like</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              A founder is doing the job of a CMO in whatever hours are left after running the actual business. Marketing spend goes out, but nobody&apos;s tracking whether it&apos;s turning into pipeline that closes. Positioning shifts every few months depending on who&apos;s writing the last piece of content. There&apos;s no one senior enough to own the growth strategy end to end, and a full-time CMO hire is a six-figure commitment nobody&apos;s ready to make yet.
            </p>
            <p>
              Meanwhile, the operational side underneath all of this is often shakier than anyone&apos;s willing to admit, which is usually the real reason growth efforts stall before they get anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">The Solution</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Senior marketing leadership, without the full-time cost</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              We come in on a retainer basis and take ownership of positioning, go-to-market strategy, and demand generation, the way a CMO would, at a fraction of what a full-time hire costs.
            </p>
            <p>
              Because we typically work with clients after their operations are already solid, our recommendations aren&apos;t disconnected from what the business can actually deliver on. Strategy gets built on a foundation that can support it.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Who It&apos;s For</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Is this the right fit?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#E8E0D5] bg-[#FFFDFA] p-8">
              <span className="eyebrow-pill">Good fit</span>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li>Businesses whose internal systems and operations are already solid, or close to it.</li>
                <li>Founders still personally handling marketing decisions who need senior direction, not another freelancer.</li>
                <li>Companies ready to commit to a strategy for more than a single campaign cycle.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#2B180A] p-8">
              <span className="eyebrow-pill" style={{ borderColor: 'rgba(252,246,239,0.25)', color: 'rgba(252,246,239,0.6)' }}>Not a good fit</span>
              <ul className="space-y-3 text-sm text-[#FCF6EF]/80 leading-relaxed">
                <li>Businesses whose core operations are still the real bottleneck.</li>
                <li>Companies looking for a single campaign or one-off project rather than ongoing strategic direction.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">Methodology</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">How we get there</h2>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              We start with a marketing audit: what&apos;s working, what&apos;s being spent on without return, and where positioning is unclear or inconsistent. From there, we build a go-to-market roadmap tied to real numbers, not vanity metrics.
            </p>
            <p>
              We stay embedded month to month, adjusting as we see what&apos;s actually converting. You get reporting built for a founder or board, not a stack of dashboards nobody reads.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 border-b border-border/40 bg-secondary/20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">What You Get</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">What&apos;s included</h2>
          <ul className="space-y-3">
            {[
              'A marketing audit and clear positioning.',
              'A go-to-market roadmap with a defined first ninety days.',
              'Ongoing strategic direction on a monthly retainer.',
              'Reporting built for decision-making, not vanity metrics.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0 text-primary" aria-hidden="true">
                  <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.4" />
                  <path d="M5.5 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-b border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">FAQ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-8">Common questions</h2>
          <dl className="space-y-8">
            {[
              {
                q: 'How is this different from hiring a marketing agency?',
                a: "An agency usually executes a specific channel, like ads or content. This is senior strategic direction across the whole go-to-market motion, closer to what an in-house CMO would own.",
              },
              {
                q: 'Do we need to fix our operations first before hiring you for this?',
                a: "Usually, yes. Growth strategy works best once the business underneath it can actually deliver on what's promised. If that's not the case yet, we'll say so directly.",
              },
              {
                q: 'How many hours a week does this involve?',
                a: "Depends on the engagement, but it's ongoing involvement, not a single project delivered and forgotten.",
              },
              {
                q: 'Can we start with this before working with you on internal tools?',
                a: "We can discuss it, but we're honest that this tends to work better once the operational foundation is solid. That's part of what the diagnostic helps clarify.",
              },
              {
                q: 'How long does a typical engagement run?',
                a: "Most run for several months at minimum, since building and testing a go-to-market strategy properly takes longer than a single quarter.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-border/40 pb-8 last:border-0 last:pb-0">
                <dt className="text-base font-semibold text-foreground mb-2">{q}</dt>
                <dd className="text-base text-muted-foreground leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            See if your foundation is ready for this
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Start with the diagnostic. We&apos;ll tell you honestly whether this is the right next step for where your business actually is.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
          >
            Start a Free Diagnostic
          </Link>
        </div>
      </section>

    </main>
  )
}
