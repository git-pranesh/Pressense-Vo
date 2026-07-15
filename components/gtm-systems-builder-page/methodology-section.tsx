'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const steps = [
  {
    number: '01',
    title: 'Diagnostic sprint',
    description: 'One week to map the business: ICP clarity, current GTM motion, content gaps, operational bottlenecks, and the highest-leverage starting point. Ends with a scoped proposal and fixed-price engagement before any work begins.',
  },
  {
    number: '02',
    title: 'Strategy and positioning',
    description: 'Define who the business is for, what problem it solves, how it is positioned against alternatives, and what the ICP needs to believe before buying. This layer informs every other track.',
  },
  {
    number: '03',
    title: 'Build the systems',
    description: 'Build the content system, distribution infrastructure, or internal tools against the strategy. Each deliverable is scoped and shipped within a defined timeline. No open-ended retainers that drift.',
  },
  {
    number: '04',
    title: 'Operate and compound',
    description: 'Run the content programme, iterate on GTM motion, and improve internal tools as the business scales. The system gets more effective over time. The founder gets further out of the weeds.',
  },
]

export function GtmSystemsBuilderMethodologySection() {
  return (
    <SectionWrapper className="bg-ink text-ink-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Every engagement starts with a diagnostic. Every track ends with a working system.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The diagnostic sprint ensures the work addresses the right problem. Fixed-price scoping ensures no surprise invoices. Systems-first delivery ensures the output runs without constant founder attention.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="p-7 rounded-2xl border border-border/20 bg-white/5">
              <p className="text-xs font-mono text-muted-foreground mb-3">{step.number}</p>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
