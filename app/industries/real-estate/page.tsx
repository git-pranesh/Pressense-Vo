import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom Software for Real Estate & Property Firms | Pressense',
  description: 'We diagnose where deals, commissions, and compliance tracking are breaking down across your tool stack, then build what actually connects them.',
  alternates: { canonical: '/industries/real-estate' },
  openGraph: {
    title: 'Custom Software for Real Estate & Property Firms | Pressense',
    description: 'We diagnose where deals, commissions, and compliance tracking are breaking down, then build what actually connects them.',
    url: '/industries/real-estate',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Real Estate Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software for Real Estate & Property Firms | Pressense',
    description: 'We diagnose where deals, commissions, and compliance tracking are breaking down, then build what actually connects them.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatItCanLookLike = [
  {
    title: 'Deal and transaction tracker',
    description: 'Built around your actual property and deal lifecycle, not a generic sales pipeline that doesn\'t map to how real estate transactions actually move.',
  },
  {
    title: 'Commission calculation and payout tool',
    description: 'Replaces manual spreadsheet reconciliation with automatic calculation tied to the deal itself.',
  },
  {
    title: 'Compliance dashboard',
    description: 'Tracks license renewals, COIs, and required documents with alerts before something expires and holds up a deal.',
  },
  {
    title: 'Agent or vendor onboarding portal',
    description: 'Document upload and status tracking in one place, instead of a mix of email and paper forms.',
  },
]

const goodFit = [
  'Brokerages, property managers, and real estate services firms running several disconnected tools for deals, commissions, and compliance.',
  'Teams spending real time each week reconciling data between systems instead of moving deals forward.',
  'Firms whose agent or vendor onboarding still runs through email and paper.',
]

const notFit = [
  'Very small operations with low deal volume, where the current spreadsheet setup genuinely isn\'t causing problems yet.',
  'Firms not ready to change how agents currently submit or track information.',
]

const faqs = [
  {
    q: 'We already pay for a CRM and transaction management software. Why would we need something built custom?',
    a: 'Because those tools rarely talk to each other. The real cost usually isn\'t the individual tools, it\'s the manual work bridging the gaps between them, and that\'s what we build to remove.',
  },
  {
    q: 'Can this handle compliance requirements that are specific to our state or brokerage?',
    a: 'Yes. The diagnostic maps your actual requirements first. We build around what you specifically need to track, not a generic compliance checklist.',
  },
  {
    q: 'How does commission tracking actually get automated here?',
    a: 'It ties directly to the deal record, so the calculation happens as part of the transaction moving forward instead of as a separate manual step at the end.',
  },
  {
    q: 'We manage property, not just brokerage deals. Does this still apply to us?',
    a: 'Yes. Property management firms deal with a parallel version of the same problem, tracking maintenance, renewals, and rent status across a portfolio, and the approach is the same.',
  },
  {
    q: 'How fast could we see a working first version?',
    a: 'Usually a focused piece, like automated compliance alerts or a commission tracker, within a few weeks of starting.',
  },
]

const problemItems = [
  {
    heading: 'Seven tools, one deal, zero things talking to each other',
    body: 'Walk through a single closing at a typical brokerage and count the tools involved: one for the CRM, another for transaction management, a third for e-signatures, a fourth for commission tracking, maybe a spreadsheet holding compliance documents together because nothing else quite does the job. None of them were built to share information with each other.',
  },
  {
    heading: 'The reconciliation tax',
    body: 'So someone spends real hours every week just confirming that what\'s in one system matches what\'s in another. That\'s not selling. That\'s data entry dressed up as due diligence. Commission calculations get reconciled by hand at the end of a deal.',
  },
  {
    heading: 'Compliance tracked in whatever spreadsheet someone set up once',
    body: 'License renewals, COIs, and other compliance documents get tracked in whatever spreadsheet someone set up once and never redesigned. New agents get onboarded through a mix of email, paper forms, and whoever remembers to follow up. Every one of these is a place where something quietly slips.',
  },
]

