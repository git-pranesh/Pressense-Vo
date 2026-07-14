'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How do I implement AI in my small business?',
    a: 'Start with a diagnostic session that maps your most repeated, time-consuming tasks. Score them by how predictable the output is and how much time they cost per week. The highest-scoring tasks are your first AI targets. Pressense runs this diagnostic with you and produces a ranked list of opportunities before building anything.',
  },
  {
    q: 'How much does AI implementation cost for a small business?',
    a: 'A Pressense AI Implementation starts from $3,500 for a focused engagement covering one or two workflows, a diagnostic, build, and six-week rollout with support. More complex implementations covering multiple workflows, integrations, and team training typically range from $6,000 to $15,000. All engagements include 30 days of post-launch support.',
  },
  {
    q: 'Where do I start with AI if I am not technical?',
    a: 'Start with a conversation, not a tool. Tell us what you do repeatedly that takes longer than it should. We handle the technical side entirely: choosing the right AI tools, building the workflows, connecting them to your existing software, and making sure your team knows how to use them. You do not need to understand how AI works to benefit from it.',
  },
  {
    q: 'How long does AI implementation take for a small business?',
    a: 'A focused first implementation runs four to six weeks from diagnostic to team rollout. The first two weeks are diagnosis and design. Weeks three to five are the build and testing phase. Week six is the rollout with your team present. By the end you should have at least one live AI workflow your team uses every day.',
  },
  {
    q: 'What is the best AI tool for a small business?',
    a: 'Claude is our primary tool for drafting, analysis, and client communication. GPT-4 is strong for structured data extraction. Make and n8n connect AI to your existing software without code. The right answer depends on your specific workflows, not on a generic ranking. Most small businesses already have the software they need — we build the AI layer on top of it.',
  },
  {
    q: 'Can AI be implemented in a healthcare or real estate business?',
    a: 'Yes. Healthcare implementations focus on administrative workflows: prior authorisation drafts, appointment reminders, patient intake summaries, and internal communication. We design these to stay outside of clinical decision-making and to work within your existing HIPAA-aware processes. Real estate implementations focus on enquiry responses, listing descriptions, CRM updates, and document management, all using your existing tools.',
  },
  {
    q: 'What happens after the AI workflows are built?',
    a: 'Every Pressense implementation includes 30 days of post-launch support at no extra cost. During that period we fix any issues fast, typically within 24 to 48 hours. After 30 days you can continue with a monthly retainer that expands AI to more workflows, adds new integrations, and provides a standing point of contact as your business changes.',
  },
]

export function AIImplementationFAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16" aria-label="AI implementation for small business FAQ">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-10">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">FAQ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance mb-10">
          Common questions about AI for small business
        </h2>

        <div className="flex flex-col divide-y divide-border/40">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-foreground">{faq.q}</span>
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
