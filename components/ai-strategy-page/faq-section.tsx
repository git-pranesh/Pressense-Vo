'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What is AI strategy consulting?',
    a: 'AI strategy consulting is a structured engagement that maps your existing business operations to specific AI applications, prioritises them by ROI and implementation readiness, and produces a phased roadmap your team can execute. At Pressense, every strategy engagement includes at least two working pilots built by us, not just a document. The goal is a business that runs measurably faster or cheaper by the end of week four.',
  },
  {
    q: 'How much does AI strategy consulting cost?',
    a: 'A focused AI strategy sprint starts from $1,500 and takes two weeks to deliver an opportunity map and roadmap. A strategy-plus-pilots engagement starts from $3,500 and takes four weeks, ending with two working AI systems your team uses from day one. Monthly retainers start from $1,500 for ongoing builds and optimisation. Enterprise firms charge $25,000 to $250,000 for strategy decks. We charge less and include the build.',
  },
  {
    q: 'What is the difference between AI strategy and AI implementation?',
    a: "AI strategy identifies which problems are worth solving with AI and in what order. AI implementation is the act of building those solutions. Most firms sell strategy without implementation, which means you pay for a plan and then have to find someone else to build it. Pressense does both in the same engagement. The strategy sprint identifies the top five use cases. The build phase turns the top two into working systems before the engagement ends.",
  },
  {
    q: 'How do I know if my business is ready for AI?',
    a: "Readiness comes down to four factors: your data is clean and accessible, your processes are documented well enough for a new hire to follow, at least one person on your team will own the AI outcome, and you are not adding AI on top of fundamentally broken software. Most businesses are ready for at least two to three use cases even if they are not ready for a full transformation. Our 30-minute diagnostic identifies exactly where you stand across all four dimensions.",
  },
  {
    q: 'What is the difference between AI and automation?',
    a: "Automation handles tasks with fixed rules: if this input arrives, perform this action. It is consistent, cheap, and does not learn. AI handles tasks requiring judgement: summarising a document, deciding which leads to prioritise, drafting content that matches a specific tone. For most growing businesses, the right answer is both. Automation for rule-based repetitive work, AI for tasks that previously required a person to think. The strategy engagement maps which is which for your specific workflows.",
  },
  {
    q: 'How long does an AI strategy engagement take?',
    a: 'A strategy sprint takes two weeks: one week of diagnosis and one week of roadmap production. A strategy-plus-pilots engagement takes four weeks: two weeks of strategy and two weeks of building the first two pilots. Monthly retainers run on a rolling basis with two to three new builds delivered each month. All engagements start with a 30-minute diagnostic session that costs nothing and tells you immediately whether a full engagement makes sense for your business.',
  },
  {
    q: 'Do you work with businesses outside the United States?',
    a: 'Yes. All Pressense engagements are remote-first. We work with founder-led businesses across the United States, the United Kingdom, Australia, and Canada. The diagnostic call, strategy sessions, and pilot reviews all happen over video. The build work is async. Time zones have never prevented a successful engagement.',
  },
]

export function AIStrategyFAQ() {
  return (
    <section
      className="py-16 border-t border-border/40"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-10"
          >
            Common questions about AI strategy consulting
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/40 rounded-xl px-5 bg-card/20"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
