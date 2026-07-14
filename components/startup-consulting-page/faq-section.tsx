'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What does a consulting firm for startups actually do?',
    a: 'A startup consulting firm provides the strategic and operational expertise that early-stage and growing businesses need but cannot afford to hire full-time. At Pressense, this means working on go-to-market strategy, AI systems, custom software, positioning, and operations — as an embedded team that executes alongside founders rather than handing over documents.',
  },
  {
    q: 'How is Pressense different from a traditional consulting firm?',
    a: 'Traditional consulting firms advise. Pressense builds. We write the positioning, build the automation system, design the CRM process, or ship the custom tool — and we stay accountable to outcomes rather than deliverables. We also work at the pace of founder-led businesses, not enterprise procurement cycles.',
  },
  {
    q: 'What stage of business do you work with?',
    a: 'We work best with businesses that have a validated offer and at least some revenue. This means post-PMF startups, growing service firms, SaaS companies with early traction, and founder-led businesses that have outgrown their current systems. We do not work well with pre-revenue companies or businesses looking for market validation.',
  },
  {
    q: 'Do you offer strategic advice only, or do you also execute?',
    a: 'We execute. Strategy without execution is a slide deck. Every engagement includes deliverables: built systems, written content, launched automations, or shipped software. We do not hand over recommendations and disappear.',
  },
  {
    q: 'How does the engagement start?',
    a: 'Every engagement starts with a diagnostic — a structured session to understand your business, your bottlenecks, and where the highest-impact work is. From there we produce a written roadmap and scope the first phase of work. Most clients start with one focused area before expanding.',
  },
  {
    q: 'How long does a typical engagement last?',
    a: 'Most project-based engagements run 6–12 weeks depending on scope. Some clients continue on a retainer after the initial project. We are not built for indefinite advisory relationships — we build, hand over, and move to the next problem.',
  },
  {
    q: 'What is the cost of working with Pressense?',
    a: 'Founder Advisory Sessions start from $500 — a focused diagnostic call that maps your biggest bottleneck and gives you a clear, actionable next step. Larger project-based work is scoped and priced after the diagnostic. We are transparent about costs before any work starts — no surprise retainer fees or scope expansions without agreement.',
  },
]

export function StartupConsultingFAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-12">
            Questions about startup consulting
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/60 bg-card/40 overflow-hidden"
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-muted-foreground" aria-hidden="true">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-6">
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
