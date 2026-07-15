'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const steps = [
  {
    number: '01',
    title: 'Workflow mapping',
    description: 'We map every step in the target workflow: users, data inputs, decision points, handoffs, exceptions, and reporting needs. This session takes one week and produces a clear specification before any code is written.',
  },
  {
    number: '02',
    title: 'Tool decision',
    description: 'We determine whether the workflow is better served by configuring an existing tool, building a lightweight custom layer on top of one, or building a standalone custom tool. We only build custom when it is the right answer.',
  },
  {
    number: '03',
    title: 'Build and test',
    description: 'A dedicated Pressense developer builds the tool against the specification. The first working version is ready within 2 to 6 weeks depending on complexity. You review and test at every stage, not just at the end.',
  },
  {
    number: '04',
    title: 'Launch and support',
    description: 'We handle deployment, team training, and onboarding. After launch, your dedicated developer stays on for fixes, improvements, and new workflows. The tool is yours. The code is yours. The support continues for as long as you need it.',
  },
]

export function CustomToolsMethodologySection() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Map the workflow first, then build the tool
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most internal tool builds fail because the workflow was not understood before coding started. Our process starts with diagnosis and produces a specification before a single line of code is written.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="p-7 rounded-2xl border border-border/60 bg-card">
              <p className="text-xs font-mono text-muted-foreground mb-3">{step.number}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
