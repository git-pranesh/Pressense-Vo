'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const deliverables = [
  'ICP and positioning framework used across all three tracks',
  'GTM playbook defining target segments, channels, and outreach sequences',
  'SEO content cluster map with topic priorities ranked by buyer intent',
  'Content system architecture: production workflow, distribution cadence, attribution setup',
  'Custom internal tool builds with dedicated developer and post-launch support',
  'Monthly content production at volume defined in engagement scope',
  'Quarterly strategy review and roadmap refresh',
]

export function GtmSystemsBuilderWhatYouGetSection() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What You Get</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
              A running GTM system, not a strategy document
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every track ends with something that runs. Strategy produces a live playbook the team can execute. Content produces a live programme with attribution in the CRM. Internal tools produce software the team uses every day. The deliverable is always a system, never a report.
            </p>
          </div>
          <ul className="space-y-3">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/60 bg-card">
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
