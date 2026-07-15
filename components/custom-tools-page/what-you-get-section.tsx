'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const deliverables = [
  'Workflow map and specification document before build starts',
  'Working tool deployed to your environment, owned by you',
  'Source code and full documentation handed over at launch',
  'Team training and onboarding session included',
  'Dedicated developer for ongoing fixes and improvements',
  'Direct support channel with your developer, not a helpdesk ticket',
]

export function CustomToolsWhatYouGetSection() {
  return (
    <SectionWrapper className="bg-ink text-ink-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
              A working tool, full ownership, and a developer who stays
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement includes the complete build, the source code, documentation, team training, and an ongoing developer relationship. There is no handoff to a support queue. The same person who built it supports it.
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
