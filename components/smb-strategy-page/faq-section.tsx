'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What does a small business strategy consultant do?',
    a: 'A small business strategy consultant helps you identify where your business is and where it needs to go, then builds a specific plan to close the gap. At Pressense, that means a diagnosis of your current constraints, a written roadmap with quarterly milestones, and an ongoing retainer where we work through decisions with you week by week. The goal is direction and accountability, not just a report.',
  },
  {
    q: 'Do I need a business coach or a business consultant?',
    a: 'A coach helps you think through your own answers. A consultant brings external expertise and gives you specific direction. Pressense is closer to a consultant: we will tell you what we think, explain the reasoning, and give you a clear recommendation. If you prefer to arrive at the answer yourself, a coach is a better fit. If you want someone to tell you what to do and hold you to it, Pressense is the right choice.',
  },
  {
    q: 'How much does small business strategy consulting cost?',
    a: 'The Pressense diagnostic and roadmap engagement starts from $2,500 and covers a four-week discovery, a Business Clarity Map, and a Growth Roadmap. Monthly retainers start from $1,200 per month with fortnightly sessions, defined outcome targets, and a standing point of contact for decisions that come up between sessions.',
  },
  {
    q: 'Do you work with businesses that are not using AI yet?',
    a: 'Yes. Most clients who come to us for small business strategy are not yet using AI, and many do not need to be. Strategy comes first. We understand how your business works, define the growth priorities, and only introduce AI if it belongs in the plan. We never add tools for the sake of appearing modern.',
  },
  {
    q: 'What is a business strategy roadmap?',
    a: 'A business strategy roadmap is a written plan that defines where your business is going over the next six to twelve months and the specific steps to get there. It includes quarterly milestones, the decisions that need to be made in each quarter, the metrics that define success, and the things you are stopping or deprioritising. A good roadmap fits on one page and can be read in five minutes.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We work with founder-led businesses across most service industries: professional services, consultancies, agencies, healthcare practices, real estate, interior design, and IT services. The common thread is a business with between two and twenty people where the founder is the main decision-maker and growth is constrained by clarity rather than capital.',
  },
]

export function SMBStrategyFAQSection() {
  return (
    <section className="border-t border-border/40 py-16">
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="eyebrow-line" aria-hidden="true" />
          <span className="text-xs font-medium tracking-widest uppercase text-primary/70">Common Questions</span>
        </div>
        <h2 className="text-3xl font-medium text-foreground text-pretty mb-8">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border/40 rounded-lg px-5">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
