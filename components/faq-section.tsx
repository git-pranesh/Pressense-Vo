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
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-line" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="text-section-title font-serif text-foreground mb-14 text-balance max-w-2xl">
          {headline}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="text-base md:text-lg font-sans font-medium text-foreground hover:text-foreground hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
