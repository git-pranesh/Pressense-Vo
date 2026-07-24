import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Fractional CMO | Pressense',
  description: 'Senior marketing leadership on a retainer basis — once the operations underneath it can hold the weight.',
  alternates: { canonical: '/fractional-cmo' },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatWeDeliver = [
  'Marketing audit and clear positioning',
  'Go-to-market roadmap with a defined first 90 days',
  'Demand generation strategy across relevant channels',
  'Messaging and narrative for sales and content',
  'Reporting built for founders and boards, not vanity metrics',
  'Ongoing strategic direction on a monthly retainer',
]

const goodFit = [
  'Businesses whose internal systems and operations are already solid, or close to it',
  'Founders still personally handling marketing decisions who need senior direction',
  'Companies ready to commit to a strategy for more than a single campaign cycle',
  'Businesses that have tried agencies and found execution without strategy is not enough',
]

const notFit = [
  'Businesses whose core operations are still the real bottleneck to growth',
  'Companies looking for a single campaign or one-off project rather than ongoing direction',
  'Teams that need execution support rather than strategic leadership',
]

const faqs = [
  {
    q: 'How is this different from hiring a marketing agency?',
    a: 'An agency usually executes a specific channel — ads or content. This is senior strategic direction across the whole go-to-market motion, closer to what an in-house CMO would own.',
  },
  {
    q: 'Do we need to fix our operations first?',
    a: 'Usually, yes. Growth strategy works best once the business underneath it can actually deliver on what is promised. If that is not the case yet, we will say so directly.',
  },
  {
    q: 'How many hours a week does this involve?',
    a: 'It depends on the engagement — but it is ongoing involvement, not a single project delivered and forgotten.',
  },
  {
    q: 'How long does a typical engagement run?',
    a: 'Most run for several months at minimum, since building and testing a go-to-market strategy properly takes longer than a single quarter.',
  },
]

export default function FractionalCmoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/images/service-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Fractional CMO</span>
              <h1 className="font-normal leading-tight text-balance mb-5" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}>
                Marketing leadership, once the foundation can hold the weight.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                For clients whose operations are already solid — we step in on positioning, go-to-market, and growth strategy without the cost of a full-time hire.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors" style={{ background: '#EDEBE5', color: '#1A0F06' }}>Book a free call</Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors" style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}>
                  How we work <span className="inline-flex items-center justify-center w-5 h-5 rounded-full" style={{ background: 'rgba(237,235,229,0.15)' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow-pill">What We Deliver</span>
              <h2
                className="font-normal text-balance mb-4 leading-tight"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Strategy tied to what the business can actually deliver.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Because we typically work with clients after their operations are solid, our recommendations are never disconnected from what the business can execute.
              </p>
            </div>
            <ul className="space-y-4 pt-2">
              {whatWeDeliver.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                  <span className="text-base text-foreground/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-12">
            <span className="eyebrow-pill">Who It&apos;s For</span>
            <h2
              className="font-normal text-balance leading-tight max-w-lg"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              You&apos;re in the right place if&hellip;
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className="rounded-3xl border p-10 flex flex-col justify-between"
              style={{ borderColor: '#D4CFC7', minHeight: '360px' }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-8">Good fit</p>
                <ul className="space-y-5">
                  {goodFit.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                      <span className="text-base text-foreground/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-highlight transition-colors">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="rounded-3xl p-10" style={{ background: '#E0DDD6', minHeight: '360px' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/40 mb-8">Not a fit</p>
              <ul className="space-y-5">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-foreground/20" aria-hidden="true" />
                    <span className="text-base text-foreground/40 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-3xl">
          <span className="eyebrow-pill">FAQ</span>
          <h2
            className="font-normal text-balance mb-12"
            style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Your questions answered.
          </h2>
          <dl className="divide-y divide-foreground/10">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <dt className="font-normal text-foreground text-xl leading-snug mb-3" style={{ fontFamily: GARAMOND }}>
                  {faq.q}
                </dt>
                <dd className="text-base text-muted-foreground leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Turn confusion into clarity, today."
            body="Book a free 30-minute assessment and we will tell you honestly whether this is the right next step for where your business is."
            ctaLabel="Book a call"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
