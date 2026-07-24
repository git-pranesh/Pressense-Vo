import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Custom Software for SMB Manufacturers | Pressense',
  description: 'We diagnose where your production and inventory data is actually breaking down, then build the tool that gives you real-time visibility, not another spreadsheet.',
  alternates: { canonical: '/industries/manufacturing' },
  openGraph: {
    title: 'Custom Software for SMB Manufacturers | Pressense',
    description: 'We diagnose where your production and inventory data is breaking down, then build the tool that gives you real-time visibility.',
    url: '/industries/manufacturing',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Manufacturing Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software for SMB Manufacturers | Pressense',
    description: 'We diagnose where your production and inventory data is breaking down, then build the tool that gives you real-time visibility.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatItCanLookLike = [
  {
    title: 'Inventory & order sync',
    description: 'Live stock visibility and reorder alerts across every location, replacing a count that\'s only ever as current as the last manual update.',
  },
  {
    title: 'Production scheduling',
    description: 'A shared, real-time system your whole floor can see and update, instead of a whiteboard or a spreadsheet only one person edits.',
  },
  {
    title: 'Cross-functional reporting dashboard',
    description: 'One decision-ready view pulling from production, inventory, and finance, so leadership isn\'t waiting on a hand-built weekly summary.',
  },
  {
    title: 'Vendor and rebate tracking',
    description: 'For channel relationships that have outgrown what a spreadsheet can reliably manage.',
  },
]

const goodFit = [
  'Manufacturers where inventory, production, or reporting still run primarily through spreadsheets.',
  'Operations making decisions on numbers that are regularly out of date.',
  'Teams who looked at a full ERP system and decided it was more disruption than the problem warranted.',
]

const notFit = [
  'Small operations where a simple spreadsheet genuinely still keeps up.',
  'Businesses set on a full ERP replacement rather than fixing a specific bottleneck.',
]

const faqs = [
  {
    q: 'Does this replace our ERP, or work with it?',
    a: 'Depends on what you have. Some clients don\'t have one yet and don\'t need the full weight of one. Others already have an ERP and just need one part of it connected properly to the rest of their operation. The diagnostic tells us which situation you\'re in.',
  },
  {
    q: 'We\'re managing dozens of SKUs across three sales channels and it\'s a mess. Is that something you actually deal with?',
    a: 'Regularly. Product-data chaos across channels is one of the more common problems we get called in for.',
  },
  {
    q: 'Our whole tracking system depends on one person who built it. That worries us.',
    a: 'It should. That\'s exactly the kind of risk we build to remove, so the knowledge lives in a system your whole team can use, not in one person\'s head.',
  },
  {
    q: 'What does a first working version actually look like, and how fast?',
    a: 'Usually a focused piece, like live inventory sync or one clean dashboard, within a few weeks of the diagnostic. Not a finished system on day one, but something real your team can start using.',
  },
  {
    q: 'Can you work with a floor that\'s still mostly analog otherwise?',
    a: 'Yes. Most of the manufacturers we work with aren\'t starting from a clean digital setup. That\'s normal, not a blocker.',
  },
]

const problemItems = [
  {
    heading: 'Five people, five answers',
    body: 'Ask five people in your operation what current inventory looks like and you\'ll probably get five different answers, all technically correct as of whenever they last checked. Inventory sits in one file. Production schedules sit in another. Someone assembles financials by hand once a week, and by the time that\'s done, half of it needs updating again.',
  },
  {
    heading: 'Stockouts and overstock you didn\'t see coming',
    body: 'This is how stockouts sneak up on people who were "sure we had enough." It\'s also how cash gets tied up in overstock nobody flagged in time. The problem isn\'t a lack of attention. It\'s that a spreadsheet can only stay accurate for so long before something changes faster than someone can update it.',
  },
  {
    heading: 'Single points of failure nobody planned for',
    body: 'Add multiple sales channels or a large SKU catalog, and there\'s now a second manual job: keeping product listings consistent everywhere they appear. And if one person built the whole tracking system your floor runs on, that person becomes a single point of failure nobody planned for.',
  },
]

export default function ManufacturingPage() {
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
                Manufacturing
              </span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Your floor moves faster than your spreadsheets can track.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                By the time a report reaches you, it&apos;s already describing last week. We find out where the actual lag is happening, then close it.
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
              The stale-data trap.
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
                A live view, not a rebuild.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                We&apos;re not selling you a full ERP migration. After the diagnostic, we know precisely where the lag between &ldquo;what&apos;s happening&rdquo; and &ldquo;what you can see&rdquo; is costing you real money, and we build to close that specific gap.
              </p>
              <p>
                That might mean inventory and production talking to each other automatically for the first time. It might mean one dashboard replacing the Friday-afternoon scramble to assemble a status report. Whatever it is, it connects to the systems you already run, rather than asking your team to start over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What It Can Look Like ────────────────────────────────── */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">Where This Shows Up</span>
            <h2
              className="font-normal text-balance leading-tight max-w-lg"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Examples, not a fixed menu.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              These are examples of what we&apos;ve built for manufacturers. The diagnostic decides what actually gets built for you.
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
            Product-data tools for SKU-heavy catalogs, custom reporting shaped around a specific floor&apos;s workflow, and integrations between systems that were never meant to talk to each other all fall under the same approach: find the actual lag first, build around it second.
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

      {/* ── Final CTA ──────────────────────────────��─────────────── */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="See where your actual lag is"
            headline="Start with the diagnostic."
            body="We'll walk your floor's real inventory, production, and reporting flow before recommending anything."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
