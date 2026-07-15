'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const examples = [
  {
    title: 'Operations dashboards',
    description: 'One screen that shows every active job, its status, owner, and next action. No spreadsheet, no Slack thread to find out where something is.',
  },
  {
    title: 'Client onboarding portals',
    description: 'Guided intake flows that collect the right information, route it to the right person, and kick off delivery without founder involvement.',
  },
  {
    title: 'Approval workflow systems',
    description: 'Structured approval chains for purchases, proposals, contracts, or exceptions. Every decision tracked, timestamped, and auditable.',
  },
  {
    title: 'Reporting and KPI dashboards',
    description: 'Live views of the numbers leadership actually needs: pipeline health, delivery capacity, revenue by segment, team utilisation.',
  },
  {
    title: 'Internal request and ticketing tools',
    description: 'Structured intake for IT, HR, finance, or ops requests. Replaces email chains and Slack messages with a traceable workflow.',
  },
  {
    title: 'Inventory and vendor management',
    description: 'Track stock levels, supplier relationships, purchase orders, and delivery timelines in a system built for how your supply chain actually works.',
  },
]

export function CustomToolsSolutionSection() {
  return (
    <SectionWrapper className="bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What We Build</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Purpose-built tools that replace the manual layer in your operation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build software that fits the workflow your team already runs, not a template you have to adapt to. Every tool is designed after a workflow mapping session, built with a dedicated developer, and supported after launch.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {examples.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card">
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
