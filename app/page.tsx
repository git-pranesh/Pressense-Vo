import type { Metadata } from 'next'
import Link from 'next/link'
import { VisualCard } from '@/components/visual-card'
import { AnchorCard } from '@/components/anchor-card'
import { ServicesToggle } from '@/components/services-toggle'

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

      {/* ── Hero — full-width text intro, botanical image below ── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 pt-28 pb-0 max-w-5xl">
          {/* Eyebrow + heading + sub + CTAs — centred */}
          <div className="max-w-3xl mx-auto text-center pb-16">
            <span className="eyebrow-pill">Diagnostic-first build partner</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05] text-balance">
              From{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>confusion</em>{' '}
              to clarity.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Nobody has actually sat down and figured out what&apos;s slowing you down. We do that first — then build the tools that fix it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-highlight transition-colors"
              >
                Start a Free Diagnostic
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                How we work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Full-width botanical image card — bleeds to section edge */}
          <VisualCard
            aspectRatio="21 / 9"
            style={{ borderRadius: '18px 18px 0 0', minHeight: '280px' }}
            imageUrl="/images/botanical-hero-wide.png"
            imageAlt="Orange coral flower against a deep teal and green background"
          />
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-6 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow-pill" style={{ marginBottom: 0 }}>Teams at</span>
            {clients.map((name, i) => (
              <span key={name} className="text-sm text-muted-foreground/70">
                {name}{i < clients.length - 1 && <span className="ml-3 text-border" aria-hidden="true">·</span>}
              </span>
            ))}
            <span className="text-xs text-muted-foreground/40 italic ml-1">(directly or as part of a delivery team)</span>
          </div>
        </div>
      </section>

      {/* ── The Problem — full-width centred copy ────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-3xl text-center">
          <span className="eyebrow-pill">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance mb-8">
            The AI agency built{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>for you.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            You&apos;ve hired good people. You&apos;ve paid for the tools. Growth still feels slower than it should.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Your best people are stuck approving things a system should handle. The CRM made your team adapt to it, instead of the other way around. Nobody&apos;s actually mapped where the break is.
          </p>
        </div>
      </section>

      {/* ── Stats inside AnchorCard ───────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-12 lg:py-16 max-w-5xl">
          <AnchorCard
            eyebrow="By the numbers"
            headline="Real businesses. Measurable results."
            body="Delivered in weeks, not months."
            ctaLabel={undefined}
            ctaHref={undefined}
            stats={[
              { value: 'X+', label: 'Businesses helped' },
              { value: 'X%', label: 'Average time saved' },
              { value: 'X days', label: 'To first working tool' },
            ]}
          />
        </div>
      </section>

      {/* ── We handle everything — steps + sticky flower ─────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow-pill">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              We handle{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>everything</em>{' '}
              so you don&apos;t have to.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Steps — left */}
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 items-start group">
                  <span className="text-xs font-semibold tabular-nums pt-1 w-6 shrink-0" style={{ color: '#FF9A5C' }}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      {step.title}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-30" aria-hidden="true">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                See how it works in full
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            {/* Flower card — sticky right */}
            <VisualCard
              aspectRatio="3 / 4"
              style={{ minHeight: '400px' }}
              className="sticky top-24"
              imageUrl="/images/botanical-hero.png"
              imageAlt="Orange coral flower against a deep teal background"
            />
          </div>
        </div>
      </section>

      {/* ── Services — interactive toggle list ───────────────────── */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow-pill">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              What we{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>actually</em>{' '}
              do.
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

      {/* ── Who We Work With ─────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-24 lg:py-32 max-w-5xl">
          <span className="eyebrow-pill">Who We Work With</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-balance mb-10">
            We&apos;re not your typical AI agency.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#D4CFC7] bg-[#E8E5DE] p-8">
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
            <div className="rounded-2xl bg-[#1A0F06] p-8">
              <span className="eyebrow-pill" style={{ borderColor: 'rgba(237,235,229,0.2)', color: 'rgba(237,235,229,0.55)' }}>Not a fit</span>
              <ul className="space-y-3 mt-1">
                {notFit.map((item) => (
                  <li key={item} className="text-sm text-[#EDEBE5]/70 leading-relaxed flex gap-2.5">
                    <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-[#EDEBE5]/30" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Turn confusion into clarity, today."
            body="Book a free 30-minute assessment and we'll show you exactly where AI can save you time and money."
            ctaLabel="Start a Free Diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>

    </main>
  )
}
