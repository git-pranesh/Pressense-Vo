'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export interface FAQItem {
  question: string
  answer: React.ReactNode
}

interface FAQSectionProps {
  headline: string
  faqs: FAQItem[]
}

export function FAQSection({ headline, faqs }: FAQSectionProps) {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-4xl mx-auto px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
          {headline}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border/40">
              <AccordionTrigger className="text-base md:text-lg text-foreground/90 hover:text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
