'use client'

import { useState } from 'react'
import { PortableTextBlock } from '@sanity/types'
import { PortableTextWrapper } from '../portable-text'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer?: PortableTextBlock[]
}

interface FAQBlockProps {
  title?: string
  items?: FAQItem[]
}

export function FAQBlock({ title, items }: FAQBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items || items.length === 0) return null

  return (
    <section className="w-full py-16 lg:py-24 px-5 sm:px-8 lg:px-12 bg-surface">
      <div className="max-w-3xl mx-auto">
        {title && (
          <>
            <div className="eyebrow-flanked mb-6"><span className="eyebrow">FAQ</span></div>
            <h2 className="text-section-title font-serif text-foreground mb-12 text-center text-balance">{title}</h2>
          </>
        )}

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-surface-2 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-medium font-sans text-left text-foreground">{item.question}</h3>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border font-sans text-muted-foreground leading-relaxed">
                  {item.answer ? (
                    <PortableTextWrapper blocks={item.answer} />
                  ) : (
                    <p>No answer provided</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
