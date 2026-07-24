import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom Software & Internal Tools | Pressense',
  description: 'We build internal software and tools shaped around how your team actually works — not the other way around.',
  alternates: { canonical: '/custom-software-internal-tools' },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatWeDeliver = [
  'Custom internal dashboards and admin panels',
  'Workflow and approval automation tools',
  'Data pipeline and reporting systems',
  'API integrations between your existing tools',
  'Client portals and self-service platforms',
  'Legacy system replacement and modernisation',
]

const goodFit = [
  'Teams managing work across 4+ disconnected tools',
  'Businesses where a single workflow bottleneck costs hours every week',
  'Companies that have outgrown off-the-shelf SaaS',
  'Founders who know what they want but cannot find it in the market',
]

const notFit = [
  'Businesses looking for a quick website or landing page',
  'Teams not ready to document their existing processes',
  'Projects requiring a full consumer-facing product from scratch',
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most internal tools ship within 4–8 weeks. Simpler automations can be live in under 2 weeks. We scope everything before starting so there are no surprises.',
  },
  {
    q: 'Do we need a technical team to maintain it?',
    a: 'No. We build with maintainability in mind and hand over full documentation. We also offer ongoing support retainers if you prefer us to stay involved.',
  },
  {
    q: 'What if our requirements change mid-build?',
    a: 'We work in short sprints with regular check-ins. Scope changes are handled transparently — we will tell you the impact before acting on anything.',
  },
  {
    q: 'Can you integrate with our existing tools?',
    a: 'Yes. We work with Salesforce, HubSpot, Notion, Airtable, Slack, and custom APIs. If it has an API, we can connect to it.',
  },
]

export default function CustomSoftwarePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ backgroundImage: 'url(/images/service-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Custom Software &amp; Internal Tools</span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Software built around how you actually work.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Stop adapting your process to fit generic tools. We build internal software shaped around your team — saving hours every week from day one.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors" style={{ background: '#EDEBE5', color: '#1A0F06' }}>
                  Book a free call
                </Link>
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
                Tools your team will actually use.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Every tool we build is designed for adoption — clean interfaces, fast performance, and zero onboarding friction.
              </p>
            </div>
            <ul className="space-y-4 pt-2">
              {whatWeDeliver.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[#FF9A5C]" aria-hidden="true" />
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
                      <span className="mt-2 shrink-0 h-1.5 w-1.5 rounded-full bg-[#FF9A5C]" aria-hidden="true" />
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
                <dt
                  className="font-normal text-foreground text-xl leading-snug mb-3"
                  style={{ fontFamily: GARAMOND }}
                >
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
            body="Book a free 30-minute assessment and we'll show you exactly where software can save you time and money."
            ctaLabel="Book a call"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
