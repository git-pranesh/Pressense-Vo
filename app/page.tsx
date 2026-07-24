import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'
import { ServicesToggle } from '@/components/services-toggle'
import { FlowerPanel } from '@/components/flower-panel'
import { HowItWorksAccordion } from '@/components/how-it-works-accordion'

export const metadata: Metadata = {
  title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
  description:
    "Nobody has actually sat down and figured out what's slowing you down. We do that first. Then we build the internal tools and software that fix it.",
  openGraph: {
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description:
      "Nobody has actually sat down and figured out what's slowing you down. We do that first. Then we build the internal tools and software that fix it.",
    url: '/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — Diagnostic-First Build Partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description:
      "Nobody has actually sat down and figured out what's slowing you down. We do that first. Then we build the internal tools and software that fix it.",
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: '/' },
}

const services = [
  {
    title: 'Custom Software & Internal Tools',
    description:
      "We replace spreadsheets, WhatsApp threads, and manual approvals with a system built around your team's real workflow — dashboards, internal CRMs, whatever the diagnostic points to.",
    href: '/custom-software-internal-tools',
  },
  {
    title: 'Workflow Automation',
    description:
      "Once we've found where work is duplicating or stalling, we automate the repetitive parts, so people stop chasing status updates by hand.",
    href: '/workflow-automation',
  },
  {
    title: 'Custom CRM',
    description:
      "For businesses where the off-the-shelf CRM never fit right. We build one shaped around how your team actually sells and delivers.",
    href: '/custom-crm',
  },
  {
    title: 'AI Integration',
    description:
      "AI built into tools you already use, aimed at cutting real manual work. No chatbot for the sake of having one.",
    href: '/ai-integration',
  },
  {
    title: 'Fractional CMO / Go-to-Market',
    description:
      "For clients whose operations are already solid. We step into positioning and growth strategy once there's something ready to scale.",
    href: '/fractional-cmo',
  },
]

const howItWorksSteps = [
  {
    label: 'Diagnose',
    description:
      "We trace how work moves through your business right now — approvals, handoffs, reporting, the parts still living in spreadsheets. You get a clear picture of what's actually broken.",
    detail: 'Typically takes one working session. No preparation needed from your team.',
  },
  {
    label: 'Build',
    description:
      "We build the internal tool or system that fixes the bottleneck we found. If you qualify, the first small piece is free before you spend anything.",
    detail: 'We ship fast. Most clients see working software within two to four weeks.',
  },
  {
    label: 'Deploy',
    description:
      "We hand over something your team actually uses — with documentation, handover sessions, and a short support window built in.",
    detail: 'We stay until it sticks, not just until it ships.',
  },
  {
    label: 'Optimise',
    description:
      "Once the operational side is solid, some clients bring us in for go-to-market and fractional CMO work too. Few of our clients stop after step three.",
    detail: 'Optional — only if the operations are already running cleanly.',
  },
]

const goodFit = [
  "You're a founder still personally approving things a system could handle.",
  "Critical work runs through spreadsheets or someone's memory.",
  "You bought software that made your team adapt to it.",
  "You want to know what's actually broken before spending money on a fix.",
]

