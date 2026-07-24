import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'
import { VisualCard } from '@/components/visual-card'

export const metadata: Metadata = {
  title: 'Workflow Automation | Pressense',
  description: 'We map your most time-consuming workflows and automate them — so your team stops doing work a computer should be doing.',
  alternates: { canonical: '/workflow-automation' },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const whatWeDeliver = [
  'End-to-end automation of approval and sign-off flows',
  'Automated data entry, syncing, and reconciliation',
  'Triggered notifications, alerts, and escalations',
  'Document generation from templates',
  'Scheduled reporting and data exports',
  'Cross-platform orchestration across Slack, email, CRM, and ERP',
]

const goodFit = [
  'Teams spending hours each week on copy-paste data work',
  'Businesses where approvals and handoffs regularly get stuck or lost',
  'Operations leaders who can see the bottleneck but not the fix',
  'Companies with existing tools that do not talk to each other',
]

const notFit = [
  'Businesses that have not mapped their current workflow at all',
  'Teams looking for a one-click no-code tool they run themselves',
  'Organisations without a named owner for the process being automated',
]

const faqs = [
  {
    q: 'Do we need to have the workflow fully documented first?',
    a: 'No — we help you map it. Part of our process is understanding how work actually happens, not just how it is supposed to happen.',
  },
  {
    q: 'What tools do you automate across?',
    a: 'We work with HubSpot, Salesforce, Notion, Airtable, Slack, Google Workspace, Monday.com, and custom APIs. We pick the right tool for your stack.',
  },
  {
    q: 'What happens when the workflow changes?',
    a: 'We build automations with change in mind. Adjustments are handled quickly — we stay involved so you are not locked into a static system.',
  },
  {
    q: 'How do we know what is worth automating?',
    a: 'We start with a diagnostic that scores workflows by time cost and automation potential. You see the ROI case before we build anything.',
  },
]

export default function WorkflowAutomationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow-pill">Workflow Automation</span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(36px, 5vw, 58px)' }}
              >
                Stop doing work a computer should be doing.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground mb-8 max-w-md">
                We map your most time-consuming workflows and automate them — so your team gets hours back every week and handoffs stop falling through the cracks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-highlight transition-colors"
                >
                  Book a free call
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  How we work
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10 text-xs">→</span>
                </Link>
              </div>
            </div>
            <VisualCard aspectRatio="4 / 3" style={{ minHeight: '340px' }} />
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
                Automation that runs reliably.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We do not just connect tools — we design the logic, handle the edge cases, and make sure the automation holds up in the real world.
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
            body="Book a free 30-minute assessment and we will show you exactly where automation can save you time and money."
            ctaLabel="Book a call"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
