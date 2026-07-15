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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!items || items.length === 0) return null

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        {title && <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>}
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
              >
                <h3 className="text-lg font-medium text-left">{item.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                  {item.answer ? (
                    <PortableTextWrapper blocks={item.answer} />
                  ) : (
                    <p className="text-slate-600">No answer provided</p>
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