const notFit = [
  "You're pre-traction and still finding product-market fit.",
  "You want the cheapest option, not the right one.",
  "You're not ready to change how something works today, even if it isn't working.",
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

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="pt-28 pb-0">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

          {/* Star rating row */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex items-center gap-0.5" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#1A0F06" aria-hidden="true">
                  <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium">Helped over 50+ businesses</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-normal text-foreground leading-[1.06] tracking-tight text-balance max-w-3xl mb-6">
            Many businesses don&apos;t have a marketing problem. They have a{' '}
            <em className="italic">diagnosis</em>{' '}
            problem.
          </h1>

          {/* Sub */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
            Nobody has actually sat down and figured out what&apos;s slowing you down. We do that first. Then we build the internal tools and software that fix it.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-3 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-highlight transition-colors"
            >
              Book a free call
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/20 text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
            >
              How we work
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10"
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Dot-grid card — tall, full content width, rounded top corners */}
          <div
            className="w-full rounded-t-3xl overflow-hidden relative"
            style={{ aspectRatio: '16 / 7', minHeight: '320px' }}
            aria-hidden="true"
          >
            {/* Dot grid base */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(180,160,130,0.7) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                backgroundColor: '#E3DFD7',
              }}
            />
            {/* Coral bloom — centred right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 55% 110% at 65% 55%, #FF8C5A 0%, #FF6040 20%, rgba(255,110,60,0.25) 55%, transparent 75%)',
                filter: 'blur(38px)',
              }}
            />
            {/* Secondary warm halo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 30% 60% at 78% 35%, rgba(255,185,100,0.6) 0%, transparent 65%)',
                filter: 'blur(24px)',
              }}
            />
            {/* Deep teal shadow at base, mimics flower stem shadow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 35% 50% at 62% 90%, rgba(28,53,48,0.35) 0%, transparent 70%)',
              }}
            />
            {/* Edge fade — merges card into page bg */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 80% 75% at 50% 50%, transparent 40%, #EDEBE5 100%)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────── */}
      <section className="py-8">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="text-xs font-medium text-muted-foreground/50 uppercase tracking-widest shrink-0">
              Worked with teams at
            </span>
            {clients.map((name) => (
              <span key={name} className="text-sm font-medium text-muted-foreground/60">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow-pill">The Problem</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance">
                Why growth still feels hard, even when you&apos;re doing everything right
              </h2>
            </div>
            <div className="lg:pt-16">
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                You&apos;ve hired good people. You&apos;ve paid for the tools. Growth still feels slower than it should be.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed mb-5">
                Your best people are stuck approving things a system should handle. The real work runs through a spreadsheet nobody wants to touch. The CRM made your team change how they work, instead of fitting how they already work.
              </p>
              <p className="text-base text-muted-foreground/70 leading-relaxed">
                We&apos;ve seen this enough times to know it&apos;s rarely a people problem. Usually, nobody has mapped where the actual break is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="By the numbers"
            headline="The AI agency built for you."
            body="Real businesses. Measurable results. Delivered in weeks, not months."
            ctaLabel={undefined}
            ctaHref={undefined}
            stats={[
              { value: '50+', label: 'Businesses helped' },
              { value: '35%', label: 'Average time saved' },
              { value: '45 days', label: 'To first working tool' },
            ]}
          />
        </div>
      </section>

      {/* ── We handle everything — Claura-style display accordion ── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <span className="eyebrow-pill">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground mb-16 text-balance max-w-xl">
            We handle everything so you don&apos;t have to.
          </h2>
          <HowItWorksAccordion steps={howItWorksSteps} />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-12">
            <span className="eyebrow-pill">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance">
              What we actually do
            </h2>
          </div>
          <ServicesToggle services={services} />
          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            >
              See pricing &amp; scope
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Not your typical agency — comparison ─────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="eyebrow-pill">Why us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground text-balance">
              We&apos;re not your typical agency.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Other agencies card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6 overflow-hidden relative"
              style={{ background: '#1A0F06', minHeight: '420px' }}
            >
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Slow delivery', 'Vague scope', 'No diagnosis', 'Template solutions', 'Hidden costs'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: 'rgba(237,235,229,0.15)', color: 'rgba(237,235,229,0.4)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(237,235,229,0.35)' }}>
                  Other agencies
                </p>
                <h3 className="text-2xl font-normal text-balance" style={{ color: 'rgba(237,235,229,0.6)' }}>
                  Jump straight to selling you something before they understand the problem.
                </h3>
              </div>
            </div>

            {/* Pressense card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #C45A1A 0%, #E8804A 40%, #F4A96A 100%)',
                minHeight: '420px',
              }}
            >
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Diagnostic first', 'Fixed scope', 'Real ownership', 'Fast shipping', 'Free first piece'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Pressense
                </p>
                <h3 className="text-2xl font-normal text-white text-balance">
                  We map what&apos;s actually broken first. Then we build the specific thing that fixes it.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Work With ─────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <span className="eyebrow-pill">Who We Work With</span>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#D4CFC7] p-8" style={{ background: '#E8E5DE' }}>
              <span className="eyebrow-pill">Good fit</span>
              <ul className="space-y-3 mt-1">
                {goodFit.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                    <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-[#FF9A5C]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: '#1A0F06' }}>
              <span
                className="eyebrow-pill"
                style={{ borderColor: 'rgba(237,235,229,0.2)', color: 'rgba(237,235,229,0.55)' }}
              >
                Not a fit
              </span>
              <ul className="space-y-3 mt-1">
                {notFit.map((item) => (
                  <li key={item} className="text-sm leading-relaxed flex gap-2.5" style={{ color: 'rgba(237,235,229,0.6)' }}>
                    <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: 'rgba(237,235,229,0.25)' }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Start with a diagnostic, not a sales pitch."
            body="Tell us what feels off. We'll map it, show you exactly what we find, and tell you honestly if custom software is even the right fix for it."
            ctaLabel="Book a free call"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}
