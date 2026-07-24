import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'
import { ServicesToggle } from '@/components/services-toggle'
import { FlowerPanel } from '@/components/flower-panel'
import { HowItWorksAccordion } from '@/components/how-it-works-accordion'
import { CaseStudyStrip } from '@/components/case-study-strip'

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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense, Diagnostic-First Build Partner' }],
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
      "We replace spreadsheets, WhatsApp threads, and manual approvals with a system built around your team's real workflow, dashboards, internal CRMs, whatever the diagnostic points to.",
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
      "We trace how work moves through your business right now, approvals, handoffs, reporting, the parts still living in spreadsheets. You get a clear picture of what's actually broken.",
    detail: 'Typically takes one working session. No preparation needed from your team.',
    image: '/images/hero-bg-opt.jpg',
  },
  {
    label: 'Build',
    description:
      "We build the internal tool or system that fixes the bottleneck we found. If you qualify, the first small piece is free before you spend anything.",
    detail: 'We ship fast. Most clients see working software within two to four weeks.',
    image: '/images/service-hero-bg-opt.jpg',
  },
  {
    label: 'Deploy',
    description:
      "We hand over something your team actually uses, with documentation, handover sessions, and a short support window built in.",
    detail: 'We stay until it sticks, not just until it ships.',
    image: '/images/secondary-hero-bg-opt.jpg',
  },
  {
    label: 'Optimise',
    description:
      "Once the operational side is solid, some clients bring us in for go-to-market and fractional CMO work too. Few of our clients stop after step three.",
    detail: 'Optional, only if the operations are already running cleanly.',
    image: '/images/pages-hero-bg-opt.jpg',
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

const caseStudyStrip = [
  {
    slug: 'two-location-clinic',
    industry: 'Healthcare, Australia',
    stat: '140 Hours of Admin, Automated.',
    blurb: 'A specialist clinic was losing 140 hours a month to manual referral administration. We mapped the workflow, quantified the cost, and built the missing operational layer.',
    bg: '#1A0F06',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
  {
    slug: 'commercial-contractor',
    industry: 'Construction, Sydney',
    stat: '116 Hours Recovered. Seven Days Faster.',
    blurb: 'A Sydney contractor was losing 161 hours a month to spreadsheets and manual reconciliation. We built the missing commercial-control layer.',
    bg: '#2E1A0A',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
  {
    slug: 'ontario-distributor',
    industry: 'Distribution, Ontario',
    stat: '479 Hours of Order Admin, Automated.',
    blurb: 'A family-owned Ontario distributor was drowning in email chains and pricing spreadsheets. We replaced it with a controlled order-management system.',
    bg: '#1C2318',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
  {
    slug: 'interior-design-crm',
    industry: 'Interior Design, India',
    stat: 'The Sales Process That Enforces Itself.',
    blurb: 'A growing interior design company was running its sales process through a master spreadsheet and employee memory. We replaced it with a system that makes the process unavoidable.',
    bg: '#241810',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
  {
    slug: 'interiors-quotation-platform',
    industry: 'Architecture, Bangalore',
    stat: 'Seven Pricing Sheets, One Controlled Platform.',
    blurb: 'A Bangalore architecture firm was running its entire commercial process across seven Google Sheets. We built the missing quotation layer around the way the business already worked.',
    bg: '#1E2328',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
  {
    slug: 'zoho-creator',
    industry: 'Enterprise Software',
    stat: 'The GTM System That Carries an Enterprise Buyer.',
    blurb: 'A mature low-code platform had real differentiation but a GTM system that could not carry an enterprise buyer from first search to internal business case. We built it.',
    bg: '#2A1A2E',
    fg: '#EDEBE5',
    fgDim: 'rgba(237,235,229,0.55)',
    tagBg: 'rgba(237,235,229,0.1)',
    tagBorder: 'rgba(237,235,229,0.18)',
  },
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
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

          {/* Hero card, full background image with curved edges */}
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/hero-bg-opt.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Subtle dark overlay so text is readable */}
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(10, 8, 5, 0.38)' }}
              aria-hidden="true"
            />

            {/* Content sits on top */}
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">

              {/* Star rating row */}
              <div className="flex items-center gap-2.5 mb-8">
                <div className="flex items-center gap-0.5" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#EDEBE5" aria-hidden="true">
                      <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: 'rgba(237,235,229,0.7)' }}>Helped 50+ businesses</span>
              </div>

              {/* Heading */}
              <h1
                className="text-[2rem] sm:text-5xl lg:text-[72px] font-normal leading-[1.1] text-balance max-w-3xl mb-6"
                style={{ color: '#EDEBE5', fontFamily: '"EB Garamond", Georgia, serif' }}
              >
                Many businesses don&apos;t have a marketing problem. They have a{' '}
                <em className="italic">diagnosis</em>{' '}
                problem.
              </h1>

              {/* Sub */}
              <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Nobody has actually sat down and figured out what&apos;s slowing you down. We do that first. Then we build the internal tools and software that fix it.
              </p>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#d4d1cc] transition-colors"
                  style={{ background: '#EDEBE5', color: '#1A0F06' }}
                >
                  Book a free call
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium hover:border-[rgba(237,235,229,0.6)] hover:text-[rgba(237,235,229,1)] transition-colors"
                  style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}
                >
                  How we work
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full"
                    style={{ background: 'rgba(237,235,229,0.15)' }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="rgba(237,235,229,0.9)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ───────────────────────────────────────────── */}
      <section className="py-10 lg:py-20">
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
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Your best people are stuck approving things a system should handle. The real work runs through a spreadsheet nobody wants to touch. The CRM made your team change how they work, instead of fitting how they already work.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We&apos;ve seen this enough times to know it&apos;s rarely a people problem. Usually, nobody has mapped where the actual break is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inside the Fix ────────────────────────────────────────── */}
      <section className="pb-10 lg:pb-20" aria-label="Case studies">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">

          {/* Header row */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="eyebrow-pill">Inside the fix</span>
              <h2 className="text-2xl sm:text-3xl font-normal text-foreground leading-tight mt-3">
                Real problems. What we found. What we built.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline shrink-0 mb-1"
            >
              All case studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <CaseStudyStrip cards={caseStudyStrip} />

        </div>
      </section>

      {/* ── We handle everything, Claura-style display accordion ── */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <span className="eyebrow-pill">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-normal text-foreground mb-10 lg:mb-16 text-balance max-w-xl" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
            We handle everything so you don&apos;t have to.
          </h2>
          <HowItWorksAccordion steps={howItWorksSteps} />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-8 lg:mb-12">
            <span className="eyebrow-pill">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              What we actually do
            </h2>
          </div>
          <ServicesToggle services={services} />
          <div className="mt-8 lg:mt-10">
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

      {/* ── Not your typical agency, comparison ─────────────────── */}
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="text-center mb-10 lg:mb-12">
            <span className="eyebrow-pill">Why us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground text-balance" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              We&apos;re not your typical agency.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Other agencies card */}
            <div
              className="rounded-3xl p-8 flex flex-col gap-6 overflow-hidden relative"
              style={{
                backgroundImage: 'url(/images/comparison-agencies-opt.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '420px',
              }}
            >
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'rgba(10,6,2,0.55)' }} aria-hidden="true" />
              <div className="flex flex-wrap gap-2 relative z-10">
                {['Slow delivery', 'Vague scope', 'No diagnosis', 'Template solutions', 'Hidden costs'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border"
                    style={{ borderColor: 'rgba(237,235,229,0.35)', color: 'rgba(237,235,229,0.65)' }}
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
                backgroundImage: 'url(/images/comparison-pressense-opt.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '420px',
              }}
            >
              {/* Light overlay so white text stays readable over the pale teal */}
              <div className="absolute inset-0 rounded-3xl" style={{ background: 'rgba(8,40,38,0.35)' }} aria-hidden="true" />
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
      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-8 lg:mb-12">
            <span className="eyebrow-pill">Who We Work With</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-tight text-balance max-w-xl" style={{ fontFamily: '"EB Garamond", Georgia, serif' }}>
              You&apos;re in the right place if&hellip;
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Good fit, large, airy, border only */}
            <div
              className="rounded-3xl border p-10 flex flex-col justify-between"
              style={{ borderColor: '#C8C2BA', background: '#E8E5DF', minHeight: '380px' }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-8">
                  Good fit
                </p>
                <ul className="space-y-5">
                  {goodFit.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                      <span className="text-base text-foreground/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-highlight transition-colors"
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            {/* Not a fit, muted, faded tone */}
            <div
              className="rounded-3xl p-10 flex flex-col"
              style={{ background: '#D8D4CC', minHeight: '380px' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-8">
                Not a fit
              </p>
              <ul className="space-y-5">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-foreground/25" aria-hidden="true" />
                    <span className="text-base text-foreground/40 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-24">
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
