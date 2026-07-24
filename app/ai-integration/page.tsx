import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'AI Integration | Pressense',
  description: 'We find where AI actually saves time in your operation, then build it into the tools you already use.',
  alternates: { canonical: '/ai-integration' },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatWeDeliver = [
  'AI-assisted lead scoring and qualification',
  'Automated document summarisation and data extraction',
  'First-pass email and response drafting',
  'Intelligent routing and triage for inbound requests',
  'Custom AI built into your existing internal tools',
  'Human-in-the-loop review flows for high-stakes outputs',
]

const goodFit = [
  'Teams doing repetitive summarising, sorting, or drafting at real volume',
  'Businesses with existing tools and data clean enough for AI to work reliably',
  'Companies that want AI to save time on something specific, not AI as a general idea',
  'Founders who want honest guidance on where AI actually helps vs where it does not',
]

const notFit = [
  'Businesses hoping AI will fix a process that is fundamentally broken',
  'Teams without any existing data or workflow for AI to plug into',
  'Companies looking for a chatbot widget as a marketing feature rather than an operational tool',
]

const faqs = [
  {
    q: 'What AI models do you use?',
    a: 'Whatever fits the task best. Sometimes that is GPT, sometimes Claude, sometimes something smaller and cheaper for a simple job. We do not default to whatever is trendiest.',
  },
  {
    q: 'Is our data safe?',
    a: 'We build with data handling in mind from the start and walk you through exactly how your data is used before anything goes live.',
  },
  {
    q: 'Will this replace our team?',
    a: 'No. It is built to remove repetitive work, not the people doing the job. Most clients redirect that saved time toward work that actually needs a person.',
  },
  {
    q: 'What if AI gets something wrong?',
    a: 'We build in review steps for anything with real consequences. AI drafts or flags — a person confirms before anything final happens, especially early on.',
  },
]

export default function AiIntegrationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/images/service-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>AI Integration</span>
              <h1 className="font-normal leading-tight text-balance mb-5" style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}>
                AI that removes work, not a demo that looks impressive.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                We find where AI actually saves time in your operation, then build it into the tools you already use — not bolted on as a feature nobody touches.
              </p>
              <div className="flex flex-wrap gap-3">
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
                AI built into how you already work.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We connect AI to real workflows, test on real data, and make sure the output is something your team can trust and act on.
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
            body="Book a free 30-minute assessment and we will tell you honestly where AI can save you time and where it cannot."
            ctaLabel="Book a call"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
