'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What tools do AI agencies use?',
    a: 'Most AI agencies use a combination of large language model APIs (Claude, GPT-4o), automation platforms (n8n, Make, Zapier), database tools (Airtable), build environments (Replit), and hosting platforms (Vercel). The specific combination depends on the problem. An agency focused on workflow automation will weight n8n and Make heavily. An agency building custom software will lean on Replit with Vercel for production deployment.',
  },
  {
    q: 'What is the Claude API and how is it different from ChatGPT?',
    a: "The Claude API is Anthropic's developer interface for building applications on top of the Claude language model. ChatGPT is OpenAI's consumer product; the underlying model is GPT-4o and is also available via API. Claude tends to perform better on long-context tasks and document analysis. GPT-4o has a larger ecosystem of third-party integrations and stronger tool-calling. We use both, and we recommend the right one based on your specific use case — there is no loyalty to either.",
  },
  {
    q: 'What is the difference between n8n, Make, and Zapier?',
    a: 'Zapier is designed for simple, quick-deploy trigger-action workflows between popular SaaS tools. Make (formerly Integromat) handles more complex scenarios: branching logic, high-volume data processing, and multi-step transformations. n8n is self-hostable, supports custom JavaScript inside workflows, and is our default for clients who need full data control or more complex AI agent orchestration. We use Zapier when speed matters, Make for cloud-based complexity, and n8n when the client needs to own the infrastructure.',
  },
  {
    q: 'Do you charge clients for the tools you use?',
    a: 'We do not mark up tool subscriptions. You pay the tool vendors directly at standard rates. We charge for the diagnostic, design, and build work. Most clients already hold subscriptions to some tools in our stack. Where new subscriptions are needed, we will give you a clear cost estimate before the engagement starts.',
  },
  {
    q: 'Is Replit good for production apps?',
    a: 'Yes. Replit runs on Google Cloud infrastructure and supports production deployments at scale. Code built in Replit is standard TypeScript or Python with no proprietary framework. For production web applications we deploy via Vercel, which handles CI/CD, edge functions, and preview deployments. The code can be moved to any hosting environment at any time — there is no lock-in.',
  },
  {
    q: 'What is Airtable used for in agency workflows?',
    a: 'Airtable is a relational database that sits between a spreadsheet and a full SQL database. Agencies use it to build operational backbones: project trackers, lightweight CRMs, content calendars, and client portals. Its value is that non-technical team members can interact with it directly, and it connects to n8n, Make, Zapier, and most other automation tools via native integrations.',
  },
  {
    q: 'Can I bring my own tools or do I have to use your stack?',
    a: "You can bring your own tools. If you already use HubSpot, Salesforce, or any other platform, we assess whether they fit the solution before recommending changes. We do not switch tools without a clear reason. The goal is to build on what already exists wherever possible. If part of your existing stack is causing the problem you hired us to fix, we will say so honestly.",
  },
]

export function ToolsFAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-12">
            Common questions about our tech stack
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
