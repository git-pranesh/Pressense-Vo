'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is a SaaS go-to-market strategy?',
    a: 'A SaaS go-to-market strategy is a plan that defines who your software is for, how you reach them, and how you convert and keep them. It covers ICP definition, positioning, pricing, channel selection, and a phased execution roadmap. Without one, most SaaS companies grow by accident rather than by design, which makes growth slow to repeat and impossible to scale.',
  },
  {
    q: 'How long does a SaaS GTM engagement take?',
    a: 'A Pressense GTM Sprint runs six to eight weeks from kick-off to final delivery. The first two weeks are buyer research and ICP definition. Weeks three and four cover positioning and pricing. The final two weeks produce your channel playbook and 90-day roadmap. If you continue to a retainer, reviews happen monthly from that point.',
  },
  {
    q: 'What is an ICP in SaaS?',
    a: 'ICP stands for Ideal Customer Profile. It is a description of the exact company or person who gets the most value from your product, is willing and able to pay for it, has a reason to act now, and is likely to refer others. A specific ICP is the single most important input in any SaaS GTM strategy because it determines every downstream decision: messaging, channel, pricing, and product roadmap.',
  },
  {
    q: 'What comes first: GTM strategy or product development?',
    a: 'The best GTM work starts alongside product development, not after it. You do not need a finished product to define your ICP, test positioning, or talk to buyers. Most SaaS founders delay GTM thinking until after launch and then spend months trying to find product-market fit by trial and error. Starting earlier gives you buyer data that shapes product decisions before they become expensive to reverse.',
  },
  {
    q: 'Do you work with pre-revenue SaaS companies?',
    a: 'Yes. Many of our GTM Sprint clients are pre-revenue or in early beta. The GTM Sprint is designed for exactly this stage: you have a product hypothesis and you need to validate your ICP, sharpen your positioning, and identify the right acquisition channel before spending on marketing. A GTM Audit is also available for companies that already have some GTM materials and need a faster, lower-cost review.',
  },
  {
    q: 'What is the difference between GTM strategy and marketing strategy?',
    a: 'Marketing strategy is about how you communicate. GTM strategy is broader: it covers who you sell to, what you charge, how you reach buyers, how you close them, and how you retain them. Marketing is one component of GTM. Many SaaS companies invest heavily in marketing tactics without the GTM foundation underneath, which produces activity without traction.',
  },
  {
    q: 'How much does SaaS GTM consulting cost?',
    a: 'A Pressense GTM Audit starts from $1,500 for a focused one-to-two-week review. A full GTM Sprint starts from $3,000 for a six-to-eight-week engagement covering buyer research, ICP definition, positioning, pricing, a channel playbook, and a 90-day roadmap. Enterprise GTM consultancies charge $20K to $80K for comparable work.',
  },
]

export function SaaSGTMFAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16" aria-label="SaaS GTM frequently asked questions">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">FAQ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-balance mb-10">
          Common questions about SaaS go-to-market strategy
        </h2>

        <div className="flex flex-col divide-y divide-border/40">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-medium text-foreground">{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`shrink-0 text-muted-foreground transition-transform ${open === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
