'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const deliverables = [
  'Positioning framework and messaging document used to build every page',
  'Full page architecture map before any design begins',
  'Homepage and up to six core service or solution pages',
  'Landing pages for diagnostic, campaign, or market-specific conversion',
  'SEO structure, structured data, and AEO-optimised FAQ sections throughout',
  'Sales-ready case study and proof page templates',
  'Handover with full documentation and page editing access',
]

export function WebsitesWhatYouGetSection() {
  return (
    <SectionWrapper className="bg-ink text-ink-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
              A site your sales team can use as a first touch, not an explanation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The deliverable is not a set of pages. It is a clarity system. Every output is built to do a specific job in moving a buyer from awareness to decision.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/20 bg-white/5">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
