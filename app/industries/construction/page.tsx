import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom Software for Construction & Contractors | Pressense',
  description: 'We diagnose what\'s actually slowing down your construction operations, then build the compliance, pay app, and change order tools your PM software doesn\'t cover.',
  alternates: { canonical: '/industries/construction' },
  openGraph: {
    title: 'Custom Software for Construction & Contractors | Pressense',
    description: 'We diagnose what\'s slowing down your construction operations, then build the tools your PM software doesn\'t cover.',
    url: '/industries/construction',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Construction Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software for Construction & Contractors | Pressense',
    description: 'We diagnose what\'s slowing down your construction operations, then build the tools your PM software doesn\'t cover.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatItCanLookLike = [
  {
    title: 'Subcontractor & pay app dashboard',
    description: 'Checks every subcontractor\'s pay application against their original schedule of values and everything already paid, instead of a manual line-by-line review.',
  },
  {
    title: 'Compliance tracker',
    description: 'Tracks lien waivers, certificates of insurance, licenses, and W-9s in one place, with alerts before something expires and holds up a draw or a crew.',
  },
  {
    title: 'Change order tracker',
    description: 'Follows a change from RFI to priced change order to approval, keeping the price tied to the schedule instead of losing that connection somewhere in email.',
  },
  {
    title: 'Cost-vs-budget dashboard',
    description: 'Pulls committed costs into a live view of where a project actually stands against budget, instead of a report that\'s accurate as of last week.',
  },
]

const goodFit = [
  'General contractors and builders managing multiple subcontractors on active projects.',
  'Teams still tracking lien waivers, COIs, or pay app reconciliation by hand in a spreadsheet.',
  'Companies whose project management software doesn\'t fully handle compliance or change order tracking.',
]

const notFit = [
  'Very small crews with one or two active jobs at a time, where a spreadsheet genuinely still works fine.',
  'Businesses not ready to change how their current process runs, even after seeing where it breaks down.',
]

const faqs = [
  {
    q: 'Will this replace our project management software?',
    a: 'No. Most of what we build sits alongside it, connecting the parts your PM software doesn\'t handle well, like compliance tracking or pay app reconciliation.',
  },
  {
    q: 'How do you handle subcontractor data that\'s already spread across different formats?',
    a: 'The diagnostic maps exactly how your subs currently submit information. We build around that, so your team isn\'t asking every subcontractor to change how they work.',
  },
  {
    q: 'What if our compliance tracking needs are specific to our state or trade?',
    a: 'We build around your actual requirements, not a generic template. That\'s part of what the diagnostic identifies before we build anything.',
  },
  {
    q: 'How long does something like a pay app reconciliation tool take to build?',
    a: 'Depends on scope, but most first working versions are ready within a few weeks of the diagnostic, not months.',
  },
  {
    q: 'Do you work with GCs, subs, or both?',
    a: 'Both. The tools differ depending on where you sit in the process, but the diagnostic-first approach is the same either way.',
  },
]

const problemItems = [
  {
    heading: 'Pay app reconciliation done by hand',
    body: 'Every subcontractor submits their schedule of values in a slightly different format. Someone on your team has to manually check each pay application against the original SOV and everything paid before it. That\'s slow, and it\'s easy to approve something that doesn\'t actually add up.',
  },
  {
    heading: 'Compliance tracked in a spreadsheet next to your PM software',
    body: 'Lien waivers and certificates of insurance get tracked the same way, by hand, in a spreadsheet running alongside whatever project management software you already bought. One expired COI can hold up a draw or idle a crew, and nobody notices until it already has.',
  },
  {
    heading: 'Change orders moving through email',
    body: 'An RFI turns into a cost estimate, then a change order, and somewhere in that chain the pricing stops matching what\'s actually happening on the schedule. By the time it\'s caught, you\'re arguing about a number instead of building.',
  },
]

export default function ConstructionPage() {
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
                Construction
              </span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Built for how construction actually runs, not how software assumes it does.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Your project management software handles the big picture. The details that actually create risk, lien waivers, pay app reconciliation, change orders, still live in a spreadsheet next to it.
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

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-12">
            <span className="eyebrow-pill">The Problem</span>
            <h2
              className="font-normal text-balance leading-tight max-w-2xl"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              What this usually looks like on a construction team.
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
            None of this happens because your team is careless. It happens because the software you have handles scheduling and project tracking, but was never built to handle the compliance and reconciliation work sitting next to it.
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
                We build the layer your PM software doesn&apos;t cover.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                After the diagnostic, we know exactly which part of this is costing you the most, whether that&apos;s pay app reconciliation, compliance tracking, or change order pricing.
              </p>
              <p>
                We build this to sit alongside your existing project management software, not replace it. The goal is closing the specific gap, not starting over with a new system nobody wants to learn.
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
              Examples, not a menu.
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
            We&apos;ve also built bid comparison tools, subcontractor onboarding portals, and project-specific dashboards that don&apos;t fit neatly into a category, because the tool follows whatever the diagnostic finds, not the other way around.
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
            {/* Good fit */}
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

            {/* Not a fit */}
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
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
            eyebrow="Find out what's actually costing you time"
            headline="Start with the diagnostic."
            body="We'll walk through your actual pay app, compliance, and change order process before recommending anything."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
