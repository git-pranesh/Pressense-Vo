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
  eyebrow?: string
  headline: string
  faqs: FAQItem[]
  className?: string
}

export function FAQSection({ eyebrow = 'FAQ', headline, faqs, className = '' }: FAQSectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="eyebrow-line"/>
          <p className="text-xs uppercase tracking-widest text-foreground/50 font-medium">
            {eyebrow}
          </p>
        </div>
        <h2 className="text-2xl md:text-4xl font-medium text-foreground mb-12 text-balance max-w-2xl">
          {headline}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-border/60">
              <AccordionTrigger className="text-base md:text-lg text-foreground hover:text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
