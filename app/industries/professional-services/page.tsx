import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata = {
  title: 'Custom Software for Agencies & Consultancies | Pressense',
  description: 'We diagnose where your team is losing billable hours and margin, then build the tool that connects time, billing, and capacity properly.',
}

const GARAMOND = '"EB Garamond", Georgia, serif'
const HERO_BG  = '/images/service-hero-bg-opt.jpg'

const problems = [
  'Hours get logged in one tool. Invoices get built in another. Nobody can see the gap until a project is already underwater.',
  'Assignments go out over Slack. Progress lives in someone\'s head or a half-updated shared doc.',
  'Past around a dozen people, the generic PM tool that worked fine stops being enough — billing, utilisation, and profitability need visibility it was never built to give.',
]

const solutions = [
  {
    title: 'Time-to-invoice pipeline',
    body: 'Logged hours flow straight into billing — cutting out the manual handoff between tracking and invoicing so nothing gets missed or double-handled.',
  },
  {
    title: 'Utilisation & capacity dashboard',
    body: 'A real-time view of who\'s overbooked and who isn\'t, so the next project gets staffed properly instead of by gut feel.',
  },
  {
    title: 'Client onboarding portal',
    body: 'Replaces the scattered email thread with one place a new client can see status, upload documents, and know what\'s next.',
  },
  {
    title: 'Profitability-by-project view',
    body: 'Shows which clients and projects are actually making money — not just which ones are busy.',
  },
]

const goodFit = [
  'Agencies, consultancies, and firms where hours, billing, and capacity live in separate tools that don\'t talk to each other.',
  'Teams that have outgrown a generic PM tool but aren\'t ready for a heavy, expensive PSA platform.',
  'Firms who suspect they\'re over-servicing clients but don\'t have a clean way to confirm it.',
]

const notFit = [
  'Very small teams where a shared calendar and a simple invoice template still genuinely work.',
  'Firms not ready to change how time gets logged, even if the current method is the actual source of the problem.',
]

const faqs = [
  {
    q: 'We already use a project management tool. Why would we need something custom?',
    a: 'Most PM tools handle tasks well and billing poorly. If time, invoicing, and utilisation all live in different places, that gap is usually where the real cost is — and that\'s what we build to fix.',
  },
  {
    q: 'Is this the same as a full PSA platform like the big providers offer?',
    a: 'No, and that\'s often the point. A lot of firms we talk to already own one of those and still keep a spreadsheet running alongside it, because it doesn\'t quite fit how they actually work. We build to your actual process, not a category of software.',
  },
  {
    q: 'How do you figure out if we\'re over-servicing clients?',
    a: 'The diagnostic looks at scoped hours against actual hours across recent projects. Often that\'s the first time a firm has seen the gap clearly.',
  },
  {
    q: 'Can this work for a firm with multiple offices or a distributed team?',
    a: 'Yes. Most of what we build is set up to give one consistent view regardless of where people are working from.',
  },
  {
    q: 'What\'s a realistic timeline to see something working?',
    a: 'Usually a focused first piece — like a time-to-invoice connection — within a few weeks of the diagnostic.',
  },
]

export default function ProfessionalServicesPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10,8,5,0.50)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>
                Professional Services
              </span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Where did this month&apos;s margin actually go?
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Hours get logged in one place. Invoices get built in another. Nobody can say with confidence who&apos;s overbooked until they&apos;re already burned out. We find the actual leak, then build what closes it.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  style={{ background: '#EDEBE5', color: '#1A0F06' }}
                >
                  Start a Free Diagnostic
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors hover:border-[rgba(237,235,229,0.6)]"
                  style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}
                >
                  All industries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">
            <div>
              <span className="eyebrow-pill">The Problem</span>
              <h2
                className="font-normal text-foreground leading-tight text-balance"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 42px)' }}
              >
                The invisible over-service
              </h2>
            </div>
            <div className="space-y-5 pt-1">
              <p className="text-base text-muted-foreground leading-relaxed">
                Here&apos;s a pattern worth checking: pull up your last quarter and compare hours actually spent on a project against what was scoped. Most firms who haven&apos;t automated this discover they&apos;ve been over-delivering by a wide margin — quietly, for months — because nobody had a clean way to see it happening in real time.
              </p>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                    <span className="text-base text-muted-foreground leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Solution ───────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 items-start">
            <div>
              <span className="eyebrow-pill">The Solution</span>
              <h2
                className="font-normal text-foreground leading-tight text-balance"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 42px)' }}
              >
                Connecting the pieces that are currently separate
              </h2>
            </div>
            <div className="space-y-5 pt-1">
              <p className="text-base text-muted-foreground leading-relaxed">
                The diagnostic tells us exactly where the disconnect is costing you — whether that&apos;s utilisation blindness, slow invoicing, or scope creep nobody&apos;s tracking. From there we build the specific connection that closes it.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We&apos;ve also built retainer and budget-burn trackers for agencies watching a monthly cap closely, and custom reporting for firms that needed something a standard PSA tool didn&apos;t offer out of the box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What This Can Look Like ─────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-8 lg:mb-12">
            <span className="eyebrow-pill">Where This Shows Up</span>
            <h2
              className="font-normal text-foreground leading-tight text-balance max-w-xl"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 42px)' }}
            >
              Examples from firms like yours
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl">
              Not a fixed menu. What actually gets built depends on what the diagnostic finds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-7"
                style={{ background: '#E8E5DF', border: '1px solid #D4CFC7' }}
              >
                <h3
                  className="font-normal text-foreground mb-3"
                  style={{ fontFamily: GARAMOND, fontSize: '1.25rem' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ───────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-8 lg:mb-10">
            <span className="eyebrow-pill">Who It&apos;s For</span>
            <h2
              className="font-normal text-foreground leading-tight text-balance"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 42px)' }}
            >
              Is this the right fit?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Good fit */}
            <div className="rounded-3xl border p-8 flex flex-col" style={{ borderColor: '#C8C2BA', background: '#E8E5DF' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6">Good fit</p>
              <ul className="space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Not a fit */}
            <div className="rounded-3xl p-8 flex flex-col" style={{ background: '#D8D4CC' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-6">Not a fit</p>
              <ul className="space-y-4">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-foreground/25" aria-hidden="true" />
                    <span className="text-sm text-foreground/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-8">
            <span className="eyebrow-pill">FAQ</span>
            <h2
              className="font-normal text-foreground leading-tight text-balance"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 4vw, 42px)' }}
            >
              Common questions
            </h2>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6 grid lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-16">
                <p className="text-base font-medium text-foreground leading-snug">{faq.q}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="Start Here"
            headline="Find out where the margin is actually going"
            body="Start with the diagnostic. We'll look at how time, billing, and capacity really move through your firm before recommending anything."
            cta={{ label: 'Start a Free Diagnostic', href: '/contact' }}
            stats={[
              { value: '50+', label: 'Businesses helped' },
              { value: '35%', label: 'Average time saved' },
              { value: '45 days', label: 'To first working tool' },
            ]}
          />
        </div>
      </section>

    </div>
  )
}