export default function RealEstatePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/service-hero-bg-opt.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.48)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span
                className="eyebrow-pill mb-6 inline-block"
                style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}
              >
                Real Estate
              </span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Seven tools, one deal, zero things talking to each other.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Most brokerages run a stack of software that never quite adds up to one clear picture. We find where that costs you time and close the gap.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors hover:opacity-90"
                  style={{ background: '#EDEBE5', color: '#1A0F06' }}
                >
                  Start a Free Diagnostic
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}
                >
                  All industries
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full"
                    style={{ background: 'rgba(237,235,229,0.15)' }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ─────────────────���────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-12">
            <span className="eyebrow-pill">The Problem</span>
            <h2
              className="font-normal text-balance leading-tight max-w-2xl"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              What the disconnected stack actually costs a brokerage.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#D4CFC7]">
            {problemItems.map((item) => (
              <div key={item.heading} className="grid lg:grid-cols-[2fr_3fr] gap-6 lg:gap-16 py-8">
                <h3
                  className="font-normal leading-snug text-foreground"
                  style={{ fontFamily: GARAMOND, fontSize: 'clamp(18px, 2vw, 24px)' }}
                >
                  {item.heading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground max-w-2xl">
            None of this is a people problem. It&apos;s a systems problem, tools that were each built for one thing, none of them built to connect.
          </p>
        </div>
      </section>

      {/* ── The Solution ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow-pill">The Solution</span>
              <h2
                className="font-normal text-balance leading-tight"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                One layer that ties your actual stack together.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We don&apos;t ask you to rip out your CRM or transaction software. The diagnostic tells us where the disconnect between your tools is actually costing you, commission tracking, compliance, or onboarding, and we build to connect what&apos;s already there.
              </p>
              <p>
                Sometimes that&apos;s a deal tracker shaped around your specific transaction lifecycle instead of a generic contact database. Sometimes it&apos;s automated alerts before a license or COI expires, so nothing holds up a closing at the last minute. The goal is one place where the real status of a deal lives, instead of five.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What It Can Look Like ────────────────────────────────── */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">What This Can Look Like</span>
            <h2
              className="font-normal text-balance leading-tight max-w-lg"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              What this can look like
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              What we actually build depends on what the diagnostic finds in your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whatItCanLookLike.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 flex flex-col gap-3"
                style={{ background: '#E8E5DF', border: '1px solid #D4CFC7' }}
              >
                <h3
                  className="font-normal leading-snug text-foreground"
                  style={{ fontFamily: GARAMOND, fontSize: '20px' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-2xl">
            We&apos;ve also built portfolio-level dashboards for property management firms tracking maintenance and lease renewals across many units, and custom reporting for firms whose transaction volume outgrew what a spreadsheet could handle.
          </p>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">Who It&apos;s For</span>
            <h2
              className="font-normal text-balance leading-tight max-w-lg"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Is this the right fit?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div
              className="rounded-3xl border p-10 flex flex-col justify-between"
              style={{ borderColor: '#C8C2BA', background: '#E8E5DF', minHeight: '320px' }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-8">Good fit</p>
                <ul className="space-y-5">
                  {goodFit.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                      <span className="text-base text-foreground/75 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:opacity-90"
                  style={{ background: '#1A0F06', color: '#EDEBE5' }}
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="rounded-3xl p-10" style={{ background: '#D8D4CC', minHeight: '320px' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-8">Not a fit</p>
              <ul className="space-y-5">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-foreground/25" aria-hidden="true" />
                    <span className="text-base text-foreground/45 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────���────────────────── */}
      <section className="py-16 lg:py-24">
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

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="Find out what's actually slowing your deals down"
            headline="Start with the diagnostic."
            body="We'll walk through how deals, commissions, and compliance really move through your firm before recommending anything."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
