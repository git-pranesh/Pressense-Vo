import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
  description:
    'Nobody has actually sat down and figured out what\'s slowing you down. We do that first. Then we build the internal tools and software that fix it.',
  openGraph: {
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description:
      'Nobody has actually sat down and figured out what\'s slowing you down. We do that first. Then we build the internal tools and software that fix it.',
    url: '/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — Diagnostic-First Build Partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description:
      'Nobody has actually sat down and figured out what\'s slowing you down. We do that first. Then we build the internal tools and software that fix it.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: '/' },
}

const services = [
  {
    title: 'Custom Software & Internal Tools',
    description:
      'We replace spreadsheets, WhatsApp threads, and manual approvals with a system built around your team\'s real workflow — dashboards, internal CRMs, whatever the diagnostic points to.',
    href: '/custom-software-internal-tools',
  },
  {
    title: 'Workflow Automation',
    description:
      'Once we\'ve found where work is duplicating or stalling, we automate the repetitive parts, so people stop chasing status updates by hand.',
    href: '/workflow-automation',
  },
  {
    title: 'Custom CRM',
    description:
      'For businesses where the off-the-shelf CRM never fit right. We build one shaped around how your team actually sells and delivers.',
    href: '/custom-crm',
  },
  {
    title: 'AI Integration',
    description:
      'AI built into tools you already use, aimed at cutting real manual work. No chatbot for the sake of having one.',
    href: '/ai-integration',
  },
  {
    title: 'Fractional CMO / Go-to-Market',
    description:
      'For clients whose operations are already solid. We step into positioning and growth strategy once there\'s something ready to scale.',
    href: '/fractional-cmo',
  },
]

const steps = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'We trace how work moves through your business right now. Approvals, handoffs, reporting, the parts still living in spreadsheets. You get a clear picture of what\'s actually broken.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We build the internal tool or system that fixes the bottleneck we found. If you qualify, the first small piece is free.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'Once the operational side is solid, some clients bring us in for go-to-market and fractional CMO work too. Few of our clients stop after step two, and that\'s fine.',
  },
]

const goodFit = [
  "You're a founder still personally approving things a system could handle.",
  'Critical work runs through spreadsheets or someone\'s memory.',
  'You bought software that made your team adapt to it.',
  'You want to know what\'s actually broken before spending money on a fix.',
]

const notFit = [
  'You\'re pre-traction and still finding product-market fit.',
  'You want the cheapest option, not the right one.',
  'You\'re not ready to change how something works today, even if it isn\'t working.',
]

const clients = [
  'AstraZeneca',
  'Zoho',
  'Cognizant',
  'Scintel',
  'Tint Tone and Shade',
  'One Magnify',
]

export default function HomePage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="grid-bg border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] text-balance">
            Many businesses don&apos;t have a marketing problem. They have a diagnosis problem.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Nobody has actually sat down and figured out what&apos;s slowing you down. We do that first. Then we build the internal tools and software that fix it. If you qualify, we&apos;ll build the first small piece for free, before you spend anything.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-highlight transition-colors"
            >
              Start a Free Diagnostic
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container mx-auto px-5 sm:px-8 py-5 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
            Work delivered for teams at
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {clients.map((name, i) => (
              <span key={name} className="text-sm text-muted-foreground">
                {name}{i < clients.length - 1 && <span className="ml-4 text-border">·</span>}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground/60 italic">(directly, or as part of a delivery team)</p>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text — left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">The Problem</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-8">
                Why growth still feels hard, even when you&apos;re doing everything right
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  You&apos;ve hired good people. You&apos;ve paid for the tools. Growth still feels slower than it should be.
                </p>
                <p>
                  Your best people are stuck approving things a system should handle. The real work runs through a spreadsheet nobody wants to touch. The CRM you bought made your team change how they work, instead of fitting how they already work. Sales hands off to delivery and something gets lost. Getting a straight answer on what&apos;s happening takes an afternoon of pulling reports.
                </p>
                <p>
                  We&apos;ve seen this enough times to know it&apos;s rarely a people problem. Usually, nobody&apos;s mapped where the actual break is.
                </p>
              </div>
            </div>
            {/* Visual — right */}
            <div
              className="rounded-2xl min-h-[400px] w-full"
              style={{
                background: 'linear-gradient(135deg, #FF9A5C 0%, #FF6B9D 45%, #A855F7 100%)',
                filter: 'blur(0px)',
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full min-h-[400px] rounded-2xl backdrop-blur-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual — left (alternates rhythm) */}
            <div
              className="rounded-2xl min-h-[400px] w-full order-last lg:order-first"
              style={{
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #F97316 100%)',
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full min-h-[400px] rounded-2xl" />
            </div>
            {/* Text — right */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">What We Do</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-8">
                We map the problem before we touch a single tool
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  We spend time inside your business first. How work moves. Where it stalls. What it&apos;s actually costing you in time and money.
                </p>
                <p>
                  Once we know the real bottleneck, we build software around it. Something shaped to how your team already works, so people don&apos;t have to relearn their jobs to use it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">How It Works</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-12">
            Diagnose. Build. Grow.
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Steps list — left */}
            <div>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-6 items-start">
                    <span className="text-xs font-semibold text-muted-foreground/50 tabular-nums pt-1 w-6 shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  See How It Works
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Visual — right */}
            <div
              className="rounded-2xl min-h-[400px] w-full sticky top-24"
              style={{
                background: 'linear-gradient(160deg, #FF9A5C 0%, #EC4899 55%, #7C3AED 100%)',
              }}
              aria-hidden="true"
            >
              <div className="w-full h-full min-h-[400px] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Services</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight text-balance mb-12">
            What we actually do
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, i) => {
              const dotColors = [
                '#FF9A5C', // orange
                '#EC4899', // pink
                '#A855F7', // purple
                '#3B82F6', // blue
                '#10B981', // green
              ]
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E8E0D5] bg-[#FFFDFA] p-8 hover:border-[#C4B5A5] hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="shrink-0 h-2.5 w-2.5 rounded-full"
                      style={{ background: dotColors[i % dotColors.length] }}
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground/60 group-hover:text-foreground transition-colors">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              See All Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who We Work With ─────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Who We Work With</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#E8E0D5] bg-[#FFFDFA] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">Good fit</p>
              <ul className="space-y-3">
                {goodFit.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#2B180A] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FCF6EF]/50 mb-4">Not a fit</p>
              <ul className="space-y-3">
                {notFit.map((item) => (
                  <li key={item} className="text-sm text-[#FCF6EF]/80 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-foreground">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground leading-tight text-balance mb-4">
            Start with a diagnostic, not a sales pitch.
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-xl mb-8">
            Tell us what feels off. We&apos;ll map it, show you exactly what we find, and tell you honestly if custom software is even the right fix for it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-foreground text-primary text-sm font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Start a Free Diagnostic
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
