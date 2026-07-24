import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom CRM | Pressense',
  description: 'A CRM built around how your team actually sells — not a generic template your team quietly abandons.',
  alternates: { canonical: '/custom-crm' },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatWeDeliver = [
  'Pipeline stages that match your real sales process',
  'Custom fields for exactly what your team tracks',
  'Email and calendar integrations built in from day one',
  'Sales-to-delivery handoff built into the same system',
  'Reporting dashboards for founders and sales leads',
  'Integrations with your existing tools and data sources',
]

const goodFit = [
  'Teams that tried an off-the-shelf CRM and stopped using it within months',
  'Businesses with a sales process specific enough that generic templates do not fit',
  'Companies where sales, delivery, and finance need to see the same information',
  'Founders who have lost pipeline visibility because nobody logs things properly',
]

const notFit = [
  'Teams with a simple, low-volume sales process where a basic tool genuinely works',
  'Businesses not ready to define what their actual sales process should be',
  'Companies expecting a CRM to fix a broken sales motion rather than support a working one',
]

const faqs = [
  {
    q: 'Why not just use Salesforce or HubSpot?',
    a: 'Those tools work well for many businesses. They fall short when your sales process is specific enough that you are constantly working around the platform. That is usually when a custom build makes more sense.',
  },
  {
    q: 'Will our team need full retraining?',
    a: 'Some training, yes — but it is built around how your team already works. The learning curve is smaller than switching to another off-the-shelf platform because the CRM matches your existing process.',
  },
  {
    q: 'Can it integrate with tools we already use?',
    a: 'Yes. Email, calendar, and most systems your team relies on daily. We confirm exactly what during the diagnostic.',
  },
  {
    q: 'What happens if our sales process changes after launch?',
    a: 'The CRM is built to be adjusted, not locked in. We update fields, stages, and workflows as your process evolves.',
  },
]

export default function CustomCrmPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="relative w-full rounded-3xl overflow-hidden" style={{ backgroundImage: 'url(/images/service-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.42)' }} aria-hidden="true" />
            <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Custom CRM</span>
              <h1 className="font-normal leading-tight text-balance mb-5" style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}>
                A CRM your team actually opens.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Most CRMs get bought, half-configured, then quietly abandoned while everyone goes back to spreadsheets. We build one shaped around how your team actually sells — so it gets used.
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
                Built around your process, not a template.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Every part of the CRM ties back to how your team actually sells and delivers — so adoption is high from day one.
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
            body="Book a free 30-minute assessment and we will map your actual sales process before recommending anything."
            ctaLabel="Book a call"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
