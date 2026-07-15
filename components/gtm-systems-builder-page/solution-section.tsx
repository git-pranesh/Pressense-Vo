'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const tracks = [
  {
    number: '01',
    title: 'GTM strategy',
    description: 'ICP definition, positioning, competitive differentiation, and a go-to-market motion that tells you exactly who to target, how to reach them, and what to say. Strategy that produces a live playbook, not a slide deck.',
  },
  {
    number: '02',
    title: 'GTM content system',
    description: 'SEO content clusters, thought leadership, distribution infrastructure, and CRM attribution connected into a single repeatable motion. Every piece of content has a defined job at a specific stage of the buyer journey.',
  },
  {
    number: '03',
    title: 'Internal tools and operations',
    description: 'Custom dashboards, workflow systems, approval tools, and reporting infrastructure that remove the founder from operational bottlenecks. Built in 2 to 6 weeks with a dedicated developer.',
  },
]

export function GtmSystemsBuilderSolutionSection() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Three Tracks</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Strategy, content, and internal tools built as one connected system
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most growth problems for founder-led B2B SaaS are the same: no scalable content motion, no GTM clarity, and too much founder involvement in operations. The three tracks address all three.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {tracks.map((track) => (
            <div key={track.number} className="p-7 rounded-2xl border border-border/60 bg-card">
              <p className="text-xs font-mono text-muted-foreground mb-3">{track.number}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{track.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
