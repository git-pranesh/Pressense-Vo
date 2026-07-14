import Link from 'next/link'

const services = [
  {
    name: 'CRM Automation',
    outcome: '+30% pipeline visibility',
    description:
      'Your sales team loses hours every week logging calls, updating deal stages, and chasing contacts for follow-up. We automate the entire CRM loop: calls are transcribed, key information is extracted, records are updated, and follow-up sequences trigger without anyone touching a keyboard. Your sales reps spend their time selling, not filing.',
    detail:
      'Typical integrations include HubSpot, Salesforce, Pipedrive, and Close CRM. We connect them to your call recording platform, email system, and calendar so data flows without manual entry.',
  },
  {
    name: 'Sales and Marketing Automation',
    outcome: '20+ hours saved per week',
    description:
      'Lead follow-up is the first thing that breaks when a business scales. Leads come in from five different sources, someone has to manually send the first email, qualify the lead, assign it, and then chase it again. We build end-to-end automation that handles intake, qualification scoring, routing, initial outreach, and nurture sequences across all channels.',
    detail:
      'This covers everything from LinkedIn outreach and email sequences to ad retargeting triggers and referral tracking. You get a system that works while your team sleeps.',
  },
  {
    name: 'Custom AI Agents',
    outcome: '24/7 coverage with no extra headcount',
    description:
      'An AI agent is a system that can take actions, not just generate text. We build agents that can respond to customer queries, draft proposals from a brief, review incoming documents, and route support tickets to the right person or resolution path. These are not chatbots. They are context-aware systems that understand your business and act accordingly.',
    detail:
      'We build on top of your existing knowledge base, product documentation, and CRM data so the agent has full context. Deployment typically takes two to three weeks.',
  },
  {
    name: 'Operational Process Automation',
    outcome: '15+ hours per week reclaimed per operator',
    description:
      'Operations managers in founder-led businesses are often doing the work of three people: pulling reports, coordinating approvals, chasing status updates, formatting data, and sending recurring emails. We map the ten most repetitive tasks your ops team does every week and automate all of them. The manager shifts from execution to oversight.',
    detail:
      'Common wins include automated weekly reporting, approval workflows, invoice processing, contract generation from templates, and internal status notification systems.',
  },
  {
    name: 'Systems Integration',
    outcome: 'One source of truth across all tools',
    description:
      'Most scaling businesses have four to eight core tools that do not talk to each other. Someone is manually copying data between Airtable and QuickBooks. Someone is exporting a CSV from Shopify and importing it into a spreadsheet. We connect your systems using APIs and no-code automation platforms so data moves automatically and your team always has accurate information.',
    detail:
      'We work with any stack. Typical integrations span CRM, accounting, project management, e-commerce, support, and internal databases.',
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-6">
          What an AI automation agency builds for you
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
          Every engagement starts with a diagnostic. We find out exactly which of your workflows costs the most time before building anything. Then we build in the order that creates the most value fastest. See{' '}
          <Link href="/playbooks" className="text-primary hover:underline">our playbooks</Link>{' '}
          for examples of how each system works in practice.
        </p>

        <div className="space-y-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 shrink-0">
                  {service.outcome}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">{service.description}</p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
          >
            Get Your AI Readiness Assessment
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
